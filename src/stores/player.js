import { defineStore } from 'pinia'

export const usePlayerStore =
    defineStore({
        id: 'player',
        state: () => ({
            playerId: 'Player One',
            playerLevel: 1,
            playerStartingHealth: 100,
            playerHealth: 100,
            coinOnHand: 1000,
            playerAttack: 1,
            playerDefense: 1,
            playerStrength: 1,

            playerQuests: [],
            playerEquipped: [],
            playerPacked: [],
            horseInventory: [
                {
                    id: 'shoes',
                    itemSlot: 'horse_shoes',
                    name: 'shoes',
                    description: "",
                    value: '',
                    price: '',
                    imageSrc: require('../assets/images/placeholders/horseshoes.png'),            
                },
                {
                    id: 'saddle',
                    itemSlot: 'horse_saddle',
                    name: 'saddle',            
                    description: "",
                    value: '',
                    price: '',
                    imageSrc: require('../assets/images/placeholders/saddle.png'),            
                },
                {
                    id: 'bag',
                    itemSlot: 'horse_bag',
                    name: 'bag',
                    description: "",
                    value: '',
                    price: '',
                    imageSrc: require('../assets/images/placeholders/bags.png'),
        
                },
            ],

            nextLevel: 100,
            increase: 3,
            playerXP: 0,
            playerTotalXP: 0,
            healthPerSec: 0,
        })
    })