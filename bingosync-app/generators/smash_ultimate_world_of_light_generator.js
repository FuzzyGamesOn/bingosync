bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    "Acquire 3 spirits from chests",
    "Acquire 4 spirits from chests",
    "Acquire 5 spirits from chests",
    "Allocate 15 skills in the skill tree",
    "Allocate 20 skills in the skill tree",
    "Allocate 25 skills in the skill tree",
    "Back throw Bowser 3 times with Mario in 1 fight",
    "Be under the effect of 3 transformations at the same time",
    "Beat 3 Ace Spirits",
    "Beat 3 fights with no spirits",
    "Beat 3 spirits from the Animal Crossing series",
    "Beat 3 spirits from the Donkey Kong series",
    "Beat 3 spirits from the Earthbound series",
    "Beat 3 spirits from the F-Zero series",
    "Beat 3 spirits from the Kid Icarus series",
    "Beat 3 spirits from the Kirby series",
    "Beat 3 spirits from the Megaman series",
    "Beat 3 spirits from the Metal Gear series",
    "Beat 3 spirits from the Metroid series",
    "Beat 3 spirits from the Pikmin series",
    "Beat 3 spirits from the Sonic series",
    "Beat 3 spirits from the Star Fox series",
    "Beat 3 spirits from the Street Fighter series",
    "Beat 5 spirits from the Fire Emblem series",
    "Beat 5 spirits from the Pokemon series",
    "Beat 5 spirits from the Super Mario Series",
    "Beat 5 spirits from the Zelda series",
    "Buy out a shops entire stock",
    "Clear 3 environmental blocks",
    "Clear 4 environmental blocks",
    "Clear 5 environmental blocks",
    "Clear a fight using only Kirby’s neutral B",
    "Collect 3 different powers as Kirby in 1 fight",
    "Collect 30 orbs from chests",
    "Collect 40 orbs from chests",
    "Collect 50 orbs from chests",
    "Defeat 3 Giant Enemies",
    "Defeat 3 metal enemies",
    "Defeat 5 Giant enemies",
    "Defeat 5 Tiny enemies",
    "Defeat Bayonetta in 3 different battles",
    "Defeat Bowser Jr. in 3 different battles",
    "Defeat Bowser in 3 different battles",
    "Defeat Bowser with Mario, Yoshi, or Peach",
    "Defeat Captain Falcon in 3 different battles",
    "Defeat Chrom in 3 different battles",
    "Defeat Cloud in 3 different battles",
    "Defeat Corrin in 3 different battles",
    "Defeat D3 with Kirby",
    "Defeat Daisy in 3 different battles",
    "Defeat Dark Pit in 3 different battles",
    "Defeat Dark Samus in 3 different battles",
    "Defeat Dark Samus or Ridley with Samus",
    "Defeat Diddy Kong in 3 different battles",
    "Defeat Donkey Kong in 3 different battles",
    "Defeat Dr. Mario in 3 different battles",
    "Defeat Dr. Wily with Mega Man",
    "Defeat Duck Hunt in 3 different battles",
    "Defeat Falco in 3 different battles",
    "Defeat Fox in 3 different battles",
    "Defeat Galleon with Snake",
    "Defeat Gannon with Link, Toon Link, or Sheik",
    "Defeat Ganondorf in 3 different battles",
    "Defeat Giga Bowser with Peach",
    "Defeat Greninja in 3 different battles",
    "Defeat Ice Climbers in 3 different battles",
    "Defeat Ike in 3 different battles",
    "Defeat Incineroar in 3 different battles",
    "Defeat Inkling in 3 different battles",
    "Defeat Isabelle in 3 different battles",
    "Defeat Jigglypuff in 3 different battles",
    "Defeat K. Rool with DK or Diddy",
    "Defeat Ken in 3 different battles",
    "Defeat King Dedede in 3 different battles",
    "Defeat King K. Rool in 3 different battles",
    "Defeat Kirby in 3 different battles",
    "Defeat Link in 3 different battles",
    "Defeat Little Mac in 3 different battles",
    "Defeat Lucario in 3 different battles",
    "Defeat Lucas in 3 different battles",
    "Defeat Lucina in 3 different battles",
    "Defeat Luigi in 3 different battles",
    "Defeat Mario in 3 different battles",
    "Defeat Marth in 3 different battles",
    "Defeat Mega Man in 3 different battles",
    "Defeat Meta Knight in 3 different battles",
    "Defeat Mewtwo in 3 different battles",
    "Defeat Mewtwo with any pokemon",
    "Defeat Mii Gunner, Brawler, and Swordsman each in battle",
    "Defeat Mr. Game & Watch in 3 different battles",
    "Defeat Ness in 3 different battles",
    "Defeat Olimar in 3 different battles",
    "Defeat Pac-Man in 3 different battles",
    "Defeat Palutena in 3 different battles",
    "Defeat Peach in 3 different battles",
    "Defeat Pichu in 3 different battles",
    "Defeat Pikachu in 3 different battles",
    "Defeat Pit in 3 different battles",
    "Defeat R.O.B. in 3 different battles",
    "Defeat Rathalos with Shulk",
    "Defeat Richter in 3 different battles",
    "Defeat Ridley in 3 different battles",
    "Defeat Robin in 3 different battles",
    "Defeat Rosalina & Luma in 3 different battles",
    "Defeat Roy in 3 different battles",
    "Defeat Ryu in 3 different battles",
    "Defeat Samus in 3 different battles",
    "Defeat Sheik in 3 different battles",
    "Defeat Shulk in 3 different battles",
    "Defeat Simon in 3 different battles",
    "Defeat Snake in 3 different battles",
    "Defeat Sonic in 3 different battles",
    "Defeat Squirtle, Ivysaur, and Charizard each in battle",
    "Defeat Toon Link in 3 different battles",
    "Defeat Villager in 3 different battles",
    "Defeat Wario in 3 different battles",
    "Defeat Wii Fit Trainer in 3 different battles",
    "Defeat Wolf in 3 different battles",
    "Defeat Wolf with Fox or Falco",
    "Defeat Yoshi in 3 different battles",
    "Defeat Young Link in 3 different battles",
    "Defeat Zelda in 3 different battles",
    "Defeat Zero Suit Samus in 3 different battles",
    "Defeat a Legendary with <2000 power",
    "Defeat a Legendary with <4000 power",
    "Defeat a Legendary without spirits",
    "Defeat an Ace with <1000 power",
    "Defeat an Ace with <2000 power",
    "Defeat an Ace with no spirits",
    "Don't use neutral primary spirits",
    "Don't use specials in any fight",
    "Don't use support spirits",
    "Don't use throws in any fight",
    "Don’t get burnt on a lava floor stage",
    "Don’t get frozen on an ice floor stage",
    "Don’t get poisoned on a poison floor stage",
    "Don’t get shocked on a zap floor stage",
    "Don’t get slept on a sleep floor stage",
    "Don’t spend any skill points",
    "Enhance 3 different spirits",
    "Equip a Primary with two supports from their home series",
    "Equip two spirits that grant an item",
    "Finish a fight while blinded by fog",
    "Finish a fight while controls are reversed",
    "Finish a fight with high wind with no wind resistance",
    "Finish a fight with the screen upside down",
    "Finish a match with an Item explosion",
    "Finish a stamina match with < 10 health",
    "Finish a timed match with < 10 seconds left",
    "Finish at the Start",
    "Finish in Space",
    "Finish in a Volcano",
    "Finish in the Ocean",
    "Finish in the middle of the Maze",
    "Finish with no spirits in your inventory",
    "Flood Bowser Jr 3 times with Mario in 1 fight",
    "Forget a fighting style at slowpoke",
    "Freeze an enemy 3 times in 1 fight",
    "Fully clear Alolan Islands",
    "Fully clear Badlands",
    "Fully clear Base",
    "Fully clear Beachside Town",
    "Fully clear Cliffside Rapids",
    "Fully clear Console City",
    "Fully clear DK Island",
    "Fully clear Eastern Town",
    "Fully clear Floating Islands",
    "Fully clear Forest Hill",
    "Fully clear Frozen Mountain",
    "Fully clear Gourmet Race",
    "Fully clear Heart Pool Mountain",
    "Fully clear Kongo Jungle",
    "Fully clear Lumiose City",
    "Fully clear Military Base",
    "Fully clear Molten Fortress",
    "Fully clear Mountain Falls",
    "Fully clear Mushroom Platforms",
    "Fully clear Northwestern Town",
    "Fully clear Outer Space",
    "Fully clear Pac-Maze",
    "Fully clear Poison Woods",
    "Fully clear Power Plant",
    "Fully clear Raceway",
    "Fully clear Raging Volcano",
    "Fully clear Ribbon Road",
    "Fully clear River Woods",
    "Fully clear Southern Great Plateau",
    "Fully clear Temple of Light",
    "Fully clear World Tour",
    "Have 10,000 sp",
    "Have 15,000 sp",
    "Have 20,000 sp",
    "Heal 100% with a single item",
    "Hit D3 3 times with Kirby’s Hammer in 1 fight",
    "Kill 10 Pikman in 1 Fight",
    "Kill 3 Assist Trophies",
    "Kill 5 Assist Trophies",
    "Kill Luma 3 times in 1 Fight",
    "Kill ONLY the main fighter to win",
    "Kill a gold enemy",
    "Kill an enemy via drowning",
    "Kill everyone except the main fighter",
    "Kirby Kamikaze",
    "Knock on Galeems door",
    "Level 3 spirits to 99",
    "Level 4 spirits to 99",
    "Level 5 spirits to 99",
    "Level a spirit to 99 at the Gym",
    "Loot 10 treasure chests",
    "Loot 20 treasure chests",
    "Loot 30 treasure chests",
    "Lose a match by timing out",
    "Make 1 spirit via fusion",
    "Make 2 spirits via fusion",
    "Make 3 spirits via fusion",
    "Obtain the Additional Midair Jump skill",
    "Obtain the Air Attack ^^ Skill",
    "Obtain the Double Final Smash skill",
    "Obtain the Fast Final Smash skill",
    "Obtain the Hyper Smash Attacks skill",
    "Obtain the No Penalty for Continuous Dodging skill",
    "Obtain the Poisoned skill",
    "Obtain the Special-Move Power ^^ skill",
    "Obtain the Weapon Resist ^ skill",
    "Reset the skill tree 3 times",
    "Ride the Rapids",
    "Send 4 spirits exploring",
    "Shield break an enemy",
    "Sleep an enemy 3 times in 1 fight",
    "Slide on Ice",
    "Take 3 different Warp pipes",
    "Take the Train",
    "Teach 1 spirit 3 different fighting styles",
    "Unlock 1 music track",
    "Unlock 10 fighters",
    "Unlock 15 fighters",
    "Unlock 2 music tracks",
    "Unlock 3 Mii Costumes",
    "Unlock 3 Shops",
    "Unlock 3 explorers",
    "Unlock 3 music tracks",
    "Unlock 4 Mii Costumes",
    "Unlock 5 Dojos",
    "Unlock 5 Mii Costumes",
    "Unlock 5 fighters",
    "Unlock Sheik, Marth, and Villager",
    "Unlock the Gym",
    "Unlock the Temple of Light",
    "Use 3 different fighting styles in 3 fights",
    "Win 3 fights with final smash",
    "Win 3 horde fights",
    "Win 3 matches at a spirit type disadvantage",
    "Win a fight after getting Shield broken 3 times",
    "Win a fight after jumping immediately and not touching the floor again",
    "Win a fight at over 100%",
    "Win a fight at over 150%",
    "Win a fight at over 200%",
    "Win a fight dealing damage with only items",
    "Win a fight with a counter attack",
    "Win a fight with a projectile reflect",
    "Win a fight with no damage taken",
    "Win a fight without leaving the floor",
    "Win a match using 5 different fighters"
];
