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
                                life: this.getRandomValue(5,50),
                                mana: this.getRandomValue(5,30),
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
                                mana: -3,
                                intelligence: -3,
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
                else if (this.monsterId === 'forest_monster4') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Werewolf Pelt',
                                description:"Surprisingly soft!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_helm',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Wolf Hood',
                                description:"Looks fearsome.",
                                value: '?',
                                attack: 13,
                                defense: 20,
                                strength: 0,
                                life: 0,
                                mana: 0,
                                intelligence: this.getRandomValue(2,20),
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getForestGems();
                    }
                } 
                else if (this.monsterId === 'forest_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Glowing Eyes',
                            description:"Even dead, the eyes still glow!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_5_treasure.png'), 
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
                                name: 'Grim Owl Feather',
                                description:"Would a feather as cold as ice keep a creature warm?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Dark Energy',
                                description:"Should I really be holding this?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_5_treasure3.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getForestHerbs();
                    }
                } 
                else if (this.monsterId === 'forest_monster6') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Blessed Wreath",
                            description:"Should I put it on?",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(1,27),
                            strength: 0,
                            life: 14,
                            mana: 14,
                            intelligence: this.getRandomValue(1,20),
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_6_treasure.png'), 
                        }
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'defense',
                                itesmShop: 'null',
                                name: "Guardian's Fruit",
                                description:"So juicy!",
                                value: '?',
                                attack: 0,
                                defense: 20,
                                strength: 0,
                                life: 0,
                                mana: 0,
                                intelligence: null,
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Woodlands Staff',
                                description:"It's really light!",
                                value: '?',
                                attack: 30,
                                defense: 10,
                                strength: 0,
                                life: 30,
                                mana: 30,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_6_treasure3.png'), 
                            }
                        )
                    }
                    this.getForestGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getForestHerbs();
                    } else (this.getForestGems())
                } 
                else if (this.monsterId === 'forest_monster7') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Vampire Ashes",
                            description:"Do I even want to know what someone does with these?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_boots',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Dark Boots",
                            description:"Sexy and supportive!",
                            value: '?',
                            attack: 30,
                            defense: 50,
                            strength: 8,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_7_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,4);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Vampiric Blade',
                                description:"It's so sharp just looking at it makes me bleed!",
                                value: '?',
                                attack: 60,
                                defense: 2,
                                strength: 8,
                                life: -12,
                                mana: 0,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Fresh Blood',
                                description:"Eew.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_7_treasure4.png'), 
                            }
                        )
                    } else {
                        const val2 = this.getRandomValue(1,4);
                        if (val2 <= 1) {
                            this.getForestGems();
                            this.getForestGems();
                        } else if (val2 <=2) {
                            this.getForestHerbs();
                            this.getForestHerbs();
                        } else (this.getForestGems(), this.getForestHerbs())
                    }
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'forest_monster8') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Nine Tails",
                            description:"How does anything walk around with this dragging behind them?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Elegant Kimono",
                            description:"Sure, it's pretty.  But how does it work in battle?",
                            value: '?',
                            attack: 0,
                            defense: 65,
                            strength: 0,
                            life: 50,
                            mana: 50,
                            intelligence: 15,
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_8_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'multi',
                                itesmShop: 'null',
                                name: 'Kitsune Udon',
                                description:"Guess I'm not the only one who walks around with bowls of soup.",
                                value: '?',
                                attack: 2,
                                defense: 2,
                                strength: 2,
                                life: 2,
                                mana: 2,
                                intelligence: 2,
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Mist of Confusion',
                                description:"What is even happening anymore?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_8_treasure4.png'), 
                            }
                        )
                    }
                    this.getForestGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getForestHerbs();
                    }
                } 
                else if (this.monsterId === 'forest_monster9') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Cursed chicken's Foot",
                            description:"It doesn't look particularly cursed...",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Dark Feathered Cloak",
                            description:"So cozy!",
                            value: '?',
                            attack: 0,
                            defense: 28,
                            strength: 3,
                            life: -2,
                            mana: 18,
                            intelligence: 6,
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_9_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Crooked Staff',
                                description:"Errr ... is it me or is this thing making noises?",
                                value: '?',
                                attack: 60,
                                defense: 12,
                                strength: 1,
                                life: -10,
                                mana: -10,
                                intelligence: 13,
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Dark Pot',
                                description:"I don't even want to know what they cooked in this thing.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/forest/forest_monster_9_treasure4.png'), 
                            }
                        )
                    }
                    this.getForestHerbs();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: 'Skull of the Innocent',
                                description: "Don't be human!  Don't be human!  Don't be ... danggit!",
                                value: '?',
                                price: 1800,
                                imageSrc: require('../assets/images/forest/forest_monster_9_treasure5.png'),
                              },
                        )
                    } else (this.getForestGems())
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'forest_monster10') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'null',
                            name: "Forest God's Skull",
                            description: 'I think the antlers are still growing.',
                            value: '?',
                            price: 1800,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/forest/forest_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Fallen Petals",
                            description:"How do they smell fresh and rotten at the same time?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Forest God Pelt",
                            description:"I can't imagine that anything made from this wouldn't be cursed.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Sparks of Dawn",
                            description:"Shiny",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Fruit of Life",
                            description:"Will this heal me or hurt me if I ate it?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/forest/forest_monster_10_treasure5.png'), 
                        },
                    )
                    this.getForestGems();
                    this.getForestGems();
                    this.getForestGems();
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_helm',
                                itemUse: 'null',
                                itemShop: 'Magic',
                                name: "Forest Crown",
                                description: "Does wearing this make me ruler of the forest?",
                                value: '?',
                                attack: -2,
                                defense: -2,
                                strength: -2,
                                life: 30,
                                mana: 50,
                                intelligence: 28,
                                price: 600,
                                imageSrc: require('../assets/images/forest/forest_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_armor',
                                itemUse: 'null',
                                itemShop: 'Magic',
                                name: "Forest Cloak",
                                description: 'Is green really my color?',
                                value: '?',
                                attack: 0,
                                defense: 20,
                                strength: 20,
                                life: 20,
                                mana: 20,
                                intelligence: 0,
                                price: 600,
                                imageSrc: require('../assets/images/forest/forest_monster_10_treasure7.png'), 
                            }
                        )
                    }
                    this.getForestHerbs();
                    this.getForestHerbs();                    
                    this.getPotionDrop();
                    this.getPotionDrop();
                    this.getPotionDrop();
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
                    const val = this.getRandomValue(1,4);
                    if (val <= 1) {
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
                                defense: this.getRandomValue(1,10),
                                strength: 0,
                                life: this.getRandomValue(1,15),
                                intelligence: 0,
                                mana: 0,
                                price: 700,
                                imageSrc: require('../assets/images/grassland/grassland_monster_3_treasure.png'), 
                            },
                        );
                    } else if (val <=2) {
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
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_armor',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Goblin-made armor',
                                description:"It's not pretty, but oh my it is strong!",
                                value: '?',
                                attack: this.getRandomValue(1,8),
                                defense: this.getRandomValue(10,25),
                                strength: 1,
                                life: 0,
                                mana: 0,
                                intelligence: 0,
                                price: 700,
                                imageSrc: require('../assets/images/grassland/grassland_monster_3_treasure3.png'), 
                            },
                        )
                    }
                } 
                else if (this.monsterId === 'grassland_monster4') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Barrows Silk',
                                description:"Sticks to everything but itself",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Barrows Spider Eyes',
                                description:"Every single one of them is still looking at me.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getGrasslandGems();
                    }
                } 
                else if (this.monsterId === 'grassland_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Reaper Sword',
                            description:"Something tells me the centaurs didn't use this to reap grass.",
                            value: '?',
                            attack: this.getRandomValue(5,30),
                            defense: 0,
                            strength: 0,
                            life: this.getRandomValue(5,20),
                            mana: 0,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_5_treasure.png'), 
                        }
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_shield',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Reed Shield',
                                description:"You wouldn't think grass would be very good at protecting anything, but ... ",
                                value: '?',
                                attack: 0,
                                defense: this.getRandomValue(5,30),
                                strength: this.getRandomValue(1,3),
                                life: this.getRandomValue(1,25),
                                mana: 0,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'horse_bag',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: "Centaur's Bags",
                                description:"Very organized",
                                carryBonus: 8,
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_5_treasure3.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getGrasslandHerbs();
                    }
                } 
                else if (this.monsterId === 'grassland_monster6') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Soul Stone",
                            description:"Was the banshee screaming, or was it just this stone making that noise?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_6_treasure.png'), 
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
                                name: "Banshee Tears",
                                description:"Not liquid ... what is that?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Banshee claws',
                                description:"The better to grip you with, my dear!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_6_treasure3.png'), 
                            }
                        )
                    }
                    this.getGrasslandGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getGrasslandHerbs();
                    } else (this.getGrasslandGems())
                } 
                else if (this.monsterId === 'grassland_monster7') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Ghoul Skin",
                            description:"So fragile, it falls apart just touching it.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Ghoul Claws",
                            description:"Sharp and oh so gross.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_7_treasure2.png'), 
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
                                name: 'Rotten Meat',
                                description:"There's no telling what this used to be.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Dead Devouring Stone',
                                description:"Why would anyone want one of these?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_7_treasure4.png'), 
                            }
                        )
                    } else {
                        const val2 = this.getRandomValue(1,4);
                        if (val2 <= 1) {
                            this.getGrasslandGems();
                            this.getGrasslandGems();
                        } else if (val2 <=2) {
                            this.getGrasslandHerbs();
                            this.getGrasslandHerbs();
                        } else (this.getGrasslandGems(), this.getGrasslandHerbs())
                    }
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'grassland_monster8') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Cockatrice Leather",
                            description:"Red and leathery",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'manaing',
                            itesmShop: 'null',
                            name: "Cockatrice Egg",
                            description:"I wonder if it tastes like chicken?",
                            value: '?',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 50,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_8_treasure2.png'), 
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
                                name: 'Cockatrice Foot',
                                description:"Vicious.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Cockatrice Eye',
                                description:"Wait, did that one just blink?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_8_treasure4.png'), 
                            }
                        )
                    }
                    this.getGrasslandGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getGrasslandHerbs();
                    }
                } 
                else if (this.monsterId === 'grassland_monster9') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Unicorn Horn",
                            description:"So much sharper than it looks",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Unicorn Hair",
                            description:"It really was a horse of many colors!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_9_treasure2.png'), 
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
                                name: 'Unicorn Spirit Shoes',
                                description:"Forget the horse, I want to wear these!",
                                value: '?',
                                carryBonus: 50,
                                attack: 5,
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Rainbow Essence',
                                description:"Looks like bubblebath.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_9_treasure4.png'), 
                            }
                        )
                    }
                    this.getGrasslandHerbs();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_belt',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: 'Belt of Many Colors',
                                description: "Now I can be as colorful as a unicorn!",
                                value: '?',
                                attack: 0,
                                defense: 15,
                                strength: 2,
                                life: 6,
                                mana: 12,
                                intelligence: 0,
                                price: 1800,
                                imageSrc: require('../assets/images/grassland/grassland_monster_9_treasure5.png'),
                              },
                        )
                    } else (this.getGrasslandGems())
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'grassland_monster10') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'null',
                            name: "Chimera venom",
                            description: 'I feel dizzy just smeling this stuff.',
                            value: '?',
                            price: 1800,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Chimera Hide",
                            description:"Huh.  Even the lion parts of it were scaled.  Is a chimera a reptile?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Clawed Hoof",
                            description:"It can really grip the ground with these things!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Chimera Egg",
                            description:"Looks like an evil avocado, tastes like an evil chicken.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Chimera Armor",
                            description:"Warm and suprisingly snuggly armor",
                            value: '?',
                            attack: 10,
                            defense: 15,
                            strength: 2,
                            life: 0,
                            mana: 8,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure5.png'), 
                        },
                    )
                    this.getGrasslandGems();
                    this.getGrasslandGems();
                    this.getGrasslandGems();
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: "Sword of Might",
                                description: "This sword is literally bigger than me.",
                                value: '?',
                                attack: 18,
                                defense: 5,
                                strength: 0,
                                life: 10,
                                mana: 20,
                                intelligence: 0,
                                price: 600,
                                imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_gloves',
                                itemUse: 'null',
                                itemShop: 'Magic',
                                name: "Golden Gloves",
                                description: 'Very fashionable',
                                value: '?',
                                attack: 0,
                                defense: 12,
                                strength: 1,
                                life: 0,
                                mana: 20,
                                intelligence: 0,
                                price: 600,
                                imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure7.png'), 
                            }
                        )
                    }
                    this.getGrasslandHerbs();
                    this.getGrasslandHerbs();                    
                    this.getPotionDrop();
                    this.getPotionDrop();
                    this.getPotionDrop();
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
                                name: 'Gem of the Jungle',
                                description:"Sparkles green even in the dark",
                                value: '?',
                                price: 1000,
                                imageSrc: require('../assets/images/jungle/jungle_gem_1.png'), 
                            }
                        )
                    }
                } 
                else if (this.monsterId === 'jungle_monster4') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Oliphant Hide',
                                description:"Wow, this stuff is thick!  No wonder my sword had such trouble.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'OliMoss',
                                description:"I wonder if this grows ON them, or FROM them?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getJungleGems();
                    }
                } 
                else if (this.monsterId === 'jungle_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Dire Moth Wings',
                            description:"Awfully pretty.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_5_treasure.png'), 
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
                                name: 'Dire Moth Eggs',
                                description:"How did they even lay this thing?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: "Jungle Sickness",
                                description:"Nasty stuff",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_5_treasure3.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    console.log('val2 = ' + val2);
                    if (val2 <= 1) {
                        this.getJungleHerbs();
                    }
                } 
                else if (this.monsterId === 'jungle_monster6') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Bonecrusher Scales",
                            description:"Scratchy",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_6_treasure.png'), 
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
                                name: "Crushing Fangs",
                                description:"As opposed to stabby fangs?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Digested Bone',
                                description:"I'm not sure I'm getting paid enough to touch this stuff.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_6_treasure3.png'), 
                            }
                        )
                    }
                    this.getJungleGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getJungleHerbs();
                    } else (this.getJungleGems())
                } 
                else if (this.monsterId === 'jungle_monster7') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_belt',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Clawed Belt",
                            description:"It jangles while you walk!",
                            value: '?',
                            attack: 0,
                            defense: 18,
                            strength: 0,
                            life: 0,
                            mana: 14,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Massive Wooden Club",
                            description:"OMG this thing is heavy!",
                            value: '?',
                            attack: 24,
                            defense: 6,
                            strength: -2,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_7_treasure2.png'), 
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
                                name: 'Cyclops Eye',
                                description:"This would look wicked sitting on my mantle!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_vambraces',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Strapped for Strength Bracers',
                                description:"I feel stronger already!",
                                value: '?',
                                attack: 0,
                                defense: 7,
                                strength: 5,
                                life: 0,
                                mana: 0,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_7_treasure4.png'), 
                            }
                        )
                    } else {
                        const val2 = this.getRandomValue(1,4);
                        if (val2 <= 1) {
                            this.getJungleGems();
                            this.getJungleGems();
                        } else if (val2 <=2) {
                            this.getJungleHerbs();
                            this.getJungleHerbs();
                        } else (this.getJungleGems(), this.getJungleHerbs())
                    }
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'jungle_monster8') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Elfin Ears",
                            description:"I feel almost bad for the elf",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_vambraces',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Elfin Arm Cuffs",
                            description:"They don't look very protective, but magic!",
                            value: '?',
                            attack: 4,
                            defense: 16,
                            strength: 1,
                            life: 0,
                            mana: 13,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_8_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Dark Dagger',
                                description:"It will cut you",
                                value: '?',
                                attack: 23,
                                defense: 0,
                                strength: 0,
                                life: 6,
                                mana: 6,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_boots',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Forest Elf Boots',
                                description:"Reeeaaallly stretching the definition of 'boots' here ... ",
                                value: '?',
                                attack: 0,
                                defense: 14,
                                strength: 1,
                                life: 13,
                                mana: 12,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_8_treasure4.png'), 
                            }
                        )
                    }
                    this.getJungleGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getJungleHerbs();
                    }
                } 
                else if (this.monsterId === 'jungle_monster9') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Demon's Teeth",
                            description:"The better to bite you with!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Oni Horns",
                            description:"Grind them up and put them in a potion!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_9_treasure2.png'), 
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
                                name: 'Cursed stone',
                                description:"Wait.  If it's cursed, is it even safe for me to carry this thing?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Demonic Dagger',
                                description:"I'm sure it's perfectly fine if I use this.",
                                value: '?',
                                attack: 26,
                                defense: 4,
                                strength: -1,
                                life: -8,
                                mana: 6,
                                intelligence: 6,
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_9_treasure4.png'), 
                            }
                        )
                    }
                    this.getJungleHerbs();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: 'Oni Mask',
                                description: "Right ... mask.  It's just a mask ...",
                                value: '?',
                                price: 1800,
                                imageSrc: require('../assets/images/jungle/jungle_monster_9_treasure5.png'),
                              },
                        )
                    } else (this.getJungleGems())
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'jungle_monster10') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itemShop: 'null',
                            name: "Golden Dragon Helm",
                            description: 'Protects everything while scaring your enemies',
                            value: '?',
                            attack: 0,
                            defense: 23,
                            strength: 0,
                            life: 8,
                            mana: 8,
                            intelligence: 8,
                            price: 1800,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Golden Dragon Leather",
                            description:"I think this might actually have bits of gold in it!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Golden Dragon's Armor",
                            description:"My enemies will see me coming for them from a mile away",
                            value: '?',
                            attack: 6,
                            defense: 14,
                            strength: 3,
                            life: 0,
                            mana: 10,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_gloves',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Enchanted Golden Gauntlets",
                            description:"Not sure what they do, but they're pretty while they do it!",
                            value: '?',
                            attack: 8,
                            defense: 12,
                            strength: 6,
                            life: 8,
                            mana: 8,
                            intelligence: 8,
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_shield',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Golden Dragon's Shield",
                            description:"If nothing else, you can blind your enemies with this shield!",
                            value: '?',
                            attack: 4,
                            defense: 26,
                            strength: 0,
                            life: 10,
                            mana: 18,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure5.png'), 
                        },
                    )
                    this.getJungleGems();
                    this.getJungleGems();
                    this.getJungleGems();
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: "Golden Dragon's Egg",
                                description: "It's an egg.  Got a dragon inside, probably.",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic',
                                name: "Golden Dragon's Heart",
                                description: 'A literal heart of gold',
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure7.png'), 
                            }
                        )
                    }
                    this.getJungleHerbs();
                    this.getJungleHerbs();                    
                    this.getPotionDrop();
                    this.getPotionDrop();
                    this.getPotionDrop();
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
                                mana: 0,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_2_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'marshes_monster3') {
                    const val = this.getRandomValue(1,3);
                    console.log('random loot num = ' + val);
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
                else if (this.monsterId === 'marshes_monster4') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Sticky Tongue',
                                description:"Gross",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Spawn',
                                description:"Useful for multiplying magics.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getMarshesGems();
                    }
                } 
                else if (this.monsterId === 'marshes_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Venomous Lotus',
                            description:"Venomous.  Not poisonous.  There's teeth.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_5_treasure.png'), 
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
                                name: 'Ruskala beads',
                                description:"I think they're made of wood?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: "Souls of Men",
                                description:"TFW Necromancers are letting monsters do their dirty work for them",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_5_treasure3.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    console.log('val2 = ' + val2);
                    if (val2 <= 1) {
                        this.getMarshesHerbs();
                    }
                } 
                else if (this.monsterId === 'marshes_monster6') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Harpie Wings",
                            description:"Awww, they're so soft!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_6_treasure.png'), 
                        }
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_necklace',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: "Lady's Collar",
                                description:"You don't have to be a lady to wear this",
                                value: '?',
                                attack: 0,
                                defense: 14,
                                strength: 2,
                                life: 13,
                                mana: 0,
                                intelligence: 8,
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Harpie Egg',
                                description:"Pretty in pink",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_6_treasure3.png'), 
                            }
                        )
                    }
                    this.getMarshesGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getMarshesHerbs();
                    } else (this.getMarshesGems())
                } 
                else if (this.monsterId === 'marshes_monster7') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Sword of Shadows",
                            description:"Good luck finding it again if you drop it",
                            value: '?',
                            attack: 26,
                            defense: 5,
                            strength: 0,
                            life: -3,
                            mana: 14,
                            intelligence: 2,
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Dark Hood",
                            description:"Whoever wears this is basically invisible!",
                            value: '?',
                            attack: 12,
                            defense: 12,
                            strength: 0,
                            life: -2,
                            mana: 12,
                            intelligence: 6,
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_7_treasure2.png'), 
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
                                name: 'Ectoplasma',
                                description:"Glows in the dark!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Dark Fog',
                                description:"Gives me the creeps.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_7_treasure4.png'), 
                            }
                        )
                    } else {
                        const val2 = this.getRandomValue(1,4);
                        if (val2 <= 1) {
                            this.getMarshesGems();
                            this.getMarshesGems();
                        } else if (val2 <=2) {
                            this.getMarshesHerbs();
                            this.getMarshesHerbs();
                        } else (this.getMarshesGems(), this.getMarshesHerbs())
                    }
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'marshes_monster8') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'horse_saddle',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Waterlogged Saddle",
                            description:"Carries lots, but nothing will stay dry.",
                            value: '?',
                            carryBonus: 70,
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Kelpie Hair",
                            description:"Looks like seaweed, but sure doesn't smell like it.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_8_treasure2.png'), 
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
                                name: 'Kelpie Jaw',
                                description:"That thing had a serious case of underbite.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Gill Fronds',
                                description:"Useful if you want to breathe water, I guess.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_8_treasure4.png'), 
                            }
                        )
                    }
                    this.getMarshesGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getMarshesHerbs();
                    }
                } 
                else if (this.monsterId === 'marshes_monster9') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Water Knight's Sword",
                            description:"An elegant blade",
                            value: '?',
                            attack: 27,
                            defense: 14,
                            strength: 0,
                            life: 0,
                            mana: 5,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Water Helm",
                            description:"Protect your head and wash your hair at the same time!",
                            value: '?',
                            attack: 4,
                            defense: 18,
                            strength: 1,
                            life: 10,
                            mana: 6,
                            intelligence: 6,
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_9_treasure2.png'), 
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
                                name: 'Living Water',
                                description:"Will make you dead if you aren't careful with it.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_belt',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Belt of Water',
                                description:"Keeps you looking and feeling cool.",
                                value: '?',
                                attack: 0,
                                defense: 24,
                                strength: 0,
                                life: 0,
                                mana: 9,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_9_treasure4.png'), 
                            }
                        )
                    }
                    this.getMarshesHerbs();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: 'Crystalized Water',
                                description: "Definitely not to be confused with ice.",
                                value: '?',
                                price: 1800,
                                imageSrc: require('../assets/images/marshes/marshes_monster_9_treasure5.png'),
                              },
                        )
                    } else (this.getMarshesGems())
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'marshes_monster10') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itemShop: 'null',
                            name: "The Heron Crown",
                            description: 'Heavy is the head that wears the crown.',
                            value: '?',
                            attack: 0,
                            defense: 14,
                            strength: 5,
                            life: 18,
                            mana: 18,
                            intelligence: 18,
                            price: 1800,
                            imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Divine Feather",
                            description:"It can't be good that I killed something so holy.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Cleansing Flame",
                            description:"Don't touch it.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "King's Eggs",
                            description:"Shouldn't those be called ... you know what, nevermind.  King.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Sword of the Heron King",
                            description:"Light as a feather!",
                            value: '?',
                            attack: 24,
                            defense: 3,
                            strength: 3,
                            life: 13,
                            mana: 13,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure5.png'), 
                        },
                    )
                    this.getMarshesGems();
                    this.getMarshesGems();
                    this.getMarshesGems();
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: "Heron's Nest",
                                description: "Good for making soup",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic',
                                name: "Heron King's Ring",
                                description: 'Powerfully magic',
                                value: '?',
                                attack: 10,
                                defense: 10,
                                strength: 5,
                                life: 10,
                                mana: 25,
                                intelligence: 15,
                                price: 600,
                                imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure7.png'), 
                            }
                        )
                    }
                    this.getMarshesHerbs();
                    this.getMarshesHerbs();                    
                    this.getPotionDrop();
                    this.getPotionDrop();
                    this.getPotionDrop();
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
                                mana: 0,
                                intelligence: 0,
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
                else if (this.monsterId === 'mountain_monster4') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Gargoyle Head',
                                description:"Grotesque",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Internal Fire',
                                description:"Are gargoyles mini dragons?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getMountainGems();
                    }
                } 
                else if (this.monsterId === 'mountain_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_gloves',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Clawed Gauntlets',
                            description:"Now you can rock some wicked claws too!",
                            value: '?',
                            attack: this.getRandomValue(10,30),
                            defense: this.getRandomValue(10,30),
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 1,
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_5_treasure.png'), 
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
                                name: 'Fierce Mask',
                                description:"Wish I could wear it, but it doesn't fit my head.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: "Snow Cat Hide",
                                description:"Perfect mountain camouflage",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_5_treasure3.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    console.log('val2 = ' + val2);
                    if (val2 <= 1) {
                        this.getMountainHerbs();
                    }
                } 
                else if (this.monsterId === 'mountain_monster6') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Frozen Eye",
                            description:"As cold and hard as ice.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_6_treasure.png'), 
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
                                name: "Yeti Horns",
                                description:"How exactly am I supposed to carry these things all the way back?",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Yeti Fur',
                                description:"Would make a great carpet - after it was washed, of course.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_6_treasure3.png'), 
                            }
                        )
                    }
                    this.getMountainGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getMountainHerbs();
                    } else (this.getMountainGems())
                } 
                else if (this.monsterId === 'mountain_monster7') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Griffon Feathers",
                            description:"There's strong magics contained in these feathers.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Griffon Claws",
                            description:"These things better not poke holes in my bags",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_7_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,4);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_necklace',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Griffon Talisman',
                                description:"It even has a little griffon on it!  In case I forget where I got it.",
                                value: '?',
                                attack: 6,
                                defense: 6,
                                strength: 4,
                                life: 30,
                                mana: 30,
                                intelligence: 6,
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Griffon Egg',
                                description:"Aww, I think it's peeping!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_7_treasure4.png'), 
                            }
                        )
                    } else {
                        const val2 = this.getRandomValue(1,4);
                        if (val2 <= 1) {
                            this.getMountainGems();
                            this.getMountainGems();
                        } else if (val2 <=2) {
                            this.getMountainHerbs();
                            this.getMountainHerbs();
                        } else (this.getMountainGems(), this.getMountainHerbs())
                    }
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'mountain_monster8') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Dire Eagle's Feathers",
                            description:"What is it with these mountains and giant birds?",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Eagle Steaks",
                            description:"This would be delicious grilled with some salt and mountain herbs!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_8_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'horse_bag',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: "Mountaineer's Saddlebags",
                                description: "Holds tons of stuff, so long as you don't mind a few bloodstains.",
                                value: '?',
                                carryBonus: 200,
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Mighty Storm',
                                description:"The eagle stored the magic in its wings!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_8_treasure4.png'), 
                            }
                        )
                    }
                    this.getMountainGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getMountainHerbs();
                    }
                } 
                else if (this.monsterId === 'mountain_monster9') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Ice Giant's Heart",
                            description:"Pretty for an organ",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Great Horned Helm",
                            description:"Odd magics make sure this helmet always fits perfectly",
                            value: '?',
                            attack: 4,
                            defense: 12,
                            strength: 1,
                            life: 10,
                            mana: 16,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_9_treasure2.png'), 
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
                                name: 'Trophy Skull',
                                description:"Was their trophy.  Now it's mine!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Iced Battle Axe',
                                description:"Make sure you wear thick gloves while swinging this thing around.",
                                value: '?',
                                attack: 30,
                                defense: 0,
                                strength: -2,
                                life: 20,
                                mana: 0,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/mountains/mountain_monster_9_treasure4.png'), 
                            }
                        )
                    }
                    this.getMarshesHerbs();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: 'Blue Ice Crystal',
                                description: "Definitely not to be confused with not being ice ... ",
                                value: '?',
                                price: 1800,
                                imageSrc: require('../assets/images/mountains/mountain_monster_9_treasure5.png'),
                              },
                        )
                    } else (this.getMountainGems())
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'mountain_monster10') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_shield',
                            itemUse: 'null',
                            itemShop: 'null',
                            name: "Iron Dragon's Shield",
                            description: "I'd like to see anything try and get through this!",
                            value: '?',
                            attack: 0,
                            defense: 34,
                            strength: 1,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 1800,
                            imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Iron Dragon Scales",
                            description:"Gods, these things weigh a ton!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Iron Dragon's Mask",
                            description:"Wear it and breathe dragon's fire yourself!",
                            value: '?',
                            attack: 15,
                            defense: 15,
                            strength: 5,
                            life: 15,
                            mana: 20,
                            intelligence: 8,
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Iron Dragon's Hide",
                            description:"Light weight and strong.  Good for making armor.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Iron Dragon's Heart",
                            description:"Heavy as lead.  Might actually be made of lead.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure5.png'), 
                        },
                    )
                    this.getMountainGems();
                    this.getMountainGems();
                    this.getMountainGems();
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: "Dragon's Fire",
                                description: "Extremely volatile magic",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic',
                                name: "Heart of the Mountains",
                                description: "Don't let the dwarves know you have this ... ",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure7.png'), 
                            }
                        )
                    }
                    this.getMountainHerbs();
                    this.getMountainHerbs();                    
                    this.getPotionDrop();
                    this.getPotionDrop();
                    this.getPotionDrop();
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
                else if (this.monsterId === 'swamp_monster4') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Creeper Sap',
                                description:"OMG so gross!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Vine Creeper Ear',
                                description:"Good for spells where the magic needs to hear the magician's words",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getMountainGems();
                    }
                } 
                else if (this.monsterId === 'swamp_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Bunyip Tusks',
                            description:"Not sure what they're used for, but they're worth a small fortune",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/swamp/swamp_monster_5_treasure.png'), 
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
                                name: 'Bunyip Fur',
                                description:"Looks soft, but feels like sandpaper",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: "Bunyip Eye",
                                description:"Glows so they can see in the murky water",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_5_treasure3.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    console.log('val2 = ' + val2);
                    if (val2 <= 1) {
                        this.getSwampHerbs();
                    }
                } 
                else if (this.monsterId === 'swamp_monster6') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Vine Whip",
                            description: "Will take your skin right off",
                            value: '?',
                            attack: this.getRandomValue(8,30),
                            defense: 0,
                            strength: 0,
                            life: this.getRandomValue(5,25),
                            mana: 0,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_6_treasure.png'), 
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
                                name: "Wood Nymph Bark",
                                description:"Adds emotional impact to spells",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_belt',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: "Wood Nymph's Girdle",
                                description:"Practical and pretty!",
                                value: '?',
                                attack: 0,
                                defense: 17,
                                strength: 2,
                                life: 16,
                                mana: 12,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_6_treasure3.png'), 
                            }
                        )
                    }
                    this.getSwampGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getSwampHerbs();
                    } else (this.getSwampGems())
                } 
                else if (this.monsterId === 'swamp_monster7') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Killer Croc Leather",
                            description:"Killer leather for killer boots.",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Killer Croc Foot",
                            description:"I bet I could open just all the stubborn potions bottles with this",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_7_treasure2.png'), 
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
                                name: 'Brainfruit',
                                description:"I bet eating this is what made this monster so weirdly clever!",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Killer Croc Teeth',
                                description:"Makes me want to decorate everything I own with teeth",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_7_treasure4.png'), 
                            }
                        )
                    } else {
                        const val2 = this.getRandomValue(1,4);
                        if (val2 <= 1) {
                            this.getSwampGems();
                            this.getSwampGems();
                        } else if (val2 <=2) {
                            this.getSwampHerbs();
                            this.getSwampHerbs();
                        } else (this.getSwampGems(), this.getSwampHerbs())
                    }
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'swamp_monster8') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Grootslang Hide",
                            description:"Very surprisingly colorful",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Grootslang Tentacle",
                            description:"Ouch!  Those little suckers have teeth hiding in them!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_8_treasure2.png'), 
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
                                name: "Grootslang Spines",
                                description: "Pretty sure there's toxins in these.  Best be careful",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Delusion Stone',
                                description:"It must have taken some messed up magic to make such a messed up monster",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_8_treasure4.png'), 
                            }
                        )
                    }
                    this.getSwampGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getSwampHerbs();
                    }
                } 
                else if (this.monsterId === 'swamp_monster9') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Green Dragon Scales",
                            description:"Ugh!  They're like glitter!  I've got scales stuck everywhere!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_gloves',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Moss Dragon Gloves",
                            description:"The inside of the gloves are lined with soft moss",
                            value: '?',
                            attack: 0,
                            defense: 10,
                            strength: 4,
                            life: 0,
                            mana: 10,
                            intelligence: 0,
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_9_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Moss Blade',
                                description:"Who knew moss could be so sharp!",
                                value: '?',
                                attack: 40,
                                defense: 10,
                                strength: 0,
                                life: 0,
                                mana: 0,
                                intelligence: 0,
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Moss Dragon Horns',
                                description:"Looks like the dragon kept every set of horns it ever shed.",
                                value: '?',
                                price: 500,
                                imageSrc: require('../assets/images/swamp/swamp_monster_9_treasure4.png'), 
                            }
                        )
                    }
                    this.getSwampHerbs();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: 'Orb of Visions',
                                description: "What will you see when you gaze into the orb? ",
                                value: '?',
                                price: 1800,
                                imageSrc: require('../assets/images/swamp/swamp_monster_9_treasure5.png'),
                              },
                        )
                    } else (this.getSwampGems())
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'swamp_monster10') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'null',
                            name: "Hydra's Blade",
                            description: "The best blade for killing a hydra is made from a Hydra.",
                            value: '?',
                            attack: 30,
                            defense: 24,
                            strength: 5,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 1800,
                            imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Hydra Fins",
                            description:"Smells like fish",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Hydra Head",
                            description:"So help me, this thing better not multiply again!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Hydra Steak",
                            description:"Turnabout is fair play!  Nom nom nom!",
                            value: '?',
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Hydra's Armor",
                            description:"Now you can look like a hydra!  If your opponent really squints their eyes, anyway.",
                            value: '?',
                            attack: 0,
                            defense: 14,
                            strength: 0,
                            life: 10,
                            mana: 10,
                            intelligence: 2,
                            price: 500,
                            imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure5.png'), 
                        },
                    )
                    this.getSwampGems();
                    this.getSwampGems();
                    this.getSwampGems();
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: "Angry Water Magic",
                                description: "Hostile and dangerous magic",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'null',
                                name: "Spirit of Wrath",
                                description: "Just how am I supposed to transport this back with me?",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure7.png'), 
                            }
                        )
                    }
                    this.getSwampHerbs();
                    this.getSwampHerbs();                    
                    this.getPotionDrop();
                    this.getPotionDrop();
                    this.getPotionDrop();
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

            getForestGems() {
                const val = this.getRandomValue(1,4);
                console.log('random gem number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Moss Gem',
                            description: "What a strange texture.",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/forest/forest_gem_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Forest Gem',
                            description: "What would bioluminescence in a stone be called?",
                            value: '?',
                            price: 3000,
                            imageSrc: require('../assets/images/forest/forest_gem_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Emerald',
                            description: "It's so green!",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/forest/forest_gem_3.png')
                        }
                    )
                }
            },

            getGrasslandGems() {
                const val = this.getRandomValue(1,4);
                console.log('random gem number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Grass Crystal',
                            description: "Looks like frozen hay!",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/grassland/grassland_gem_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Topaz',
                            description: "Golden and shiny",
                            value: '?',
                            price: 3000,
                            imageSrc: require('../assets/images/grassland/grassland_gem_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Yellow Diamond',
                            description: "This would look stunning on my horse!",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/grassland/grassland_gem_3.png')
                        }
                    )
                }
            },

            getJungleGems() {
                const val = this.getRandomValue(1,4);
                console.log('random gem number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Gem of the Jungle',
                            description: "Sparkles green even in the dark.",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/jungle/jungle_gem_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Jade',
                            description: "Cooling to the eyes, warm to the touch",
                            value: '?',
                            price: 3000,
                            imageSrc: require('../assets/images/jungle/jungle_gem_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Heart of the Jungle',
                            description: "So pink!",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/jungle/jungle_gem_3.png')
                        }
                    )
                }
            },

            getMarshesGems() {
                const val = this.getRandomValue(1,4);
                console.log('random gem number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Gem of the Dead',
                            description: "Wonder why it's called that?",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/marshes/marshes_gem_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Mist Stone',
                            description: "Formed from the fog itself",
                            value: '?',
                            price: 3000,
                            imageSrc: require('../assets/images/marshes/marshes_gem_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Aqua Gem',
                            description: "As clear as the waters of the marshes",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/marshes/marshes_gem_3.png')
                        }
                    )
                }
            },

            getMountainGems() {
                const val = this.getRandomValue(1,4);
                console.log('random gem number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Moondrop',
                            description: "Glows even more in the moonlight",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/mountains/mountain_gem_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Granite Gem',
                            description: "Hard enough to be a weapon, pretty enough to be a gem.",
                            value: '?',
                            price: 3000,
                            imageSrc: require('../assets/images/mountains/mountain_gem_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Sapphire',
                            description: "As impossibly blue as the sky above the mountains.",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/mountains/mountain_gem_3.png')
                        }
                    )
                }
            },

            getSwampGems() {
                const val = this.getRandomValue(1,4);
                console.log('random gem number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Larsonite',
                            description: "Kinda looks like a pretty version of swamp water",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/swamp/swamp_gem_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Pearls',
                            description: "These were hidden beneath all the muck.",
                            value: '?',
                            price: 3000,
                            imageSrc: require('../assets/images/swamp/swamp_gem_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: "Gods' Moss",
                            description: "The gods do seem very fond of the color green.",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/swamp/swamp_gem_3.png')
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

            getForestHerbs() {
                const val = this.getRandomValue(1,4);
                console.log('random herb number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Curly Fern',
                            description: "Looks good enough to eat!",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/forest/forest_herb_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Forest Ginseng',
                            description: "Rare and invaluable",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/forest/forest_herb_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Datura',
                            description: "Not to be confused with its non-poisonous cousin",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/forest/forest_herb_3.png')
                        }
                    )
                }
            },

            getGrasslandHerbs() {
                const val = this.getRandomValue(1,4);
                console.log('random herb number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Elder Oats',
                            description: "I think I had some of these for breakfast earlier?",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/grassland/grassland_herb_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Wild-eyed Daisy',
                            description: "They seem pretty domesticated to me?",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/grassland/grassland_herb_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Saproot',
                            description: "Smells spicy",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/grassland/grassland_herb_3.png')
                        }
                    )
                }
            },

            getJungleHerbs() {
                const val = this.getRandomValue(1,4);
                console.log('random herb number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Sweeter Fruit',
                            description: "Take it from me, do NOT eat the peel!",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/jungle/jungle_herb_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Monster Leaf',
                            description: "Useful for magics that weaken certain monsters.",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/jungle/jungle_herb_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Oil Plant',
                            description: "Don't get this stuff on your skin.",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/jungle/jungle_herb_3.png')
                        }
                    )
                }
            },

            getMarshesHerbs() {
                const val = this.getRandomValue(1,4);
                console.log('random herb number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Marsh Mallow',
                            description: "Wonder what happens if you flame roast it?",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/marshes/marshes_herb_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Cat Reed',
                            description: "A powerful herb in water magics.",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/marshes/marshes_herb_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Lily pad',
                            description: "Good in salads and for floating above troubled waters.",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/marshes/marshes_herb_3.png')
                        }
                    )
                }
            },

            getMountainHerbs() {
                const val = this.getRandomValue(1,4);
                console.log('random herb number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Wolfsbane',
                            description: "Guess that's why there aren't any wolves in these parts.",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/mountains/mountain_herb_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Edelwiss',
                            description: "Nostalgic and useful in healing potions.",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/mountains/mountain_herb_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Goldenrod',
                            description: "Looks similar, but not the weed that makes you sneeze.",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/mountains/mountain_herb_3.png')
                        }
                    )
                }
            },

            getSwampHerbs() {
                const val = this.getRandomValue(1,4);
                console.log('random herb number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Tree Moss',
                            description: "Grows on trees, useful in potions.",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/swamp/swamp_herb_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Duckweed',
                            description: "Adds stability to water-based magics.",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/swamp/swamp_herb_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itesmShop: 'null',
                            name: 'Tree Knees',
                            description: "Not to be mistaken with the very similiar 'bees knees'.",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/swamp/swamp_herb_3.png')
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