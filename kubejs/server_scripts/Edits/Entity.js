//Custom mob drop
ServerEvents.entityLootTables(event => {
    event.addEntity('minecraft:ender_dragon', table => {
      table.addPool(pool => {
        pool.rolls = 2
        pool.addItem('draconicevolution:medium_chaos_frag', 2)
        pool.addItem('draconicevolution:dragon_heart', 1)
        pool.addItem("forbidden_arcanus:eternal_stella").randomChance(0.03)
      })
    })
    event.addEntity("minecraft:wither", table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem("draconicevolution:small_chaos_frag").randomChance(0.05)
        pool.addItem("forbidden_arcanus:xpetrified_orb").randomChance(0.02)
      })
    })
    event.addEntity("minecraft:giant", table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('2x kubejs:supreme_advanced_magic', 1)
      })
    })
  })
  