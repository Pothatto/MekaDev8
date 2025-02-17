ServerEvents.recipes(event =>{
    event.remove(
        {output:
            "mysticalagriculture:essence_vessel"
        }
    )
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
}).id('mekaminers:create_creative_fase/creative_essence')
})