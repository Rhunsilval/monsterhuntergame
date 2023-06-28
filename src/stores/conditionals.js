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
                collect10QuestAvailable: true,
            }
        }),
        actions: {}
    })