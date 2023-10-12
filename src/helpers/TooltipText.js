export const formatTalents = (talent) => {
    if (talent.endsWith("1")) {
        talent = "Teachings of " + talent.slice(0, talent.length - 1);
    }
    if (talent.endsWith("2")) {
        talent = "Guide to " + talent.slice(0, talent.length - 1);
    }
    if (talent.endsWith("3")) {
        talent = "Philosophies of " + talent.slice(0, talent.length - 1);
    }
    let talentSplit = talent.split(" ");
    let talentKey = talentSplit[talentSplit.length - 1];
    switch (talentKey) {
        case "Freedom":
        case "Prosperity":
        case "Transience":
        case "Admonition":
        case "Equity":
            talent += " (Mon/Thu)";
            break;
        case "Resistance":
        case "Diligence":
        case "Elegance":
        case "Ingenuity":
        case "Justice":
            talent += " (Tue/Fri)"
            break;
        case "Ballad":
        case "Gold":
        case "Light":
        case "Praxis":
        case "Order":
            talent += " (Wed/Sat)"
            break;
        default:
            talent += "";
    }
    return talent;
}

export const formatWeeklyBossMats = (material) => {
    switch (material) {
        case "Dvalin's Claw":
        case "Dvalin's Plume":
        case "Dvalin's Sigh":
            material += " (Stormterror)";
            break;
        case "Ring of Boreas":
        case "Spirit Locket of Boreas":
        case "Tail of Boreas":
            material += " (Lupus Boreas)";
            break;
        case "Shadow of the Warrior":
        case "Shard of a Foul Legacy":
        case "Tusk of Monoceros Caeli":
            material += " (Childe)";
            break;
        case "Bloodjade Branch":
        case "Dragon Lord's Crown":
        case "Gilded Scale":
            material += " (Azhdaha)";
            break;
        case "Ashen Heart":
        case "Hellfire Butterfly":
        case "Molten Moment":
            material += " (La Signora)";
            break;
        case "Mudra of the Malefic General":
        case "Tears of the Calamitous God":
        case "The Meaning of Aeons":
            material += " (Narukami no Mikoto)";
            break;
        case "Daka's Bell":
        case "Mirror of Mushin":
        case "Puppet Strings":
            material += " (Shouki no Kami)";
            break;
        case "Worldspan Fern":
        case "Primordial Greenbloom":
        case "Everamber":
            material += " (Guardian of Apep's Oasis)";
            break;
        default:
            material += "";
    }
    return material;
}

export const formatCommonMats = (material) => {
    switch (material) {
        case "Arrow1":
            material = "Firm Arrowhead";
            break;
        case "Arrow2":
            material = "Sharp Arrowhead";
            break;
        case "Arrow3":
            material = "Weathered Arrowhead";
            break;
        case "Arrow":
            material = "Hilichurl Arrow";
            break;
        case "Fatui Insignia1":
            material = "Recruit's Insignia";
            break;
        case "Fatui Insignia2":
            material = "Sergeant's Insignia";
            break;
        case "Fatui Insignia3":
            material = "Lieutenant's Insignia";
            break;
        case "Mask1":
            material = "Damaged Mask";
            break;
        case "Mask2":
            material = "Stained Mask";
            break;
        case "Mask3":
            material = "Ominous Mask";
            break;
        case "Mask":
            material = "Hilichurl Mask";
            break;
        case "Nectar2":
            material = "Shimmering Nectar";
            break;
        case "Nectar3":
            material = "Energy Nectar";
            break;
        case "Nectar1":
        case "Nectar":
            material = "Whopperflower Nectar";
            break;
        case "Scroll1":
            material = "Divining Scroll";
            break;
        case "Scroll2":
            material = "Sealed Scroll";
            break;
        case "Scroll3":
            material = "Forbidden Curse Scroll";
            break;
        case "Scroll":
            material = "Samachurl Scroll";
            break;
        case "Slime1":
            material = "Slime Condensate";
            break;
        case "Slime2":
            material = "Slime Secreations";
            break;
        case "Slime3":
            material = "Slime Concentrate";
            break;
        case "Treasure Hoarder Insignia1":
            material = "Treasure Hoarder Insignia";
            break;
        case "Treasure Hoarder Insignia2":
            material = "Silver Hoarder Insignia";
            break;
        case "Treasure Hoarder Insignia3":
            material = "Golden Raven Insignia";
            break;
        case "Handguard1":
            material = "Old Handguard";
            break;
        case "Handguard2":
            material = "Kageuchi Handguard";
            break;
        case "Handguard3":
            material = "Famed Handguard";
            break;
        case "Handguard":
            material = "Nobushi Handguard";
            break;
        case "Specter1":
            material = "Spectral Husk";
            break;
        case "Specter2":
            material = "Spectral Heart";
            break;
        case "Specter3":
            material = "Spectral Nucleus";
            break;
        case "Specter":
            material = "Specter Core";
            break;
        case "Fungi1":
            material = "Fungal Spores";
            break;
        case "Fungi2":
            material = "Luminescent Pollen";
            break;
        case "Fungi3":
            material = "Crystalline Cyst Dust";
            break;
        case "Fungi":
            material = "Fungal Spore Powder";
            break;
        case "Headband1":
            material = "Faded Red Satin";
            break;
        case "Headband2":
            material = "Trimmed Red Silk";
            break;
        case "Headband3":
            material = "Rich Red Brocade";
            break;
        case "Headband":
            material = "Eremite Headband";
            break;
        case "Aberrant1":
            material = "Transoceanic Pearl";
            break;
        case "Aberrant2":
            material = "Transoceanic Chunk";
            break;
        case "Aberrant3":
            material = "Xenochromatic Crystal";
            break;
        case "Aberrant":
            material = "Aberrant Pearl";
            break;
        case "Gear1":
            material = "Meshing Gear";
            break;
        case "Gear2":
            material = "Mechanical Spur Gear";
            break;
        case "Gear3":
            material = "Artificed Dynamic Gear";
            break;
        case "Gear":
            material = "Clockwork Meka Gear";
            break;
        default:
            material += "";
    }
    return material;
}

export const formatEliteMats = (material) => {
    switch (material) {
        case "Horn1":
            material = "Heavy Horn";
            break;
        case "Horn2":
            material = "Black Bronze Horn";
            break;
        case "Horn3":
            material = "Black Crystal Horn";
            break;
        case "Horn":
            material = "Hilichurl Horn";
            break;
        case "Ley Line Branch1":
            material = "Dead Ley Line Branch";
            break;
        case "Ley Line Branch2":
            material = "Dead Ley Line Leaves";
            break;
        case "Ley Line Branch3":
            material = "Ley Line Sprout";
            break;
        case "Ley Line Branch":
            material = "Abyssal Ley Line Branch";
            break;
        case "Chaos Part1":
            material = "Chaos Device";
            break;
        case "Chaos Part2":
            material = "Chaos Circuit";
            break;
        case "Chaos Part3":
            material = "Chaos Core";
            break;
        case "Chaos Part":
            material = "Ruin Machine Core";
            break;
        case "Mist Grass1":
            material = "Mist Grass Pollen";
            break;
        case "Mist Grass2":
            material = "Mist Grass";
            break;
        case "Mist Grass3":
            material = "Mist Grass Wick";
            break;
        case "Mist Grass":
            material = "Cicin Mage Mist Grass";
            break;
        case "Sacrificial Knife1":
            material = " Hunter's Sacrificial Knife";
            break;
        case "Sacrificial Knife2":
            material = "Agent's Sacrificial Knife";
            break;
        case "Sacrificial Knife3":
            material = "Inspector's Sacrificial Knife";
            break;
        case "Sacrificial Knife":
            material = "Pyro Agent Knife";
            break;
        case "Bone Shard1":
            material = "Fragile Bone Shard";
            break;
        case "Bone Shard2":
            material = "Sturdy Bone Shard";
            break;
        case "Bone Shard3":
            material = "Fossilized Bone Shard";
            break;
        case "Bone Shard":
            material = "Vishap Bone Shard";
            break;
        case "Sentinel Chaos Part1":
            material = "Chaos Gear";
            break;
        case "Sentinel Chaos Part2":
            material = "Chaos Axis";
            break;
        case "Sentinel Chaos Part3":
            material = "Chaos Oculus";
            break;
        case "Sentinel Chaos Part":
            material = "Ruin Sentinel Core";
            break;
        case "Mirror Maiden Prism1":
            material = "Dismal Prism";
            break;
        case "Mirror Maiden Prism2":
            material = "Crystal Prism";
            break;
        case "Mirror Maiden Prism3":
            material = "Polarizing Prism";
            break;
        case "Riftwolf Claw1":
            material = "Concealed Claw";
            break;
        case "Riftwolf Claw2":
            material = "Concealed Unguis";
            break;
        case "Riftwolf Claw3":
            material = "Concealed Talon";
            break;
        case "Statuette1":
            material = "Gloomy Statuette";
            break;
        case "Statuette2":
            material = "Dark Statuette";
            break;
        case "Statuette3":
            material = "Deathly Statuette";
            break;
        case "Statuette":
            material = "Abyssal Statuette";
            break;
        case "Fungal Nucleus1":
            material = "Inactivated Fungal Nucleus";
            break;
        case "Fungal Nucleus2":
            material = "Dormant Fungal Nucleus";
            break;
        case "Fungal Nucleus3":
            material = "Robust Fungal Nucleus";
            break;
        case "Drake Chaos Part1":
            material = "Chaos Storage";
            break;
        case "Drake Chaos Part2":
            material = "Chaos Module";
            break;
        case "Drake Chaos Part3":
            material = "Chaos Bolt";
            break;
        case "Drake Chaos Part":
            material = "Ruin Drake Core";
            break;
        case "Primal Construct Prism1":
            material = "Damaged Prism";
            break;
        case "Primal Construct Prism2":
            material = "Turbid Prism";
            break;
        case "Primal Construct Prism3":
            material = "Radiant Prism";
            break;
        case "Shell1":
            material = "Desiccated Shell";
            break;
        case "Shell2":
            material = "Sturdy Shell";
            break;
        case "Shell3":
            material = "Marked Shell";
            break;
        case "Shell":
            material = "Consecrated Beast Shell";
            break;
        case "Flower":
            material = "Hilichurl Flower";
            break;
        case "Flower1":
            material = "A Flower Yet to Bloom";
            break;
        case "Flower2":
            material = "Treasured Flower";
            break;
        case "Flower3":
            material = "Wanderer's Blooming Flower";
            break;
        case "Tainted Water1":
            material = "Drop of Tainted Water";
            break;
        case "Tainted Water2":
            material = "Scoop of Tainted Water";
            break;
        case "Tainted Water3":
            material = "Newborn Tainted Hydro Phantasm";
            break;
        case "Tainted Water":
            material = "Phantasm Tainted Water";
            break;
        case "Rift Core1":
            material = "Rift Core";
            break;
        case "Rift Core2":
            material = "Foreign Synapse";
            break;
        case "Rift Core3":
            material = "Alien Life Core";
            break;
        case "Rift Core":
            material = "Breacher Primus Core";
            break;
        case "Watch1":
            material = "Old Operative's Pocket Watch";
            break;
        case "Watch2":
            material = "Operative's Standard Pocket Watch";
            break;
        case "Watch3":
            material = "Operative's Constancy";
            break;
        case "Watch":
            material = "Fatui Operative Watch";
            break;
        default:
            material += "";
    }
    return material;
}

export const formatBossMats = (material) => {
    switch (material) {
        case "Basalt Pillar":
            material += " (Geo Hypostasis)";
            break;
        case "Cleansing Heart":
            material += " (Oceanid)";
            break;
        case "Crystalline Bloom":
            material += " (Cryo Hypostasis)";
            break;
        case "Everflame Seed":
            material += " (Pyro Regisvine)";
            break;
        case "Hoarfrost Core":
            material += " (Cryo Regisvine)";
            break;
        case "Hurricane Seed":
            material += " (Anemo Hypostasis)";
            break;
        case "Juvenile Jade":
            material += " (Primo Geovishap)";
            break;
        case "Lightning Prism":
            material += " (Electro Hypostasis)";
            break;
        case "Marionette Core":
            material += " (Maguu Kenki)";
            break;
        case "Perpetual Heart":
            material += " (Perpetual Mechanical Array)";
            break;
        case "Smoldering Pearl":
            material += " (Pyro Hypostasis)";
            break;
        case "Storm Beads":
            material += " (Thunder Manifestation)";
            break;
        case "Dew of Repudiation":
            material += " (Hydro Hypostasis)";
            break;
        case "Riftborn Regalia":
            material += " (Golden Wolflord)";
            break;
        case "Dragonheir's False Fin":
            material += " (Bathysmal Vishap Herd)";
            break;
        case "Runic Fang":
            material += " (Ruin Serpent)";
            break;
        case "Majestic Hooked Beak":
            material += " (Jadeplume Terrorshroom)";
            break;
        case "Thunderclap Fruitcore":
            material += " (Electro Regisvine)";
            break;
        case "Light Guiding Tetrahedron":
            material += " (Semi-Intransient Matrix)";
            break;
        case "Perpetual Caliber":
            material += " (Aeonblight Drake)";
            break;
        case "Quelled Creeper":
            material += " (Dendro Hypostasis)";
            break;
        case "Pseudo-Stamens":
            material += " (Setekh Wenut)";
            break;
        case "Evergloom Ring":
            material += " (Iniquitous Baptist)";
            break;
        case "Clockwork Coppelius":
            material = "Artificed Spare Clockwork Component — Coppelius (Icewind Suites)";
            break;
        case "Clockwork Geppelia":
            material = "Artificed Spare Clockwork Component — Coppelia (Icewind Suites)";
            break;
        case "Emperor's Resolution":
            material += " (Emperor of Fire and Iron)";
            break;
        case "Tubion Device":
            material = "\"Tourbillon Device\" (Experimental Field Generator)";
            break;
        case "Fontemer Horn":
            material = "Fontemer Unihorn (Millennial Pearl Seahorse)";
            break;
        default:
            material += "";
    }
    return material;
}

export const formatGemstone = (material) => {
    switch (material) {
        case "Pyro_Sliver":
            material = "Agnidus Agate Sliver";
            break;
        case "Pyro_Fragment":
            material = "Agnidus Agate Fragment";
            break;
        case "Pyro_Chunk":
            material = "Agnidus Agate Chunk";
            break;
        case "Pyro_Gemstone":
        case "Pyro":
            material = "Agnidus Agate Gemstone";
            break;
        case "Hydro_Sliver":
            material = "Varunada Lazurite Sliver";
            break;
        case "Hydro_Fragment":
            material = "Varunada Lazurite Fragment";
            break;
        case "Hydro_Chunk":
            material = "Varunada Lazurite Chunk";
            break;
        case "Hydro_Gemstone":
        case "Hydro":
            material = "Varunada Lazurite Gemstone";
            break;
        case "Electro_Sliver":
            material = "Vajrada Amethyst Sliver";
            break;
        case "Electro_Fragment":
            material = "Vajrada Amethyst Fragment";
            break;
        case "Electro_Chunk":
            material = "Vajrada Amethyst Chunk";
            break;
        case "Electro_Gemstone":
        case "Electro":
            material = "Vajrada Amethyst Gemstone";
            break;
        case "Cryo_Sliver":
            material = "Shivada Jade Sliver";
            break;
        case "Cryo_Fragment":
            material = "Shivada Jade Fragment";
            break;
        case "Cryo_Chunk":
            material = "Shivada Jade Chunk";
            break;
        case "Cryo_Gemstone":
        case "Cryo":
            material = "Shivada Jade Gemstone";
            break;
        case "Anemo_Sliver":
            material = "Vayuda Turquoise Sliver";
            break;
        case "Anemo_Fragment":
            material = "Vayuda Turquoise Fragment";
            break;
        case "Anemo_Chunk":
            material = "Vayuda Turquoise Chunk";
            break;
        case "Anemo_Gemstone":
        case "Anemo":
            material = "Vayuda Turquoise Gemstone";
            break;
        case "Geo_Sliver":
            material = "Prithiva Topaz Sliver";
            break;
        case "Geo_Fragment":
            material = "Prithiva Topaz Fragment";
            break;
        case "Geo_Chunk":
            material = "Prithiva Topaz Chunk";
            break;
        case "Geo_Gemstone":
        case "Geo":
            material = "Prithiva Topaz Gemstone";
            break;
        case "Dendro_Sliver":
            material = "Nagadus Emerald Sliver";
            break;
        case "Dendro_Fragment":
            material = "Nagadus Emerald Fragment";
            break;
        case "Dendro_Chunk":
            material = "Nagadus Emerald Chunk";
            break;
        case "Dendro_Gemstone":
        case "Dendro":
            material = "Nagadus Emerald Gemstone";
            break;
        default:
            material += "";
    }
    return material;
}

export const formatWeaponAscMats = (material) => {
    let materialNames = {
        "Decarabian": {
            "1": "Tile of Decarabian's Tower",
            "2": "Debris of Decarabian's City",
            "3": "Fragment of Decarabian's Epic",
            "4": "Scattered Piece of Decarabian's Dream",
        },
        "Boreal Wolf": {
            "1": "Boreal Wolf's Milk Tooth",
            "2": "Boreal Wolf's Cracked Tooth",
            "3": "Boreal Wolf's Broken Fang",
            "4": "Boreal Wolf's Nostalgia",
        },
        "Dandelion Gladiator": {
            "1": "Fetters of the Dandelion Gladiator",
            "2": "Chains of the Dandelion Gladiator",
            "3": "Shackles of the Dandelion Gladiator",
            "4": "Dream of the Dandelion Gladiator",
        },
        "Guyun": {
            "1": "Luminous Sands from Guyun",
            "2": "Lustrous Stone from Guyun",
            "3": "Relic from Guyun",
            "4": "Divine Body from Guyun",
        },
        "Mist Veiled Elixir": {
            "1": "Mist Veiled Lead Elixir",
            "2": "Mist Veiled Mercury Elixir",
            "3": "Mist Veiled Gold Elixir",
            "4": "Mist Veiled Primo Elixir",
        },
        "Aerosiderite": {
            "1": "Grain of Aerosiderite",
            "2": "Piece of Aerosiderite",
            "3": "Bit of Aerosiderite",
            "4": "Chunk of Aerosiderite",
        },
        "Sea Branch": {
            "1": "Coral Branch of a Distant Sea",
            "2": "Jeweled Branch of a Distant Sea",
            "3": "Jade Branch of a Distant Sea",
            "4": "Golden Branch of a Distant Sea",
        },
        "Narukami": {
            "1": "Narukami's Wisdom",
            "2": "Narukami's Joy",
            "3": "Narukami's Affection",
            "4": "Narukami's Valor",
        },
        "Oni Mask": {
            "1": "Mask of the Wicked Lieutenant",
            "2": "Mask of the Tiger's Bite",
            "3": "Mask of the One-Horned",
            "4": "Mask of the Kijin",
        },
        "Forest Dew": {
            "1": "Copper Talisman of the Forest Dew",
            "2": "Iron Talisman of the Forest Dew",
            "3": "Silver Talisman of the Forest Dew",
            "4": "Golden Talisman of the Forest Dew",
        },
        "Oasis Garden": {
            "1": "Oasis Garden's Reminiscence",
            "2": "Oasis Garden's Kindness",
            "3": "Oasis Garden's Mourning",
            "4": "Oasis Garden's Truth",
        },
        "Scorching Might": {
            "1": "Echo of Scorching Might",
            "2": "Remnant Glow of Scorching Might",
            "3": "Dream of Scorching Might",
            "4": "Olden Days of Scorching Might",
        },
        "Chord": {
            "1": "Fragment of an Ancient Chord",
            "2": "Chapter of an Ancient Chord",
            "3": "Movement of an Ancient Chord",
            "4": "Echo of an Ancient Chord"
        },
        "Dewdrop": {
            "1": "Dross of Pure Sacred Dewdrop",
            "2": "Sublimation of Pure Sacred Dewdrop",
            "3": "Spring of Pure Sacred Dewdrop",
            "4": "Essense of Pure Sacred Dewdrop"
        },
        "Pristine Sea": {
            "1": "Broken Goblet of the Pristine Sea",
            "2": "Wine Goblet of the Pristine Sea",
            "3": "Silver Goblet of the Pristine Sea",
            "4": "Golden Goblet of the Pristine Sea"
        }
    }
    let materialKey = ""; // Raw name of material (no number attached)
    let materialIndex = ""; // Number of material if there is one
    if (["1", "2", "3", "4"].includes(material.charAt(material.length - 1))) {
        materialKey = material.slice(0, material.length - 1);
        materialIndex = material.charAt(material.length - 1);
    }
    else {
        materialKey = material;
    }
    let materialDate = ""; // Day tag to be appended
    switch (materialKey) {
        case "Decarabian":
        case "Guyun":
        case "Sea Branch":
        case "Forest Dew":
        case "Chord":
            materialDate = "(Mon/Thu)";
            break;
        case "Boreal Wolf":
        case "Mist Veiled Elixir":
        case "Narukami":
        case "Oasis Garden":
        case "Dewdrop":
            materialDate = "(Tue/Fri)"
            break;
        case "Dandelion Gladiator":
        case "Aerosiderite":
        case "Oni Mask":
        case "Scorching Might":
        case "Pristine Sea":
            materialDate = "(Wed/Sat)"
            break;
        default:
            materialDate = "";
    }
    if (materialIndex !== "") {
        return `${materialNames[materialKey][materialIndex]} ${materialDate}`;
    }
    else {
        return `${materialKey} ${materialDate}`;
    }
}

export const formatXPMats = (material) => {
    switch (material) {
        case "char_xp1":
            material = "Wanderer's Advice";
            break;
        case "char_xp2":
            material = "Adventurer's Experience";
            break;
        case "char_xp3":
            material = "Hero's Wit";
            break;
        case "wep_xp1":
            material = "Enhancement Ore";
            break;
        case "wep_xp2":
            material = "Fine Enhancement Ore";
            break;
        case "wep_xp3":
            material = "Mystic Enhancement Ore";
            break;
        default:
            break;
    }
    return material;
}