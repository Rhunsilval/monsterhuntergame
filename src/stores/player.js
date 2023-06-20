import { defineStore } from 'pinia'

export const usePlayerStore =
    defineStore({
        id: 'player',
        state: () => ({
            playerId: 'Player_One',
            oldGame: false,
            coinOnHand: 1000,            
            
            playerActiveHealth: 100,        // constantly changes based on harm/healing
            playerHealth: 100,              // max health, changes with equip/unequip items           
            playerBaseHealth: 100,          // default max health value
            healthBonus: 0,                 // amount of health from equipped items
            nextHealthLevel: 500,
            HealthLevelIncrease: 3,
            healthXP: 0,
            neededHealthXP: 500,
            healthPrice: 1000,
            healthPerSec: .1,           // Fortitude - how fast player heals for not-working autoheal

            playerActiveMana: 100,
            playerMana: 100,
            playerBaseMana: 100,
            manaBonus: 0,           // from equipped items
            nextManaLevel: 500,
            manaLevelIncrease: 3,
            manaXP: 0,
            neededManaXP: 500,
            manaPrice: 1000,
            manaPerSec: .1,         // how fast player restores mana for not-working autoheal
            
            playerAttack: 1,
            playerBaseAttack: 1,    // default max
            attackBonus: 0,         // from equipped items
            tempAttackBonus: 0,     // from potions etc
            nextAttackLevel: 1000,
            attackLevelIncrease: 2,
            attackXP: 0,
            neededAttackXP: 1000,
            attackPrice: 100,

            playerDefense: 1,
            playerBaseDefense: 1,
            defenseBonus: 0,        // from equipped items
            tempDefenseBonus: 0,    // from potions etc
            nextDefenseLevel: 1000,
            defenseLevelIncrease: 2,
            defenseXP: 0,
            neededDefenseXP: 1000,
            defensePrice: 100,            
            
            playerStrength: 1,
            playerBaseStrength: 11,
            strengthBonus: 0,       // from equipped items
            tempStrengthBonus: 0,   // from potions etc
            nextStrengthLevel: 1000,
            strengthLevelIncrease: 2,
            strengthXP: 0,
            neededStrengthXP: 1000,
            strengthPrice: 500,
            
            playerIntelligence: 1,      // total intel level including all bonuses from items
            playerBaseIntelligence: 1,
            intelligenceBonus: 0,       // from equipped items
            tempIntelligenceBonus: 0,   // from potions etc
            nextIntelligenceLevel: 1000,
            intelligenceLevelIncrease: 2,
            intelligenceXP: 0,
            neededIntelligenceXP: 0,
            intelligencePrice: 500,
            
            playerLevel: 1,
            playerPoints: 5,    // points to spend on increasing stats
            nextLevel: 1000,
            increase: 2,

            playerXP: 0,        // what player has now
            playerTotalXP: 0,   // what player has in total
            playerNeededXP: 0,  // what player needs to level up

            playerActiveQuests: [],
            playerCompletedQuests: [],
            playerKillLog: [
                {
                    id: 'Sand Crab',
                    quantity: 0,
                    reputationPoints: 1,
                },
                {
                    id: '',
                }
            ],

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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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
                        magicAttackValue: null,
                        bonusAttackValue: null,
                        antiAttackValue: null,
                        life: null,
                        mana: null,
                        intelUnlock: null,
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

            carryCapacity: 30,
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
                        // + this.horseInventory.horse_shoes[0].attack  //have to add it to ALL of them if you add to any of them to get it to work
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
            },

            XPUntilNextAttackLevel() {
                return this.neededAttackXP = Math.round((this.nextAttackLevel - this.attackXP));
            },
            attackLevelUp() {
                if (this.neededAttackXP <=0) {
                    this.playerBaseAttack++;
                    this.nextAttackLevel *= this.attackLevelIncrease;
                    this.attackXP = 0;
                }
            },

            XPUntilNextDefenseLevel() {
                return this.neededDefenseXP = Math.round((this.nextDefenseLevel - this.defenseXP));
            },
            defenseLevelUp() {
                if (this.neededDefenseXP <=0) {
                    this.playerBaseDefense++;
                    this.nextDefenseLevel *= this.defenseLevelIncrease;
                    this.defenseXP = 0;
                }
            },

            XPUntilNextStrengthLevel() {
                return this.neededStrengthXP = Math.round((this.nextStrengthLevel - this.strengthXP));
            },
            strengthLevelUp() {
                if (this.neededStrengthXP <=0) {
                    this.playerBaseStrength++;
                    this.nextStrengthLevel *= this.strengthLevelIncrease;
                    this.strengthXP = 0;
                }
            },

        },

        getters: { }
    })