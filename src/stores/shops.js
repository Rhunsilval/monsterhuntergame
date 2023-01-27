import { defineStore } from 'pinia'

export const useShopStore =
    defineStore({
        id: 'shops',
        state: () => ({
            playerId: 'Player One',
            apothecary: [
                {
                    id: 'apo_health_1',
                    itemSlot: 'null',
                    name: 'Simple Healing Draught',                    
                    description: 'A simple brew that will perk you up a bit.',
                    value: '+10 health',
                    price: 10,
                    imageSrc: require('../assets/images/village/Apothecary_clay_bottle_1.png'),                    
                },
                {
                    id: 'apo_strength_1',
                    itemSlot: 'null',
                    name: 'Tincure of Strength',
                    description:"Rub this in and you'll instantly feel stronger.  For a little while anyway.",
                    value: '+5 strength',
                    price: 25,
                    imageSrc: require('../assets/images/village/Apothecary_clay_jar_1.png'),                    
                },
                {
                    id: 'apo_poison_1',
                    itemSlot: 'null',
                    name: 'Simple Anti-venom Potion',
                    description:'You would not believe the number of things that are poisonous out there',
                    value: 'cures you of poisoning, lasts until next exposure',
                    price: 350,
                    imageSrc: require('../assets/images/village/Apothecary_potions_bottle_1.png'),                    
                },
                {
                    id: 'apo_soup_1',
                    itemSlot: 'null',
                    name: 'Bone Broth Soup',
                    description: "I know how it looks.  Just give it a try - I think you'll like it!",
                    value: '+5-15 health and +1-10 strength',
                    price: 35,
                    imageSrc: require('../assets/images/village/Apothecary_soup_1.png'),                    
                },
            ],
            armory: [
                {
                    id: 'arm_leath_armor_1',
                    itemSlot: 'player_armor',
                    name: 'Basic Leather Armor',
                    description: 'Cheap, reliable, and sturdy',
                    value: '+10 defense',
                    price: 200,
                    imageSrc: require('../assets/images/village/Armory_leather_armor_1.png'),
                },
                {
                    id: 'arm_leath_gauntlet_1',
                    itemSlot: 'player_gloves',
                    name: 'Leather Gauntlets',
                    description:"Just the thing to help you keep a strong grip on your sword.",
                    value: '+3 defense',
                    price: 100,
                    imageSrc: require('../assets/images/village/Armory_leather_gauntlets_1.png'),
                },
                {
                    id: 'arm_leather_boots_1',
                    itemSlot: 'player_boots',
                    name: 'Sturdy Leather Boots',
                    description:'Hunting monsters with bad boots is a bad idea.  You need good footwear.',
                    value: '+3 defense and +2 strength',
                    price: 150,
                    imageSrc: require('../assets/images/village/Armory_leather_boots_1.png'),
                },
                {
                    id: 'arm_enchant_boots_1',
                    itemSlot: 'player_boots',
                    name: 'Enchanted Boots',
                    description: "A gift from a friendly 'Shroom Spirit, these are great if you're considering adding magic items to your armor",
                    value: '+1-5 defense, and poison resistance, and occasional +1-5 health',
                    price: 350,
                    imageSrc: require('../assets/images/village/Armory_enchanted_boots_1.png'),
                },
            ],
            blacksmith: [
                {
                    id: 'smith_sword_1',
                    itemSlot: 'player_sword',
                    name: 'Basic Steel Sword',
                    description: 'A good sword to start out with',
                    value: '+5 attack',
                    price: 150,
                    imageSrc: require('../assets/images/village/Blacksmith_sword_1.png'),
                  },
                  {
                    id: 'smith_helm_1',
                    itemSlot: 'player_helm',
                    name: 'Metal Helmet',
                    description:"Some basic head protection.  You're going to want it.",
                    value: '+3 defense',
                    price: 150,
                    imageSrc: require('../assets/images/village/Blacksmith_helmet_1.png'),                    
                  },
                  {
                    id: 'smith_shield_1',
                    itemSlot: 'player_shield',                    
                    name: 'Basic Wooden Shield',
                    description:"Won't help much against fire-based monsters, but useful against pretty much everything else.",
                    value: '+3 defense',
                    price: 100,
                    imageSrc: require('../assets/images/village/Blacksmith_shield_1.png'),
                  },
                  {
                    id: 'smith_misc_1',
                    itemSlot: 'horse_shoes',                    
                    name: 'Horseshoes',
                    description: "Everyone feels better with proper footware, horses included",
                    value: 'allows your horse to carry 10% more items',
                    price: 200,
                    imageSrc: require('../assets/images/village/Blacksmith_horseshoes_1.png'),
                  },
            ],
            oddities: [
                {
                    id: 'odd_ring_1',
                    itemSlot: 'player_ring',
                    name: 'Enchanted Ring of Vigor',
                    description: 'Made by elves.  Good on the battlefield, and in the bedroom!',
                    value: '+4 attack',
                    price: 500,
                    imageSrc: require('../assets/images/village/Oddities_enchanted_ring_1.png'),
                  },
                  {
                    id: 'odd_skull_1',
                    itemSlot: 'null',
                    name: 'Raven Skull',
                    description:"Useful for potions and spellwork.",
                    value: 'Potency results may vary',
                    price: 50,
                    imageSrc: require('../assets/images/village/Oddities_skull_1.png'),
                  },
                  {
                    id: 'odd_gloves_1',
                    itemSlot: 'player_gloves',
                    name: 'Mysterious Leather Gloves',
                    description:"No telling what they do - but they're magic!",
                    value: '???',
                    price: 750,
                    imageSrc: require('../assets/images/village/Oddities_enchanted_gloves_1.png'),
                  },
                  {
                    id: 'odd_herb_1',
                    itemSlot: 'null',
                    name: "Mountain's Bane",
                    description: "A very rare herb of very potent magic",
                    value: 'Results vary by application',
                    price: 3000,
                    imageSrc: require('../assets/images/village/Oddities_herb_1.png'),
                  },
            ],

        })
    })