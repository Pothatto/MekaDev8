ServerEvents.recipes(event =>{
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "tag": "forge:dusts/redstone"
          },
          {
            "tag": "forge:dusts/redstone"
          },
          {
            "tag": "forge:glass_panes/colorless"
          },
          {
            "tag": "forge:glass_panes/colorless"
          },
          {
            "tag": "forge:gears/netherite"
          },
          {
            "tag": "forge:gears/netherite"
          },
          {
            "item": "minecraft:sugar"
          },
          {
            "item": "minecraft:sugar"
          }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
          "count": 1,
          "item": "mifa:speed_addon_3",
          "nbt": "{TitaniumAugment:{Speed:4.0f}}"
        },
        "processingTime": 200
      }).id("mekaminers:custom_update/speed_addon_3")
    event.custom({
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:dusts/redstone"
        },
        {
          "tag": "forge:dusts/redstone"
        },
        {
          "tag": "forge:glass_panes/colorless"
        },
        {
          "tag": "forge:glass_panes/colorless"
        },
        {
          "tag": "forge:gears/netherite"
        },
        {
          "tag": "forge:gears/netherite"
        },
        {
          "tag": "forge:rods/blaze"
        },
        {
          "tag": "forge:rods/blaze"
        }
      ],
      "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
      "output": {
        "count": 1,
        "item": "mifa:efficiency_addon_3",
        "nbt": "{TitaniumAugment:{Efficiency:0.7f}}"
      },
      "processingTime": 200
    }).id("mekaminers:custom_update/efficiency_addon_3")
    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "BCD",
        "AAA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:crystaltine_nugget"
        },
        "B": {
          "item": "create_new_age:magnetite_block"
        },
        "C": {
          "item": "kubejs:start_casing"
        },
        "D": {
          "item": "create:shaft"
        }
      },
      "result": {
        "item": "create_new_age:basic_motor"
      }
    }).id('mekaminers:custom_custom/basic_motor')
    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "allthemodium:vibranium_allthemodium_alloy_ingot"
        },
        "B": {
          "item": "kubejs:spatial_circuit_component_1"
        },
        "C": {
          "item": "create:cogwheel"
        },
        "D": {
          "item": "ars_technica:calibrated_precision_mechanism"
        }
      },
      "result": {
        "item": "ars_technica:source_engine"
      }
    }).id('mekaminers:custom_custom/source_engine')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        "       ",
        "   A   ",
        "  ABA  ",
        " ACDCA ",
        "  AEA  ",
        "   F   ",
        "       "
      ],
      "key": {
        "A": {
          "item": "create:brass_casing"
        },
        "B": {
          "item": "kubejs:spatial_circuit_component_1"
        },
        "C": {
          "item": "ars_technica:calibrated_precision_mechanism"
        },
        "D": {
          "item": "kubejs:advanced_engine"
        },
        "E": {
          "item": "create:cogwheel"
        },
        "F": {
          "item": "create:shaft"
        }
      },
      "result": {
        "item": "createaddition:electric_motor"
      }
    }).id('mekaminers:custom_custom/electric_motor')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        "       ",
        "       ",
        "   A   ",
        "   B   ",
        "  CDE  ",
        "   F   ",
        "   G   "
      ],
      "key": {
        "A": {
          "item": "evilcraft:promise_tier_3"
        },
        "B": {
          "item": "enderio:guardian_diode"
        },
        "C": {
          "item": "enderio:octadic_capacitor"
        },
        "D": {
          "item": "pneumaticcraft:plastic"
        },
        "E": {
          "item": "enderio:vibrant_gear"
        },
        "F": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "G": {
          "item": "mysticalagradditions:insanium_ingot"
        }
      },
      "result": {
        "item": "kubejs:start_mechanism"
      }
    }).id('mekaminers:custom_mechanical/start_mechanism')
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        "       ",
        "       ",
        "   A   ",
        "   B   ",
        "  CDE  ",
        "   F   ",
        "   G   "
      ],
      "key": {
        "A": {
          "item": "kubejs:start_mechanism"
        },
        "B": {
          "item": "botania:gaia_ingot"
        },
        "C": {
          "item": "mysticalexpansion:divinium_ingot"
        },
        "D": {
          "item": "mysticalexpansion:divinium_essence"
        },
        "E": {
          "item": "draconicevolution:awakened_core"
        },
        "F": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "G": {
          "item": "botania:rune_wrath"
        }
      },
      "result": {
        "item": "create:precision_mechanism"
      }
    }).id('mekaminers:custom_mechanical/precision_mechanism')
    event.custom({
      "type": "enderio:slicing",
      "energy": 200000,
      "inputs": [
        {
          "item": 'minecraft:zombie_spawn_egg'
        },
        {
          "item": 'enderio:dark_steel_grinding_ball'
        },
        {
          "item": 'minecraft:skeleton_spawn_egg'
        },
        {
          "item": 'enderio:z_logic_controller'
        },
        {
          "item": 'hostilenetworks:overworld_prediction'
        },
        {
          "item": 'enderio:skeletal_contractor'
        }
      ],
      "output": {
        "item": 'enderio:player_token'
      }
    }).id('mekaminers:custom/player_token')
    event.custom({
      "type": "botania:terra_plate",
      "ingredients": [
        {
          "item": "botania:dragonstone_block"
        },
        {
          "item": "botania:elementium_block"
        },
        {
          "item": "botania:pixie_dust"
        }
      ],
      "mana": 2000000,
      "result": {
        "amount": 7,
        "item": "mythicbotany:alfsteel_ingot"
      }
    }).id('mekaminers:custom/alfsteel_ingot')
    event.custom({
      "type": "botanypots:crop",
      "seed": {
        "item": 'mysticalexpansion:divinium_essence'
      },
      "categories": [
        "divinium"
      ],
      "growthTicks": 6200,
      "display": {
        "block": 'mysticalexpansion:divinium_block'
      },
      "drops": [
        {
          "chance": 1.00,
          "output": {
            "item": 'mysticalexpansion:divinium_essence'
          },
          "minRolls": 2,
          "maxRolls": 3
        }
      ]
    }).id('mekaminers:crafing_custom/botanypots_essence_divinium')
    event.custom({
      "type": "botanypots:soil",
      "input": {
        "item": "mysticalexpansion:divinium_block"
      },
      "display": {
        "block": "mysticalexpansion:divinium_block"
      },
      "categories": [
        "divinium"
      ],
      "growthModifier": 1
    })
    event.custom({"type":"crafting_shaped",
      "pattern":
      [
        "S S",
        "SPS",
        " S "
      ]
      ,"key":{
        "S":{"item":"minecraft:terracotta"},
        "P":{"item":"industrialforegoing:hydroponic_bed"}
      },
      "result":
      {
        "item":"botanypots:terracotta_hopper_botany_pot",
        "count":1}
    }).id('mekaminers:crafing_custom/botanypots_terracotta_hopper_botany_pot')
    event.custom({"type":"crafting_shaped",
      "pattern":
      [
        "SHS",
        "SPS",
        " S "
      ]
      ,"key":{
        "S":{"item":"minecraft:terracotta"},
        "P":{"item":"botanypots:terracotta_hopper_botany_pot"},
        "H":{"item":"kubejs:start_mechanism"}
      },
      "result":
      {
        "item":"botanypotstiers:elite_terracotta_hopper_botany_pot",
        "count":1}
    }).id('mekaminers:crafing_custom/botanypotstiers_elite_terracotta_hopper_botany_pot')
    event.custom({"type":"crafting_shaped",
      "pattern":
      [
        "SHS",
        "SPS",
        " S "
      ]
      ,"key":{
        "S":{"item":"minecraft:terracotta"},
        "P":{"item":"botanypotstiers:elite_terracotta_hopper_botany_pot"},
        "H":{"item":"kubejs:started_mechanism"}
      },
      "result":
      {
        "item":"botanypotstiers:ultra_terracotta_hopper_botany_pot",
        "count":1}
    }).id('mekaminers:crafing_custom/botanypotstiers_ultra_terracotta_hopper_botany_pot')
    event.custom({"type":"crafting_shaped",
      "pattern":
      [
        "SHS",
        "SPS",
        " S "
      ]
      ,"key":{
        "S":{"item":"minecraft:terracotta"},
        "P":{"item":"botanypotstiers:ultra_terracotta_hopper_botany_pot"},
        "H":{"item":"mysticalagradditions:creative_essence"}
      },
      "result":
      {
        "item":"botanypotstiers:creative_terracotta_hopper_botany_pot",
        "count":1}
    }).id('mekaminers:crafing_custom/botanypotstiers_creative_terracotta_hopper_botany_pot')
    event.custom({
      "type": "mysticalagriculture:awakening",
      "essences": [
        {
          "item": "allthemodium:dirty_unobtainium_dust",
          "count": 40
        },
        {
          "item": "allthemodium:dirty_unobtainium_dust",
          "count": 40
        },
        {
          "item": "allthemodium:dirty_allthemodium_dust",
          "count": 40
        },
        {
          "item": "allthemodium:dirty_allthemodium_dust",
          "count": 40
        }
      ],
      "input": {
        "item": 'evilcraft:promise_tier_1'
      },
      "ingredients": [
        {
          "item": 'allthemodium:unobtainium_crystal'
        },
        {
          "item": 'extendedcrafting:enhanced_ender_ingot'
        },
        {
          "item": 'extendedcrafting:enhanced_redstone_ingot'
        },
        {
          "item": 'botania:quartz_lavender'
        }
      ],
      "result": {
        "item": '3x kubejs:undying_charm'
      }
  }).id('mekaminers:crafing_custom/undying_charm')
})
