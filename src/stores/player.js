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
        })
    })