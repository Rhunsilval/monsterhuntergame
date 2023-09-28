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
                    id2: 'Simple Homemade Healing Potion',
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
            itemsLessons: [
                {
                    id: 'Lesser Sword of Light',
                    L1: "Want to learn how to make your own magic sword?",
                    L2: "With this lesson, I will teach you to take a basic sword and imbue it with light magic. ",
                    L3: "Don't know light magic?  Not a problem!",
                    L4: "This method of crafting will still work.",
                    intel: 2,
                    cost: 500,
                    available: true,
                    priorLesson: "none",
                },
            ],
            items: [
                {
                    id: 'Lesser Sword of Light',
                    imageSrc: require('../assets/images/village_school/crafting_sword_1.png'),
                    learned: false,
                    need: 'Basic Steel Sword',
                    needImg: require('../assets/images/village_blacksmith/Blacksmith_sword_1.png'),
                    qty: 1,
                    baseQty: 1,
                    need2: 'Tangled Rootbeast Vines',
                    needImg2: require('../assets/images/swamp/swamp_monster_1_treasure.png'),
                    qty2: 1,
                    baseQty2: 1,
                    need3: 'Fae Light',
                    needImg3: require('../assets/images/marshes/marshes_monster_1_treasure.png'),
                    qty3: 3,
                    baseQty3: 3,
                },
            ],
            selectedItem: '',
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
                            life: (Math.floor(Math.random()*(20 - 5)) + 5),
                            mana: 0, 
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/village_school/crafting_healing_1.png'),
                        },
                    )
                }
            },
            generateItem() {
                if (this.selectedItem === 'Lesser Sword of Light') {
                    this.craftedItem.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities',
                            name: 'Lesser Sword of Light',                    
                            description: 'An enchanted sword imbued with lesser light magic.',
                            value: 'Hits between 10-25',
                            attack: (Math.floor(Math.random()*(25 - 10)) + 10),
                            defense: 3,
                            strength: 0,
                            life: 0,
                            mana: 0, 
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/village_school/crafting_sword_1.png'),
                        },
                    )
                }
            },
        }
    })