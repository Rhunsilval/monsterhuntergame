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
                    this.monsterId === 'mountains_monster1' ||
                    this.monsterId === 'mountains_monster2' ||
                    this.monsterId === 'mountains_monster3' ||
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
                    this.monsterId === 'mountains_monster4' ||
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
                    this.monsterId === 'mountains_monster5' ||
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
                    this.monsterId === 'mountains_monster6' ||
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
                    this.monsterId === 'mountains_monster7' ||
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
                    this.monsterId === 'mountains_monster8' ||
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
                    this.monsterId === 'mountains_monster9' ||
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
                    this.monsterId === 'mountains_monster10' ||
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
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: 0,
                                price: 500,
                                imageSrc: require('../assets/images/desert/desert_monster_1_treasure.png'), 
                            },
                        );
                    } 
                } 
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
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: 0,
                                price: 500,
                                imageSrc: require('../assets/images/grassland/grassland_monster_1_treasure.png'), 
                            },
                        );
                    } 
                } 
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
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: 0,
                                price: 500,
                                imageSrc: require('../assets/images/jungle/jungle_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }
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
                                attack: 0,
                                defense: 0,
                                strength: 0,
                                life: 0,
                                price: 500,
                                imageSrc: require('../assets/images/marshes/marshes_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'mountain_monster1') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itesmShop: 'Blacksmith',
                                name: 'Goblin Dagger',
                                description:"Looks wicked sharp.",
                                value: '?',
                                attack: 6,
                                defense: 0,
                                strength: 0,
                                life: 0,
                                price: 350,
                                imageSrc: require('../assets/images/mountains/mountain_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }
                else if (this.monsterId === 'swamp_monster1') {
                    const val = this.getRandomValue(1,3);
                    if (val <= 1) {
                        this.lootList.push(
                            {
                                id: this.getRandomValue(1, 100000),
                                itemSlot: 'player_sword',
                                itemUse: 'null',
                                itesmShop: 'null',
                                name: 'Tangled Rootbeast Vines',
                                description:"So tangly.",
                                value: '?',
                                attack: 6,
                                defense: 0,
                                strength: 0,
                                life: 0,
                                price: 350,
                                imageSrc: require('../assets/images/swamp/swamp_monster_1_treasure.png'), 
                            },
                        );
                    } 
                }

            }
        }

    })