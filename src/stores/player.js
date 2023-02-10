import { defineStore } from 'pinia'

export const usePlayerStore =
    defineStore({
        id: 'player',
        state: () => ({
            playerId: 'Player One',
            playerLevel: 1,
            playerStartingHealth: 100,
            playerBaseStartingHealth: 100,
            playerHealth: 100,
            playerBaseHealth: 100,
            healthBonus: 0,
            coinOnHand: 10000,
            playerBaseAttack: 1,
            attackBonus: 0,
            playerAttack: 1,
            playerBaseDefense: 1,
            defenseBonus: 0,
            playerDefense: 1,
            playerBaseStrength: 1,
            strengthBonus: 0, 
            playerStrength: 15,

            playerQuests: [],
            playerEquipped: {
                player_helm: [
                    {
                        id: 'helm',
                        itemSlot: 'player_helm',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/helm.png'),
                    },
                ],
                player_armor: [
                    {
                        id: 'armor',
                        itemSlot: 'player_armor',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/armor.png'),
                    },
                ],
                player_shield: [
                    {
                        id: 'shield',
                        itemSlot: 'player_shield',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/shield.png'),
                    },
                ],
                player_gloves: [
                    {
                        id: 'gloves',
                        itemSlot: 'player_gloves',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/gloves.png'),
                    },
                ],
                player_vambraces: [
                    {
                        id: 'vambraces',
                        itemSlot: 'player_vambraces',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/vambraces.png'),
                    },
                ],
                player_sword: [
                    {
                        id: 'sword',
                        itemSlot: 'player_sword',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/sword.png'),
                    },
                ],
                player_boots:[
                    {
                        id: 'boots',
                        itemSlot: 'player_boots',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/boots.png'),
                    },
                ],
                player_necklace: [
                    {
                        id: 'necklace',
                        itemSlot: 'player_necklace',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/necklace.png'),
                    },
                ],
                player_ring: [
                    {
                        id: 'ring',
                        itemSlot: 'player_ring',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/ring.png'),
                    },
                ],
                player_belt: [
                    {
                        id: 'belt',
                        itemSlot: 'player_belt',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        attack: null,
                        defense: null,
                        strength: null,
                        life: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/belt.png'),
                    },
                ],
            },      
            swapHolder1: [],     
            swapHolder2: [],     
            playerPacked: [],
            carryCapacity: 10,
            baseCarryCapacity: 10,
            carryCapacityBonus: 0,

            horseInventory: {
                horse_shoes: [
                    {
                        id: 'shoes',
                        itemSlot: 'horse_shoes',
                        name: 'shoes',
                        description: "",
                        value: '',
                        carryBonus: 0,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/horseshoes.png'),            
                    },
                ],
                horse_saddle: [
                    {
                        id: 'saddle',
                        itemSlot: 'horse_saddle',
                        name: 'saddle',            
                        description: "",
                        value: '',
                        price: '',
                        imageSrc: require('../assets/images/placeholders/saddle.png'),            
                    },
                ],
                horse_bag: [
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
            },

            nextLevel: 100,
            increase: 3,
            playerXP: 0,
            playerTotalXP: 0,
            healthPerSec: 0,
        }),
        actions: {
            getAttackValues() {
                this.attackBonus = 
                    (
                        this.playerEquipped.player_helm[0].attack
                        + this.playerEquipped.player_armor[0].attack 
                        + this.playerEquipped.player_shield[0].attack 
                        + this.playerEquipped.player_gloves[0].attack 
                        + this.playerEquipped.player_vambraces[0].attack
                        + this.playerEquipped.player_sword[0].attack 
                        + this.playerEquipped.player_boots[0].attack 
                        + this.playerEquipped.player_necklace[0].attack 
                        + this.playerEquipped.player_ring[0].attack 
                        + this.playerEquipped.player_belt[0].attack 
                    );
                this.playerAttack = (this.playerBaseAttack + this.attackBonus);
            },
            getDefenseValues() {
                this.defenseBonus = 
                (
                    this.playerEquipped.player_helm[0].defense
                    + this.playerEquipped.player_armor[0].defense 
                    + this.playerEquipped.player_shield[0].defense 
                    + this.playerEquipped.player_gloves[0].defense 
                    + this.playerEquipped.player_vambraces[0].defense
                    + this.playerEquipped.player_sword[0].defense 
                    + this.playerEquipped.player_boots[0].defense 
                    + this.playerEquipped.player_necklace[0].defense 
                    + this.playerEquipped.player_ring[0].defense 
                    + this.playerEquipped.player_belt[0].defense 
                );
            this.playerDefense = (this.playerBaseDefense + this.defenseBonus);
            },
            getStrengthValues() {
                this.strengthBonus = 
                (
                    this.playerEquipped.player_helm[0].strength
                    + this.playerEquipped.player_armor[0].strength 
                    + this.playerEquipped.player_shield[0].strength 
                    + this.playerEquipped.player_gloves[0].strength 
                    + this.playerEquipped.player_vambraces[0].strength
                    + this.playerEquipped.player_sword[0].strength 
                    + this.playerEquipped.player_boots[0].strength 
                    + this.playerEquipped.player_necklace[0].strength 
                    + this.playerEquipped.player_ring[0].strength 
                    + this.playerEquipped.player_belt[0].strength 
                );
            this.playerStrength = (this.playerBaseStrength + this.strengthBonus);
            },
            getExtraHealth() {
                this.healthBonus = 
                (
                    this.playerEquipped.player_helm[0].life
                    + this.playerEquipped.player_armor[0].life 
                    + this.playerEquipped.player_shield[0].life 
                    + this.playerEquipped.player_gloves[0].life 
                    + this.playerEquipped.player_vambraces[0].life
                    + this.playerEquipped.player_sword[0].life 
                    + this.playerEquipped.player_boots[0].life 
                    + this.playerEquipped.player_necklace[0].life 
                    + this.playerEquipped.player_ring[0].life 
                    + this.playerEquipped.player_belt[0].life 
                );
            this.playerStartingHealth = (this.playerBaseStartingHealth + this.healthBonus);
            this.playerHealth = (this.playerBaseHealth + this.healthBonus);
            },
            getCarryCapacity() {
                this.carryCapacityBonus =
                (
                    (this.horseInventory.horse_shoes[0].carryBonus * .1)
                );
                this.carryCapacity = (this.baseCarryCapacity + (this.baseCarryCapacity * this.carryCapacityBonus));
            },

        }
    })