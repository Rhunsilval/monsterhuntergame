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
                        const val = this.getRandomValue(50-150);
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
                        const val = this.getRandomValue(50-300);
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
                        const val = this.getRandomValue(150-400);
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
                        const val = this.getRandomValue(300-500);
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
                        const val = this.getRandomValue(400-600);
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
                        const val = this.getRandomValue(500-700);
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
                        const val = this.getRandomValue(700-10000);
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
    // talismans
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
                    if (val === 1) {
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
                                itemSlot: 'null',
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

            }
        }

    })