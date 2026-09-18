---
title: Mount Guide
description: "Learn how to ride, train and maintain your mounts."
image: "https://www.wynnvets.org/landing/images/bwca-night.png"
imageAlt: "A placeholder image for the time being."
pubDate: 2026-09-16
modDate: 2026-09-18
---

<small>Article written by CanIGetUhhhhhh and Wenweia</small>

## Introduction

Mounts (originally just horses) have now received a **major overhaul**, deeply impacting mechanics, varieties, etc. Notably, new types of mounts were introduced and new systems and mechanics were introduced as a result. Your original horses have migrated to these new systems in ways that will be explained later in this article.

### Overview

| Type    | Location | Quest Req         | Lvl  | Merchant      | Enclosure     |
| ------- | -------- | ----------------- | ---- | ------------- | ------------- |
| Horse   | Ternaves | Stable Story      | 13   | `850, -1652`  | `860, 1660`   |
| Wyvern  | Bantisu  | The Canyon Guides | 84   | `489, -4726`  | `500, -4740`  |
| Adasaur | Aldwell  | Burning Bonds     | 114  | `-1235, -739` | `-1220, -729` |

### Mount Types
**Horses** are the earliest mount available to you in your playthrough and provide a great way to travel, with **good speed & handling**.

**Wyverns** are **able to fly** at a certain height above ground, making them perfect for **traversing difficult terrain** such as mountains, forests, or even seas.

**Adasaurs** are the **fastest mount type**, but unable to fly and with slightly tougher handling than horses.

### Legacy Horses
Historically, the colour of a horse (Brown, Black, Chestnut, White) indicated its tier, with brown horses having the lowest statistics cap and white horses having the highest. **Colours are now unrelated to tiers or capabilities!**

This is to say colours are now purely cosmetic, and a lvl 1 white horse is now possible. The previous horse tier system has been replaced with something called potential, which is solely determined by breeding. If you had a pre-fruma horse, it will be converted to a modern, untrained, horse with potential determined as follows.

#### Legacy Horse Conversions

To contextualise the below table, modern horses consist of eight [stats](#trainable-stats), each with a training level, a limit, and a maximum: `TRL/LIM (MAX)`, which you can read more about [here](#values). The potential of a mount is the sum of the combined maximum values for all eight skills. The maximum is determined by the legacy tier of the horse, with the limit being 75% of that.

The initial training level is roughly analogous to how much training your horse had initially. This is to say, if you had a 15/20 and 20/20 horse, both would convert to x/60 (80) black-night mounts, but the latter would be have an x of 40, and the former would have a lower level value.

| Legacy Horse            | Converted To                              | Statistics   |
| :---------------------- | ----------------------------------------- | ------------ |
| Brown (/10)             | 320 Potential Bay-Rich Horse              | 20/30 (40)   |
| Upgraded Brown (/15)    | *Made tradable and turned into the above* |              |
| Black (/20)             | 640 Potential Black-Night Horse           | 40/60 (80)   |
| Upgrade Black (/25)     | *Made tradable and turned into the above* |              |
| Chestnut (/30)          | 960 Potential Chestnut-Reddish Horse      | 60/90 (120)  |
| Upgraded Chestnut (/35) | *Made tradable and turned into the above* |              |
| White (40)              | 1200 Potential White-Pale Horse           | 80/120 (160) |

Converted legacy horses can be identified by the uniformity of their skill values: something like 80/80/80/80/80/80/80/80 is guaranteed for a legacy horse, but is unlikely for a modern horse (which, due to training, would vary randomly into something like 82,73,78,...).

## Mechanics

### Purchasing Your Mount

After completing quest requirements, mounts can be purchased at their respective Mount Merchants. Upon purchase, you will receive a **saddle** (termed reins for wyverns and harnesses for adasaurs). Unlike before, this **does not allow you to summon the mount yet**!

### Your Mount's Aesthetic

For modern mounts, **colours are now randomly assigned** upon purchase! Unlike the original single-colour horses, aesthetics are now bipartite: mounts now have **primary** and **secondary** and secondary colours, with the **resulting aesthetic being a combination** of the two.

The available primary and secondary **colours depend on the type of moun**t they apply to: for example, wyverns have different colours available than horses and adasaurs. Some colours (primary and secondary), and therefore **some combinations**, **are rarer than others**.

For example, a “Mystic-Sapphire” (Mystic being the base, Sapphire being the secondary colour) is the rarest variant for Wyverns, while “White-Rich" is the rarest variant for Horses. You can check all of the possible colour variants and their probabilities here:

| Type    | Variants                                                   |
| ------- | ---------------------------------------------------------- |
| Wyverns | [Link](https://wynncraft.wiki.gg/wiki/Wyverns#Appearance)  |
| Horse   | [Link](https://wynncraft.wiki.gg/wiki/Horses#Appearance)   |
| Adasaur | [Link](https://wynncraft.wiki.gg/wiki/Adasaurs#Appearance) |

### Summoning Your Mount

**Saddles** (reins for wyverns and harnesses for adasaurs) **need to be placed into a feeder** within an **enclosure** designated for that specific mount type .

After the saddle is placed into the feeder, you can click said saddle again to receive a **whistle** (termed flutes for wyverns and ocarina for adasaurs), **which lets you summon your mount**. 

Clicking on a saddle in a feeder with the respective whistle in your inventory picks the saddle back up from the feeder.

### Feeding Your Mount

Riding your mount will slowly drain its energy bar. When at 0 energy, a mount will become slower. To regain energy, you can feed your mount by placing materials (such as gathered wheat, granite, willow, etc.) in your feeder onto the right side of your mount saddle.

Higher level materials will replenish more energy, but you can only feed materials that are of the same level or lower as the highest stat of your mount. The tier of the material (1 star, 2 star, 3 star) is irrelevant. The time it takes for a mount to be fed a material increases with the mounts level.

### Training Your Mount

#### Trainable Stats

Every mount has 8 stats:

- **Speed:** Determines the maximum speed of your mount.
- **Acceleration:** Determines how fast your mount reaches its maximum speed.
- **Altitude/Jump Height:** Determines how high above ground your mount flies (Wyvern) or jumps (Horses/Adasaurs).
- **Energy:** Determines the mounts maximum energy.
- **Handling:** Determines how well your mount responds to turns.
- **Toughness:** Decreases the chance that you dismount when being hit by a mob.
- **Boost:** Determines how much speed or energy your mount gains from pickups.
- **Training:** Determines how much a pickup increases your mounts stats.

#### Values
`2/30 (40)` -> `Level/Limit (Max)`<br/>
Each of these stats has a **Training Level, a Limit, and a Maximum**.

The **Training Level and Maximum** can be seen next to the respective stats while viewing your mount **in your inventory**, while the **Maximum** of each stat can only be seen by viewing your mount **in its feeder** or in trade market.

##### Training Level
**The Training level** is the **current** level your mount has in a stat. It can be increased by training (picking up pickups that spawn around the world while riding your Mount).
##### Limit
**The Limit** is a **soft cap**. Once the Training level equals the Limit, that stat **cannot be further improved by pickups**. To increase the Limit, a mount needs to **fed specific materials**.

Each material **type** (Ingot, Gem, Oil, Meat, etc.) influences **different stats.** You can use a calculator such as [this one](https://wynn.azael.moe/)[^1] to optimize your feedings.

##### Maximum
**The Maximum** is the **hard cap** of a mounts stat. **The only way it can be increased is by breeding two mounts together.** The **sum of all Maximums** of a mount is the **Potential**, which is also the number shown at the saddle or flute.

A new mount from the Mount Merchant will always have a total Potential of 240, and all of its stats will be `1/10 (30)` -- `Training Level/Limit (Maximum).

### Breeding Your Mount

**Breeding** two mounts together is done by **placing their saddles on the same row in a feeder**. **Both parents will be consumed when breeding finishes.**

In order to achieve the best result possible, **both** mounts need to be **fully fed** until **all their stats Limit = Maximum**. **At least one** of the mounts additionally needs to be **fully trained**, so **Training Level = Limit = Maximum**.

In addition, you should **only breed** mounts of the **same generation** together, so 240+240, ~450+ ~450, etc. Breeding two different generations, such as 240+ ~450, will waste the potential of the mount with the higher generation.

The child will receive **any of the colours** of its parents. For example, a Beige-Ardent and a White-Pale can, among other possible combinations, result in a Beige-Pale.

## Further Resources

- If you are looking for a more in-depth guide or want to know more about specific mechanics, you can join [The Mount Enjoyers discord](https://discord.gg/XqFsQQzTEc)
- [The wiki](https://wynncraft.wiki.gg/wiki/Category:Mounts) has some fairly thorough [documentation](https://wynncraft.wiki.gg/wiki/Horses) [on](https://wynncraft.wiki.gg/wiki/Wyverns) [mounts](https://wynncraft.wiki.gg/wiki/Adasaurs).

[^1]: Note that there are other tools out there, including [this one](https://wynn.mashtoolz.xyz/mount) and [this one](https://nori.fish/wynn/mount/)
