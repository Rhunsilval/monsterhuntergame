import { defineStore } from "pinia";

export const useCraftingStore =
    defineStore({
        id: 'crafting',
        state: () => ({ 
            potions: [
                {
                    id: Math.floor(Math.random() * 10000),
                    id2: 'Simple Homemade Healing Potion',
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
                    life: this.getRandomValue(5,20),
                    mana: 0, 
                    intelligence: 0,
                    price: 500,
                    imageSrc: require('../assets/images/village_apothecary/Apothecary_healing_1.png'),
                    learned: false,
                    need: '',
                    needImg: require('../assets/images/village_apothecary/Apothecary_healing_1.png'),
                    qty: 0,
                },
            ]
        }),
        actions: {
            getRandomValue(min, max) {
                return Math.floor(Math.random()*(max - min)) + min;
            },
        }
    })