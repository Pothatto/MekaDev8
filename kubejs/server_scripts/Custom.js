ServerEvents.recipes(event =>{
    event.remove({output:"mysticalagriculture:essence_vessel"})
    event.remove({id:"mysticalexpansion:extremium_essence_recipe"})
    event.remove({id:"mysticalexpansion:extremium_ingot_recipe"})
    event.remove({id:"mysticalexpansion:etherium_essence_recipe"})
    event.remove({id:"mysticalexpansion:etherium_ingot_recipe"})
    event.remove({id:"mysticalexpansion:divinium_essence_recipe"})
    event.remove({id:"mysticalexpansion:divinium_ingot_recipe"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "GCG",
          " S ",
          " S "
        ],
        "key": {
          "S": {
            "item": "mysticalagriculture:soulstone"
          },
          "C": {
            "item": 'botania:bifrost_perm'
          },
          "G": {
            "tag": "forge:ingots/gold"
          }
        },
        "result": {
          "item": "mysticalagriculture:essence_vessel"
        }
      })
event.custom({
    "type": "mysticalagriculture:awakening",
    "essences": [
      {
        "item": "mysticalagriculture:air_essence",
        "count": 40
      },
      {
        "item": "mysticalagriculture:earth_essence",
        "count": 40
      },
      {
        "item": "mysticalagriculture:water_essence",
        "count": 40
      },
      {
        "item": "mysticalagriculture:fire_essence",
        "count": 40
      }
    ],
    "input": {
      "item": "mysticalexpansion:divinium_essence"
    },
    "ingredients": [
      {
        "item": 'mna:transitory_tunnel'
      },
      {
        "item": 'draconicevolution:chaos_shard'
      },
      {
        "item": 'botania:rune_pride'
      },
      {
        "item": 'ae2:singularity'
      }
    ],
    "result": {
      "item": 'mysticalagradditions:creative_essence'
    }
}).id('mekaminers:crafing_custom/creative_essence')
event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      " ABCCCCD ",
      " BEFCGGH ",
      " HFIIIGH ",
      " JCIKICJ ",
      " HGIIIFH ",
      " HGGCFEL ",
      " DCCCCMN ",
      "         "
    ],
    "key": {
      "A": {
        "item": "draconicevolution:chaotic_energy_core"
      },
      "B": {
        "item": "mekamod:meka_ingot"
      },
      "C": {
        "item": "extendedcrafting:crystaltine_ingot"
      },
      "D": {
        "item": "draconicevolution:chaotic_core"
      },
      "E": {
        "item": "megacells:bulk_cell_component"
      },
      "F": {
        "item": "kubejs:activation_circuit_component_1"
      },
      "G": {
        "item": "kubejs:spatial_circuit_component_1"
      },
      "H": {
        "item": "mysticalexpansion:divinium_essence"
      },
      "I": {
        "item": "mekanism:ultimate_induction_provider"
      },
      "J": {
        "item": "draconicevolution:chaotic_capacitor"
      },
      "K": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_induction_cell",
        "count": 1,
        "nbt": "{mekData:{EnergyContainers:[]}}"
      },
      "L": {
        "item": "enderio:animal_token"
      },
      "M": {
        "item": "enderio:monster_token"
      },
      "N": {
        "item": "enderio:player_token"
      }
    },
    "result": {
      "item": '2x kubejs:advanced_engine'
    }
  }).id('mekaminers:crafting_custom/advanced_engine')
event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AB     BC",
      "BDEFFFGDB",
      " EHIJIKL ",
      " MNOPPNM ",
      " MSOROSM ",
      " MNPPONM ",
      " TKIJIHE ",
      "BDGFFFEDB",
      "UB     BV"
    ],
    "key": {
      "A": {
        "item": "mekanism:pellet_plutonium"
      },
      "B": {
        "item": "draconicevolution:chaotic_energy_core"
      },
      "C": {
        "item": "extendedcrafting:crystaltine_catalyst"
      },
      "D": {
        "item": "allthemodium:unobtainium_allthemodium_alloy_block"
      },
      "E": {
        "item": "botania:rune_pride"
      },
      "F": {
        "item": "allthemodium:unobtainium_vibranium_alloy_block"
      },
      "G": {
        "item": "mysticalagradditions:molten_supremium_bucket"
      },
      "H": {
        "item": "draconicevolution:chaotic_core"
      },
      "I": {
        "item": "kubejs:spatial_circuit_component_1"
      },
      "J": {
        "item": "draconicevolution:chaotic_capacitor"
      },
      "K": {
        "item": "megacells:bulk_cell_component"
      },
      "L": {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"allthemodium:vibranium\"}"
      },
      "M": {
        "item": "allthemodium:vibranium_allthemodium_alloy_block"
      },
      "N": {
        "item": "kubejs:activation_circuit_component_1"
      },
      "O": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_induction_cell",
        "count": 1,
        "nbt": "{mekData:{EnergyContainers:[]}}"
      },
      "P": {
        "item": "mekanism:ultimate_induction_provider"
      },
      "R": {
        "item": "kubejs:advanced_engine"
      },
      "S": {
        "item": 'extendedcrafting:crystaltine_ingot'
      },
      "T": {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"mysticalagradditions:supremium\"}"
      },
      "U": {
        "item": "mekanism:pellet_polonium"
      },
      "V": {
        "item": "mekanism:pellet_antimatter"
      }
    },
    "result": {
      "item": '3x kubejs:supreme_advanced_engine'
    }
  }).id('mekaminers:crafting_custom/supreme_advanced_engine')
event.custom({
    "type": "create:mechanical_crafting",
    "pattern": [
      "ABCDDEFGH",
      "BIJKFLCMN",
      "OJOPQRSD ",
      " DPTUVRD ",
      " DWUXUWE ",
      " YRZUTPE ",
      " YSRQPOJO",
      "aMCLFKJIB",
      "bcFYYECBA"
    ],
    "key": {
      "A": {
        "item": "kubejs:advanced_engine"
      },
      "B": {
        "item": "kubejs:activation_circuit_component_1"
      },
      "C": {
        "item": "kubejs:spatial_circuit"
      },
      "D": {
        "item": "allthemodium:vibranium_allthemodium_alloy_block"
      },
      "E": {
        "item": "allthemodium:unobtainium_allthemodium_alloy_block"
      },
      "F": {
        "item": "dreadsteel:dreadsteel_ingot"
      },
      "G": {
        "item": "mysticalagradditions:molten_imperium_bucket"
      },
      "H": {
        "item": "kubejs:started_mechanism"
      },
      "I": {
        "item": "botania:quartz_lavender"
      },
      "J": {
        "item": "mekamod:meka_ingot"
      },
      "K": {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"allthemodium:unobtainium\"}"
      },
      "L": {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"allthemodium:vibranium\"}"
      },
      "M": {
        "item": "botania:rune_pride"
      },
      "N": {
        "item": "allthemodium:molten_unobtainium_bucket"
      },
      "O": {
        "item": "kubejs:activation_circuit"
      },
      "P": {
        "item": "bloodmagic:etherealslate"
      },
      "Q": {
        "item": "extendedcrafting:crystaltine_catalyst"
      },
      "R": {
        "item": "mysticalexpansion:divinium_ingot"
      },
      "S": {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"mysticalagradditions:supremium\"}"
      },
      "T": {
        "item": "megacells:bulk_cell_component"
      },
      "U": {
        "item": "kubejs:supreme_advanced_engine"
      },
      "V": {
        "item": "evilcraft:promise_tier_3"
      },
      "W": {
        "item": "extendedcrafting:the_ultimate_catalyst"
      },
      "X": {
        "item": "kubejs:supreme_advanced_magic"
      },
      "Y": {
        "item": "allthemodium:unobtainium_vibranium_alloy_block"
      },
      "Z": {
        "item": "draconicevolution:chaotic_core"
      },
      "a": {
        "item": "allthemodium:molten_vibranium_bucket"
      },
      "b": {
        "item": "kubejs:initiating_mechanism"
      },
      "c": {
        "item": "mysticalagradditions:molten_supremium_bucket"
      }
    },
    "result": {
      "item": '2x kubejs:supreme_advanced_alchemy_of_machines'
    }
  }).id('mekaminers:create_final_age/supreme_advanced_alchemy_of_machines')
event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": 'allthemodium:vibranium_allthemodium_alloy_block'
      },
      {
        "item": 'bloodmagic:etherealslate'
      },
      {
        "item": 'ars_elemental:mark_of_mastery'
      },
      {
        "item": 'occultism:soul_gem'
      },
      {
        "item": 'irons_spellbooks:lightning_upgrade_orb'
      },
      {
        "item": 'reliquary:midas_touchstone'
      },
      {
        "item": 'allthemodium:unobtainium_vibranium_alloy_block'
      },
      {
        "item": 'reliquary:phoenix_down'
      },
      {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"mysticalagradditions:supremium\"}"
      },
      {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"allthemodium:unobtainium\"}"
      }
    ],
    "mana": 1500000,
    "output": {
      "item": '4x dreadsteel:dreadsteel_ingot'
    }
  }).id('mekaminers:crafting_custom/dreadsteel_ingot')
  event.custom({
    "type": "bloodmagic:altar",
    "altarSyphon": 20000,
    "consumptionRate": 50,
    "drainRate": 100,
    "input": {
      "item": 'botania:quartz_mana'
    },
    "output": {
      "item": '3x botania:quartz_red'
    },
    "upgradeLevel": 2
  }).id('mekaminers:crafting_custom/quartz_red')
  event.remove({output: "minecraft:kjs/botania_quartz_dark"})
  event.remove({output:  'mekamod:items/meka_ingot_from_blasting'})
  event.remove({output:  'mekamod:items/meka_ingot_from_smelting'})
  event.remove({output:  'enderio:smelting/mekamod/items/meka_ingot_from_smelting'})
  event.remove({output:  'thermal:furnace_1700225056'})
  event.custom({
    "type": "enderio:slicing",
    "energy": 200000,
    "inputs": [
      {
        "item": 'botania:quartz_sunny'
      },
      {
        "item": 'mekanism:pellet_polonium'
      },
      {
        "item": 'allthemodium:vibranium_shard'
      },
      {
        "item": 'irons_spellbooks:evocation_upgrade_orb'
      },
      {
        "item": 'enderio:vibrant_gear'
      },
      {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"allthemodium:vibranium\"}"
      }
    ],
    "output": {
      "item": '3x botania:quartz_elven'
    }
  }).id('mekaminers:crafting_custom/quartz_elven')
  event.custom({
    "type": "enderio:slicing",
    "energy": 200000,
    "inputs": [
      {
        "item": 'kubejs:activation_circuit_component_1'
      },
      {
        "item": 'mysticalexpansion:divinium_ingot'
      },
      {
        "item": 'mekanism:pellet_polonium'
      },
      {
        "item": 'kubejs:initiating_mechanism'
      },
      {
        "item": 'allthemodium:unobtainium_allthemodium_alloy_block'
      },
      {
        "item": 'botania:rune_pride'
      }
    ],
    "output": {
      "item": '2x kubejs:activation_circuit_component_2'
    }
  }).id('mekaminers:crafting_custom/activation_circuit_component_2')
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "   AAA   ",
      "  ABCDA  ",
      " ACCECDA ",
      " ACEFECA ",
      " ADCECBA ",
      "  ADCCA  ",
      "   AAA   ",
      "         "
    ],
    "key": {
      "A": {
        "item": "mysticalagradditions:insanium_essence"
      },
      "B": {
        "item": "mysticalagradditions:molten_soulium_bucket"
      },
      "C": {
        "item": "extendedcrafting:enhanced_redstone_ingot"
      },
      "D": {
        "item": "extendedcrafting:enhanced_redstone_catalyst"
      },
      "E": {
        "item": "draconicevolution:wyvern_energy_core"
      },
      "F": {
        "item": "mysticalagriculture:master_infusion_crystal"
      }
    },
    "result": {
      "item": 'mysticalexpansion:extremium_essence'
    }
  }).id('mekaminers:crafting_custom/extremium_essence')
  event.custom({
    "type": "bloodmagic:altar",
    "altarSyphon": 150000,
    "consumptionRate": 500,
    "drainRate": 100,
    "input": {
      "item": 'mysticalexpansion:extremium_essence'
    },
    "output": {
      "item": 'mysticalexpansion:extremium_ingot'
    },
    "upgradeLevel": 4
  }).id('mekaminers:crafting_custom/extremium_ingot')
  event.custom({
    "type": "eidolon:worktable",
    "pattern": [
      " b ",
      "dca",
      " e "
    ],
    "reagents": "h t ",
    "key": {
      "b": {
        "item": 'enderio:guardian_diode'
      },
      "a": {
        "item": 'enderio:vibrant_gear'
      },
      "c": {
        "item": 'pneumaticcraft:plastic'
      },
      "d": {
        "item": 'enderio:octadic_capacitor'
      },
      "e": {
        "item": 'mekanism:ultimate_control_circuit'
      },
      "t": {
        "item": 'mysticalagradditions:insanium_ingot'
      },
      "h": {
        "item": 'evilcraft:promise_tier_3'
      }
    },
    "result": {
      "item": 'kubejs:start_mechanism'
    }
  }).id('mekaminers:crafting_custom/start_mechanism')
  event.custom({
  "type": "powah:energizing",
  "ingredients": [
    {"item": 'botania:gaia_ingot'},
    {"item": 'kubejs:start_mechanism'},
    {"item": 'mekanism:ultimate_control_circuit'},
    {"item": 'bloodmagic:strong_tau'},
    {"item": 'enderio:player_token'}
  ],
  "energy": 15000000,
  "result": {
    "item": 'kubejs:started_mechanism'
  }
  }).id('mekaminers:crafting_custom/started_mechanism')
  event.custom({
    "type": "occultism:ritual",
    "ritual_type": "occultism:craft_miner_spirit",
    "activation_item": {
      "item": 'mysticalexpansion:etherium_essence'
    },
    "pentacle_id": "occultism:craft_marid",
    "duration": 3,
    "ritual_dummy": {
      "item": "occultism:ritual_dummy/craft_miner_marid_master"
    },
    "ingredients": [
      {
        "item": 'botania:gaia_ingot'
      },
      {
        "item": 'powah:crystal_nitro'
      },
      {
        "item": 'allthemodium:piglich_heart'
      },
      {
        "item": 'kubejs:started_mechanism'
      },
      {
        "item": 'allthemodium:unobtainium_allthemodium_alloy_block'
      },
      {
        "item": 'allthemodium:unobtainium_vibranium_alloy_block'
      },
      {
        "item": 'allthemodium:vibranium_allthemodium_alloy_block'
      }
    ],
    "result": {
      "type": "forge:nbt",
      "item": "mysticalexpansion:divinium_essence",
      "count": 2,
      "nbt": "pothatto"
    }
  }).id('mekaminers:crafting_custom/divinium_essence')
  event.custom({
    "type": "enderio:slicing",
    "energy": 200000,
    "inputs": [
      {
        "item": 'allthemodium:unobtainium_vibranium_alloy_block'
      },
      {
        "item": 'kubejs:initiated_mechanism'
      },
      {
        "item": 'kubejs:spatial_circuit_component_1'
      },
      {
        "item": 'evilcraft:promise_tier_3'
      },
      {
        "item": 'mysticalexpansion:etherium_ingot'
      },
      {
        "item": 'draconicevolution:awakened_draconium_ingot'
      }
    ],
    "output": {
      "item": '2x kubejs:spatial_circuit_component_2'
    }
  }).id('mekaminers:crafting_custom/spatial_circuit_component_2')
  event.custom({
    "type": "eidolon:worktable",
    "pattern": [
      " b ",
      "dca",
      " e "
    ],
    "reagents": "h t ",
    "key": {
      "b": {
        "item": 'botania:gaia_ingot'
      },
      "a": {
        "item": 'draconicevolution:awakened_core'
      },
      "c": {
        "item": 'mysticalexpansion:divinium_essence'
      },
      "d": {
        "item": 'mysticalexpansion:divinium_ingot'
      },
      "e": {
        "item": 'mekanism:ultimate_control_circuit'
      },
      "t": {
        "item": 'botania:rune_wrath'
      },
      "h": {
        "item": 'kubejs:start_mechanism'
      }
    },
    "result": {
      "item": '4x create:precision_mechanism'
    }
  }).id('mekaminers:crafting_custom/precision_mechanism')
  event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": 'create:precision_mechanism'
  },
  "ingredients": [
    {
      "item": 'allthemodium:unobtainium_vibranium_alloy_block'
    },
    {
      "item": 'mysticalexpansion:divinium_ingot'
    },
    {
      "item": 'kubejs:start_mechanism'
    },
    {
      "item": 'botania:gaia_ingot'
    },
    {
      "item": 'draconicevolution:awakened_core'
    },
    {
      "item": 'powah:capacitor_nitro'
    },
    {
      "item": 'mysticalagradditions:molten_supremium_bucket'
    },
    {
      "item": 'kubejs:started_mechanism'
    }
  ],
  "result": {
    "item": '2x kubejs:initiated_mechanism'
  },
  "tier": "CHAOTIC",
  "total_energy": 3200000
  }).id('mekaminers:custom_custom/initiated_mechanism')
  event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": 'kubejs:initiating_mechanism'
  },
  "ingredients": [
    {
      "item": 'kubejs:initiated_mechanism'
    },
    {
      "item": 'kubejs:start_mechanism'
    },
    {
      "item": 'mysticalagradditions:molten_supremium_bucket'
    },
    {
      "item": 'megacells:cell_component_4m'
    },
    {
      "item": 'mysticalexpansion:divinium_ingot'
    },
    {
      "item": 'kubejs:started_mechanism'
    },
    {
      "item": 'draconicevolution:awakened_core'
    },
    {
      "item": 'mekanism:pellet_plutonium'
    },
    {
      "item": 'extendedcrafting:crystaltine_ingot'
    },
    {
      "item": 'industrialforegoing:machine_frame_supreme'
    }
  ],
  "result": {
    "item": '3x kubejs:activation_circuit_component_1'
  },
  "tier": "CHAOTIC",
  "total_energy": 3200000
  }).id('mekaminers:custom_custom/activation_circuit_component_1')
  event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": 'mysticalexpansion:etherium_ingot'
  },
  "ingredients": [
    {
      "item": 'mysticalexpansion:divinium_essence'
    },
    {
      "item": 'mysticalexpansion:divinium_essence'
    },
    {
      "item": 'evilcraft:promise_tier_2'
    },
    {
      "item": 'bigreactors:ridiculite_ingot'
    },
    {
      "item": 'powah:crystal_nitro'
    },
    {
      "item": 'allthemodium:unobtainium_ingot'
    },
    {
      "item": 'mysticalexpansion:divinium_essence'
    },
    {
      "item": 'mysticalexpansion:divinium_essence'
    }
  ],
  "result": {
    "item": '4x mysticalexpansion:divinium_ingot'
  },
  "tier": "DRACONIC",
  "total_energy": 2100000
  }).id('mekaminers:custom_custom/divinium_ingot')
  event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": 'mekamod:meka_ingot'
  },
  "ingredients": [
    {
      "item": 'extendedcrafting:crystaltine_ingot'
    },
    {
      "item": 'kubejs:spatial_circuit_component_1'
    },
    {
      "item": 'botania:rune_pride'
    },
    {
      "item": 'kubejs:supreme_advanced_engine'
    },
    {
      "item": 'kubejs:spatial_circuit'
    },
    {
      "item": 'mysticalagriculture:awakened_supremium_essence'
    },
    {
      "item": 'draconicevolution:chaotic_core'
    },
    {
      "item": 'kubejs:activation_circuit_component_1'
    },
    {
      "item": 'kubejs:supreme_advanced_magic'
    },
    {
      "item": 'kubejs:activation_circuit'
    }
  ],
  "result": {
    "item": 'extendedcrafting:the_ultimate_ingot'
  },
  "tier": "DRACONIC",
  "total_energy": 12100000
  }).id('mekaminers:custom_custom/the_ultimate_ingot')
  event.custom({
    "type": "occultism:ritual",
    "ritual_type": "occultism:summon",
    "activation_item": {
      "item": 'dreadsteel:dreadsteel_ingot'
    },
    "pentacle_id": "occultism:possess_afrit",
    "duration": 10,
    "entity_to_sacrifice": {
      "tag": "forge:zombies",
      "display_name": "ritual.occultism.sacrifice.zombie"
    },
    "entity_to_summon": "minecraft:giant",
    "ritual_dummy": {
      "item": "occultism:ritual_dummy/possess_hoglin"
    },
    "ingredients": [
      {
        "item": 'botania:quartz_lavender'
      },
      {
        "item": 'mekamod:meka_ingot'
      },
      {
        "item": 'extendedcrafting:crystaltine_catalyst'
      },
      {
        "item": 'botania:rune_pride'
      },
      {
        "item": 'mysticalagriculture:awakened_supremium_essence'
      },
      {
        "item": 'mysticalagradditions:creative_essence'
      },
      {
        "item": 'mythicbotany:alfsteel_ingot'
      },
      {
        "item": 'mythicbotany:gjallar_horn_full'
      }
    ],
    "result": {
      "item": 'kubejs:supreme_advanced_magic'
    }
  }).id('mekaminers:error/giant_protector_of_supreme_advanced_magic')
  event.remove({id: "industrialforegoing:dissolution_chamber/infinity_drill"})
  event.custom({
    "type": "industrialforegoing:dissolution_chamber",
    "input": [
      {
        "item": 'extendedcrafting:crystaltine_ingot'
      },
      {
        "item": 'kubejs:activation_circuit_component_1'
      },
      {
        "item": 'kubejs:spatial_circuit_component_1'
      },
      {
        "item": 'allthemodium:unobtainium_pickaxe'
      },
      {
        "item": 'mekanism:ultimate_induction_cell'
      },
      {
        "item": "industrialforegoing:machine_frame_supreme"
      },
      {
        "item": 'pneumaticcraft:module_expansion_card'
      },
      {
        "item": 'pneumaticcraft:plastic'
      }
    ],
    "inputFluid": "{Amount:2000,FluidName:\"allthemodium:molten_unobtainium\"}",
    "output": {
      "count": 1,
      "item": "industrialforegoing:infinity_drill",
      "nbt": "{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
    },
    "processingTime": 400
  }).id('mekaminers:custom_custom/infinity_drill')
  event.remove({id: "industrialforegoing:dissolution_chamber/infinity_saw"})
  event.remove({id: "industrialforegoing:kjs/d7kr810lwxajb3oybsech9qx1"})
  event.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": 'extendedcrafting:crystaltine_ingot'
    },
    {
      "item": 'kubejs:activation_circuit_component_1'
    },
    {
      "item": 'kubejs:spatial_circuit_component_1'
    },
    {
      "item": 'allthemodium:unobtainium_axe'
    },
    {
      "item": 'mekanism:ultimate_induction_cell'
    },
    {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    {
      "item": 'pneumaticcraft:module_expansion_card'
    },
    {
      "item": 'pneumaticcraft:plastic'
    }
  ],
  "inputFluid": "{Amount:2000,FluidName:\"allthemodium:molten_vibranium\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:infinity_saw",
    "nbt": "{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
  },
  "processingTime": 4000
}).id('mekaminers:custom_custom/infinity_saw')
event.remove({id: "industrialforegoing:dissolution_chamber/infinity_hammer"})
event.remove({id: "industrialforegoing:dissolution_chamber/infinity_trident"})
event.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": 'extendedcrafting:crystaltine_ingot'
    },
    {
      "item": 'kubejs:activation_circuit_component_1'
    },
    {
      "item": 'kubejs:spatial_circuit_component_1'
    },
    {
      "type": "forge:nbt",
      "item": "minecraft:trident",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    {
      "item": 'mekanism:ultimate_induction_cell'
    },
    {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    {
      "item": 'pneumaticcraft:module_expansion_card'
    },
    {
      "item": 'pneumaticcraft:plastic'
    }
  ],
  "inputFluid": "{Amount:2000,FluidName:\"mysticalagradditions:molten_imperium\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:infinity_trident",
    "nbt": "{CanCharge:1b,Channeling:0b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Loyalty:0,Riptide:0,Selected:\"POOR\",Special:0b}"
  },
  "processingTime": 400
}).id('mekaminers:custom_custom/infinity_trident')
event.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": 'extendedcrafting:crystaltine_ingot'
    },
    {
      "item": 'kubejs:activation_circuit_component_1'
    },
    {
      "item": 'kubejs:spatial_circuit_component_1'
    },
    {
      "item": 'allthemodium:unobtainium_sword'
    },
    {
      "item": 'mekanism:ultimate_induction_cell'
    },
    {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    {
      "item": 'pneumaticcraft:module_expansion_card'
    },
    {
      "item": 'pneumaticcraft:plastic'
    }
  ],
  "inputFluid": "{Amount:2000,FluidName:\"mysticalagradditions:molten_supremium\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:infinity_hammer",
    "nbt": "{Beheading:0,CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
  },
  "processingTime": 400
}).id('mekaminers:custom_custom/infinity_hammer')
event.remove({id: "angelring:diamond_ring"})
event.remove({output: "mekanism:module_gravitational_modulating_unit"})
event.remove({id: "mysticalagriculture:augment/flight"})
event.remove({id: "mekaweapons:module_gravity_dampener_unit"})
event.remove({id: "mysticalexpansion:divinium_essence_uncraft"})
event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "C": {
      "item": "mysticalexpansion:divinium_essence"
    }
  },
  "pattern": [
    "C  ",
    "   ",
    "   "
  ],
  "result": {
    "item": "mysticalexpansion:divinium_essence"
  }
}).id('mekaminers:custom_custom/divinium_essence_reset_nbt')
})
