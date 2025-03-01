JEIEvents.hideItems(event =>{
   const colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink'];
   const bucketPattern = /gtceu:.*_bucket/;
   colors.forEach(color => {
    //Removing Refined Storage Colored blocks From JEI
    event.hide(`connectedglass:borderless_glass_${color}`);
    event.hide(`connectedglass:borderless_glass_${color}_pane`);
    event.hide(`connectedglass:scratched_glass_${color}_pane`); 
    event.hide(`connectedglass:clear_glass_${color}_pane`); 
    event.hide(`connectedglass:clear_glass_${color}`); 
    event.hide(`connectedglass:scratched_glass_${color}`); 
    event.hide(`connectedglass:tinted_borderless_glass_${color}`); 
    event.hide(`enderio:clear_glass_e_${color}`); 
    event.hide(`enderio:clear_glass_em_${color}`); 
    event.hide(`enderio:clear_glass_enm_${color}`); 
    event.hide(`enderio:fused_quartz_e_${color}`); 
    event.hide(`enderio:clear_glass_enp_${color}`); 
    event.hide(`enderio:clear_glass_ena_${color}`); 
    event.hide(`enderio:fused_quartz_ena_${color}`); 
    event.hide(`enderio:clear_glass_dp_${color}`); 
    event.hide(`enderio:clear_glass_dnp_${color}`);
    event.hide(`enderio:${color}_clear_glass`); 
    event.hide(`enderio:clear_glass_${color}`)
});
    //Removing Flying Effect From JEI
   const flyingeffect = [
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:flying"}'), 
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:long_flying"}'),
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:potion', '{Potion:"apotheosis:extra_long_flying"}'),
   Item.of('minecraft:potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:extra_long_flying"}'),
   Item.of('immersiveengineering:potion_bucket', '{Potion:"apotheosis:extra_long_flying"}')
];
   flyingeffect.forEach(flyeffect =>{
   event.hide(flyeffect);
});
   //Removing Itens Mods From JEI 
   event.hide('@easy_npc');
   //Removing Operator Itens From JEI
  const OperatorsI = [
   'minecraft:command_block',
   'minecraft:chain_command_block',
   'minecraft:repeating_command_block', 
   'minecraft:jigsaw',
   'minecraft:structure_block',
   'minecraft:structure_void',
   'minecraft:barrier',
   'minecraft:debug_stick',
   'minecraft:light',
   'minecraft:command_block_minecart',
];
OperatorsI.forEach(OpI =>{
   event.hide(OpI);
});
//Removing ban itens
event.hide('@buildinggadgets')
//Hidding Rage Glove
event.hide('relics:rage_glove')
//Hidding EnderIO itens
event.hide("enderio:filled_soul_vial")
event.hide("enderio:broken_spawner")

//Removing Incomplete mechanisms

const incomplete = [
   'kubejs:incomplete_started_mechanism',
   'kubejs:incomplete_started_mechanism_component_2',
   'kubejs:incomplete_started_mechanism_component_3',
   'kubejs:incomplete_started_mechanism_component_4',
   'kubejs:incomplete_start_mechanism',
   'kubejs:incomplete_vibranium_allthemodium_alloy_dust',
   'kubejs:incomplete_unobtainium_allthemodium_alloy_dust',
   'kubejs:incomplete_unobtainium_vibranium_alloy_dust',
   'kubejs:incomplete_precision_mechanism_component_2',
   'kubejs:incomplete_teprecision_mechanism',
   'kubejs:incomplete_precision_mechanism_component_1',
   'kubejs:incomplete_initiated_mechanism_component_2',
   'kubejs:incomplete_initiated_mechanism_component_1',
   'kubejs:incomplete_initiated_mechanism',
   'kubejs:incomplete_initiating_mechanism_component_1',
   'kubejs:incomplete_initiating_mechanism_component_2',
   'kubejs:incomplete_spatial_circuit_component_1',
   'kubejs:incomplete_spatial_circuit_component_2',
   'kubejs:incomplete_spatial_circuit',
   'kubejs:incomplete_activation_circuit_component_1',
   'kubejs:incomplete_activation_circuit_component_2',
   'kubejs:incomplete_activation_circuit',
   'kubejs:incomplete_etherium_ingot',
   'kubejs:imcomplete_quartz_lavender',
   'kubejs:initiating_mechanism_component_1',
   'kubejs:initiating_mechanism_component_2',
   'kubejs:incomplete_initiating_mechanism',
   'kubejs:incomplete_initiated_mechanism',
   'kubejs:initiated_mechanism_component_2',
   'kubejs:initiated_mechanism_component_1',
   'kubejs:precision_mechanism_component_2',
   'kubejs:incomplete_precision_mechanism',
   'kubejs:precision_mechanism_component_1',
   'kubejs:started_mechanism_component_4',
   'kubejs:started_mechanism_component_3',
   'kubejs:started_mechanism_component_2',
   'kubejs:started_mechanism_component_1'
   ]
   incomplete.forEach(INCOMPLETE => { 
       event.hide(INCOMPLETE)
   })
})
