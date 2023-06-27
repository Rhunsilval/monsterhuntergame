import { defineStore } from 'pinia'

export const useQuestStore =
    defineStore({
        id: 'quest',
        state: () => ({
            quests: [
                {
                    id: 'matildaQuest',
                    title: 'Prove Yourself to Matilda',
                    active: false,
                    complete: false,
                    description: "Bring Matilda the Mage three Sacred Spores from the Mushroom Spirits of the Dark Forest.",
                    // need: "Sacred Spores",
                    need: "Basic Healing Draught",
                    qty: 3,
                    largeIcon: require('../assets/images/village_school/school_teacher.png'),
                    smallIcon: require('../assets/images/forest/forest_monster_1_treasure.png'),
                    questPoints: 10,
                    playerXP: 10,
                    reward: "Gain permission to enroll in Matilda's School of Magic.",
                    rewardScript: "permission to enroll in my School of Magic."
                }
            ],

        }),
        actions: {},
    })