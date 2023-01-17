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
            talent += " (Mon/Thu)";
            break;
        case "Resistance":
        case "Diligence":
        case "Elegance":
        case "Ingenuity":
            talent += " (Tue/Fri)"
            break;
        case "Ballad":
        case "Gold":
        case "Light":
        case "Praxis":
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
    switch (material) {
        case "Decarabian":
        case "Guyun":
        case "Sea Branch":
        case "Forest Dew":
            material += " (Mon/Thu)";
            break;
        case "Boreal Wolf":
        case "Mist Veiled Elixir":
        case "Narukami":
        case "Oasis Garden":
            material += " (Tue/Fri)"
            break;
        case "Dandelion Gladiator":
        case "Aerosiderite":
        case "Oni Mask":
        case "Scorching Mask":
            material += " (Wed/Sat)"
            break;
        default:
            material += "";
    }
    return material;
}