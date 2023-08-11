import { defineStore } from "pinia";

export const useConditionalsStore =
    defineStore({
        id: 'conditionals',
        state: () => ({
            worldMap: {
                basicMap: true,
                expandedMap: false,
                mountainsAvailable: false,
                grasslandsAvailable: false,
                beachAvailable: false,
                desertAvailable: false,
            },
            villageBank:{ 
                accountOpen: false,
            },
            matildaSchool: {
                questCompleted: false,
                questInProgress: false,
                questNeedsStarting: true,
            },
            huntersGuild: {
                questAccepted: false,
                grossStew1QuestAvailable: true,
                collect9QuestAvailable: true,
                fireRiverDrakeQuestAvailalbe: true,
                
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
        }),
        actions: {}
    })