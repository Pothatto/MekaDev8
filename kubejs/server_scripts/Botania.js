ServerEvents.recipes(event =>{ 
//The ultimate ingot
event.custom(
  {"type": "botania:mana_infusion",
  "input": {"item": "allthemodium:vibranium_allthemodium_alloy_dust"},
  "mana": 100000,
  "output": {"amount": 1,"item": "allthemodium:vibranium_allthemodium_alloy_ingot"}
}).id('mekaminers:create_age_4/vibranium_allthemodium_alloy_ingot')
//Vibranium ingot
event.custom(
  {"type": "botania:mana_infusion",
  "input": {"item": "allthemodium:unobtainium_allthemodium_alloy_dust"},
  "mana": 100000,
  "output": {"amount": 1,"item": "allthemodium:unobtainium_allthemodium_alloy_ingot"}
}).id('mekaminers:create_age_4/unobtainium_allthemodium_alloy_ingot')
//Unobtainium ingot
event.custom(
  {"type": "botania:mana_infusion",
  "input": {"item": "allthemodium:unobtainium_vibranium_alloy_dust"},
  "mana": 100000,
  "output": {"amount": 1,"item": "allthemodium:unobtainium_vibranium_alloy_ingot"}
}).id('mekaminers:create_age_4/unobtainium_vibranium_alloy_ingot')
//Unobitainium-Vibranium ingot
event.remove({output:"extendedcrafting:ultimate_singularity"})
event.custom(
  {
    "type": "create:mechanical_crafting",
    "pattern": [
      "ABCCDCCBA",
      "BEFGHIIJB",
      "CFKLMNOGC",
      "CKLPQPRSC",
      "THMQUQMHD",
      "CVWPQPLGC",
      "CGXYMLKFC",
      "BJIIHKFEB",
      "ABCCTCCBA"
    ],
    "key": {
      "A": {
        "item": "draconicevolution:chaotic_core"
      },
      "B": {
        "item": "dreadsteel:dreadsteel_ingot"
      },
      "C": {
        "item": "allthemodium:unobtainium_allthemodium_alloy_block"
      },
      "D": {
        "item": "allthemodium:unobtainium_vibranium_alloy_block"
      },
      "E": {
        "item": "kubejs:advanced_engine"
      },
      "F": {
        "item": "kubejs:spatial_circuit"
      },
      "G": {
        "item": "botania:quartz_lavender"
      },
      "H": {
        "item": "bloodmagic:etherealslate"
      },
      "I": {
        "item": "kubejs:activation_circuit"
      },
      "J": {
        "item": "extendedcrafting:the_ultimate_catalyst"
      },
      "K": {
        "item": "extendedcrafting:crystaltine_catalyst"
      },
      "L": {
        "item": "megacells:bulk_cell_component"
      },
      "M": {
        "item": "kubejs:supreme_advanced_magic"
      },
      "N": {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"allthemodium:vibranium\"}"
      },
      "O": {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"allthemodium:unobtainium\"}"
      },
      "P": {
        "item": "kubejs:supreme_advanced_engine"
      },
      "Q": {
        "item": "mysticalagradditions:creative_essence"
      },
      "R": {
        "item": "mysticalagradditions:molten_imperium_bucket"
      },
      "S": {
        "item": "allthemodium:molten_unobtainium_bucket"
      },
      "T": {
        "item": "allthemodium:vibranium_allthemodium_alloy_block"
      },
      "U": {
        "item": "kubejs:supreme_advanced_alchemy_of_machines"
      },
      "V": {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"mysticalagradditions:supremium\"}"
      },
      "W": {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"allthemodium:allthemodium\"}"
      },
      "X": {
        "item": "mysticalagradditions:molten_supremium_bucket"
      },
      "Y": {
        "item": "allthemodium:molten_vibranium_bucket"
      }
    },
    "result": {
      "item": "extendedcrafting:ultimate_singularity"
    }
  }).id('mekaminers:create_age_4/ultimate_singularity')
event.remove({output:
"extendedcrafting:crystaltine_ingot"
})
event.remove({output: "draconicevolution:basic_crafting_injector"})
event.custom({
"type": "powah:energizing",
"ingredients": [
  {"item": 'allthemodium:vibranium_allthemodium_alloy_ingot'},
  {"item": 'minecraft:iron_block'},
  {"item": 'mekamod:meka_ingot'},
  {"item": 'draconicevolution:draconium_core'},
  {"item": 'kubejs:start_mechanism'}
],
"energy": 50000000,
"result": {
  "item": "draconicevolution:basic_crafting_injector"
}
}).id('mekaminers:draconic_custom/basic_crafting_injector')
event.remove({output:"draconicevolution:wyvern_crafting_injector"})
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "item": "draconicevolution:basic_crafting_injector"
},
"ingredients": [
  {
    "item": "draconicevolution:wyvern_core"
  },
  {
    "item": "botania:mana_diamond"
  },
  {
    "item": "draconicevolution:draconium_core"
  },
  {
    "item": "botania:mana_diamond"
  },
  {
    "item": "draconicevolution:draconium_core"
  },
  {
    "item": "botania:mana_diamond"
  },
  {
    "tag": "forge:storage_blocks/draconium"
  },
  {
    "item": "kubejs:started_mechanism"
  }
],
"result": {
  "item": "draconicevolution:wyvern_crafting_injector"
},
"tier": "DRACONIUM",
"total_energy": 3200000
}).id('mekaminers:draconic_custom/wyvern_crafting_injector')
event.remove({output:"draconicevolution:awakened_crafting_injector"})
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "item": "draconicevolution:wyvern_crafting_injector"
},
"ingredients": [
  {
    "item": "botania:mana_diamond"
  },
  {
    "item": "botania:mana_diamond"
  },
  {
    "item": "draconicevolution:wyvern_core"
  },
  {
    "tag": "forge:storage_blocks/draconium_awakened"
  },
  {
    "item": "draconicevolution:wyvern_core"
  },
  {
    "item": "botania:mana_diamond"
  },
  {
    "item": "industrialforegoing:machine_frame_supreme"
  }
],
"result": {
  "item": "draconicevolution:awakened_crafting_injector"
},
"tier": "WYVERN",
"total_energy": 9560000
}).id('mekaminers:draconic_custom/awakened_crafting_injector')
event.remove({output:"draconicevolution:chaotic_crafting_injector"})
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "item": "draconicevolution:awakened_crafting_injector"
},
"ingredients": [
  {
    "item": "botania:mana_diamond"
  },
  {
    "item": "kubejs:spatial_circuit_component_1"
  },
  {
    "item": "draconicevolution:large_chaos_frag"
  },
  {
    "item": "draconicevolution:large_chaos_frag"
  },
  {
    "item": "draconicevolution:large_chaos_frag"
  },
  {
    "item": "draconicevolution:large_chaos_frag"
  },
  {
    "item": "minecraft:dragon_egg"
  },
  {
    "item": "botania:mana_diamond"
  },
  {
    "item": "botania:mana_diamond"
  }
],
"result": {
  "item": "draconicevolution:chaotic_crafting_injector"
},
"tier": "DRACONIC",
"total_energy": 20000000
}).id('mekaminers:draconic_custom/chaotic_crafting_injector')
event.remove({output:"draconicevolution:celestial_manipulator"})
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "item": "draconicevolution:wyvern_core"
},
"ingredients": [
  {
    "item": 'minecraft:clock'
  },
  {
    "item": 'kubejs:activation_circuit_component_1'
  },
  {
    "item": "draconicevolution:large_chaos_frag"
  },
  {
    "item": "draconicevolution:large_chaos_frag"
  },
  {
    "item": "minecraft:dragon_egg"
  },
  {
    "item": 'mekamod:meka_ingot'
  },
  {
    "item": 'mekamod:meka_ingot'
  }
],
"result": {
  "item": "draconicevolution:celestial_manipulator"
},
"tier": "DRACONIC",
"total_energy": 2000000
}).id('mekaminers:draconic_custom/celestial_manipulator')
event.remove({output:"draconicevolution:advanced_dislocator"})
event.remove({output:"draconicevolution:chaotic_chestpiece"})
event.remove({output:"draconicevolution:chaotic_hoe"})
event.remove({output:"draconicevolution:chaotic_pickaxe"})
event.remove({output:"draconicevolution:chaotic_shovel"})
event.remove({output:"draconicevolution:chaotic_sword"})
event.remove({output:"draconicevolution:chaotic_bow"})
event.remove({output:"draconicevolution:chaotic_staff_alt"})
event.remove({output:"draconicevolution:awakened_core"})
event.remove({output:"draconicevolution:crafting_core"})
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "item": "draconicevolution:draconic_bow"
},
"ingredients": [
  {
    "item": 'mekamod:meka_ingot'
  },
  {
    "item": "draconicevolution:chaotic_core"
  },
  {
    "item": "mekaweapons:mekabow"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "item": "draconicevolution:chaotic_energy_core"
  },
  {
    "item": 'mekamod:meka_ingot'
  }
],
"result": {
  "item": "draconicevolution:chaotic_bow"
},
"tier": "CHAOTIC",
"total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_bow')
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "type": "forge:nbt",
  "item": "mekamod:meka_chestplate",
  "count": 1,
  "nbt": "{Damage:0}"
},
"ingredients": [
  {
    "item": 'mekamod:meka_ingot'
  },
  {
    "item": "draconicevolution:chaotic_core"
  },
  {
    "item": "draconicevolution:draconic_chestpiece"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "item": "draconicevolution:chaotic_energy_core"
  },
  {
    "item": 'mekamod:meka_ingot'
  }
],
"result": {
  "item": "draconicevolution:chaotic_chestpiece"
},
"tier": "CHAOTIC",
"total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_chestpiece')
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "type": "forge:nbt",
  "item": "mekamod:meka_hoe",
  "count": 1,
  "nbt": "{Damage:0}"
},
"ingredients": [
  {
    "item": 'mekamod:meka_ingot'
  },
  {
    "item": "draconicevolution:chaotic_core"
  },
  {
    "item": "draconicevolution:draconic_hoe"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "item": "draconicevolution:chaotic_energy_core"
  },
  {
    "item": 'mekamod:meka_ingot'
  }
],
"result": {
  "item": "draconicevolution:chaotic_hoe"
},
"tier": "CHAOTIC",
"total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_hoe')
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "type": "forge:nbt",
  "item": "mekamod:meka_pickaxe",
  "count": 1,
  "nbt": "{Damage:0}"
},
"ingredients": [
  {
    "item": 'mekamod:meka_ingot'
  },
  {
    "item": "draconicevolution:chaotic_core"
  },
  {
    "item": "draconicevolution:draconic_pickaxe"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "item": "draconicevolution:chaotic_energy_core"
  },
  {
    "item": 'mekamod:meka_ingot'
  }
],
"result": {
  "item": "draconicevolution:chaotic_pickaxe"
},
"tier": "CHAOTIC",
"total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_pickaxe')
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "type": "forge:nbt",
  "item": "mekamod:meka_shovel",
  "count": 1,
  "nbt": "{Damage:0}"
},
"ingredients": [
  {
    "item": 'mekamod:meka_ingot'
  },
  {
    "item": "draconicevolution:chaotic_core"
  },
  {
    "item": "draconicevolution:draconic_shovel"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "item": "draconicevolution:chaotic_energy_core"
  },
  {
    "item": 'mekamod:meka_ingot'
  }
],
"result": {
  "item": "draconicevolution:chaotic_shovel"
},
"tier": "CHAOTIC",
"total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_shovel')
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "type": "forge:nbt",
  "item": "mekamod:meka_paxel",
  "count": 1,
  "nbt": "{Damage:0}"
},
"ingredients": [
  {
    "item": "draconicevolution:medium_chaos_frag"
  },
  {
    "item": "draconicevolution:chaotic_core"
  },
  {
    "item": "draconicevolution:medium_chaos_frag"
  },
  {
    "item": "draconicevolution:chaotic_energy_core"
  },
  {
    "item": "draconicevolution:awakened_core"
  },
  {
    "item": "draconicevolution:draconic_staff"
  },
  {
    "item": "draconicevolution:large_chaos_frag"
  },
  {
    "item": "draconicevolution:chaotic_energy_core"
  },
  {
    "item": "draconicevolution:large_chaos_frag"
  },
  {
    "item": "draconicevolution:chaotic_energy_core"
  }
],
"result": {
  "item": "draconicevolution:chaotic_staff"
},
"tier": "CHAOTIC",
"total_energy": 1024000000
}).id('mekaminers:draconic_custom/chaotic_staff')
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "tag": "forge:nether_stars"
},
"ingredients": [
  {
    "item": "draconicevolution:wyvern_core"
  },
  {
    "item": "draconicevolution:wyvern_core"
  },
  {
    "item": "industrialforegoing:machine_frame_supreme"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "tag": "forge:ingots/draconium_awakened"
  },
  {
    "item": "mythicbotany:alfsteel_ingot"
  },
  {
    "item": "draconicevolution:wyvern_core"
  },
  {
    "item": "draconicevolution:wyvern_core"
  }
],
"result": {
  "item": "draconicevolution:awakened_core"
},
"tier": "WYVERN",
"total_energy": 1000000
}).id('mekaminers:draconic_custom/awakened_core')
event.custom({
"type": "draconicevolution:fusion_crafting",
"catalyst": {
  "item": "draconicevolution:dislocator"
},
"ingredients": [
  {
    "item": 'enderio:sentient_ender'
  },
  {
    "item": 'extendedcrafting:enhanced_ender_ingot'
  },
  {
    "tag": "forge:ender_pearls"
  },
  {
    "tag": "forge:ingots/draconium"
  },
  {
    "tag": "forge:ender_pearls"
  },
  {
    "tag": "forge:ingots/draconium"
  },
  {
    "item": "draconicevolution:wyvern_core"
  },
  {
    "tag": "forge:ingots/draconium"
  }
],
"result": {
  "item": "draconicevolution:advanced_dislocator"
},
"tier": "WYVERN",
"total_energy": 1000000
}).id('mekaminers:draconic_custom/advanced_dislocator')
event.custom({
"type": "powah:energizing",
"ingredients": [
  {"item": 'minecraft:crafting_table'},
  {"item": 'botania:mana_diamond'},
  {"item": 'mekamod:meka_ingot'},
  {"item": 'draconicevolution:draconium_core'},
  {"item": 'kubejs:start_mechanism'}
],
"energy": 25000000,
"result": {
  "item": "draconicevolution:crafting_core"
}
}).id('mekaminers:draconic_custom/crafting_core')
event.custom({
  "type": "botania:terra_plate",
  "ingredients": [
    {
      "item": 'evilcraft:piercing_vengeance_focus'
    },
    {
      "item": 'eidolon:crimson_gem'
    },
    {
      "item": 'botania:quartz_red'
    },
    {
      "type": "forge:nbt",
      "item": "occultism:chalk_gold",
      "count": 1,
      "nbt": "{Damage:0}"
    }
  ],
  "mana": 1000000,
  "result": {
    "item": '3x botania:quartz_blaze'
  }
}).id('mekaminers:crafting_custom/quartz_blaze')
event.remove({id: "minecraft:kjs/botania_quartz_dark"})
event.remove({id: "thermal:furnace_1787439461"})
event.custom({
  "type": "botania:petal_apothecary",
  "ingredients": [
    {
      "item": 'botania:terrasteel_ingot'
    },
    {
      "item": 'minecraft:nether_star'
    },
    {
      "item": 'extendedcrafting:flux_star'
    },
    {
      "item": 'extendedcrafting:ender_star'
    },
    {
      "item": 'minecraft:netherite_block'
    }
  ],
  "output": {
    "item": '3x botania:quartz_dark'
  },
  "reagent": {
    "tag": "botania:seed_apothecary_reagent"
  }
}).id('mekaminers:crafting_custom/quartz_dark')
event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": 'occultism:awakened_feather'
      },
      {
        "item": 'allthemodium:allthemodium_crystal'
      },
      {
        "item": 'botania:quartz_blaze'
      },
      {
        "type": "forge:nbt",
        "item": "tconstruct:repair_kit",
        "count": 1,
        "nbt": "{Material:\"allthemodium:allthemodium\"}"
      }
    ],
    "mana": 10000,
    "output": {
      "item": '3x botania:quartz_sunny'
    }
  }).id('mekaminers:crafting_custom/quartz_sunny')
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
        "item": 'draconicevolution:awakened_draconium_ingot'
      },
      "ingredients": [
        {
          "item": 'botania:quartz_sunny'
        },
        {
          "type": "forge:nbt",
          "item": "tconstruct:repair_kit",
          "count": 1,
          "nbt": "{Material:\"mysticalagradditions:supremium\"}"
        },
        {
          "item": 'mysticalagriculture:awakened_supremium_essence'
        },
        {
          "item": 'mysticalexpansion:divinium_ingot'
        }
      ],
      "result": {
        "item": 'mekamod:meka_ingot'
      }
  }).id('mekaminers:crafing_custom/meka_ingot')
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 16711821,
    "group": "infuser",
    "ingredients": [
      {
        "item": 'draconicevolution:wyvern_core'
      },
      {
        "item": 'botania:life_essence'
      },
      {
        "item": 'mysticalexpansion:extremium_essence'
      },
      {
        "item": 'mysticalagriculture:master_infusion_crystal'
      }
    ],
    "mana": 1500000,
    "output": {
      "count": 1,
      "item": 'mysticalexpansion:etherium_essence'
    },
    "toColor": 16750080
  }).id('mekaminers:crafing_custom/etherium_essence')
  event.custom({
      "type": "botania:runic_altar",
      "ingredients": [
        {
          "item": 'kubejs:start_mechanism'
        },
        {
          "item": 'kubejs:initiated_mechanism'
        },
        {
          "item": 'create:precision_mechanism'
        },
        {
          "item": 'kubejs:started_mechanism'
        },
        {
          "item": 'evilcraft:promise_efficiency_0'
        },
        {
          "item": 'allthemodium:unobtainium_vibranium_alloy_block'
        }
      ],
      "mana": 1000000,
      "output": {
        "item": 'kubejs:initiating_mechanism'
      }
    }).id('mekaminers:crafting_custom/initiating_mechanism')
})
