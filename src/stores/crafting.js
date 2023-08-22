import { defineStore } from "pinia";

export const useCraftingStore =
    defineStore({
        id: 'crafting',
        state: () => ({ 
            potionsLessons: [
                {
                    id: 'simple, homemade healing potion',
                    id2: 'Simple Homemade Healing Potion',
                    L1: "Store bought healing potions are fine, but making your own is better.",
                    L2: "With this lesson, I will teach you to make a concentrated healing potion that you can use multiple times",
                    L3: "Effectiveness may vary depending on the success of your brew",
                    intel: 2,
                    cost: 500,
                    available: true,
                    priorLesson: "none",
                },
            ],
            potions: [
                {
                    // id: Math.floor(Math.random() * 10000),
                    id2: 'Simple Homemade Healing Potion',
                    // itemSlot: 'null',
                    // itemUse: 'healing',
                    // numberOfUses: 3,
                    // itemShop: 'Apothecary, Magic',
                    // name: 'Simple Homemade Healing Potion',                    
                    // description: 'A simple brew that will perk you up a bit.',
                    // value: 'Results between 5 and 20 health',
                    // attack: 0,
                    // defense: 0,
                    // strength: 0,
                    // life: (Math.floor(Math.random()*(5 - 2)) + 2),
                    // mana: 0, 
                    // intelligence: 0,
                    // price: 500,
                    imageSrc: require('../assets/images/village_school/crafting_healing_1.png'),
                    learned: false,
                    need: 'Basic Healing Draught',
                    needImg: require('../assets/images/village_apothecary/Apothecary_healing_1.png'),
                    qty: 1,
                    baseQty: 1,
                    need2: 'Sacred Spores',
                    needImg2: require('../assets/images/forest/forest_monster_1_treasure.png'),
                    qty2: 3,
                    baseQty2: 3,
                },
            ],
            selectedPotion: '',
            craftedItem: [],
        }),
        actions: {
            getRandomValue(min, max) {
                return Math.floor(Math.random()*(max - min)) + min;
            },
            generatePotion() {
                if (this.selectedPotion === 'Simple Homemade Healing Potion') {
                    this.craftedItem.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'healing',
                            numberOfUses: 3,
                            itemShop: 'Apothecary, Magic',
                            name: 'Simple Homemade Healing Potion',                    
                            description: 'A simple brew that will perk you up a bit.',
                            value: 'Results between 5 and 20 health',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: (Math.floor(Math.random()*(5 - 2)) + 2),
                            mana: 0, 
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/village_school/crafting_healing_1.png'),
                        },
                    )
                }
            }
        }
    })