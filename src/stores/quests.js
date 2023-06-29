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
                    description: "Bring Matilda the Mage three Sacred Spores from the Mushroom Spirits of the Black Forest.",
                    need: "Sacred Spores",
                    // need: "Basic Healing Draught",
                    qty: 3,
                    largeIcon: require('../assets/images/village_school/school_teacher.png'),
                    smallIcon: require('../assets/images/forest/forest_monster_1_treasure.png'),
                    questPoints: 10,
                    playerXP: 10,
                    coins: 0,
                    reward: "Gain permission to enroll in Matilda's School of Magic.",
                    rewardScript: "permission to enroll in my School of Magic."
                },
                {
                    id: 'guildCollectTen',
                    title: 'Collect a small token from each of the hunting grounds',
                    active: false,
                    complete: false,
                    description: "Collect a Sand Crab Shell, some Sacred Spores, a Rotten Femur, a piece of Bat Leather, a Fae Light, a set of Goblin Ears, and some Tangled Rootbeast Vines",
                    need: "Sand Crab Shell",
                    qty: 1,
                    need2: "Sacred Spores",
                    qty2: 1,
                    need3: "Rotten Femur",
                    qty3: 1,
                    need4: "Bat Leather",
                    qty4: 1,
                    need5: "Fae Light",
                    qty5: 1,
                    need6: "Goblin Ears",
                    qty6: 1,
                    need7: "Tangled Rootbeast Vines",
                    qty7: 1,
                    largeIcon: require('../assets/images/village_guild/The_Guildmaster.png'),
                    smallIcon: require('../assets/images/forest/forest_monster_1_treasure.png'),
                    questPoints: 20,
                    playerXP: 15,
                    coins: 2000,
                    reward: "2000 coins.",
                    rewardScript: "your reward of 2000 coins, and the repect of the Guild."
                },
            ],

        }),
        actions: {},
    })