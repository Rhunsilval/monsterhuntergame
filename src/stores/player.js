import { defineStore } from 'pinia'

export const usePlayerStore =
    defineStore({
        id: 'player',
        state: () => ({
            playerId: 'Player One',
            coinOnHand: 100000,            

            playerStartingHealth: 100,      // what renders on screen
            playerBaseStartingHealth: 100,  // for temporary results
            playerHealth: 100,              // on screen
            playerBaseHealth: 100,          // for temporary results
            healthBonus: 0,         // from equipped items
            // tempHealthBonus: 0,     // from potions etc - needed?
            healthPerSec: .1,       // Fortitude - how fast player heals

            playerStartingMana: 100,
            playerBaseStartingMana: 100,
            playerMana: 100,
            playerBaseMana: 100,
            manaBonus: 0,           // from equipped items
            //tempManaBonus: 0,       // from potions,etc - needed?
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
            playerStrength: 1,

            playerBaseIntelligence: 1,
            intelligenceBonus: 0,       // from equipped items
            tempIntelligenceBonus: 0,   // from potions etc
            playerIntelligence: 1,

            playerLevel: 1,
            playerPoints: 5,    // points to spend on increasing stats
            nextLevel: 100,
            increase: 2,

            playerXP: 0,        // what player has now
            playerTotalXP: 0,   // what player has in total
            playerNeededXP: 0,  // what player needs to level up

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
                        mana: null,
                        intelligence: null,
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
                        mana: null,
                        intelligence: null,
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
                        mana: null,
                        intelligence: null,
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
                        mana: null,
                        intelligence: null,
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
                        mana: null,
                        intelligence: null,
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
                        mana: null,
                        intelligence: null,
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
                        mana: null,
                        intelligence: null,
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
                        mana: null,
                        intelligence: null,
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
                        mana: null,
                        intelligence: null,
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
                        mana: null,
                        intelligence: null,
                        price: '',
                        imageSrc: require('../assets/images/placeholders/belt.png'),
                    },
                ],
                player_F1_spell: [
                    {
                        id: 'F1_spell',
                        itemSlot: 'player_F1_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/fire.png'),
                    },
                ],
                player_F2_spell: [
                    {
                        id: 'F2_spell',
                        itemSlot: 'player_F2_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/fire.png'),
                    },
                ],
                player_F3_spell: [
                    {
                        id: 'F3_spell',
                        itemSlot: 'player_F3_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/fire.png'),
                    },
                ],
                player_W1_spell: [
                    {
                        id: 'W1_spell',
                        itemSlot: 'player_W1_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/water.png'),
                    },
                ],
                player_W2_spell: [
                    {
                        id: 'W2_spell',
                        itemSlot: 'player_W2_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/water.png'),
                    },
                ],
                player_W3_spell: [
                    {
                        id: 'W3_spell',
                        itemSlot: 'player_W3_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/water.png'),
                    },
                ],
                player_E1_spell: [
                    {
                        id: 'E1_spell',
                        itemSlot: 'player_E1_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/earth.png'),
                    },
                ],
                player_E2_spell: [
                    {
                        id: 'E2_spell',
                        itemSlot: 'player_E2_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/earth.png'),
                    },
                ],
                player_E3_spell: [
                    {
                        id: 'E3_spell',
                        itemSlot: 'player_E3_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/earth.png'),
                    },
                ],
                player_A1_spell: [
                    {
                        id: 'A1_spell',
                        itemSlot: 'player_A1_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/air.png'),
                    },
                ],
                player_A2_spell: [
                    {
                        id: 'A2_spell',
                        itemSlot: 'player_A2_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/air.png'),
                    },
                ],
                player_A3_spell: [
                    {
                        id: 'A3_spell',
                        itemSlot: 'player_A3_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/air.png'),
                    },
                ],
                player_D1_spell: [
                    {
                        id: 'D1_spell',
                        itemSlot: 'player_D1_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/dark.png'),
                    },
                ],
                player_D2_spell: [
                    {
                        id: 'D2_spell',
                        itemSlot: 'player_D2_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/dark.png'),
                    },
                ],
                player_D3_spell: [
                    {
                        id: 'D3_spell',
                        itemSlot: 'player_D3_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/dark.png'),
                    },
                ],
                player_L1_spell: [
                    {
                        id: 'L1_spell',
                        itemSlot: 'player_L1_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/light.png'),
                    },
                ],
                player_L2_spell: [
                    {
                        id: 'L2_spell',
                        itemSlot: 'player_L2_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/light.png'),
                    },
                ],
                player_L3_spell: [
                    {
                        id: 'L3_spell',
                        itemSlot: 'player_L3_spell',
                        itemShop: '',
                        name: '',
                        description: '',
                        value: '',
                        mana: null,
                        price: '',
                        imageSrc: '',
                        imageSrc2: require('../assets/images/placeholders/light.png'),
                    },
                ],
            },      
            swapHolder1: [],     
            swapHolder2: [],     
            playerPacked: [],
            playerScripts: [],

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
                        carryBonus: 0,
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
                        carryBonus: 0,
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
            this.playerStartingHealth = (this.playerBaseStartingHealth + this.healthBonus);
            this.playerHealth = (this.playerBaseHealth + this.healthBonus);
            },
            getExtraMana() {
                this.manaBonus = 
                (
                    this.playerEquipped.player_helm[0].mana
                    + this.playerEquipped.player_armor[0].mana 
                    + this.playerEquipped.player_shield[0].mana 
                    + this.playerEquipped.player_gloves[0].mana 
                    + this.playerEquipped.player_vambraces[0].mana
                    + this.playerEquipped.player_sword[0].mana 
                    + this.playerEquipped.player_boots[0].mana 
                    + this.playerEquipped.player_necklace[0].mana 
                    + this.playerEquipped.player_ring[0].mana 
                    + this.playerEquipped.player_belt[0].mana 
                );
            this.playerStartingMana = (this.playerBaseStartingMana + this.manaBonus);
            this.playerMana = (this.playerBaseMana + this.manaBonus);
            },
            getIntelligenceValues() {
                this.intelligenceBonus = 
                (
                    this.playerEquipped.player_helm[0].intelligence
                    + this.playerEquipped.player_armor[0].intelligence 
                    + this.playerEquipped.player_shield[0].intelligence 
                    + this.playerEquipped.player_gloves[0].intelligence 
                    + this.playerEquipped.player_vambraces[0].intelligence
                    + this.playerEquipped.player_sword[0].intelligence 
                    + this.playerEquipped.player_boots[0].intelligence 
                    + this.playerEquipped.player_necklace[0].intelligence 
                    + this.playerEquipped.player_ring[0].intelligence 
                    + this.playerEquipped.player_belt[0].intelligence 
                );
                this.playerIntelligence = (this.playerBaseIntelligence + this.intelligenceBonus + this.tempIntelligenceBonus);
            },
            getCarryCapacity() {
                this.carryCapacityBonus =
                (
                    (this.horseInventory.horse_shoes[0].carryBonus * .1) +
                    (this.horseInventory.horse_bag[0].carryBonus * .1) +
                    (this.horseInventory.horse_saddle[0].carryBonus *.1) 
                );
                this.carryCapacity = Math.ceil(this.baseCarryCapacity + (this.baseCarryCapacity * this.carryCapacityBonus));
            },

            XPUntilNextLevel() {
               return this.playerNeededXP = Math.round((this.nextLevel - this.playerXP));
            },
            levelUp() {
                if (this.playerNeededXP <= 0) {
                    this.playerLevel++;
                    this.playerPoints++;
                    this.nextLevel *= this.increase;
                    this.playerXP = 0;                    
                  }
            },
            autoHeal() {
                // if (this.playerHealth < this.playerBaseHealth) {
                    // this.playerHealth = ((this.playerHealth + this.healthPerSec)/60);
                    return ((this.playerHealth + this.healthPerSec) / 60)
                // }
                // requestAnimationFrame(this.autoHeal()); //executes the function 60 times every second?
            }
        },

        getters: { }
    })