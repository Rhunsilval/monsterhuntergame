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
                    need: "Sacred Spores",
                    // need: "Basic Healing Draught",
                    qty: 3,
                    largeIcon: require('../assets/images/village_school/school_teacher.png'),
                    smallIcon: require('../assets/images/forest/forest_monster_1_treasure.png'),
                    questPoints: 10,
                    playerXP: 10,
                    reward: "Gain permission to enroll in Matilda's School of Magic.",
                    rewardScript: "permission to enroll in my School of Magic."
                },
                {
                    id: 'guildCollectTen',
                    title: 'Collect a small token from each of the hunting grounds',
                    active: false,
                    complete: false,
                    description: "Collect a Sand Crab Shell, some Sacred Spores, a Rotten Femur, a piece of Bat Leather, a Fae Light, a set of Goblin Ears, and some Tangled Rootbeast Vines",
                    need: "Sacred Spores",
                    // need: "Basic Healing Draught",
                    qty: 1,
                    need2: "Sand Crab Shell",
                    qty2: 1,
                    largeIcon: require('../assets/images/village_guild/The_Guildmaster.png'),
                    smallIcon: require('../assets/images/forest/forest_monster_1_treasure.png'),
                    questPoints: 20,
                    playerXP: 15,
                    reward: "2000 coins.",
                    rewardScript: "2000 coins, and the repect of the Guild."
                },
            ],

        }),
        actions: {},
    })