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
            },
            bigDawgPub: {
                drunkardQuestAccepted: false,
                convo1Available: true,
                drunkardQuest1Activated: false,
            }
        }),
        actions: {}
    })