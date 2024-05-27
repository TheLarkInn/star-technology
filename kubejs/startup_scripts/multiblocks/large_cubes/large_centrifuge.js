
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('t_large_centrifuge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('centrifuge')
        .recipeModifiers(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC')
            .aisle('CCC', 'C C', 'CCC')
            .aisle('CCC', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:tumbaga_casing').setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
            .where(' ', Predicates.air())
            .build())
        .workableCasingRenderer("kubejs:block/casings/tumbaga_casing",
        "gtceu:block/multiblock/electric_blast_furnace", false);
});