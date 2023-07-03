import { defineStore } from "pinia";

export const useConditionalsStore =
    defineStore({
        id: 'conditionals',
        state: () => ({
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
                collect7QuestAvailable: true,
                fireRiverDrakeQuestAvailalbe: true,
            },
            bigDawgPub: {
                drunkardQuestAccepted: false, 
                barkeepQuestAccepted: false,               
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
            }
        }),
        actions: {}
    })