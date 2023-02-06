import { defineStore } from 'pinia'

export const usePlayerStore =
    defineStore({
        id: 'player',
        state: () => ({
            playerId: 'Player One',
            playerLevel: 1,
            playerStartingHealth: 100,
            playerHealth: 100,
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
            playerStrength: 1,

            playerQuests: [],
            playerEquipped: {
                player_helm:{
                    id: 'helm',
                    itemSlot: 'player_helm',
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
                player_armor:{
                    id: 'armor',
                    itemSlot: 'player_armor',
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
                player_shield:{
                    id: 'shield',
                    itemSlot: 'player_shield',
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
                player_gloves:{
                    id: 'gloves',
                    itemSlot: 'player_gloves',
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
                player_vambraces:{
                    id: 'vambraces',
                    itemSlot: 'player_vambraces',
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
                player_sword:{
                    id: 'sword',
                    itemSlot: 'player_sword',
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
                player_boots:{
                    id: 'boots',
                    itemSlot: 'player_boots',
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
                player_necklace:{
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
                player_ring:{
                    id: 'ring',
                    itemSlot: 'player_ring',
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
                player_belt:{
                    id: 'belt',
                    itemSlot: 'player_belt',
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
            },
            playerPacked: [],
            carryCapacity: 10,

            horseInventory: {
                horse_shoes: {
                    id: 'shoes',
                    itemSlot: 'horse_shoes',
                    name: 'shoes',
                    description: "",
                    value: '',
                    price: '',
                    imageSrc: require('../assets/images/placeholders/horseshoes.png'),            
                },
                horse_saddle: {
                    id: 'saddle',
                    itemSlot: 'horse_saddle',
                    name: 'saddle',            
                    description: "",
                    value: '',
                    price: '',
                    imageSrc: require('../assets/images/placeholders/saddle.png'),            
                },
                horse_bag: {
                    id: 'bag',
                    itemSlot: 'horse_bag',
                    name: 'bag',
                    description: "",
                    value: '',
                    price: '',
                    imageSrc: require('../assets/images/placeholders/bags.png'),        
                },
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
                        this.playerEquipped.player_helm.attack
                        + this.playerEquipped.player_armor.attack 
                        + this.playerEquipped.player_shield.attack 
                        + this.playerEquipped.player_gloves.attack 
                        + this.playerEquipped.player_vambraces.attack
                        + this.playerEquipped.player_sword.attack 
                        + this.playerEquipped.player_boots.attack 
                        + this.playerEquipped.player_necklace.attack 
                        + this.playerEquipped.player_ring.attack 
                        + this.playerEquipped.player_belt.attack 
                    );
                this.playerAttack = (this.playerBaseAttack + this.attackBonus);
            },
            getDefenseValues() {
                this.defenseBonus = 
                (
                    this.playerEquipped.player_helm.defense
                    + this.playerEquipped.player_armor.defense 
                    + this.playerEquipped.player_shield.defense 
                    + this.playerEquipped.player_gloves.defense 
                    + this.playerEquipped.player_vambraces.defense
                    + this.playerEquipped.player_sword.defense 
                    + this.playerEquipped.player_boots.defense 
                    + this.playerEquipped.player_necklace.defense 
                    + this.playerEquipped.player_ring.defense 
                    + this.playerEquipped.player_belt.defense 
                );
            this.playerDefense = (this.playerBaseDefense + this.defenseBonus);
            },
            getStrengthValues() {
                this.strengthBonus = 
                (
                    this.playerEquipped.player_helm.strength
                    + this.playerEquipped.player_armor.strength 
                    + this.playerEquipped.player_shield.strength 
                    + this.playerEquipped.player_gloves.strength 
                    + this.playerEquipped.player_vambraces.strength
                    + this.playerEquipped.player_sword.strength 
                    + this.playerEquipped.player_boots.strength 
                    + this.playerEquipped.player_necklace.strength 
                    + this.playerEquipped.player_ring.strength 
                    + this.playerEquipped.player_belt.strength 
                );
            this.playerStrength = (this.playerBaseStrength + this.strengthBonus);
            },
            getExtraHealth() {
                this.healthBonus = 
                (
                    this.playerEquipped.player_helm.life
                    + this.playerEquipped.player_armor.life 
                    + this.playerEquipped.player_shield.life 
                    + this.playerEquipped.player_gloves.life 
                    + this.playerEquipped.player_vambraces.life
                    + this.playerEquipped.player_sword.life 
                    + this.playerEquipped.player_boots.life 
                    + this.playerEquipped.player_necklace.life 
                    + this.playerEquipped.player_ring.life 
                    + this.playerEquipped.player_belt.life 
                );
            this.playerStartingHealth = (this.playerStartingHealth + this.healthBonus);
            this.playerHealth = (this.playerHealth + this.healthBonus);
            },

        }

    })