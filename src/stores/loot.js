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

            getLoot() {
                if (this.monsterId === 'desert_monster1') {
                    let x = this.getRandomValue(1, 2);
                    if (x === 1){
                        this.lootList.push({
                            id: 'apo_strength_1',
                            itemSlot: 'null',
                            itemUse: 'strength',
                            itesmShop: 'Apothecary',
                            name: 'Tincure of Strength',
                            description:"Rub this in and you'll instantly feel stronger.",
                            value: '+1 strength',
                            attack: 0,
                            defense: 0,
                            strength: 5,
                            life: 0,
                            price: 500,
                            imageSrc: require('../assets/images/village/Apothecary_clay_jar_1.png'), 
                        })
                    }
                }
            }
        }

    })