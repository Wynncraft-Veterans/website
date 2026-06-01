---
title: (21) Gavel Reborn
description: Navigating the modern impacts of features added between w1.20 (W21) and w1.20.4 (F21). Intended to rapidly acquaint returning players with the relevant details of past changes.
image: "@assets/docs/major-changes/update-thumbnails/Reborn-Update.png"
imageAlt: The logo of the Gavel Reborn Update.
pubDate: 2025-08-06
modDate: 2026-01-19
---

This guide aims to acquaint pre-reborn players with the broad strokes of changes implemented between Wynn versions 1.20 and 1.20.4.

It aims to explain in broad strokes how such changes are relevant to modern gameplay and provide enough information to get started with the mentioned features.

This is **not a changelog**, and this is also **not a guide**. For exact changes, see the changelogs linked on [the wiki](https://wynncraft.wiki.gg/wiki/Version_history).

---

## Housing
<small>Section written by Wenweia</small>

​	Also known as islands, player housing is a feature that provides an off-world space within which to build any structure you wish! Islands come in two sizes: large community plots limited to one per guild, and smaller personal plots (up to five of them! (one extra island per rank, excluding champion). 

<div class="columns-2" style="margin-top: -60px !important;">
<figure class="inline-block">

![A personal island](@assets/docs/major-changes/update-content/reborn/personal.png)

<figcaption style="margin-top: -20px !important;">An example of a personal housing island.</figcaption></figure><figure class="inline-block">

![A guild island](@assets/docs/major-changes/update-content/reborn/guild.png)

<figcaption style="margin-top: -20px !important;">An example of a guild housing island.</figcaption></figure></div>

​	With placeable NPCs (including some exclusive ones), this effectively allows to build your own town in Wynn! Housing islands can be accessed from any balloon in Wynn (a new feature found in most towns), and can be configured to accept guests.
<div class="columns-2" style="margin-top: -60px !important;">
<figure class="inline-block">

![The detlas housing balloon](@assets/docs/major-changes/update-content/reborn/detlas.png)

<figcaption style="margin-top: -20px !important;">The housing balloon in Detlas.</figcaption></figure><figure class="inline-block">

![A housing balloon on the wynntils map](@assets/docs/major-changes/update-content/reborn/map.png)

<figcaption style="margin-top: -20px !important;">A housing balloon as it appears on the <a href="https://wynnvets.org/modding">Wynntils</a> Map</figcaption></figure></div>

### Building
​	Building on islands you have access to is accomplished by entering new housing edit mode (with `/hs edit`). Blocks can be purchased from the housing master at the front of your island, in exchange for [profession materials](http://wynnvets.org/docs/major-changes/economy#obtaining-crafted-items) (which can be sourced either by gathering or by buying them from the trade market).

​	A new block bank system (accessible via an ender chest at the front of the island and in your housing inventory) was added to make building a lot easier: your personal bank is unique to you (i.e. you and you alone can access it anywhere), and island banks are unique to islands (i.e. shared between everyone with build perms on a given island so long as they are on that island).

<div class="columns-2" style="margin-top: -60px !important;">
<figure class="inline-block">

![The island spawn platform](@assets/docs/major-changes/update-content/reborn/platform.png)

<figcaption style="margin-top: -20px !important;">The block bank and the housing master (at the front of an island). </figcaption></figure><figure class="inline-block">

![The block bank UI](@assets/docs/major-changes/update-content/reborn/bank.png)

<figcaption style="margin-top: -20px !important;">The block bank's personal and island inventory.</figcaption></figure></div>

### NPCS
<small>Section written by Wenweia</small>

​	There are several types of utility NPCs exclusive to islands! In addition to purely cosmetic ones (such as message boards), and decorative / decofunctional ones (teleporters and furniture), several NPCs now have gameplay uses!

​	Misc bins are like another bank! They are per-account (not per island or per class), and can store anything that isn't an item. They are a perfect solution to powders, quest items, ingredients, and the like clogging up your bank pages. Likewise, the tome shelf is another bank, albeit only for storing your excess tomes (see below).

​	Build stands are ranklocked armour stands that can store an entire build (skill points, items, etc, albeit not skill trees) and item pedestals can display a single item. Both of these NPCs have historically been buggy, and as such, people are often hesitant to put overly valuable things in them.

---

## (G)raids
<small>Section written by Metrafish</small>

<div class="glass px-4 my-2 py-2"><center>For further information, reference our <a href="https://www.wynnvets.org/docs/guides/raiding/" rel="external"><button class="glass font-semibold py-2 px-4 border border-gray-400 rounded shadow">Guide on (G)raids</button></a></center></div>

Effectively **four-player dungeons**, raids are a fairly recent addition to Wynn. Currently, there are **five raids** in the game. Each raid is locked behind a quest. They are much more challenging than dungeons, but they offer greater rewards. The five raids are as follows:

**Nest of the Grootslangs** (Lvl. 55)
Prerequisite: *Realm of Light I - The Worm Holes* (Lvl. 54)
Cost: 1 Az Rune

**Orphion's Nexus of Light** (Lvl. 79)
Prerequisite: *Realm of Light V - The Realm of Light* (Lvl. 79)
Cost: 1 Uth Rune

**The Canyon Colossus** (Lvl. 95)
Prerequisite: *The Breaking Point* (Lvl. 97)
Cost: 1 Tol Rune

**The Nameless Anomaly** (Lvl. 103)
Prerequisite: *A Journey Further* (Lvl. 101)
Cost: 1 Tol Rune

**The Nameless Anomaly** (Lvl. 119)
Prerequisite: *Apotheosis* (Lvl. 119)
Cost: 1 Ek Rune

### Overview
Raids consist of three challenge rooms before a boss room. After each challenge room, you will receive a buff. If you die, you will respawn in the next room. If your entire team dies, you fail the raid. 

Raid challenges are designed with collaboration in mind and can be very difficult if not impossible to complete solo. Pay attention to the tutorial preceding the challenge room to understand what you need to do.

### How to Access
To access a raid, **you must**:
* Complete the prerequisite quest.
* Have the necessary rune in your inventory.
* Register with the Silverbull Syndicate. This will happen the first time you try to join a raid and only has to be done once.

You can join raids from the [Party Finder](https://www.wynnvets.org/docs/major-changes/reborn/#party-finder), which will match you with three other players if you are not already in a party. Alternatively, you can join raids from the NPC outside of each one.

### Scaling
Like world events, the difficulty of the raid is matched to your personal level and your contributions scale comparably. This means that a level 60 player can join a raid with a level 105 player and face no issues as a result of this level difference.

### Guild Raids
Guild raids, also called graids, are more difficult versions of raids. They can be started by having four members from the same guild in a raid party. Each boss is altered to make it harder and completion of a graid gives the guild rewards.

---

## Party Finder
<small>Section by Wenweia</small>

​	Another new system/NPC is the party finder! Ever wanted to find people to do a dungeon with, to help with a quest, or to grind something? Finding them just got a lot easier! Added due to the fact that raids require multiple people to function, the party finder simply aggregates together people looking to form a party around some end. In certain cases (raids, events, etc) they will also notify random people with chat reminders in an attempt to find people to join you. 

---

## New Item Types
### Tomes
<small>Section by Metrafish</small>

Tomes are new stat-boosting items that can be acquired from (raids)[https://www.wynnvets.org/docs/major-changes/reborn/#graids] and guild rewards. They can be equipped by clicking the compass in your hotbar and navigating to the book symbol in the top-right of the menu. Here, you will see different slots for different kinds of tomes, which affect different stats.

>You must complete *Realm of Light I - The Worm Holes* to be able to equip tomes.

Most tomes can be acquired as end pull rewards from raids. Each raid has its own drop table of tomes. Lootrun tomes are acquired as end pull rewards from (lootruns)[https://www.wynnvets.org/docs/major-changes/spellbound/#lootruns], and guild tomes are acquired as they are distributed by your <abbr title="If you are a member of VETS, you can participate in the weekly return to earn guild tomes!">guild</abbr>. 

### Charms
<small>Section by JustGatze</small>

​	Charms are a new type of items which are active by just being in your inventory. These items are received as rewards from raids and, unlike other items, provide effect when placed anywhere in your inventory (except for your bank). Usually, charms have a downside in addition to their upside.

​	As with most other items, charms have identifications and, therefore, their quality depends on your RNG luck when rolling them. Currently, there are four different raids in the game, and therefore four different charms.

<details>
    <summary><strong>Expand this to see all charms currently in the game.</strong></summary>

- **Charm of the Worm**
  - Can be obtained  from the *Nest of the Grootslang* raid, and grants the player bonus combat XP from Lv. 60-80 content.
- **Charm of the Light**
  - Can be obtained from the *Orphion's Nexus of Light* raid, and grants the player bonus combat XP from Lv. 80-100 content.
- **Charm of the Stone**
  - Can be obtained from the *The Canyon Colussus* raid, and grants the player bonus loot from Lv. 90-110 content.
- **Charm of the Void**
  - Can be obtained from the *The Nameless Anomaly* raid, and grants the player bonus gathering XP for all the gathering professions.
- **Charm of the Corruption**
  - Can be obtained from the *The Wartorn Palace* raid, and grants the player bonus loot dropped from lvl 111+ mobs..
  </details>

### Amplifiers

<small>Section written by Wenweia</small>

​	Corkian amplifiers are a new type of reward that primarily appear through raids. T1 amps are very common, T2 amps are fairly common, and T4 amps are less common. Many guilds keep a supply of amplifiers in your their guild banks.

​	These items simply slightly boost the rolls you receive on items after you identify them (T1 amps give the smallest boost, T4 amps give you the strongest). This isn't always enough to counteract your luck though; if you have [terrible luck](https://www.wynnvets.org/docs/guild/culture/#wenluck--arxluck), it is still possible to end up with a truly bad roll despite having used amplifiers.

### Emerald Pouches

<small>Section written by Wenweia</small>

​	Wynn added another way to store items! This is not a slot, per se, but rather an item that can consume other items for storage. Imagine an emerald pouch as a little portable chest that only holds emeralds and emerald derivatives. If currency enters your inventory, it will be consumed by your pouch (if your pouch is a high enough level to hold it; t7 pouches can hold liquid emeralds, anything beyond that is pretty much a vanity item). If you buy something, the merchant and/or trademarket will consume emeralds from your pouch. If you need to access your emeralds, you can right click on the pouch.
