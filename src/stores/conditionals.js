import { defineStore } from "pinia";

export const useConditionalsStore =
    defineStore({
        id: 'conditionals',
        state: () => ({
            playerReputation: 20,

            worldMap: {
                basicMap: true,
                expandedMap: false,
                mountainsAvailable: false,
                grasslandsAvailable: false,
                beachAvailable: false,
                desertAvailable: false,
            },
            monsterFighter: {
                healingCharmAvailable: false,
                attackCharmAvailalbe: false,
                defenseCharmAvailable: false,
            },
            villageBank:{ 
                accountOpen: false,
            },
            matildaSchool: {
                questCompleted: true,
                questInProgress: false,
                questNeedsStarting: true,
                healing1CharmAvailable: true,
                healing2CharmAvailable: false,
                healing3CharmAvailable: false,
                attack1CharmAvailable: true,
                attack2CharmAvailable: false,
                attack3CharmAvailable: false,
                defense1CharmAvailable: true,
                defense2CharmAvailable: false,
                defense3CharmAvailable: false,

            },
            huntersGuild: {
                questAccepted: false,
                grossStew1QuestAvailable: true,
                collect9QuestAvailable: true,
                fireRiverDrakeQuestAvailalbe: true,
                fixLightsQuestAvailable: true,                
            },
            bigDawgPub: {
                drunkardQuestAccepted: false, 
                barkeepQuestAccepted: false,  
                scholarQuestAccepted: false,
                hunterQuestAccepted: false,             
            },
            conversationsDrunkard: {
                convo1Available: true,
                convo1Started: false,
                drunkardQuest1Activated: false,
                convo2Availalbe: false,
                drunkardQuest2Activated: false,
            },
            conversationsBarkeep: {
                convo1Available: true,
                convo1Started: false,
                barkeepQuest1Activated: false,
            },
            conversationsScholar: {
                convo1Available: true,
                convo1Started: false,
                scholarQuest1Activated: false,
            },
            conversationsHunter: {
                convo1Available: true,
                convo1Started: false,
                hunterQuest1Activated: false,
            },
            magicShop: {
                questAvailable: false,
                magicQuest1Available: false,
                magicQuest1Completed: false,
            }
        }),
        actions: {
            checkPlayerReputation(){
                if (this.playerReputation >= 20) {
                    if (this.magicShop.magicQuest1Completed === false) {
                        this.magicShop.questAvailable = true;
                        this.magicShop.magicQuest1Available = true;
                    }
                }
            }
        }
    })