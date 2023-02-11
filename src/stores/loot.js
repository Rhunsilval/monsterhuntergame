import { defineStore } from "pinia";

export const useLootStore =
    defineStore({
        id: 'loot',
        state: () => ({
            lootList: [],
            monsterId: '',

        }),
        actions: {
            getRandomValue(min, max) {
                return Math.floor(Math.random()*(max - min)) + min;
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
                    } else {this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            name: 'No treasure',
                            description:"Can I interest you in a nice handful of sand?",
                            imageSrc: require('../assets/images/desert/desert_notreasure.png'),
                        },
                    )}
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
                    } else {this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            name: 'No treasure',
                            description:"Maybe you can use it for firewood?",
                            imageSrc: require('../assets/images/forest/forest_notreasure.png'),
                        },
                    )}
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
                    } else {this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            name: 'No treasure',
                            description:"At least you found a snack for your horse.",
                            imageSrc: require('../assets/images/grassland/grassland_notreasure.png'),
                        },
                    )}
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
                    } else {this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            name: 'No treasure',
                            description:"Hey!  A cool leaf!",
                            imageSrc: require('../assets/images/jungle/jungle_notreasure.png'),
                        },
                    )}
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
                    } else {this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            name: 'No treasure',
                            description:"So ... many ... mosquitos!",
                            imageSrc: require('../assets/images/marshes/marshes_notreasure.png'),
                        },
                    )}
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
                    } else {this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            name: 'No treasure',
                            description:"Oh look; a rock.",
                            imageSrc: require('../assets/images/mountains/mountain_notreasure.png'),
                        },
                    )}
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
                    } else {this.lootList.push(
                        {
                            id: this.getRandomValue(1, 100000),
                            name: 'No treasure',
                            description:"Gross",
                            imageSrc: require('../assets/images/swamp/swamp_notreasure.png'),
                        },
                    )}
                }

            }
        }

    })