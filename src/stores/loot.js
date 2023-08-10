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
                    this.monsterId === 'swamp_monster3' ||
                    this.monsterId === 'farmland_monster1' ||
                    this.monsterId === 'farmland_monster2' ||
                    this.monsterId === 'farmland_monster3' ||
                    this.monsterId === 'beach_monster1' ||
                    this.monsterId === 'beach_monster2' ||
                    this.monsterId === 'beach_monster3' 
                    ) {
                        const val = this.getRandomValue(1,100);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/allpurpose/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster4' ||
                    this.monsterId === 'forest_monster4' ||
                    this.monsterId === 'grassland_monster4' ||
                    this.monsterId === 'jungle_monster4' ||
                    this.monsterId === 'marshes_monster4' ||
                    this.monsterId === 'mountain_monster4' ||
                    this.monsterId === 'swamp_monster4' ||
                    this.monsterId === 'beach_monster4' ||
                    this.monsterId === 'farmland_monster4'
                    ) {
                        const val = this.getRandomValue(50,150);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/allpurpose/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster5' ||
                    this.monsterId === 'forest_monster5' ||
                    this.monsterId === 'grassland_monster5' ||
                    this.monsterId === 'jungle_monster5' ||
                    this.monsterId === 'marshes_monster5' ||
                    this.monsterId === 'mountain_monster5' ||
                    this.monsterId === 'swamp_monster5' ||
                    this.monsterId === 'beach_monster5' ||
                    this.monsterId === 'farmland_monster5'
                    ) {
                        const val = this.getRandomValue(50,300);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/allpurpose/coins.png'),
                            }
                        )                        
                } else if (
                    this.monsterId === 'desert_monster6' ||
                    this.monsterId === 'forest_monster6' ||
                    this.monsterId === 'grassland_monster6' ||
                    this.monsterId === 'jungle_monster6' ||
                    this.monsterId === 'marshes_monster6' ||
                    this.monsterId === 'mountain_monster6' ||
                    this.monsterId === 'swamp_monster6' ||
                    this.monsterId === 'beach_monster6' ||
                    this.monsterId === 'farmland_monster6'
                    ) {
                        const val = this.getRandomValue(150,400);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/allpurpose/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster7' ||
                    this.monsterId === 'forest_monster7' ||
                    this.monsterId === 'grassland_monster7' ||
                    this.monsterId === 'jungle_monster7' ||
                    this.monsterId === 'marshes_monster7' ||
                    this.monsterId === 'mountain_monster7' ||
                    this.monsterId === 'swamp_monster7' ||
                    this.monsterId === 'beach_monster7' ||
                    this.monsterId === 'farmland_monster7'
                    ) {
                        const val = this.getRandomValue(300,500);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/allpurpose/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster8' ||
                    this.monsterId === 'forest_monster8' ||
                    this.monsterId === 'grassland_monster8' ||
                    this.monsterId === 'jungle_monster8' ||
                    this.monsterId === 'marshes_monster8' ||
                    this.monsterId === 'mountain_monster8' ||
                    this.monsterId === 'swamp_monster8' ||
                    this.monsterId === 'beach_monster8' ||
                    this.monsterId === 'farmland_monster8'
                    ) {
                        const val = this.getRandomValue(400,600);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/allpurpose/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster9' ||
                    this.monsterId === 'forest_monster9' ||
                    this.monsterId === 'grassland_monster9' ||
                    this.monsterId === 'jungle_monster9' ||
                    this.monsterId === 'marshes_monster9' ||
                    this.monsterId === 'mountain_monster9' ||
                    this.monsterId === 'swamp_monster9' ||
                    this.monsterId === 'beach_monster9' ||
                    this.monsterId === 'farmland_monster9'
                    ) {
                        const val = this.getRandomValue(500,700);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/allpurpose/coins.png'),
                            }
                        )
                } else if (
                    this.monsterId === 'desert_monster10' ||
                    this.monsterId === 'forest_monster10' ||
                    this.monsterId === 'grassland_monster10' ||
                    this.monsterId === 'jungle_monster10' ||
                    this.monsterId === 'marshes_monster10' ||
                    this.monsterId === 'mountain_monster10' ||
                    this.monsterId === 'swamp_monster10' ||
                    this.monsterId === 'beach_monster10' ||
                    this.monsterId === 'farmland_monster10'
                    ) {
                        const val = this.getRandomValue(700,10000);
                        this.lootCoins.push(
                            {
                                id: 'looted_coins',
                                description: val,
                                name: 'coins',
                                amount: val,
                                imageSrc: require('../assets/images/allpurpose/coins.png'),
                            }
                        )
                } 
            },

            generateLoot() {
// desert monsters
                if (this.monsterId === 'desert_monster1') {
                    const val = this.getRandomValue(1,3);
                    console.log('desert monster loot val: ' + val);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith, Magic',
                                name: 'Sand Crab Shell',
                                description:"Is it made of sand or just sandy textured?",
                                value: '?',
                                price: 50,
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
                                itemShop: 'Magic, Oddities',
                                name: 'Foul Camel Tail',
                                description:"Why is it sticky!?",
                                value: '?',
                                price: 100,
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
                                itemShop: 'Armory, Blacksmith',
                                name: 'White Mane',
                                description:"So fluffy!",
                                value: '?',
                                price: 150,
                                imageSrc: require('../assets/images/desert/desert_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Lion Spine spines',
                                description:"Careful; they're poisonous",
                                value: '?',
                                price: 150,
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
                                itemShop: 'Armory, Blacksmith, Oddities',
                                name: 'Sandstone Scales',
                                description:"Hard as a rock!",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/desert/desert_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Stone Teeth',
                                description:"What does a creature eat with teeth like these?",
                                value: '?',
                                price: 250,
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
                            itemShop: 'Armory, Blacksmith',
                            name: 'Basilisk Scales',
                            description:"This would make a pretty pair of boots.",
                            value: '?',
                            price: 400,
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
                                itemShop: 'Magic, Oddities',
                                name: 'Basilisk Fangs',
                                description:"Probably shouldn't touch those.",
                                value: '?',
                                price: 400,
                                imageSrc: require('../assets/images/desert/desert_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Basilisk Venom',
                                description:"Hmm ... smells minty.",
                                value: '?',
                                price: 400,
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
                            itemShop: 'Oddities, Magic',
                            name: "Genie's Bottle",
                            description:"This would look great on my bookshelf!",
                            value: '?',
                            price: 600,
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
                                itemShop: 'Armory, Blacksmith, Oddities',
                                name: 'Golden Belt',
                                description:"I think this is shining with more than just gold...",
                                value: '?',
                                attack: null,
                                defense: 20,
                                strength: null,
                                life: this.getRandomValue(5,50),
                                mana: this.getRandomValue(5,30),
                                intelligence: null,
                                price: 1000,
                                imageSrc: require('../assets/images/desert/desert_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Bottled Sandstorm',
                                description:"It sounds angry.",
                                value: '?',
                                price: 600,
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
                            itemShop: 'Apothecary, Magic, Oddities',
                            name: "Phoenix Ashes",
                            description:"Is it me, or are these ashes getting hotter?",
                            value: '?',
                            price: 900,
                            imageSrc: require('../assets/images/desert/desert_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Magic, Oddities, Armory, Blacksmith',
                            name: "Phoenix Feather",
                            description:"It looks so soft and warm!",
                            value: '?',
                            price: 900,
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
                                itemShop: 'Apothecary, Tavern',
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
                                itemShop: 'Magic, Oddities',
                                name: 'Phoenix Talon',
                                description:"Super sharp.",
                                value: '?',
                                price: 900,
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
                            itemShop: 'Magic, Oddities, Apothecary',
                            name: "Karkadaan Horn",
                            description:"You'll put your eye out with that thing!",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/desert/desert_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith',
                            name: "Karkadaan Hide",
                            description:"It'd make good camouflage",
                            value: '?',
                            price: 1200,
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
                                itemShop: 'Blacksmith, Oddities',
                                name: 'Karkadaan shoes',
                                description:"These appear sturdy ... and have an air of aggression about them?",
                                value: '?',
                                carryBonus: 100,
                                attack: 10,
                                price: 1200,
                                imageSrc: require('../assets/images/desert/desert_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Karkadaan Tail',
                                description:"How is a tail sharp?",
                                value: '?',
                                price: 1200,
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
                            itemShop: 'Apothecary, Tavern',
                            name: "Sandworm Steak",
                            description:"Tender and juicy ... and also a bit gritty.",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/desert/desert_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Sandworm Teeth",
                            description:"What happens if it bites its tongue?",
                            value: '?',
                            price: 1650,
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
                                itemShop: 'Apothecary, Oddities, Magic',
                                name: 'Digested Sand',
                                description:"Disgusting",
                                value: '?',
                                price: 1650,
                                imageSrc: require('../assets/images/desert/desert_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith',
                                name: 'Sandworm Hide',
                                description:"No wonder this thing was so hard to kill!",
                                value: '?',
                                price: 1650,
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
                                itemShop: 'Blacksmith, Oddities',
                                name: 'Clawed Sickle',
                                description: 'So gross, but also so sharp and fast!',
                                value: '?',
                                attack: this.getRandomValue(10,40),
                                defense: this.getRandomValue(1,10),
                                strength: 0,
                                life: 0,
                                mana: this.getRandomValue(2,30),
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
                            itemShop: 'Blacksmith, Oddities',
                            name: "Fire Drake's Sword",
                            description: 'Beautiful and powerful.',
                            value: '?',
                            attack: this.getRandomValue(30,200),
                            defense: this.getRandomValue(10,50),
                            strength: 10,
                            life: 20,
                            mana: 30,
                            intelligence: 0,
                            price: 15000,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/desert/desert_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Fire Drake Hide",
                            description:"What wonderful armor this would make!",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/desert/desert_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Armory, Blacksmith, Oddities, Magic',
                            name: "Fire Drake Scale",
                            description:"I guess scales and feathers really are a lot alike",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/desert/desert_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Magic, Oddities',
                            name: "Fire River Drake's Eye",
                            description:"I think it's still looking at me ... ",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/desert/desert_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern',
                            name: "Fire Drake Egg",
                            description:"Why would anyone want to eat something like this?",
                            value: '?',
                            price: 2500,
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
                                itemShop: 'Magic, Oddities, Armory',
                                name: "Fire Drake's Amulet",
                                description: "Who knew a dragon's nest would hide a treasure like this!",
                                value: '?',
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: this.getRandomValue(30, 100),
                                mana: this.getRandomValue(20,35),
                                intelligence: this.getRandomValue(10,20),
                                price: 6000,
                                imageSrc: require('../assets/images/desert/desert_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_armor',
                                itemUse: 'null',
                                itemShop: 'Armory, Oddities',
                                name: "Fire Drake's Robes",
                                description: 'Ooh!  Stylish!  I wonder what they do?',
                                value: '?',
                                attack: this.getRandomValue(15,40),
                                defense: 50,
                                strength: 0,
                                life: 0,
                                mana: 50,
                                intelligence: this.getRandomValue(10,20),
                                price: 6000,
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
                    console.log('forest monster loot val: ' + val);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'multi',
                                itemShop: 'Apothecary, Magic, Tavern',
                                name: 'Sacred Spores',
                                description:"Smells odd.  Probably shouldn't eat them.",
                                value: '?',
                                attack: 1,
                                defense: 0,
                                strength: 0,
                                life: -3,
                                mana: -3,
                                intelligence: -3,
                                price: 50,
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
                                itemShop: 'Magic, Oddities',
                                name: 'Mossy Foot',
                                description:"So fuzzy",
                                value: '?',
                                price: 100,
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
                                itemShop: 'Oddities, Magic',
                                name: "Satyr's Aulos",
                                description:"Enchanting",
                                value: '?',
                                price: 150,
                                imageSrc: require('../assets/images/forest/forest_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities, Armory',
                                name: 'Satyr Horns',
                                description:"Heavier than it looks",
                                value: '?',
                                price: 150,
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
                                itemShop: 'Armory, Blacksmith, Oddities',
                                name: 'Werewolf Pelt',
                                description:"Surprisingly soft!",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/forest/forest_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_helm',
                                itemUse: 'null',
                                itemShop: 'null',
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
                            itemShop: 'Magic, Oddities',
                            name: 'Glowing Eyes',
                            description:"Even dead, the eyes still glow!",
                            value: '?',
                            price: 400,
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
                                itemShop: 'Magic, Oddities, Apothecary',
                                name: 'Grim Owl Feather',
                                description:"Would a feather as cold as ice keep a creature warm?",
                                value: '?',
                                price: 400,
                                imageSrc: require('../assets/images/forest/forest_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities, Apothecary',
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
                            itemShop: 'Armory, Oddities',
                            name: "Blessed Wreath",
                            description:"Should I put it on?",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(1,27),
                            strength: 0,
                            life: 14,
                            mana: 14,
                            intelligence: this.getRandomValue(1,20),
                            price: 600,
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
                                itemShop: 'Apothecary, Tavern, Oddities',
                                name: "Guardian's Fruit",
                                description:"So juicy!",
                                value: '?',
                                attack: 0,
                                defense: this.getRandomValue(5,25),
                                strength: 0,
                                life: 0,
                                mana: 0,
                                intelligence: null,
                                price: 600,
                                imageSrc: require('../assets/images/forest/forest_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itemShop: 'Blacksmith, Oddities',
                                name: 'Woodlands Staff',
                                description:"It's really light!",
                                value: '?',
                                attack: 30,
                                defense: 10,
                                strength: 0,
                                life: 30,
                                mana: 30,
                                intelligence: 0,
                                price: 680,
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
                            itemShop: 'Apothecary, Magic, Oddities',
                            name: "Vampire Ashes",
                            description:"Do I even want to know what someone does with these?",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/forest/forest_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_boots',
                            itemUse: 'null',
                            itemShop: 'Armory',
                            name: "Dark Boots",
                            description:"Sexy and supportive!",
                            value: '?',
                            attack: this.getRandomValue(10,35),
                            defense: this.getRandomValue(20,55),
                            strength: this.getRandomValue(3,8),
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 1200,
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
                                itemShop: 'Oddities, Blacksmith',
                                name: 'Vampiric Blade',
                                description:"It's so sharp just looking at it makes me bleed!",
                                value: '?',
                                attack: 60,
                                defense: 2,
                                strength: this.getRandomValue(2,10),
                                life: (this.getRandomValue(10,27) * -1),
                                mana: 0,
                                intelligence: 0,
                                price: 1200,
                                imageSrc: require('../assets/images/forest/forest_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Fresh Blood',
                                description:"Eew.",
                                value: '?',
                                price: 1200,
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
                            itemShop: 'Armory, Oddities',
                            name: "Nine Tails",
                            description:"How does anything walk around with this dragging behind them?",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/forest/forest_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itemShop: 'Armory, Oddities',
                            name: "Elegant Kimono",
                            description:"Sure, it's pretty.  But how does it work in battle?",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(25,60),
                            strength: 0,
                            life: 50,
                            mana: 50,
                            intelligence: this.getRandomValue(10,20),
                            price: 1200,
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
                                itemShop: 'Apothecary, Tavern',
                                name: 'Kitsune Udon',
                                description:"Guess I'm not the only one who walks around with bowls of soup.",
                                value: '?',
                                attack: 2,
                                defense: 2,
                                strength: 2,
                                life: 2,
                                mana: 2,
                                intelligence: 2,
                                price: 1650,
                                imageSrc: require('../assets/images/forest/forest_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Mist of Confusion',
                                description:"What is even happening anymore?",
                                value: '?',
                                price: 1200,
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
                            itemShop: 'Magic, Oddities',
                            name: "Cursed chicken's Foot",
                            description:"It doesn't look particularly cursed...",
                            value: '?',
                            price: 1650,
                            imageSrc: require('../assets/images/forest/forest_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itemShop: 'Armory, Oddities',
                            name: "Dark Feathered Cloak",
                            description:"So cozy!",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(15,40),
                            strength: 3,
                            life: -2,
                            mana: this.getRandomValue(10,30),
                            intelligence: this.getRandomValue(2,8),
                            price: 1650,
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
                                itemShop: 'Blacksmith, Magic, Oddities',
                                name: 'Crooked Staff',
                                description:"Errr ... is it me or is this thing making noises?",
                                value: '?',
                                attack: 60,
                                defense: 12,
                                strength: 1,
                                life: -10,
                                mana: -10,
                                intelligence: this.getRandomValue(5,15),
                                price: 1650,
                                imageSrc: require('../assets/images/forest/forest_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Dark Pot',
                                description:"I don't even want to know what they cooked in this thing.",
                                value: '?',
                                price: 1650,
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
                                itemShop: 'Magic, Oddities',
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
                            itemShop: 'Oddities, Magic',
                            name: "Forest God's Skull",
                            description: 'I think the antlers are still growing.',
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/forest/forest_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Magic, Oddities, Tavern',
                            name: "Fallen Petals",
                            description:"How do they smell fresh and rotten at the same time?",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/forest/forest_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Forest God Pelt",
                            description:"I can't imagine that anything made from this wouldn't be cursed.",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/forest/forest_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Magic, Oddities',
                            name: "Sparks of Dawn",
                            description:"Shiny",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/forest/forest_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'health',
                            itemShop: 'Apothecary, Tavern, Magic',
                            name: "Fruit of Life",
                            description:"Will this heal me or hurt me if I ate it?",
                            value: '?',
                            life: this.getRandomValue(-30, 31),
                            price: 2250,
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
                                itemShop: 'Armory, Blacksmith, Oddities',
                                name: "Forest Crown",
                                description: "Does wearing this make me ruler of the forest?",
                                value: '?',
                                attack: -2,
                                defense: -2,
                                strength: -2,
                                life: 30,
                                mana: 50,
                                intelligence: this.getRandomValue(10,30),
                                price: 2250,
                                imageSrc: require('../assets/images/forest/forest_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_armor',
                                itemUse: 'null',
                                itemShop: 'Magic, Armory',
                                name: "Forest Cloak",
                                description: 'Is green really my color?',
                                value: '?',
                                attack: 0,
                                defense: 20,
                                strength: 20,
                                life: 20,
                                mana: 20,
                                intelligence: 0,
                                price: 2250,
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
                    console.log('grassland monster loot val: ' + val);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Rotten Femur',
                                description:"Ugh!  The smell!",
                                value: '?',
                                price: 50,
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
                                itemShop: 'Magic, Oddities',
                                name: 'Lucky Gold',
                                description:"So shiny!",
                                value: '?',
                                price: 100,
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
                                itemShop: 'Magic, Oddities, Armory',
                                name: 'Bone Bead Necklace',
                                description:"We just aren't going to ask what kind of bones those are.",
                                value: '?',
                                attack: 0,
                                defense: this.getRandomValue(1,10),
                                strength: 0,
                                life: this.getRandomValue(1,15),
                                intelligence: 0,
                                mana: 0,
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_3_treasure.png'), 
                            },
                        );
                    } else if (val <=2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Hobgoblin Ears',
                                description:"Eww!  They still wiggle!",
                                value: '?',
                                price: 150,
                                imageSrc: require('../assets/images/grassland/grassland_monster_3_treasure2.png'), 
                            }
                        )
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_armor',
                                itemUse: 'null',
                                itemShop: 'Blacksmith, Oddities',
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
                                itemShop: 'Armory, Oddities, Magic',
                                name: 'Barrows Silk',
                                description:"Sticks to everything but itself",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/grassland/grassland_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Oddities, Magic',
                                name: 'Barrows Spider Eyes',
                                description:"Every single one of them is still looking at me.",
                                value: '?',
                                price: 250,
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
                            itemShop: 'Blacksmith, Oddities',
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
                                itemShop: 'Blacksmith',
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
                                itemShop: 'Armory, Oddities',
                                name: "Centaur's Bags",
                                description:"Very organized",
                                carryBonus: 8,
                                value: '?',
                                price: 400,
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
                            itemShop: 'Magic, Oddities',
                            name: "Soul Stone",
                            description:"Was the banshee screaming, or was it just this stone making that noise?",
                            value: '?',
                            price: 600,
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
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: "Banshee Tears",
                                description:"Not liquid ... what is that?",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/grassland/grassland_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith',
                                name: 'Banshee claws',
                                description:"The better to grip you with, my dear!",
                                value: '?',
                                price: 600,
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
                            itemShop: 'Apothecary, Magic, Oddities',
                            name: "Ghoul Skin",
                            description:"So fragile, it falls apart just touching it.",
                            value: '?',
                            price: 900,
                            imageSrc: require('../assets/images/grassland/grassland_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Magic, Oddities, Blacksmith',
                            name: "Ghoul Claws",
                            description:"Sharp and oh so gross.",
                            value: '?',
                            price: 900,
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
                                itemShop: 'Magic, Oddities',
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
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Dead Devouring Stone',
                                description:"Why would anyone want one of these?",
                                value: '?',
                                price: 900,
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
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Cockatrice Leather",
                            description:"Red and leathery",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/grassland/grassland_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'manaing',
                            itemShop: 'Apothecary, Oddities, Tavern',
                            name: "Cockatrice Egg",
                            description:"I wonder if it tastes like chicken?",
                            value: '?',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: 50,
                            intelligence: 0,
                            price: 1200,
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
                                itemShop: 'Armory, Blacksmith, Oddities',
                                name: 'Cockatrice Foot',
                                description:"Vicious.",
                                value: '?',
                                price: 1200,
                                imageSrc: require('../assets/images/grassland/grassland_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecaray, Magic, Oddities',
                                name: 'Cockatrice Eye',
                                description:"Wait, did that one just blink?",
                                value: '?',
                                price: 1200,
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
                            itemShop: 'Apothecary, Armory, Blacksmith, Oddities, Magic',
                            name: "Unicorn Horn",
                            description:"So much sharper than it looks",
                            value: '?',
                            price: 1650,
                            imageSrc: require('../assets/images/grassland/grassland_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Armory, Oddities',
                            name: "Unicorn Hair",
                            description:"It really was a horse of many colors!",
                            value: '?',
                            price: 1650,
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
                                itemShop: 'Blacksmith, Oddities, Magic',
                                name: 'Unicorn Spirit Shoes',
                                description:"Forget the horse, I want to wear these!",
                                value: '?',
                                carryBonus: 50,
                                attack: 5,
                                price: 1650,
                                imageSrc: require('../assets/images/grassland/grassland_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Rainbow Essence',
                                description:"Looks like bubblebath.",
                                value: '?',
                                price: 1650,
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
                                itemShop: 'Armory, Magic, Oddities',
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
                            itemShop: 'Apothecary, Magic, Oddities',
                            name: "Chimera venom",
                            description: 'I feel dizzy just smeling this stuff.',
                            value: '?',
                            price: 2250,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Chimera Hide",
                            description:"Huh.  Even the lion parts of it were scaled.  Is a chimera a reptile?",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities',
                            name: "Clawed Hoof",
                            description:"It can really grip the ground with these things!",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern, Oddities',
                            name: "Chimera Egg",
                            description:"Looks like an evil avocado, tastes like an evil chicken.",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities',
                            name: "Chimera Armor",
                            description:"Warm and suprisingly snuggly armor",
                            value: '?',
                            attack: this.getRandomValue(1,15),
                            defense: this.getRandomValue(10,30),
                            strength: 2,
                            life: 0,
                            mana: this.getRandomValue(5,18),
                            intelligence: 0,
                            price: 2250,
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
                                itemShop: 'Blacksmith, Oddities, Magic',
                                name: "Sword of Might",
                                description: "This sword is literally bigger than me.",
                                value: '?',
                                attack: this.getRandomValue(15,30),
                                defense: 5,
                                strength: 0,
                                life: this.getRandomValue(5,25),
                                mana: this.getRandomValue(10,35),
                                intelligence: 0,
                                price: 2250,
                                imageSrc: require('../assets/images/grassland/grassland_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_gloves',
                                itemUse: 'null',
                                itemShop: 'Magic, Armory, Oddities',
                                name: "Golden Gloves",
                                description: 'Very fashionable',
                                value: '?',
                                attack: 0,
                                defense: this.getRandomValue(10,25),
                                strength: 1,
                                life: 0,
                                mana: this.getRandomValue(10,30),
                                intelligence: 0,
                                price: 2250,
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
                    console.log('jungle monster loot val: ' + val);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith',
                                name: 'Bat Leather',
                                description:"I wonder if I can fly with these?",
                                value: '?',
                                price: 50,
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
                                itemShop: 'Magic, Oddities',
                                name: 'Unlucky Monkey Paw',
                                description:"Do your best not to touch it",
                                value: '?',
                                price: 100,
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
                                itemShop: 'Apothecary, Magic',
                                name: 'Vinesap',
                                description:"Sticks to everything, including itself.",
                                value: '?',
                                price: 150,
                                imageSrc: require('../assets/images/jungle/jungle_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                                itemShop: 'Armory, Blacksmith',
                                name: 'Oliphant Hide',
                                description:"Wow, this stuff is thick!  No wonder my sword had such trouble.",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/jungle/jungle_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'OliMoss',
                                description:"I wonder if this grows ON them, or FROM them?",
                                value: '?',
                                price: 250,
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
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: 'Dire Moth Wings',
                            description:"Awfully pretty.",
                            value: '?',
                            price: 400,
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
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Dire Moth Eggs',
                                description:"How did they even lay this thing?",
                                value: '?',
                                price: 400,
                                imageSrc: require('../assets/images/jungle/jungle_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Oddities, Magic',
                                name: "Jungle Sickness",
                                description:"Nasty stuff",
                                value: '?',
                                price: 400,
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
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Bonecrusher Scales",
                            description:"Scratchy",
                            value: '?',
                            price: 600,
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
                                itemShop: 'Apothecary, Oddities, Magic',
                                name: "Crushing Fangs",
                                description:"As opposed to stabby fangs?",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/jungle/jungle_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Digested Bone',
                                description:"I'm not sure I'm getting paid enough to touch this stuff.",
                                value: '?',
                                price: 600,
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
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Clawed Belt",
                            description:"It jangles while you walk!",
                            value: '?',
                            attack: 0,
                            defense: 18,
                            strength: 0,
                            life: 0,
                            mana: this.getRandomValue(10,20),
                            intelligence: 0,
                            price: 900,
                            imageSrc: require('../assets/images/jungle/jungle_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities',
                            name: "Massive Wooden Club",
                            description:"OMG this thing is heavy!",
                            value: '?',
                            attack: 24,
                            defense: 6,
                            strength: -2,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 900,
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
                                itemShop: 'Magic, Oddities',
                                name: 'Cyclops Eye',
                                description:"This would look wicked sitting on my mantle!",
                                value: '?',
                                price: 900,
                                imageSrc: require('../assets/images/jungle/jungle_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_vambraces',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith',
                                name: 'Strapped for Strength Bracers',
                                description:"I feel stronger already!",
                                value: '?',
                                attack: 0,
                                defense: this.getRandomValue(5,30),
                                strength: 5,
                                life: 0,
                                mana: 0,
                                intelligence: 0,
                                price: 900,
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
                            itemShop: 'Magic, Oddities',
                            name: "Elfin Ears",
                            description:"I feel almost bad for the elf",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/jungle/jungle_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_vambraces',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith',
                            name: "Elfin Arm Cuffs",
                            description:"They don't look very protective, but magic!",
                            value: '?',
                            attack: 4,
                            defense: this.getRandomValue(10,30),
                            strength: 1,
                            life: 0,
                            mana: this.getRandomValue(5,20),
                            intelligence: 0,
                            price: 1200,
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
                                itemShop: 'Blacksmith, Oddities',
                                name: 'Dark Dagger',
                                description:"It will cut you",
                                value: '?',
                                attack: this.getRandomValue(15,25),
                                defense: 0,
                                strength: 0,
                                life: 6,
                                mana: 6,
                                intelligence: 0,
                                price: 1200,
                                imageSrc: require('../assets/images/jungle/jungle_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_boots',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith',
                                name: 'Forest Elf Boots',
                                description:"Reeeaaallly stretching the definition of 'boots' here ... ",
                                value: '?',
                                attack: 0,
                                defense: this.getRandomValue(10,23),
                                strength: 1,
                                life: 13,
                                mana: 12,
                                intelligence: 0,
                                price: 1200,
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
                            itemShop: 'Magic, Oddities',
                            name: "Demon's Teeth",
                            description:"The better to bite you with!",
                            value: '?',
                            price: 1650,
                            imageSrc: require('../assets/images/jungle/jungle_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Magic, Oddities, Apothecary',
                            name: "Oni Horns",
                            description:"Grind them up and put them in a potion!",
                            value: '?',
                            price: 1650,
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
                                itemShop: 'Magic, Oddities',
                                name: 'Cursed stone',
                                description:"Wait.  If it's cursed, is it even safe for me to carry this thing?",
                                value: '?',
                                price: 1650,
                                imageSrc: require('../assets/images/jungle/jungle_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itemShop: 'Blacksmith, Oddities',
                                name: 'Demonic Dagger',
                                description:"I'm sure it's perfectly fine if I use this.",
                                value: '?',
                                attack: this.getRandomValue(20,30),
                                defense: 4,
                                strength: -1,
                                life: this.getRandomValue(-15,-1),
                                mana: 6,
                                intelligence: 6,
                                price: 1650,
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
                                itemShop: 'Oddities, Magic',
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
                            itemShop: 'Blacksmith, Oddities, Magic',
                            name: "Golden Dragon Helm",
                            description: 'Protects everything while scaring your enemies',
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(20,35),
                            strength: 0,
                            life: 8,
                            mana: 8,
                            intelligence: this.getRandomValue(3,15),
                            price: 2250,
                            unlocksAt: 1,
                            imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith',
                            name: "Golden Dragon Leather",
                            description:"I think this might actually have bits of gold in it!",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itemShop: 'Blacksmith',
                            name: "Golden Dragon's Armor",
                            description:"My enemies will see me coming for them from a mile away",
                            value: '?',
                            attack: 6,
                            defense: 14,
                            strength: 3,
                            life: 0,
                            mana: 10,
                            intelligence: 0,
                            price: 2250,
                            imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_gloves',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Enchanted Golden Gauntlets",
                            description:"Not sure what they do, but they're pretty while they do it!",
                            value: '?',
                            attack: 8,
                            defense: this.getRandomValue(10,45),
                            strength: 6,
                            life: 8,
                            mana: 8,
                            intelligence: this.getRandomValue(3,15),
                            price: 2250,
                            imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_shield',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities',
                            name: "Golden Dragon's Shield",
                            description:"If nothing else, you can blind your enemies with this shield!",
                            value: '?',
                            attack: 4,
                            defense: this.getRandomValue(20,40),
                            strength: 0,
                            life: 10,
                            mana: this.getRandomValue(12,20),
                            intelligence: 0,
                            price: 2250,
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
                                itemShop: 'Apothecary, Tavern, Oddities',
                                name: "Golden Dragon's Egg",
                                description: "It's an egg.  Got a dragon inside, probably.",
                                value: '?',
                                price: 2250,
                                imageSrc: require('../assets/images/jungle/jungle_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: "Golden Dragon's Heart",
                                description: 'A literal heart of gold',
                                value: '?',
                                price: 2250,
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
                    console.log('marsh monster loot val: '+ val);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Fae Light',
                                description:"Don't look into the light",
                                value: '?',
                                price: 50,
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
                                itemShop: 'Blacksmith',
                                name: 'Kappa Shell',
                                description:"I wonder if it would fit me?",
                                value: '?',
                                attack: 0,
                                defense: 8,
                                strength: 0,
                                life: 0,
                                mana: 0,
                                intelligence: 0,
                                price: 100,
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
                                itemShop: 'Blacksmith, Oddities',
                                name: 'Mossy Teeth',
                                description:"They smell worse than they look.",
                                value: '?',
                                price: 150,
                                imageSrc: require('../assets/images/marshes/marshes_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Zombie Eyes',
                                description:"Gooey.",
                                value: '?',
                                price: 150,
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
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Sticky Tongue',
                                description:"Gross",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/marshes/marshes_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Spawn',
                                description:"Useful for multiplying magics.",
                                value: '?',
                                price: 250,
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
                            itemShop: 'Oddities, Magic, Apothecary',
                            name: 'Venomous Lotus',
                            description:"Venomous.  Not poisonous.  There's teeth.",
                            value: '?',
                            price: 400,
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
                                itemShop: 'Armory, Oddities, Magic',
                                name: 'Ruskala beads',
                                description:"I think they're made of wood?",
                                value: '?',
                                price: 400,
                                imageSrc: require('../assets/images/marshes/marshes_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: "Souls of Men",
                                description:"TFW Necromancers are letting monsters do their dirty work for them",
                                value: '?',
                                price: 400,
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
                            itemShop: 'Armory, Oddities',
                            name: "Harpie Wings",
                            description:"Awww, they're so soft!",
                            value: '?',
                            price: 600,
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
                                itemShop: 'Armory, Oddities, Magic',
                                name: "Lady's Collar",
                                description:"You don't have to be a lady to wear this",
                                value: '?',
                                attack: 0,
                                defense: 14,
                                strength: 2,
                                life: 13,
                                mana: 0,
                                intelligence: 8,
                                price: 600,
                                imageSrc: require('../assets/images/marshes/marshes_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Tavern, Oddities',
                                name: 'Harpie Egg',
                                description:"Pretty in pink",
                                value: '?',
                                price: 600,
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
                            itemShop: 'null',
                            name: "Sword of Shadows",
                            description:"Good luck finding it again if you drop it",
                            value: '?',
                            attack: this.getRandomValue(20,38),
                            defense: 5,
                            strength: 0,
                            life: this.getRandomValue(-10,-1),
                            mana: 14,
                            intelligence: 2,
                            price: 1900,
                            imageSrc: require('../assets/images/marshes/marshes_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itemShop: 'Armory, Oddities',
                            name: "Dark Hood",
                            description:"Whoever wears this is basically invisible!",
                            value: '?',
                            attack: 12,
                            defense: 12,
                            strength: 0,
                            life: -2,
                            mana: 12,
                            intelligence: 6,
                            price: 900,
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
                                itemShop: 'Apothecary, Oddities, Magic',
                                name: 'Ectoplasma',
                                description:"Glows in the dark!",
                                value: '?',
                                price: 900,
                                imageSrc: require('../assets/images/marshes/marshes_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Oddities, Magic',
                                name: 'Dark Fog',
                                description:"Gives me the creeps.",
                                value: '?',
                                price: 900,
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
                            itemShop: 'Armory, Blacksmith',
                            name: "Waterlogged Saddle",
                            description:"Carries lots, but nothing will stay dry.",
                            value: '?',
                            carryBonus: 7,
                            price: 1200,
                            imageSrc: require('../assets/images/marshes/marshes_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Magic, Oddities',
                            name: "Kelpie Hair",
                            description:"Looks like seaweed, but sure doesn't smell like it.",
                            value: '?',
                            price: 1200,
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
                                itemShop: 'Blacksmith, Oddities, Magic',
                                name: 'Kelpie Jaw',
                                description:"That thing had a serious case of underbite.",
                                value: '?',
                                price: 1200,
                                imageSrc: require('../assets/images/marshes/marshes_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Oddities, Magic',
                                name: 'Gill Fronds',
                                description:"Useful if you want to breathe water, I guess.",
                                value: '?',
                                price: 1200,
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
                            itemShop: 'Blacksmith, Oddities',
                            name: "Water Knight's Sword",
                            description:"An elegant blade",
                            value: '?',
                            attack: this.getRandomValue(20,40),
                            defense: 14,
                            strength: 0,
                            life: 0,
                            mana: this.getRandomValue(5,15),
                            intelligence: 0,
                            price: 1650,
                            imageSrc: require('../assets/images/marshes/marshes_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities, Magic',
                            name: "Water Helm",
                            description:"Protect your head and wash your hair at the same time!",
                            value: '?',
                            attack: 4,
                            defense: this.getRandomValue(15,30),
                            strength: this.getRandomValue(1,5),
                            life: 10,
                            mana: 6,
                            intelligence: this.getRandomValue(2,8),
                            price: 1650,
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
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Living Water',
                                description:"Will make you dead if you aren't careful with it.",
                                value: '?',
                                price: 1650,
                                imageSrc: require('../assets/images/marshes/marshes_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_belt',
                                itemUse: 'null',
                                itemShop: 'Armory, Oddities',
                                name: 'Belt of Water',
                                description:"Keeps you looking and feeling cool.",
                                value: '?',
                                attack: 0,
                                defense: 24,
                                strength: 0,
                                life: 0,
                                mana: 9,
                                intelligence: 0,
                                price: 1650,
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
                                itemShop: 'Apothecary, Magic, Oddities',
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
                            itemShop: 'Blacksmith, Armory, Oddities, Magic',
                            name: "The Heron Crown",
                            description: 'Heavy is the head that wears the crown.',
                            value: '?',
                            attack: 0,
                            defense: 14,
                            strength: 5,
                            life: 18,
                            mana: 18,
                            intelligence: 18,
                            price: 2250,
                            imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Magic, Oddities',
                            name: "Divine Feather",
                            description:"It can't be good that I killed something so holy.",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Oddities, Magic',
                            name: "Cleansing Flame",
                            description:"Don't touch it.",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern, Magic',
                            name: "King's Eggs",
                            description:"Shouldn't those be called ... you know what, nevermind.  King.",
                            value: '?',
                            price: 2255,
                            imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Magic, Oddities',
                            name: "Sword of the Heron King",
                            description:"Light as a feather!",
                            value: '?',
                            attack: this.getRandomValue(20,33),
                            defense: 3,
                            strength: 3,
                            life: 13,
                            mana: 13,
                            intelligence: 0,
                            price: 2250,
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
                                itemShop: 'Apothecary, Tavern',
                                name: "Heron's Nest",
                                description: "Good for making soup",
                                value: '?',
                                price: 2250,
                                imageSrc: require('../assets/images/marshes/marshes_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: "Heron King's Ring",
                                description: 'Powerfully magic',
                                value: '?',
                                attack: 10,
                                defense: 10,
                                strength: 5,
                                life: 10,
                                mana: 25,
                                intelligence: 15,
                                price: 2250,
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
                    console.log('mountain monster loot val: ' + val);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Goblin Ears',
                                description:"Green and gelatenous.",
                                value: '?',
                                price: 50,
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
                                itemShop: 'Armory, Blacksmith, Oddities',
                                name: 'Were Horns',
                                description:"A matching pair.",
                                value: '?',
                                attack: 2,
                                defense: this.getRandomValue(1,16),
                                strength: 2,
                                life: 0,
                                mana: 0,
                                intelligence: 0,
                                price: 100,
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
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Troll Berries',
                                description:"Those better not be what I think they are ... ",
                                value: '?',
                                price: 150,
                                imageSrc: require('../assets/images/mountains/mountain_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith, Oddities',
                                name: 'Mountain Troll Leather',
                                description:"This stuff is thick-thicc.",
                                value: '?',
                                price: 150,
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
                                itemShop: 'Oddities, Magic',
                                name: 'Gargoyle Head',
                                description:"Grotesque",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/mountains/mountain_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Oddities, Magic',
                                name: 'Internal Fire',
                                description:"Are gargoyles mini dragons?",
                                value: '?',
                                price: 250,
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
                            itemShop: 'Blacksmith, Oddities',
                            name: 'Clawed Gauntlets',
                            description:"Now you can rock some wicked claws too!",
                            value: '?',
                            attack: this.getRandomValue(10,30),
                            defense: this.getRandomValue(10,30),
                            strength: 0,
                            life: 0,
                            mana: 0,
                            intelligence: 1,
                            price: 400,
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
                                itemShop: 'Magic, Oddities',
                                name: 'Fierce Mask',
                                description:"Wish I could wear it, but it doesn't fit my head.",
                                value: '?',
                                price: 400,
                                imageSrc: require('../assets/images/mountains/mountain_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith, Oddities',
                                name: "Snow Cat Hide",
                                description:"Perfect mountain camouflage",
                                value: '?',
                                price: 400,
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
                            itemShop: 'Apothecary, Magic, Oddities',
                            name: "Frozen Eye",
                            description:"As cold and hard as ice.",
                            value: '?',
                            price: 600,
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
                                itemShop: 'Blacksmith, Oddities',
                                name: "Yeti Horns",
                                description:"How exactly am I supposed to carry these things all the way back?",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/mountains/mountain_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith',
                                name: 'Yeti Fur',
                                description:"Would make a great carpet - after it was washed, of course.",
                                value: '?',
                                price: 600,
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
                            itemShop: 'Armory, Blacksmith, Apothecary, Magic, Oddities',
                            name: "Griffon Feathers",
                            description:"There's strong magics contained in these feathers.",
                            value: '?',
                            price: 900,
                            imageSrc: require('../assets/images/mountains/mountain_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities',
                            name: "Griffon Claws",
                            description:"These things better not poke holes in my bags",
                            value: '?',
                            price: 900,
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
                                itemShop: 'Magic, Oddities',
                                name: 'Griffon Talisman',
                                description:"It even has a little griffon on it!  In case I forget where I got it.",
                                value: '?',
                                attack: 6,
                                defense: 6,
                                strength: 4,
                                life: 30,
                                mana: 30,
                                intelligence: 6,
                                price: 900,
                                imageSrc: require('../assets/images/mountains/mountain_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Tavern, Oddities',
                                name: 'Griffon Egg',
                                description:"Aww, I think it's peeping!",
                                value: '?',
                                price: 900,
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
                            itemShop: 'Apothecary, Magic, Oddities',
                            name: "Dire Eagle's Feathers",
                            description:"What is it with these mountains and giant birds?",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/mountains/mountain_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern',
                            name: "Eagle Steaks",
                            description:"This would be delicious grilled with some salt and mountain herbs!",
                            value: '?',
                            price: 1200,
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
                                itemShop: 'Armory',
                                name: "Mountaineer's Saddlebags",
                                description: "Holds tons of stuff, so long as you don't mind a few bloodstains.",
                                value: '?',
                                carryBonus: 20,
                                price: 1200,
                                imageSrc: require('../assets/images/mountains/mountain_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Armory',
                                name: 'Mighty Storm',
                                description:"The eagle stored the magic in its wings!",
                                value: '?',
                                price: 1200,
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
                            itemShop: 'Magic, Blacksmith, Oddities',
                            name: "Ice Giant's Heart",
                            description:"Pretty for an organ",
                            value: '?',
                            price: 1650,
                            imageSrc: require('../assets/images/mountains/mountain_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities',
                            name: "Great Horned Helm",
                            description:"Odd magics make sure this helmet always fits perfectly",
                            value: '?',
                            attack: 4,
                            defense: this.getRandomValue(10,26),
                            strength: 1,
                            life: this.getRandomValue(5,15),
                            mana: 16,
                            intelligence: 0,
                            price: 1650,
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
                                itemShop: 'Oddities, Magic',
                                name: 'Trophy Skull',
                                description:"Was their trophy.  Now it's mine!",
                                value: '?',
                                price: 1650,
                                imageSrc: require('../assets/images/mountains/mountain_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itemShop: 'Blacksmith, Oddities, Magic',
                                name: 'Iced Battle Axe',
                                description:"Make sure you wear thick gloves while swinging this thing around.",
                                value: '?',
                                attack: 30,
                                defense: 0,
                                strength: -2,
                                life: 20,
                                mana: 0,
                                intelligence: 0,
                                price: 1650,
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
                                itemShop: 'Apothecary, Magic, Oddities',
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
                            itemShop: 'Blacksmith, Magic, Oddities',
                            name: "Iron Dragon's Shield",
                            description: "I'd like to see anything try and get through this!",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(20,60),
                            strength: 1,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 2250,
                            imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Magic, Oddities',
                            name: "Iron Dragon Scales",
                            description:"Gods, these things weigh a ton!",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itemShop: 'Magic, Blacksmith, Oddities',
                            name: "Iron Dragon's Mask",
                            description:"Wear it and breathe dragon's fire yourself!",
                            value: '?',
                            attack: 15,
                            defense: 15,
                            strength: 5,
                            life: 15,
                            mana: 20,
                            intelligence: 8,
                            price: 2250,
                            imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith',
                            name: "Iron Dragon's Hide",
                            description:"Light weight and strong.  Good for making armor.",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Apothecary, Oddities',
                            name: "Iron Dragon's Heart",
                            description:"Heavy as lead.  Might actually be made of lead.",
                            value: '?',
                            price: 2250,
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
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: "Dragon's Fire",
                                description: "Extremely volatile magic",
                                value: '?',
                                price: 2250,
                                imageSrc: require('../assets/images/mountains/mountain_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities, Armory, Blacksmith',
                                name: "Heart of the Mountains",
                                description: "Don't let the dwarves know you have this ... ",
                                value: '?',
                                price: 2250,
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
                    console.log('swamp monster loot val: ' + val);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Tangled Rootbeast Vines',
                                description:"So tangly.",
                                value: '?',
                                price: 50,
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
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Sickly Light',
                                description:"I feel sick just looking at it.",
                                value: '?',
                                price: 100,
                                imageSrc: require('../assets/images/swamp/swamp_monster_2_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'swamp_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val === 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Swamp Ape Nose',
                                description:"Huh.",
                                value: '?',
                                price: 150,
                                imageSrc: require('../assets/images/swamp/swamp_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Oddities, Magic',
                                name: 'Red Eyes',
                                description:"I think they're looking at me.",
                                value: '?',
                                price: 150,
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
                                itemShop: 'Apothecary, Tavern, Oddities, Magic',
                                name: 'Creeper Sap',
                                description:"OMG so gross!",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/swamp/swamp_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Oddities, Magic',
                                name: 'Vine Creeper Ear',
                                description:"Good for spells where the magic needs to hear the magician's words",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/swamp/swamp_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getSwampGems();
                    }
                } 
                else if (this.monsterId === 'swamp_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities, Magic',
                            name: 'Bunyip Tusks',
                            description:"Not sure what they're used for, but they're worth a small fortune",
                            value: '?',
                            price: 400,
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
                                itemShop: 'Armory, Blacksmith',
                                name: 'Bunyip Fur',
                                description:"Looks soft, but feels like sandpaper",
                                value: '?',
                                price: 400,
                                imageSrc: require('../assets/images/swamp/swamp_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: "Bunyip Eye",
                                description:"Glows so they can see in the murky water",
                                value: '?',
                                price: 400,
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
                            itemShop: 'Blacksmith, Oddities, Magic',
                            name: "Vine Whip",
                            description: "Will take your skin right off",
                            value: '?',
                            attack: this.getRandomValue(8,30),
                            defense: 0,
                            strength: 0,
                            life: this.getRandomValue(5,25),
                            mana: 0,
                            intelligence: 0,
                            price: 600,
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
                                itemShop: 'Armory, Blacksmith, Oddities',
                                name: "Wood Nymph Bark",
                                description:"Adds emotional impact to spells",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/swamp/swamp_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_belt',
                                itemUse: 'null',
                                itemShop: 'Armory, Oddities',
                                name: "Wood Nymph's Girdle",
                                description:"Practical and pretty!",
                                value: '?',
                                attack: 0,
                                defense: 17,
                                strength: 2,
                                life: 16,
                                mana: 12,
                                intelligence: 0,
                                price: 600,
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
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Killer Croc Leather",
                            description:"Killer leather for killer boots.",
                            value: '?',
                            price: 900,
                            imageSrc: require('../assets/images/swamp/swamp_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Oddities, Magic, Apothecary',
                            name: "Killer Croc Foot",
                            description:"I bet I could open just all the stubborn potions bottles with this",
                            value: '?',
                            price: 900,
                            imageSrc: require('../assets/images/swamp/swamp_monster_7_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,4);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'smart',
                                itemShop: 'Apothecary, Tavern, ',
                                name: 'Brainfruit',
                                description:"I bet eating this is what made this monster so weirdly clever!",
                                value: '?',
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: 0,
                                mana: 0,
                                intelligence: 1,
                                price: 900,
                                imageSrc: require('../assets/images/swamp/swamp_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Blacksmith, Armory, Oddities',
                                name: 'Killer Croc Teeth',
                                description:"Makes me want to decorate everything I own with teeth",
                                value: '?',
                                price: 900,
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
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Grootslang Hide",
                            description:"Very surprisingly colorful",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/swamp/swamp_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern',
                            name: "Grootslang Tentacle",
                            description:"Ouch!  Those little suckers have teeth hiding in them!",
                            value: '?',
                            price: 1200,
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
                                itemShop: 'Apothecary, Armory, Blacksmith, oddities, Magic',
                                name: "Grootslang Spines",
                                description: "Pretty sure there's toxins in these.  Best be careful",
                                value: '?',
                                price: 1200,
                                imageSrc: require('../assets/images/swamp/swamp_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Delusion Stone',
                                description:"It must have taken some messed up magic to make such a messed up monster",
                                value: '?',
                                price: 1200,
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
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Green Dragon Scales",
                            description:"Ugh!  They're like glitter!  I've got scales stuck everywhere!",
                            value: '?',
                            price: 1650,
                            imageSrc: require('../assets/images/swamp/swamp_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_gloves',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Armory',
                            name: "Moss Dragon Gloves",
                            description:"The inside of the gloves are lined with soft moss",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(5,20),
                            strength: 4,
                            life: 0,
                            mana: this.getRandomValue(5,30),
                            intelligence: 0,
                            price: 1650,
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
                                itemShop: 'Blacksmith, Oddities',
                                name: 'Moss Blade',
                                description:"Who knew moss could be so sharp!",
                                value: '?',
                                attack: 40,
                                defense: 10,
                                strength: 0,
                                life: 0,
                                mana: 0,
                                intelligence: 0,
                                price: 1650,
                                imageSrc: require('../assets/images/swamp/swamp_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith, Magic, Oddities',
                                name: 'Moss Dragon Horns',
                                description:"Looks like the dragon kept every set of horns it ever shed.",
                                value: '?',
                                price: 1650,
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
                                itemShop: 'Magic, Oddities',
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
                            itemShop: 'Blacksmith, Oddities',
                            name: "Hydra's Blade",
                            description: "The best blade for killing a hydra is made from a Hydra.",
                            value: '?',
                            attack: 30,
                            defense: 24,
                            strength: 5,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 2800,
                            imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Magic, Tavern',
                            name: "Hydra Fins",
                            description:"Smells like fish",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Oddities, Magic, Apothecary',
                            name: "Hydra Head",
                            description:"So help me, this thing better not multiply again!",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern',
                            name: "Hydra Steak",
                            description:"Turnabout is fair play!  Nom nom nom!",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities, Magic',
                            name: "Hydra's Armor",
                            description:"Now you can look like a hydra!  If your opponent really squints their eyes, anyway.",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(10,40),
                            strength: 0,
                            life: 10,
                            mana: 10,
                            intelligence: 2,
                            price: 2250,
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
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: "Angry Water Magic",
                                description: "Hostile and dangerous magic",
                                value: '?',
                                price: 2250,
                                imageSrc: require('../assets/images/swamp/swamp_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: "Spirit of Wrath",
                                description: "Just how am I supposed to transport this back with me?",
                                value: '?',
                                price: 2644,
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
// farmland monsters
                else if (this.monsterId === 'farmland_monster1') {
                    const val = this.getRandomValue(1,3);
                    console.log('farmland monster loot val: ' + val);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Green chicken',
                                description:"That doesn't look right ...",
                                value: '?',
                                price: 50,
                                imageSrc: require('../assets/images/farmland/farmland_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'farmland_monster2') {
                    const val = this.getRandomValue(1,2);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_helm',
                                itemUse: 'null',
                                itemShop: 'Armory, Oddities, Magic',
                                name: "Gnome's Hat",
                                description: "Red, plush, and magic!",
                                value: '?',
                                attack: this.getRandomValue(1,15),
                                defense: this.getRandomValue(10,25),
                                strength: 0,
                                life: this.getRandomValue(5,25),
                                mana: 0,
                                intelligence: 0,
                                price: 600,
                                imageSrc: require('../assets/images/farmland/farmland_monster_2_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'farmland_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val === 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Magic, Oddities',
                                name: 'Robes of Vengeance',
                                description:"How ... romantic?",
                                value: '?',
                                price: 150,
                                imageSrc: require('../assets/images/farmland/farmland_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itemShop: 'Blacksmith, Oddities, Magic',
                                name: "Dagger of the Betrayed",
                                description: "This dagger is motivated to cause harm",
                                value: '?',
                                attack: this.getRandomValue(8,30),
                                defense: 0,
                                strength: 0,
                                life: this.getRandomValue(5,25),
                                mana: 0,
                                intelligence: 0,
                                price: 600,
                                imageSrc: require('../assets/images/farmland/farmland_monster_3_treasure2.png'), 
                            }
                        )
                    }
                } 
                else if (this.monsterId === 'farmland_monster4') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Tavern, Oddities, Magic',
                                name: "Zombie's Hand Mushroom",
                                description:"People really eat this?!",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/farmland/farmland_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Oddities, Magic',
                                name: "Zombie's Hand",
                                description:"Useful for spells that need to hold things",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/farmland/farmland_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getFarmlandGems();
                    }
                } 
                else if (this.monsterId === 'farmland_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itemShop: 'Armory, Oddities, Magic',
                            name: "Weathered Farmer's Hat",
                            description: "Doesn't look like it'd offer much protection?",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(5,25),
                            strength: 0,
                            life: (this.getRandomValue(3,10)*-1),
                            mana: 0,
                            intelligence: 0,
                            price: 600,
                            imageSrc: require('../assets/images/farmland/farmland_monster_5_treasure.png'), 
                        }
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_necklace',
                                itemUse: 'null',
                                itemShop: 'Oddities, Magic',
                                name: "Haunted Amulet",
                                description: "Err... should anyone actually wear this thing?",
                                value: '?',
                                attack: 0,
                                defense: 0,
                                strength: this.getRandomValue(3,8),
                                life: this.getRandomValue(5,25),
                                mana: (this.getRandomValue(2,10)*-1),
                                intelligence: 0,
                                price: 600,
                                imageSrc: require('../assets/images/farmland/farmland_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itemShop: 'Blacksmith, Oddities',
                                name: "Rusty Sickle",
                                description: "Is much sharper than it looks",
                                value: '?',
                                attack: this.getRandomValue(8,30),
                                defense: (this.getRandomValue(0,5)*-1),
                                strength: 0,
                                life: 0,
                                mana: 0,
                                intelligence: 0,
                                price: 600,
                                imageSrc: require('../assets/images/farmland/farmland_monster_5_treasure3.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    console.log('val2 = ' + val2);
                    if (val2 <= 1) {
                        this.getFarmlandHerbs();
                    }
                } 
                else if (this.monsterId === 'farmland_monster6') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: "Black Dog Fur",
                            description: "About as soft as sandpaper",
                            value: '?',
                            price: 600,
                            imageSrc: require('../assets/images/farmland/farmland_monster_6_treasure.png'), 
                        }
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Armory, Apothecary, Blacksmith, Oddities',
                                name: "Black Dog Teeth",
                                description:"Adds extra viciousness impact to spells",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/farmland/farmland_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_necklace',
                                itemUse: 'null',
                                itemShop: 'Armory, Oddities',
                                name: "Dark Collar",
                                description:"Huh - seems magic-y",
                                value: '?',
                                attack: 0,
                                defense: 10,
                                strength: 2,
                                life: -10,
                                mana: 20,
                                intelligence: 5,
                                price: 600,
                                imageSrc: require('../assets/images/farmland/farmland_monster_6_treasure3.png'), 
                            }
                        )
                    }
                    this.getFarmlandGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getFarmlandHerbs();
                    } else (this.getFarmlandGems())
                } 
                else if (this.monsterId === 'farmland_monster7') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Oddities, Magic',
                            name: "Chupacabra Head",
                            description:"This thing weighs a ton!",
                            value: '?',
                            price: 900,
                            imageSrc: require('../assets/images/farmland/farmland_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Oddities, Magic, Apothecary, Armory, Blacksmith',
                            name: "Chupacabra scales",
                            description:"Oooh!  They're soft!",
                            value: '?',
                            price: 900,
                            imageSrc: require('../assets/images/farmland/farmland_monster_7_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,4);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities ',
                                name: 'Chupacabra Venom',
                                description:"Scales and venom - are chupacabras snakes?",
                                value: '?',
                                price: 900,
                                imageSrc: require('../assets/images/farmland/farmland_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Tavern, Oddities',
                                name: 'Chupacabra Ham',
                                description:"Bet it tastes like chicken",
                                value: '?',
                                price: 900,
                                imageSrc: require('../assets/images/farmland/farmland_monster_7_treasure4.png'), 
                            }
                        )
                    } else {
                        const val2 = this.getRandomValue(1,4);
                        if (val2 <= 1) {
                            this.getFarmlandGems();
                            this.getFarmlandGems();
                        } else if (val2 <=2) {
                            this.getFarmlandHerbs();
                            this.getFarmlandHerbs();
                        } else (this.getFarmlandGems(), this.getFarmlandHerbs())
                    }
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'farmland_monster8') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities',
                            name: "Hunter's Axe",
                            description:"Did the beast own or collect this axe?",
                            value: '?',
                            attack: this.getRandomValue(10,30),
                            defense: 5,
                            strength: 2,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 1200,
                            imageSrc: require('../assets/images/farmland/farmland_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Oddities, Blacksmith',
                            name: "Rougarou Pelt",
                            description:"Wait ... didn't this thing used to be human?  Is this human skin!?",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/farmland/farmland_monster_8_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_necklace',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith, Oddities, Magic',
                                name: "Moonstone Necklace",
                                description: "Wisdom is said to come from the moon",
                                value: '?',
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: 0,
                                mana: this.getRandomValue(10,30),
                                intelligence: this.getRandomValue(10,30),
                                price: 1200,
                                imageSrc: require('../assets/images/farmland/farmland_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_belt',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities, Armory, Blacksmith',
                                name: 'Cursed Belt',
                                description:"I mean, the word 'cursed' is right there in the name.  Probably shouldn't wear it",
                                value: '?',
                                attack: this.getRandomValue(10,30),
                                defense: this.getRandomValue(10,30),
                                strength: 4,
                                life: -30,
                                mana: -30,
                                intelligence: 0,
                                price: 1200,
                                imageSrc: require('../assets/images/farmland/farmland_monster_8_treasure4.png'), 
                            }
                        )
                    }
                    this.getFarmlandGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getFarmlandHerbs();
                    }
                } 
                else if (this.monsterId === 'farmland_monster9') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Magic, Oddities',
                            name: "Incorporeal Sheets",
                            description:"Full of powerful, dark magic",
                            value: '?',
                            price: 1650,
                            imageSrc: require('../assets/images/farmland/farmland_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_boots',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Armory',
                            name: "Ghost Boots",
                            description:"Spooky feet!",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(5,20),
                            strength: 4,
                            life: (this.getRandomValue(10,25)*-1),
                            mana: this.getRandomValue(5,30),
                            intelligence: 0,
                            price: 1650,
                            imageSrc: require('../assets/images/farmland/farmland_monster_9_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Apothecary, Oddities',
                                name: 'Ghost Light',
                                description:"Lets you see in the light",
                                value: '?',
                                price: 1650,
                                imageSrc: require('../assets/images/farmland/farmland_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_ring',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith, Magic, Oddities',
                                name: 'Soul Ring',
                                description:"I think the ring is screaming ... is that normal?",
                                value: '?',
                                attack: 0,
                                defense: 30,
                                strength: -2,
                                life: (this.getRandomValue(10,30)*-1),
                                mana: 20,
                                intelligence: 5,
                                price: 1650,
                                imageSrc: require('../assets/images/farmland/farmland_monster_9_treasure4.png'), 
                            }
                        )
                    }
                    this.getFarmlandHerbs();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities',
                                name: 'Spirit Reliquary',
                                description: "What happens if one of them gets out?",
                                value: '?',
                                price: 1800,
                                imageSrc: require('../assets/images/farmland/farmland_monster_9_treasure5.png'),
                              },
                        )
                    } else (this.getFarmlandGems())
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'farmland_monster10') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'horse_saddle',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Armory, Oddities',
                            name: "Saddle of the Damned",
                            description: "Forces the horse to carry 50% more items when worn",
                            value: '?',
                            carryBonus: 5,
                            price: 2800,
                            imageSrc: require('../assets/images/farmland/farmland_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Magic, Oddities',
                            name: "Horseman's Head",
                            description:"Looks like pumpkin, smells like sulphur",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/farmland/farmland_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Oddities, Magic, Apothecary',
                            name: "Hellfire",
                            description:"So help me, this stuff better not spill on me!",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/farmland/farmland_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Oddities, Magic, Blacksmith',
                            name: "Horsemaster's Sword",
                            description:"Sharp enough to cut a soul in half",
                            value: '?',
                            attack: 50,
                            defense: this.getRandomValue(5,30),
                            strength: 0,
                            life: 0,
                            mana: 20,
                            intelligence: 0,
                            price: 2250,
                            imageSrc: require('../assets/images/farmland/farmland_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_armor',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities, Armory',
                            name: "Tattered Horseman's Cape",
                            description:"Much warmer than it looks",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(10,40),
                            strength: 8,
                            life: 10,
                            mana: 10,
                            intelligence: 0,
                            price: 2250,
                            imageSrc: require('../assets/images/farmland/farmland_monster_10_treasure5.png'), 
                        },
                    )
                    this.getFarmlandGems();
                    this.getFarmlandGems();
                    this.getFarmlandGems();
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_gloves',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith, Magic, Oddities',
                                name: "Dark Gauntlets",
                                description: "There's dark and dangerous magic in these gloves",
                                value: '?',
                                attack: this.getRandomValue(10,30),
                                defense: this.getRandomValue(15,35),
                                strength: this.getRandomValue(2,8),
                                life: (this.getRandomValue(5,30)*-1),
                                mana: this.getRandomValue(10,40),
                                intelligence: 0,
                                price: 2250,
                                imageSrc: require('../assets/images/farmland/farmland_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: "King's Skulls",
                                description: "Aww, they still have their crowns!",
                                value: '?',
                                price: 2644,
                                imageSrc: require('../assets/images/farmland/farmland_monster_10_treasure7.png'), 
                            }
                        )
                    }
                    this.getFarmlandHerbs();
                    this.getFarmlandHerbs();                    
                    this.getPotionDrop();
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
// beach monsters
                else if (this.monsterId === 'beach_monster1') {
                    const val = this.getRandomValue(1,3);
                    console.log('beach monster loot val: ' + val);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities, Apothecary, Tavern',
                                name: 'Jelly stinger',
                                description:"Ouch!",
                                value: '?',
                                price: 50,
                                imageSrc: require('../assets/images/beach/beach_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'beach_monster2') {
                    const val = this.getRandomValue(1,2);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Tavern',
                                name: "Sanded Blubber",
                                description: "Supposedly, this stuff is tasty?",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/beach/beach_monster_2_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'beach_monster3') {
                    const val = this.getRandomValue(1,3);
                    if (val === 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_helm',
                                itemUse: 'null',
                                itemShop: 'Armory, Magic, Oddities',
                                name: 'Coral Crown',
                                description:"Lovely - but it gets tangled in my hair pretty easily.",
                                value: '?',
                                attack: this.getRandomValue(1,15),
                                defense: this.getRandomValue(10,25),
                                strength: 0,
                                life: this.getRandomValue(5,25),
                                mana: 0,
                                intelligence: 0,
                                price: 150,
                                imageSrc: require('../assets/images/beach/beach_monster_3_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_armor',
                                itemUse: 'null',
                                itemShop: 'Blacksmith, Oddities, Magic',
                                name: "Shell Armor",
                                description: "This is really supposed to protect me?",
                                value: '?',
                                attack: 0,
                                defense: this.getRandomValue(10,30),
                                strength: 0,
                                life: 0,
                                mana: 10,
                                intelligence: 0,
                                price: 600,
                                imageSrc: require('../assets/images/beach/beach_monster_3_treasure2.png'), 
                            }
                        )
                    }
                } 
                else if (this.monsterId === 'beach_monster4') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Tavern',
                                name: "Crab meat",
                                description:"I need some garlic butter- now!",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/beach/beach_monster_4_treasure.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Oddities, Magic, Armory, Blacksmith',
                                name: "Burrowing Crab Shell",
                                description:"Hard but flexible, and heat resistant",
                                value: '?',
                                price: 250,
                                imageSrc: require('../assets/images/beach/beach_monster_4_treasure2.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    if (val2 <= 1) {
                        this.getBeachGems();
                    }
                } 
                else if (this.monsterId === 'beach_monster5') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities',
                            name: "Coral Dagger",
                            description: "Tiny but super-sharp!",
                            value: '?',
                            attack: 20,
                            defense: 0,
                            strength: 2,
                            life: 0,
                            mana: 0,
                            intelligence: 0,
                            price: 600,
                            imageSrc: require('../assets/images/beach/beach_monster_5_treasure.png'), 
                        }
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Oddities, Magic, Apothecary, Tavern',
                                name: "Sea Monkey Fins",
                                description: "Useful in both potions and soup broths!",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/beach/beach_monster_5_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Apothecary, Oddities',
                                name: "Sea Monkey Venom",
                                description: "Figures those things were venomous",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/beach/beach_monster_5_treasure3.png'), 
                            }
                        )
                    }
                    const val2 = this.getRandomValue(1,4);
                    console.log('val2 = ' + val2);
                    if (val2 <= 1) {
                        this.getBeachHerbs();
                    }
                } 
                else if (this.monsterId === 'beach_monster6') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: "Selkie Coat",
                            description: "Soft, enchanted, and just a wee bit disturbing",
                            value: '?',
                            price: 600,
                            imageSrc: require('../assets/images/beach/beach_monster_6_treasure.png'), 
                        }
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_necklace',
                                itemUse: 'null',
                                itemShop: 'Armory, Magic, Oddities',
                                name: "Shell necklace",
                                description:"Looks innocent, but is really pretty powerful",
                                value: '?',
                                attack: 0,
                                defense: this.getRandomValue(10,25),
                                strength: 2,
                                life: this.getRandomValue(5,25),
                                mana: this.getRandomValue(5,25),
                                intelligence: 5,
                                price: 600,
                                imageSrc: require('../assets/images/beach/beach_monster_6_treasure2.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: "Selkie magic",
                                description:"Seal magic",
                                value: '?',
                                price: 600,
                                imageSrc: require('../assets/images/beach/beach_monster_6_treasure3.png'), 
                            }
                        )
                    }
                    this.getBeachGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getBeachHerbs();
                    } else (this.getBeachGems())
                } 
                else if (this.monsterId === 'beach_monster7') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Oddities, Magic',
                            name: "Sea Spear",
                            description:"Looks like metal, smells like seaweed",
                            value: '?',
                            attack: this.getRandomValue(10,25),
                            defense: this.getRandomValue(10,25),
                            strength: 0,
                            life: 0,
                            mana: this.getRandomValue(5,25),
                            intelligence: 0,
                            price: 900,
                            imageSrc: require('../assets/images/beach/beach_monster_7_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itemShop: 'Oddities, Magic, Blacksmith',
                            name: "Sea Warrior's Helm",
                            description:"Fits like a glove ... for your head",
                            value: '?',
                            price: 900,
                            imageSrc: require('../assets/images/beach/beach_monster_7_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,4);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities, Tavern ',
                                name: 'Ichtyocentaur Tail',
                                description:"It's basically all cartilidge",
                                value: '?',
                                price: 900,
                                imageSrc: require('../assets/images/beach/beach_monster_7_treasure3.png'), 
                            },
                        );
                    } else if (val <= 2) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'horse_bag',
                                itemUse: 'null',
                                itemShop: 'Armory, Oddities',
                                name: 'Seaweed Saddlebag',
                                description:"Increases your holding capacity by 20% - and makes all your things smell like seaweed!",
                                value: '?',
                                carryBonus: 2,
                                price: 900,
                                imageSrc: require('../assets/images/beach/beach_monster_7_treasure4.png'), 
                            }
                        )
                    } else {
                        const val2 = this.getRandomValue(1,4);
                        if (val2 <= 1) {
                            this.getBeachGems();
                            this.getBeachGems();
                        } else if (val2 <=2) {
                            this.getBeachHerbs();
                            this.getBeachHerbs();
                        } else (this.getBeachGems(), this.getBeachHerbs())
                    }
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'beach_monster8') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Magic, Apothecary, Oddities',
                            name: "Makara Ivory",
                            description:"Useful item for crafting lots of things",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/beach/beach_monster_8_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Oddities, Tavern',
                            name: "Makara Tentacles",
                            description:"Delicious when steamed",
                            value: '?',
                            price: 1200,
                            imageSrc: require('../assets/images/beach/beach_monster_8_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: "Elderich essence",
                                description: "Looks, smells, feels very very old",
                                value: '?',
                                price: 1200,
                                imageSrc: require('../assets/images/beach/beach_monster_8_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities, Tavern, Apothecary',
                                name: 'Makara oil',
                                description:"Use this and all your recipes will taste like genuine elderich Makara!",
                                value: '?',
                                price: 1200,
                                imageSrc: require('../assets/images/beach/beach_monster_8_treasure4.png'), 
                            }
                        )
                    }
                    this.getBeachGems();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.getBeachHerbs();
                    }
                } 
                else if (this.monsterId === 'beach_monster9') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Magic, Oddities, Blacksmith, Apothecary',
                            name: "Cetus Scales",
                            description:"Glittery and magical",
                            value: '?',
                            price: 1650,
                            imageSrc: require('../assets/images/beach/beach_monster_9_treasure.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_shield',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Armory',
                            name: "Cetus Shield",
                            description:"It even has a little ocean dragon on it in case you forgot where it came from!",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(5,20),
                            strength: 4,
                            life: this.getRandomValue(10,25),
                            mana: this.getRandomValue(5,30),
                            intelligence: 0,
                            price: 1650,
                            imageSrc: require('../assets/images/beach/beach_monster_9_treasure2.png'), 
                        },
                    )
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Apothecary, Tavern',
                                name: 'Cetus Steak',
                                description:"Eat it before it eats you!",
                                value: '?',
                                price: 1650,
                                imageSrc: require('../assets/images/beach/beach_monster_9_treasure3.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Apothecary, Magic, Oddities',
                                name: 'Sea Power',
                                description:"A bottle full of ocean magic.",
                                value: '?',
                                price: 1650,
                                imageSrc: require('../assets/images/beach/beach_monster_9_treasure4.png'), 
                            }
                        )
                    }
                    this.getBeachHerbs();
                    const val2 = this.getRandomValue(1,3);
                    if (val2 <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'null',
                                itemShop: 'Magic, Oddities, Apothecary',
                                name: 'Eye of Cetus',
                                description: "Can an eye look annoyed?  Because it looks annoyed.",
                                value: '?',
                                price: 1800,
                                imageSrc: require('../assets/images/beach/beach_monster_9_treasure5.png'),
                              },
                        )
                    } else (this.getBeachGems())
                    this.getPotionDrop();
                    this.getPotionDrop();
                } 
                else if (this.monsterId === 'beach_monster10') {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_necklace',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Armory, Oddities',
                            name: "Ocean's Collar",
                            description: "Answers the question of how do you collar the ocean",
                            value: '?',
                            attack: 0,
                            defense: this.getRandomValue(10,25),
                            strength: 0,
                            life: this.getRandomValue(5,25),
                            mana: this.getRandomValue(10,40),
                            intelligence: this.getRandomValue(5,20),
                            price: 2800,
                            imageSrc: require('../assets/images/beach/beach_monster_10_treasure.png'),
                          },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_sword',
                            itemUse: 'null',
                            itemShop: 'Blacksmith, Magic, Oddities',
                            name: "Sword of Calypso",
                            description:"Just oozing with ocean mist",
                            value: '?',
                            attack: this.getRandomValue(15,40),
                            defense: this.getRandomValue(10,25),
                            strength: 0,
                            life: this.getRandomValue(5,25),
                            mana: this.getRandomValue(10,30),
                            intelligence: 0,
                            price: 2250,
                            imageSrc: require('../assets/images/beach/beach_monster_10_treasure2.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Oddities, Magic, Apothecary',
                            name: "Storm at Sea",
                            description:"Wet and angry",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/beach/beach_monster_10_treasure3.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'player_helm',
                            itemUse: 'null',
                            itemShop: 'Oddities, Magic, Blacksmith',
                            name: "Crown of Wisdom",
                            description:"Look at you, smartypants!",
                            value: '?',
                            attack: 0,
                            defense: 0,
                            strength: 0,
                            life: 0,
                            mana: this.getRandomValue(10,20),
                            intelligence: this.getRandomValue(15,40),
                            price: 2250,
                            imageSrc: require('../assets/images/beach/beach_monster_10_treasure4.png'), 
                        },
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Magic, Oddities',
                            name: "Book of the Sea",
                            description:"Wonder what would happen if I read it?",
                            value: '?',
                            price: 2250,
                            imageSrc: require('../assets/images/beach/beach_monster_10_treasure5.png'), 
                        },
                    )
                    this.getBeachGems();
                    this.getBeachGems();
                    this.getBeachGems();
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itemShop: 'Armory, Blacksmith, Magic, Oddities',
                                name: "Calypso's Staff",
                                description: "Guess this means she was a wizard?",
                                value: '?',
                                attack: this.getRandomValue(10,30),
                                defense: this.getRandomValue(15,35),
                                strength: this.getRandomValue(2,8),
                                life: (this.getRandomValue(5,30)*-1),
                                mana: this.getRandomValue(10,40),
                                intelligence: 0,
                                price: 2250,
                                imageSrc: require('../assets/images/beach/beach_monster_10_treasure6.png'), 
                            },
                        );
                    } else {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'null',
                                itemUse: 'health',
                                itemShop: 'Apothecary, Magic, Oddities, Tavern',
                                name: "Immortal's Wine",
                                description: "What would happen if I drank this?",
                                value: '?',
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: 30,
                                mana: 0,
                                intelligence: 0,
                                price: 2644,
                                imageSrc: require('../assets/images/beach/beach_monster_10_treasure7.png'), 
                            }
                        )
                    }
                    this.getBeachHerbs();
                    this.getBeachHerbs();                    
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: 'Freshwater Pearls',
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
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: "Gods' Moss",
                            description: "The gods do seem very fond of the color green.",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/swamp/swamp_gem_3.png')
                        }
                    )
                }
            },

            getFarmlandGems() {
                const val = this.getRandomValue(1,4);
                console.log('random gem number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: 'Fieldstone',
                            description: "Reflective of all the colors of grass across the seasons",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/farmland/farmland_gem_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: 'Rose Quartz',
                            description: "Pink and powerful",
                            value: '?',
                            price: 3000,
                            imageSrc: require('../assets/images/farmland/farmland_gem_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: "Gem of Fertility",
                            description: "Use with protection",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/farmland/farmland_gem_3.png')
                        }
                    )
                }
            },

            getBeachGems() {
                const val = this.getRandomValue(1,4);
                console.log('random gem number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: 'Seaglass',
                            description: "Seems to glow with an internal light",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/beach/beach_gem_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: 'Saltwater Pearl',
                            description: "Perfectly spherical",
                            value: '?',
                            price: 3000,
                            imageSrc: require('../assets/images/beach/beach_gem_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Armory, Blacksmith, Oddities, Magic',
                            name: "Seaheart",
                            description: "It even feels like it has a heartbeat",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/beach/beach_gem_3.png')
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
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
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
                            name: 'Tree Knees',
                            description: "Not to be mistaken with the very similiar 'bees knees'.",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/swamp/swamp_herb_3.png')
                        }
                    )
                }
            },

            getFarmlandHerbs() {
                const val = this.getRandomValue(1,4);
                console.log('random herb number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
                            name: 'Thyme',
                            description: "A common, useful herb that grows just about everywhere.",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/farmland/farmland_herb_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
                            name: 'Parsley',
                            description: "Useful for adding a freshness factor to magics and stews.",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/farmland/farmland_herb_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
                            name: 'Rosemary',
                            description: "Often found growing on the side of roads, very useful.",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/farmland/farmland_herb_3.png')
                        }
                    )
                }
            },

            getBeachHerbs() {
                const val = this.getRandomValue(1,4);
                console.log('random herb number:' + val)
                if (val <= 1) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
                            name: 'Sea Grape',
                            description: "Salty and sweet - a delightful combo.",
                            value: '?',
                            price: 2000,
                            imageSrc: require('../assets/images/beach/beach_herb_1.png')
                        },
                    );
                } else if (val <= 2) {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
                            name: 'Sand Palm',
                            description: "Adds good drainage to spells.",
                            value: '?',
                            price: 4000,
                            imageSrc: require('../assets/images/beach/beach_herb_2.png')
                        }
                    )
                } else {
                    this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            itemSlot: 'null',
                            itemUse: 'null',
                            itemShop: 'Apothecary, Tavern, Magic, Oddities',
                            name: 'Hibiscus',
                            description: "Healing and floral.",
                            value: '?',
                            price: 5000,
                            imageSrc: require('../assets/images/beach/beach_herb_3.png')
                        }
                    )
                }
            },

            getPotionDrop() {
                const val = this.getRandomValue(1, 215);
                if (val <=30) {
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
                } else if (val <=40) {
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
                } else if (val <=45) {
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
                } else if (val <=46) {
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
                } else if (val<=76) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attacking',
                            itemShop: 'Apothecary',
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
                } else if (val<=86) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attacking',
                            itemShop: 'Apothecary',
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
                } else if (val<=91) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attacking',
                            itemShop: 'Apothecary',
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
                } else if (val<=92) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attack',
                            itemShop: 'Apothecary',
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
                } else if (val<=93) {
                    this.lootList.push(
                        {
                            id: Math.floor(Math.random() * 10000),
                            itemSlot: 'null',
                            itemUse: 'attack',
                            itemShop: 'Apothecary',
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
                } else if (val<=123) {
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
                } else if (val<=133) {
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
                } else if (val<=134) {
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
                } else if (val<=135) {
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
                } else if (val<=145) {
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
                } else if (val<=150) {
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
                } else if (val<=151) {
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
                } else if (val<=152) {
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
                } else if (val<=162) {
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
                } else if (val<=167) {
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
                } else if (val<=168) {
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
                } else if (val<=169) {
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
                } else if (val<=199) {
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
                } else if (val<=209) {
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