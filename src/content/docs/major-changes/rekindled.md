---
title: (24) Rekindled World
description: Navigating the modern impacts of features added between w2.0.4 (F23) and the present. Intended to rapidly acquaint returning players with the relevant details of past changes.
image: "@assets/docs/major-changes/update-thumbnails/Rekindled-Update.png"
imageAlt: The logo of the Rekindled Update.
pubDate: 2025-08-06
modDate: 2025-08-06
---

This guide aims to acquaint pre-rekindled players with the broad strokes of changes implemented since Wynn version 2.1.

It aims to explain in broad strokes how such changes are relevant to modern gameplay and provide enough information to get started with the mentioned features.

This is **not a changelog**, and this is also **not a guide**. For exact changes, see the changelogs linked on [the wiki](https://wynncraft.wiki.gg/wiki/Version_history).

---

## Soul Point Removal

<small>Section written by Wenweia</small>

You may recall that all players used to have 15 slowly regenerating soul points -- displayed on the right side of their hot bar -- that were deducted from every time you died or consumed a teleport scroll. The lower this value dropped, the more likely it was that your gear would drop on death.

These have now been removed in their entirety. There is now no consequence to dying in *normal* (i.e. non hardcore, non hunted) gameplay. Teleport scrolls now have three uses that regenerate over time, thus rendering them renewable.

---

## World Events

<small>Section written by Holidaze and edited by Wenweia</small>

### Regular
World Events were introduced to replace the swarm mechanic you might remember. In essence, in specific areas of the map, large quantities of mobs will spawn at random intervals.

Defeating all such mobs will result in a reward chest appearing, with rewards unique to each event spawning in said chest. These events appear at all levels, and are scaled roughly to the average level of the participating party.

When a world event is set to occur, it will be announced both in the content book and in chat to nearby players.

### Major
Major world events consist of large bosses, surrounded by weaker mobs, that require an experienced parties to defeat. As of 2025-12-15, the only event of this sort that has been implemented is Prelude to Annhilation.

A party successful in defeating all such mobs will be rewarded with a chest with valuable rewards up to and including caches -- unique mythics only available through these infrequent major world events.

Note that, unlike regular world events, dying in a major world event does not preclude your receipt of rewards, provided at least one member in your party survives. Major world events are announced 11-12 hours in advance.

---

## Store Stuffs
(Silverbull shares, armour trims/cosmetics, tokens)
<p class="glass">To be written!</p>

<small>Section written by Wenweia</small>

Due both to some policy changes at Microsoft, some expanded technical capabilities afforded by the game itself, and increased capacity on Wynn's side, cosmetics and monetisation were completely overhauled in this update.

### Cosmetics

#### Obtaining

The main source of cosmetics is Wynncraft's [`/store`](https://wynncraft.com/store), specifically its crates. These crates are now grouped into collections (generally associated with the new [festivals](https://www.wynnvets.org/docs/major-changes/spellbound/#festivals), and opening a `/crate` will select a cosmetic from said collection at random.

#### Managing

The scrap menu still exists, and functions in a manner quite similar to how it used to. It has, however, been moved to a button at the bottom of the `/crate` menu.

Cosmetics retain their old tiers and still require five items of the same tier to scrap (notwithstanding [Sliverbull](https://www.wynnvets.org/docs/major-changes/spellbound/#silverbull) which reduces this number from five to four). A new requirement, however, is that you can only scrap items from the same collection. For example, a 2024 blizzard cosmetic can exclusively be scrapped with other 2024 blizzard cosmetics, resulting in a higher tier 2024 blizzard cosmetic.

Ranks get an assortment of daily crates, with [Wynn's new subscription rank](https://www.wynnvets.org/docs/major-changes/spellbound/#silverbull) increasing the number of crates afforded. During festivals, an additional daily crate is made available by completing daily objectives.

#### Using

The new cosmetic equipment system has been completely redone. The new command to access cosmetics in general is `/use`, which has now been combined with the `/store`. Refer to the below picture; the red bar is for buying stuff, the green bar is for using stuff.

![The cosmetic interface](/assets/changes/store.png)

Cosmetics now come in five types:

##### Wardrobe

This is where most things that are visible to other players are kept and primarily change your appearance. The wardrobe is divided into eight styles, two slots per style. The left slots select what cosmetic to use for a given style, and the right slots are used for glints.

Styles are, respectively, helmet, chestplate, leggings, boots, weapons, effects, disguises, and mount skins. Cosmetics obtained via crates apply to these various slots, and can be applied using the left slot. 

Glints, part of (and locked behind) the new [Silverbull](https://www.wynnvets.org/docs/major-changes/spellbound/#silverbull), are rendered on top of the cosmetic to the left of them. Glints are only available for weapons/armour styles) and consist of a colour/pattern/animation. The new hidden armour feature is itself a glint.

As an example of how one might use the wardrobe, assigning a hat cosmetic awarded in a crate to one's helmet slot would replace one's visible helmet with that hat. Applying a green glint would then dye said hat model green.

### Pets

Pets are very similar to the old system they are replacing, except you now have three slots for them, pets level up over time with xp, and higher level pets have assorted functionalities accessible by right clicking them in the `/pet` menu. Notably, the ability to sell and dump items. Like cosmetics, pets come from crates.

### Consumables

Previously known as (but still including) bombs, these are purchased items consumed on use. Items labeled bombs generally apply a server-wide effect for a set period of time (with the exception being shout bombs). Unlike most of the other items on this list, consumables must be purchased.

#### New Bombs

The new types of bombs are loot chest bombs (increase the rate of items spawning in loot chests), world event bombs (activating the new world events), and scroll charge bombs (basically a replacement for the rarely used soul point bomb, resulting in the equally niche effect of letting you use a teleport scroll before your uses naturally regen).

#### Tokens

In addition to bombs, tokens are a new type of consumable. They function similarly to bombs, but accomplish a specific, one-off, effect on use. Examples of tokens include shiny tracker rerolls and resets, renaming a guild, and early refreshes of the daily bonuses available every 24h for raids, lootruns, and the like.

### Emotes

Also from crates, these play a specific animation when you do /emote. 

---

## Website Stuffs

<small>Section written by Wenweia</small>

The Wynn website was redone again recently. Although the forums still exist, they are very much a legacy system. Instead, Wynn now allows you to make a single account that gets shared across all aspects of the website (store, stats, discord linking, apis, etc).

The API has also become an acquired taste, by default hiding large portions of the stats older players are used to. Although these can be reenabled once you make an account, it is more common these days to view them through third party sites [such as this one](https://www.wynnpool.com/stats).

---

## Outer Void

<small>Section written by Holidaze and edited by Wenweia</small>

The Outer Void was introduced with the intention of providing another mechanic through which for players to make money. The Outer Void is physically located in the southern end of the Void -- an area which can be unlocked in the "One Thousand Meters Under" quest. 

Gameplay in the Outer Void consists of using a unique mobility system to jump around floating platforms to collect different items. These items can be directly sold to The Scavenger, used to craft gear used outside of the outer void (sometimes quite valuable), or used to craft various upgrades to help make traversing the Outer Void easier. Upgrades of this sort include a grappling hook or the ability to grab onto walls; the more you upgrade your mobility, the more effectively you collect items from this area!
