interface TabRoute {
	container: string;
	tab: string;
}

const TAB_ROUTES: Record<string, TabRoute> = {
	"#fillBuild": { container: "role-builds", tab: "rb-tab-fill" },
	"#tertiaryBuild": { container: "role-builds", tab: "rb-tab-hmk" },
	"#secondaryBuild": { container: "role-builds", tab: "rb-tab-sk" },
	"#primaryBuild": { container: "role-builds", tab: "rb-tab-bk" },
	"#healerBuild": { container: "role-builds", tab: "rb-tab-ph" },
	"#tankBuild": { container: "role-builds", tab: "rb-tab-tank" },
	"#fillPlay": { container: "role-gameplay", tab: "rg-tab-fill" },
	"#tertiaryPlay": { container: "role-gameplay", tab: "rg-tab-hmk" },
	"#secondaryPlay": { container: "role-gameplay", tab: "rg-tab-sk" },
	"#primaryPlay": { container: "role-gameplay", tab: "rg-tab-bk" },
	"#healerPlay": { container: "role-gameplay", tab: "rg-tab-ph" },
	"#tankPlay": { container: "role-gameplay", tab: "rg-tab-tank" },
	"#fill-builds": { container: "role-builds", tab: "rb-tab-fill" },
	"#primary-builds": { container: "role-builds", tab: "rb-tab-bk" },
	"#secondary-builds": { container: "role-builds", tab: "rb-tab-sk" },
	"#tertiary-builds": { container: "role-builds", tab: "rb-tab-hmk" },
	"#healer-builds": { container: "role-builds", tab: "rb-tab-ph" },
	"#tank-builds": { container: "role-builds", tab: "rb-tab-tank" },
	"#fill": { container: "role-gameplay", tab: "rg-tab-fill" },
	"#primary-dps": { container: "role-gameplay", tab: "rg-tab-bk" },
	"#secondary-dps": { container: "role-gameplay", tab: "rg-tab-sk" },
	"#tertiary-dps": { container: "role-gameplay", tab: "rg-tab-hmk" },
	"#healer": { container: "role-gameplay", tab: "rg-tab-ph" },
	"#tank": { container: "role-gameplay", tab: "rg-tab-tank" },
};

const CANONICAL_TAB_HASHES = [
	"#fillBuild", "#tertiaryBuild", "#secondaryBuild", "#primaryBuild", "#healerBuild", "#tankBuild",
	"#fillPlay", "#tertiaryPlay", "#secondaryPlay", "#primaryPlay", "#healerPlay", "#tankPlay",
] as const;
const TAB_TO_HASH: Record<string, string> = {};
for (const h of CANONICAL_TAB_HASHES) TAB_TO_HASH[TAB_ROUTES[h].tab] = h;

interface ResolvedHash {
	section: Element;
	scrollTarget: Element | null;
	tabContainer?: string;
	tabId?: string;
}

function activateTab(containerId: string, tabId: string, updateHash: boolean): void {
	const container = document.getElementById(containerId);
	if (!container) return;
	const tab = document.getElementById(tabId);
	if (!tab) return;
	container.querySelectorAll<HTMLElement>('[role="tab"]').forEach((t) => {
		t.setAttribute("aria-selected", "false");
		t.tabIndex = -1;
	});
	container.querySelectorAll('[role="tabpanel"]').forEach((p) => p.classList.remove("active"));
	tab.setAttribute("aria-selected", "true");
	(tab as HTMLElement).tabIndex = 0;
	const panelId = tab.getAttribute("aria-controls");
	if (panelId) document.getElementById(panelId)?.classList.add("active");
	if (updateHash && TAB_TO_HASH[tabId]) {
		history.replaceState(null, "", TAB_TO_HASH[tabId]);
	}
}

function bindTabWidget(container: HTMLElement): void {
	if (container.dataset.bound === "1") return;
	container.dataset.bound = "1";
	const tabs = Array.from(container.querySelectorAll<HTMLElement>('[role="tab"]'));
	tabs.forEach((tab) => {
		tab.addEventListener("click", () => activateTab(container.id, tab.id, true));
		tab.addEventListener("keydown", (e) => {
			const idx = tabs.indexOf(tab);
			let next: HTMLElement | undefined;
			if (e.key === "ArrowRight") next = tabs[(idx + 1) % tabs.length];
			else if (e.key === "ArrowLeft") next = tabs[(idx - 1 + tabs.length) % tabs.length];
			else if (e.key === "Home") next = tabs[0];
			else if (e.key === "End") next = tabs[tabs.length - 1];
			if (next) {
				e.preventDefault();
				next.focus();
				activateTab(container.id, next.id, true);
			}
		});
	});
}

function showSection(section: Element, scrollTarget: Element | null): void {
	document.querySelectorAll(".anni-section").forEach((s) => s.classList.remove("active"));
	section.classList.add("active");
	if (scrollTarget) {
		requestAnimationFrame(() => {
			scrollTarget.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
		});
	} else {
		window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
	}
}

function resolveHash(hash: string): ResolvedHash | null {
	if (!hash) return null;
	const tabInfo = TAB_ROUTES[hash];
	if (tabInfo) {
		const container = document.getElementById(tabInfo.container);
		const section = container?.closest(".anni-section");
		if (section) {
			return { section, scrollTarget: container, tabContainer: tabInfo.container, tabId: tabInfo.tab };
		}
	}
	const id = hash.replace("#", "");
	if (!id) return null;
	const directSection = document.getElementById("section-" + id);
	if (directSection?.classList.contains("anni-section")) {
		return { section: directSection, scrollTarget: null };
	}
	const el = document.getElementById(id);
	const parent = el?.closest(".anni-section");
	if (parent) return { section: parent, scrollTarget: el };
	return null;
}

function applyResolved(result: ResolvedHash): void {
	showSection(result.section, result.scrollTarget);
	if (result.tabId && result.tabContainer) {
		activateTab(result.tabContainer, result.tabId, false);
	}
}

function handleHash(): void {
	const hash = window.location.hash;
	if (!hash) return;
	const result = resolveHash(hash);
	if (result) applyResolved(result);
}

function init(): void {
	document.querySelectorAll<HTMLElement>("#role-builds, #role-gameplay").forEach(bindTabWidget);
	handleHash();
}

const W = window as unknown as { _anniClickBound?: boolean };
if (!W._anniClickBound) {
	W._anniClickBound = true;
	document.addEventListener("click", (e) => {
		const target = e.target as Element | null;
		const link = target?.closest?.("a[href]");
		if (!link) return;
		const href = link.getAttribute("href");
		if (!href) return;
		const hashIdx = href.indexOf("#");
		if (hashIdx === -1) return;
		const hash = href.substring(hashIdx);
		const result = resolveHash(hash);
		if (result) {
			e.preventDefault();
			applyResolved(result);
			history.replaceState(null, "", hash);
		}
	});
}

init();
document.addEventListener("astro:page-load", init);
document.addEventListener("astro:after-swap", init);
