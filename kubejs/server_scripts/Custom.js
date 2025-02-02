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
})