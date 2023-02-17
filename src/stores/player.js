import { defineStore } from 'pinia'

export const usePlayerStore =
    defineStore({
        id: 'player',
        state: () => ({
            playerId: 'Player One',
            coinOnHand: 10000,            

            playerStartingHealth: 100,
            playerBaseStartingHealth: 100,
            playerHealth: 100,
            playerBaseHealth: 100,
            healthBonus: 0,         // from equipped items
            tempHealthBonus: 0,     // from potions etc
            healthPerSec: .1,       // Fortitude - how fast player heals

            playerStartingMana: 100,
            playerBaseStartingMana: 100,
            playerMana: 100,
            playerBaseMana: 100,
            manaBonus: 0,           // from equipped items
            tempManaBonus: 0,       // from potions,etc
            manaPerSec: .1,         // how fast player restores mana
            
            playerBaseAttack: 1,
            attackBonus: 0,         // from equipped items
            tempAttackBonus: 0,     // from potions etc
            playerAttack: 1,

            playerBaseDefense: 1,
            defenseBonus: 0,        // from equipped items
            tempDefenseBonus: 0,    // from potions etc
            playerDefense: 1,

            playerBaseStrength: 1,
            strengthBonus: 0,       // from equipped items
            tempStrengthBonus: 0,   // from potions etc
            playerStrength: 15,

            playerBaseIntelligence: 1,
            intelligenceBonus: 0,       // from equipped items
            tempIntelligenceBonus: 0,   // from potions etc
            playerIntelligence: 1,

            playerLevel: 1,
            playerPoints: 5,    // points to spend on increasing stats
            nextLevel: 500,
            increase: 2,

            playerXP: 0,
            playerTotalXP: 0,

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

            playerBank: [], // for storing items not in pack

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
                this.playerAttack = (this.playerBaseAttack + this.attackBonus + this.tempAttackBonus);
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
            this.playerDefense = (this.playerBaseDefense + this.defenseBonus + this.tempDefenseBonus);
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
            this.playerStrength = (this.playerBaseStrength + this.strengthBonus + this.tempStrengthBonus);
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
            this.playerStartingHealth = (this.playerBaseStartingHealth + this.healthBonus + this.tempHealthBonus);
            this.playerHealth = (this.playerBaseHealth + this.healthBonus + this.tempHealthBonus);
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