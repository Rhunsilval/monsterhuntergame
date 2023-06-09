import { defineStore } from "pinia";

export const useLootStore =
    defineStore({
        id: 'loot',
        state: () => ({
            lootCoins: [],
            lootList: [],
            monsterId: '',
            monsterName:'',

        }),
        actions: {
            getRandomValue(min, max) {
                return Math.floor(Math.random()*(max - min)) + min;
            },

            generateCoins() {
                if (
                    this.monsterId === 'desert_monster1' || 
                    this.monsterId === 'desert_monster2' || 
                    this.monsterId === 'desert_monster3' || 
                    this.monsterId === 'forest_monster1' ||
                    this.monsterId === 'forest_monster2' ||
                    this.monsterId === 'forest_monster3' ||
                    this.monsterId === 'grassland_monster1' ||
                    this.monsterId === 'grassland_monster2' ||
                    this.monsterId === 'grassland_monster3' ||
                    this.monsterId === 'jungle_monster1' ||
                    this.monsterId === 'jungle_monster2' ||
                    this.monsterId === 'jungle_monster3' ||
                    this.monsterId === 'marshes_monster1' ||
                    this.monsterId === 'marshes_monster2' ||
                    this.monsterId === 'marshes_monster3' ||
                    this.monsterId === 'mountain_monster1' ||
                    this.monsterId === 'mountain_monster2' ||
                    this.monsterId === 'mountain_monster3' ||
                    this.monsterId === 'swamp_monster1' ||
                    this.monsterId === 'swamp_monster2' ||
                    this.monsterId === 'swamp_monster3' 
                    ) {
                        const val = this.getRandomValue(1,100);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster4' ||
                    this.monsterId === 'forest_monster4' ||
                    this.monsterId === 'grassland_monster4' ||
                    this.monsterId === 'jungle_monster4' ||
                    this.monsterId === 'marshes_monster4' ||
                    this.monsterId === 'mountain_monster4' ||
                    this.monsterId === 'swamp_monster4'
                    ) {
                        const val = this.getRandomValue(50,150);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster5' ||
                    this.monsterId === 'forest_monster5' ||
                    this.monsterId === 'grassland_monster5' ||
                    this.monsterId === 'jungle_monster5' ||
                    this.monsterId === 'marshes_monster5' ||
                    this.monsterId === 'mountain_monster5' ||
                    this.monsterId === 'swamp_monster5'
                    ) {
                        const val = this.getRandomValue(50,300);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/coins.png'),
                            }
                        )                        
                } else if (
                    this.monsterId === 'desert_monster6' ||
                    this.monsterId === 'forest_monster6' ||
                    this.monsterId === 'grassland_monster6' ||
                    this.monsterId === 'jungle_monster6' ||
                    this.monsterId === 'marshes_monster6' ||
                    this.monsterId === 'mountain_monster6' ||
                    this.monsterId === 'swamp_monster6'
                    ) {
                        const val = this.getRandomValue(150,400);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster7' ||
                    this.monsterId === 'forest_monster7' ||
                    this.monsterId === 'grassland_monster7' ||
                    this.monsterId === 'jungle_monster7' ||
                    this.monsterId === 'marshes_monster7' ||
                    this.monsterId === 'mountain_monster7' ||
                    this.monsterId === 'swamp_monster7'
                    ) {
                        const val = this.getRandomValue(300,500);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster8' ||
                    this.monsterId === 'forest_monster8' ||
                    this.monsterId === 'grassland_monster8' ||
                    this.monsterId === 'jungle_monster8' ||
                    this.monsterId === 'marshes_monster8' ||
                    this.monsterId === 'mountain_monster8' ||
                    this.monsterId === 'swamp_monster8'
                    ) {
                        const val = this.getRandomValue(400,600);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster9' ||
                    this.monsterId === 'forest_monster9' ||
                    this.monsterId === 'grassland_monster9' ||
                    this.monsterId === 'jungle_monster9' ||
                    this.monsterId === 'marshes_monster9' ||
                    this.monsterId === 'mountain_monster9' ||
                    this.monsterId === 'swamp_monster9'
                    ) {
                        const val = this.getRandomValue(500,700);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster10' ||
                    this.monsterId === 'forest_monster10' ||
                    this.monsterId === 'grassland_monster10' ||
                    this.monsterId === 'jungle_monster10' ||
                    this.monsterId === 'marshes_monster10' ||
                    this.monsterId === 'mountain_monster10' ||
                    this.monsterId === 'swamp_monster10'
                    ) {
                        const val = this.getRandomValue(700,10000);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/coins.png'),
                            }
                        )
                } 
            },

            generateLoot() {
// desert monsters
                if (this.monsterId === 'desert_monster1') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Sand Crab Shell',
                                description:"Is it made of sand or just sandy textured?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_1_treasure.png'), 
                            },
                        );
                    } 
                } 
                else if (this.monsterId === 'desert_monster2') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Foul Camel Tail',
                                description:"Why is it sticky!?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_2_treasure.png'), 
                            },
                        );
                    } 
                } 
                else if (this.monsterId === 'desert_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'White Mane',
                                description:"So fluffy!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Lion Spine spines',
                                description:"Careful; they're poisonous",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_3_treasure2.png'), 
                            }
                        )
                    }
                } 
                else if (this.monsterId === 'desert_monster4') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Sandstone Scales',
                                description:"Hard as a rock!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Stone Teeth',
                                description:"What does a creature eat with teeth like these?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getDesertGems();
                    }
                } 
                else if (this.monsterId === 'desert_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Basilisk Scales',
                            description:"This would make a pretty pair of boots.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_5_treasure.png'), 
                        }
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Basilisk Fangs',
                                description:"Probably shouldn't touch those.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Basilisk Venom',
                                description:"Hmm ... smells minty.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_5_treasure3.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getDesertHerbs();
                    }
                } 
                else if (this.monsterId === 'desert_monster6') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Genie's Bottle",
                            description:"This would look great on my bookshelf!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_6_treasure.png'), 
                        }
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_belt',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Golden Belt',
                                description:"I think this is shining with more than just gold...",
                                value: '?',
                                attack: null,
                                defense: 20,
                                strength: null,
                                life: 40,
                                mana: 20,
                                intelligence: null,
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Bottled Sandstorm',
                                description:"It sounds angry.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_6_treasure3.png'), 
                            }
                        )
                    }
                    this.getDesertGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getDesertHerbs();
                    } else (this.getDesertGems())
                } 
                else if (this.monsterId === 'desert_monster7') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Phoenix Ashes",
                            description:"Is it me, or are these ashes getting hotter?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Phoenix Feather",
                            description:"It looks so soft and warm!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_7_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,4);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Phoenix Egg',
                                description:"Huh - it's actually really cold to the touch?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Phoenix Talon',
                                description:"Super sharp.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_7_treasure4.png'), 
                            }
                        )
                    } else {
                        const val2 = this.getRandomValue(1,4);
                        if (val2 <= 1) {
                            this.getDesertGems();
                            this.getDesertGems();
                        } else if (val2 <=2) {
                            this.getDesertHerbs();
                            this.getDesertHerbs();
                        } else (this.getDesertGems(), this.getDesertHerbs())
                    }
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'desert_monster8') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Karkadaan Horn",
                            description:"You'll put your eye out with that thing!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Karkadaan Hide",
                            description:"It'd make good camouflage",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_8_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'horse_shoes',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Karkadaan shoes',
                                description:"These appear sturdy ... and have an air of aggression about them?",
                                value: '?',
                                carryBonus: 100,
                                attack: 10,
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Karkadaan Tail',
                                description:"How is a tail sharp?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_8_treasure4.png'), 
                            }
                        )
                    }
                    this.getDesertGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getDesertHerbs();
                    }
                } 
                else if (this.monsterId === 'desert_monster9') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Sandworm Steak",
                            description:"Tender and juicy ... and also a bit gritty.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Sandworm Teeth",
                            description:"What happens if it bites its tongue?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_9_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Digested Sand',
                                description:"Disgusting",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Sandworm Hide',
                                description:"No wonder this thing was so hard to kill!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_9_treasure4.png'), 
                            }
                        )
                    }
                    this.getDesertHerbs();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itemShop: 'Blacksmith',
                                name: 'Clawed Sickle',
                                description: 'So gross, but also so sharp and fast!',
                                value: '?',
                                attack: 25,
                                defense: 10,
                                strength: 0,
                                life: 0,
                                mana: 30,
                                intelligence: 8,
                                price: 1800,
                                unlocksAt: 1,
                                imageSrc: require('../assets/images/desert/desert_monster_9_treasure5.png'),
                              },
                        )
                    } else (this.getDesertGems())
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'desert_monster10') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'Blacksmith',
                            name: "Fire Drake's Sword",
                            description: 'Beautiful and powerful.',
                            value: '?',
                            attack: 50,
                            defense: 30,
                            strength: 10,
                            life: 20,
                            mana: 30,
                            intelligence: 0,
                            price: 1800,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/desert/desert_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Fire Drake Hide",
                            description:"What wonderful armor this would make!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Fire Drake Scale",
                            description:"I guess scales and feathers really are a lot alike",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Fire River Drake's Eye",
                            description:"I think it's still looking at me ... ",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Fire Drake Egg",
                            description:"Why would anyone want to eat something like this?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/desert/desert_monster_10_treasure5.png'), 
                        },
                    )
                    this.getDesertGems();
                    this.getDesertGems();
                    this.getDesertGems();
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_necklace',
                                itemUse: 'null',
                                itemShop: 'Magic',
                                name: "Fire Drake's Amulet",
                                description: "Who knew a dragon's nest would hide a treasure like this!",
                                value: '?',
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: 50,
                                mana: 30,
                                intelligence: 15,
                                price: 600,
                                unlocksAt: 1,
                                imageSrc: require('../assets/images/desert/desert_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_armor',
                                itemUse: 'null',
                                itemShop: 'Magic',
                                name: "Fire Drake's Robes",
                                description: 'Ooh!  Stylish!  I wonder what they do?',
                                value: '?',
                                attack: 30,
                                defense: 50,
                                strength: 0,
                                life: 0,
                                mana: 50,
                                intelligence: 15,
                                price: 600,
                                unlocksAt: 1,
                                imageSrc: require('../assets/images/desert/desert_monster_10_treasure7.png'), 
                            }
                        )
                    }
                    this.getDesertHerbs();
                    this.getDesertHerbs();                    
                    this.getPotionDrop();
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
// forest monsters
                else if (this.monsterId === 'forest_monster1') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'multi',
                                itesmShop: 'null',
                                name: 'Sacred Spores',
                                description:"Smells odd.  Probably shouldn't eat them.",
                                value: '?',
                                attack: 1,
                                defense: 0,
                                strength: 0,
                                life: -3,
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_1_treasure.png'), 
                            },
                        );
                    } 
                } 
                else if (this.monsterId === 'forest_monster2') {
                    const val = this.getRandomValue(1,2);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Mossy Foot',
                                description:"So fuzzy",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_2_treasure.png'), 
                            },
                        );
                    } 
                } 
                else if (this.monsterId === 'forest_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val === 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: "Satyr's Aulos",
                                description:"Enchanting",
                                value: '?',
                                price: 900,
                                imageSrc: require('../assets/images/forest/forest_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Satyr Horns',
                                description:"Heavier than it looks",
                                value: '?',
                                price: 1500,
                                imageSrc: require('../assets/images/forest/forest_monster_3_treasure2.png'), 
                            }
                        )
                    }
                }
// grassland monsters
                else if (this.monsterId === 'grassland_monster1') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Rotten Femur',
                                description:"Ugh!  The smell!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_1_treasure.png'), 
                            },
                        );
                    } 
                } 
                else if (this.monsterId === 'grassland_monster2') {
                    const val = this.getRandomValue(1,2);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Lucky Gold',
                                description:"So shiny!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_2_treasure.png'), 
                            },
                        );
                    } 
                } 
                else if (this.monsterId === 'grassland_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val === 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_necklace',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Bone Bead Necklace',
                                description:"We just aren't going to ask what kind of bones those are.",
                                value: '?',
                                attack: 0,
                                defense: 8,
                                strength: 0,
                                life: 5,
                                price: 700,
                                imageSrc: require('../assets/images/grassland/grassland_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Hobgoblin Ears',
                                description:"Eww!  They still wiggle!",
                                value: '?',
                                price: 900,
                                imageSrc: require('../assets/images/grassland/grassland_monster_3_treasure2.png'), 
                            }
                        )
                    }
                } 
// jungle monsters
                else if (this.monsterId === 'jungle_monster1') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Bat Leather',
                                description:"I wonder if I can fly with these?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'jungle_monster2') {
                    const val = this.getRandomValue(1,2);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Unlucky Monkey Paw',
                                description:"Do your best not to touch it",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_2_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'jungle_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val === 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Vinesap',
                                description:"Sticks to everything, including itself.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Forest Gem',
                                description:"Beautifully green and shiny!",
                                value: '?',
                                price: 1000,
                                imageSrc: require('../assets/images/jungle/jungle_monster_3_treasure2.png'), 
                            }
                        )
                    }
                } 
// marshes monsters
                else if (this.monsterId === 'marshes_monster1') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Fae Light',
                                description:"Don't look into the light",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'marshes_monster2') {
                    const val = this.getRandomValue(1,2);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_armor',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Kappa Shell',
                                description:"I wonder if it would fit me?",
                                value: '?',
                                attack: 0,
                                defense: 8,
                                strength: 0,
                                life: 0,
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_2_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'marshes_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val === 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Mossy Teeth',
                                description:"They smell worse than they look.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Zombie Eyes',
                                description:"Gooey.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_3_treasure2.png'), 
                            }
                        )
                    }
                } 
// mountain monsters
                else if (this.monsterId === 'mountain_monster1') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Goblin Ears',
                                description:"Green and gelatenous.",
                                value: '?',
                                price: 350,
                                imageSrc: require('../assets/images/mountains/mountain_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'mountain_monster2') {
                    const val = this.getRandomValue(1,2);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_helm',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Were Horns',
                                description:"A matching pair.",
                                value: '?',
                                attack: 2,
                                defense: 4,
                                strength: 2,
                                life: 0,
                                price: 800,
                                imageSrc: require('../assets/images/mountains/mountain_monster_2_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'mountain_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val === 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Troll Berries',
                                description:"Those better not be what I think they are ... ",
                                value: '?',
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: 0,
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Mountain Troll Leather',
                                description:"This stuff is thick-thicc.",
                                value: '?',
                                price: 800,
                                imageSrc: require('../assets/images/mountains/mountain_monster_3_treasure2.png'), 
                            }
                        )
                    }
                } 
// swamp monsters
                else if (this.monsterId === 'swamp_monster1') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Tangled Rootbeast Vines',
                                description:"So tangly.",
                                value: '?',
                                price: 350,
                                imageSrc: require('../assets/images/swamp/swamp_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'swamp_monster2') {
                    const val = this.getRandomValue(1,2);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Sickly Light',
                                description:"I feel sick just looking at it.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_2_treasure.png'), 
                            },
                        );
                    } 
                }else if (this.monsterId === 'swamp_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val === 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Swamp Ape Nose',
                                description:"Huh.",
                                value: '?',
                                price: 900,
                                imageSrc: require('../assets/images/swamp/swamp_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Red Eyes',
                                description:"I think they're looking at me.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_3_treasure2.png'), 
                            }
                        )
                    }
                } 

            },

            getDesertGems() {
                const val = this.getRandomValue(1,4);
                console.log('random gem number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Fire Gem',
                            description: "Tantalizingly shiny, but hot to the touch.",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/desert/desert_gem_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Sandstone Gem',
                            description: "Who knew sand could be so pretty?",
                            value: '?',
                            price: 3000,
                            imageSrc: require('../assets/images/desert/desert_gem_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Ruby',
                            description: "It's so red!",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/desert/desert_gem_3.png')
                        }
                    )
                }
            },

            getDesertHerbs() {
                const val = this.getRandomValue(1,4);
                console.log('random herb number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Resurrection Flower',
                            description: "It only looks like it's dead.",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/desert/desert_herb_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Desert Sage',
                            description: "A very useful plant",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/desert/desert_herb_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Prickle Plant',
                            description: "It sounds like there's water inside, but how do you get to it?",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/desert/desert_herb_3.png')
                        }
                    )
                }
            },

            getPotionDrop() {
                const val = this.getRandomValue(1, 25);
                if (val <=1) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'healing',
                            itemShop: 'Apothecary',
                            name: 'Basic Healing Draught',                    
                            description: 'A simple brew that will perk you up a bit.',
                            value: '+10 health',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 10,
                            mana: 0, 
                            intelligence: 0,
                            price: 50,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_healing_1.png'),                    
                        },
                    )
                } else if (val <=2) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'healing',
                            itemShop: 'Apothecary',
                            name: 'Concentrated Healing Draught',                    
                            description: "A strong spirit that will reinvigorate you if you're feeling down.",
                            value: '+25 health',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 25,
                            mana: 0, 
                            intelligence: 0,
                            price: 150,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_healing_2.png'),                    
                        }
                    )
                } else if (val <=3) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'healing',
                            itemShop: 'Apothecary',
                            name: 'Greater Healing Draught',                    
                            description: 'A potent cordial that will get you feeling much better',
                            value: '+50 health',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 50,
                            mana: 0, 
                            intelligence: 0,
                            price: 300,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_healing_3.png'),                    
                        },
                    )
                } else if (val <=4) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'healing',
                            itemShop: 'Apothecary',
                            name: 'Blessed Healing Draught',                    
                            description: 'The strongest healing brew I make.  For most adventurers, it offers full healing.',
                            value: '+200 health',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 200,
                            mana: 0, 
                            intelligence: 0,
                            price: 1000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_healing_4.png'),                    
                        },
                    )
                } else if (val<=5) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attacking',
                            itesmShop: 'Apothecary',
                            name: 'Energizing Tincure',
                            description:"Rub this in and you'll instantly feel the effects. Lasts for one battle",
                            value: '+5 attack',
                            attack: 5,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 500,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_attack_1.png'),                    
                        },
                    )
                } else if (val<=6) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attacking',
                            itesmShop: 'Apothecary',
                            name: 'Tincure of Motivation',
                            description:"Apply this potion and get what you need to succeed.  Lasts for one battle.",
                            value: '+10 attack',
                            attack: 10,
                            defense: 0, 
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 1000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_attack_2.png'),                    
                        },
                    )
                } else if (val<=7) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attacking',
                            itesmShop: 'Apothecary',
                            name: 'Tincure of Inspiration',
                            description:"When applied, you'll aspire to greatness. Lasts for one battle",
                            value: '+25 attack',
                            attack: 25,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 1500,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_attack_3.png'),                    
                        },
                    )
                } else if (val<=8) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attack',
                            itesmShop: 'Apothecary',
                            name: 'Tincure of Vigor',
                            description:"Slather this on to gain a new energy toward life.  Effects are permanent!",
                            value: '+1 attack',
                            attack: 1,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 2000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_attack_4.png'),                    
                        },
                    )
                } else if (val<=9) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attack',
                            itesmShop: 'Apothecary',
                            name: 'Tincure of Ruthlessness',
                            description:"Douse yourself with this and see your enemies flee.  Effects are permanent!",
                            value: '+5 attack',
                            attack: 5,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 5000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_attack_5.png'),                    
                        },
                    )
                } else if (val<=10) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'defending',
                            itemShop: 'Apothecary',
                            name: 'Small Shot Potion',
                            description:'Down this potion to gain a quick defense bonus.  Lasts for one battle.',
                            value: '+5 defense',
                            attack: 0,
                            defense: 5,
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 350,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_defense_1.png'),                    
                        },
                    )
                } else if (val<=11) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'defending',
                            itemShop: 'Apothecary',
                            name: "Defender's Doubleshot",
                            description:'Drink this to gain a good bit of defense power.  Lasts for one battle.',
                            value: '+15 defense',
                            attack: 0,
                            defense: 15,
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 800,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_defense_2.png'),                    
                        },
                    )
                } else if (val<=12) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'defense',
                            itemShop: 'Apothecary',
                            name: "Defender's Potion",
                            description:'Sip on this potion and gain a permanent defense bonus.',
                            value: '+1 defense',
                            attack: 0,
                            defense: 1,
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 2000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_defense_3.png'),                    
                        },
                    )
                } else if (val<=13) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'defense',
                            itemShop: 'Apothecary',
                            name: "Shell of Protection",
                            description:'Savor this potion.  The effects are permanent!',
                            value: '+5 defense',
                            attack: 0,
                            defense: 5,
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 4000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_defense_4.png'),                    
                        },
                    )
                } else if (val<=14) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'strengthening',
                            itemShop: 'Apothecary',
                            name: 'Strength Potion',
                            description:'Simple enough.  Drink this; get stronger.  Until you win your next battle, anyway.',
                            value: '+3 strength',
                            attack: 0,
                            defense: 0,
                            strength: 3,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 300,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_strength_1.png'),                    
                        },
                    )
                } else if (val<=15) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'strengthening',
                            itemShop: 'Apothecary',
                            name: 'Hardiness Potion',
                            description:'Drink this and you can handle whatever comes!  Lasts for one battle.',
                            value: '+8 strength',
                            attack: 0,
                            defense: 0,
                            strength: 8,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 800,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_strength_2.png'),                    
                        },
                    )
                } else if (val<=16) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'strength',
                            itemShop: 'Apothecary',
                            name: 'Potion of Brawn',
                            description:'This potion will permanently bulk you up!',
                            value: '+1 strength',
                            attack: 0,
                            defense: 0,
                            strength: 1,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 1300,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_strength_3.png'),                    
                        },
                    )
                } else if (val<=17) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'strength',
                            itemShop: 'Apothecary',
                            name: 'Potion of Durability',
                            description:'Give it a try and see how much harder you can hit!  Effects are permanent.',
                            value: '+5 strength',
                            attack: 0,
                            defense: 0,
                            strength: 5,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 2000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_apothecary/Apothecary_strength_4.png'),                    
                        },
                    )
                } else if (val<=18) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'smart',
                            itemShop: 'Oddities',
                            name: 'Smarts Potion',                    
                            description: "Sure, you could study hard to get smarter.  Or ... just take this potion!",
                            value: '+3 intelligence',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 0, 
                            intelligence: 3,
                            price: 4000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_oddities/Oddities_potion_1.png'),
                        },
                    )
                } else if (val<=19) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'smart',
                            itemShop: 'Oddities',
                            name: 'Cleverness Potion',                    
                            description: "Sure, you could study hard to get smarter.  Or ... just take this potion!",
                            value: '+8 intelligence',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 0, 
                            intelligence: 8,
                            price: 8000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_oddities/Oddities_potion_2.png'),
                        },
                    )
                } else if (val<=20) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'smart',
                            itemShop: 'Oddities',
                            name: 'Genius Potion',                    
                            description: "Sure, you could study hard to get smarter.  Or ... just take this potion!",
                            value: '+17 intelligence',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 0, 
                            intelligence: 17,
                            price: 11000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_oddities/Oddities_potion_3.png'),
                        },
                    )
                } else if (val<=21) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'smart',
                            itemShop: 'Oddities',
                            name: 'Prodigy Potion',                    
                            description: "Sure, you could study hard to get smarter.  Or ... just take this potion!",
                            value: '+40 intelligence',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 0, 
                            intelligence: 40,
                            price: 24000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_oddities/Oddities_potion_4.png'),
                        },
                    )
                } else if (val<=22) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'manaing',
                            itemShop: 'Magic',
                            name: "Lesser Mana potion",
                            description: 'Drink this to recover from mana fatigue',
                            value: '+5 mana',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 5,
                            intelligence: 0,
                            price: 200,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_magic/Magic_potion_1.png'),
                        },
                    )
                } else if (val<=23) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'manaing',
                            itemShop: 'Magic',
                            name: "Mana potion",
                            description: 'Drink this to recover from mana fatigue',
                            value: '+20 mana',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 20,
                            intelligence: 0,
                            price: 600,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_magic/Magic_potion_2.png'),
                        },
                    )
                } else {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'manaing',
                            itemShop: 'Magic',
                            name: "Greater Mana potion",
                            description: 'Drink this to recover from mana fatigue',
                            value: '+50 mana',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 50,
                            intelligence: 0,
                            price: 1000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/village_magic/Magic_potion_3.png'),
                        },
                    )
                }
            }

        }
    })