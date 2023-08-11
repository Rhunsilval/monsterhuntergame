<template> 
    <div class=""> 
        <ul class="h-96 overflow-y-auto "> 
            <li v-for="(hunter, index) in sortedLeaderList" :key="hunter.id"> 
                <div :class="hunter.color" class="grid grid-cols-3 border border-b-gray-600 border-t-transparent border-x-transparent py-1 px-3"> 
                    <p>{{ index + 1 }}</p>
                    <p>{{ hunter.id }}</p>
                    <p>{{ hunter.points }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup> 
    import { reactive, computed } from 'vue';
    import { usePlayerStore } from '@/stores/player';

    const playerStore = usePlayerStore();

    const sortedLeaderList = computed(function() {
      let list = leaderList;
      return (list.sort((a,b) => {
        return b.points - a.points;
      }) )
    })    

    const leaderList = reactive([
        {
            id: playerStore.playerId,
            points: playerStore.playerReputation,
            color: "red"
        },
        {
            id: "Alexander the Greatest",
            points: 50125,
            color: "gray"
        },
        {
            id: "Derrick Kickass",
            points: 50,
            color: "gray"
        },
        {
            id: "Bob the Cat",
            points: 50000,
            color: "gray"
        },
        {
            id: "NotsoMiniMii",
            points: 30554,
            color: "gray"
        },
        {
            id: "Lucinda",
            points: 33997,
            color: "gray"
        },
        {
            id: "Happy-go-Lucky",
            points: 49971,
            color: "gray"
        },
        {
            id: "KPOP4EVER!",
            points: 26698,
            color: "gray"
        },
        {
            id: "The Pipster",
            points: 19233,
            color: "gray"
        },
        {
            id: "The Great Rhunsilval",
            points: 45062,
            color: "gray"
        },
        {
            id: "Cosette",
            points: 11617,
            color: "gray"
        },
        {
            id: "Gavroche",
            points: 36371,
            color: "gray"
        },
        {
            id: "Chloe",
            points: 49114,
            color: "gray"
        },
        {
            id: "Fuzzybutt",
            points: 43907,
            color: "gray"
        },
        {
            id: "Memacat",
            points: 36689,
            color: "gray"
        },
        {
            id: "Look a Squirrel!",
            points: 17857,
            color: "gray"
        },
        {
            id: "THE GYPSINATOR",
            points: 1570,
            color: "gray"
        },
        {
            id: "A Kind Gentleman",
            points: 18133,
            color: "gray"
        },
        {
            id: "Dungeonmaster Tom",
            points: 21034,
            color: "gray"
        },
        {
            id: "Archaeologist 777",
            points: 41116,
            color: "gray"
        },
        {
            id: "The WOnderful Willow",
            points: 22581,
            color: "gray"
        },
        {
            id: "Happy Gardener",
            points: 29781,
            color: "gray"
        },
        { 
            id: "Brewmaster",
            points: 35147,
            color: "gray"
        },
        {
            id: "HipsterMom",
            points: 26912,
            color: "gray"
        },
        {
            id: "Beady McBearderson",
            points: 30174,
            color: "gray"
        },
        {
            id: "Sad Panda",
            points: 18311,
            color: "gray"
        },
        {
            id: "Stonerboi",
            points: 22540,
            color: "gray"
        },
        {
            id: "I Rulz them ALL",
            points: 1707,
            color: "gray"
        },
        {
            id: "Medieval Mastery",
            points: 10024,
            color: "gray"
        },
        {
            id: "Darkwing Duck23459",
            points: 13917,
            color: "gray"
        },
        {
            id: "birdlife",
            points: 21978,
            color: "gray"
        },
        {
            id: "aetherworf",
            points: 10303,
            color: "gray"
        }, 
        {
            id: "HAPPY HAPPY",
            points: 1040,
            color: "gray"
        },
        {
            id: "Herecomethe CLOUNZ",
            points: 3580,
            color: "gray"
        },
        {
            id: "RANDOM ACE",
            points: 23140,
            color: "gray"
        },
        {
            id: "Baby Shark DODODODOoo",
            points: 551,
            color: "gray"
        },
        {
            id: "Random Girl",
            points: 30835,
            color: "gray"
        },
        {
            id: "LettingItGo",
            points: 4769,
            color: "gray"
        },
        {
            id: "696969OHYEAH",
            points: 6969,
            color: "gray"
        },
        {
            id: "Negan N Lucille",
            points: 6966,
            color: "gray"
        },
        {
            id: "CoffeLuvvr",
            points: 7955,
            color: "gray"
        },
        {
            id: "Radiotrophic Fungus",
            points: 997,
            color: "gray"
        },
        { 
            id: "Juba",
            points: 25350,
            color: "gray"
        },
        {
            id: "ChickenDad",
            points: 25559,
            color: "gray"
        },
        {
            id: "RobotChicken",
            points: 15677,
            color: "gray"
        },
        {
            id: "la sainte bible",
            points: 312,
            color: "gray"
        },
        {
            id: "TaterMagic",
            points: 24362,
            color: "gray"
        },
        {
            id: "Death by Chocolate",
            points: 5542,
            color: "gray"
        },
        {
            id: "joy12354",
            points: 12244,
            color: "gray"
        },
        {
            id: "Hufflepuff 4ever",
            points: 7916,
            color: "gray"
        },
        {
            id: "crabperson",
            points: 93,
            color: "gray"
        },
        {
            id: "Fluffy UnicornBoi",
            points: 19986,
            color: "gray"
        },
        {
            id: "Peter Pumpkin Eater",
            points: 27433,
            color: "gray"
        },
        {
            id: "Goose Mama",
            points: 40432,
            color: "gray"
        },
        {
            id: "soldier boy",
            points: 3326,
            color: "gray"
        },
        {
            id: "justalonely littlealien",
            points: 28921,
            color: "gray"
        },
        {
            id: "Fishsticks",
            points: 7805,
            color: "gray"
        },
        {
            id: "BlackEarth",
            points: 9007,
            color: "gray"
        },
        {
            id: "scorpionpepper eater",
            points: 11388,
            color: "gray"
        },
        {
            id: "CryBaby",
            points: 11985,
            color: "gray"
        },
        {
            id: "la Dolce Vita",
            points: 26504,
            color: "gray"
        },
        {
            id: "paris femme",
            points: 40126,
            color: "gray"
        },
        {
            id: "Kedi of Istanbul",
            points: 3375,
            color: "gray"
        },
        {
            id: "Jiro's Sushi",
            points: 14452,
            color: "gray"
        },
        {
            id: "Minion of Totoro",
            points: 12352,
            color: "gray"
        },
        {
            id: "Run_Away",
            points: 2827,
            color: "gray"
        },
        {
            id: "audobon fieldguild 2ballz",
            points: 22056,
            color: "gray"
        },
        {
            id: "mushypeas",
            points: 21482,
            color: "gray"
        },
        {
            id: "lil Richard",
            points: 14089,
            color: "gray"
        },
        {
            id: "The Frog in the Pond",
            points: 10323,
            color: "gray"
        },
        { 
            id: "Jenny the Bunny",
            points: 22759,
            color: "gray"
        },
        {
            id: "A Garden Gnome",
            points: 8744,
            color: "gray"
        },
        {
            id: "Sleepytron",
            points: 5568,
            color: "gray"
        },
        {
            id: "Lokiluvvr",
            points: 4522,
            color: "gray"
        },
        {
            id: "Monu",
            points: 21949,
            color: "gray"
        },
        {
            id: "Mouserat",
            points: 2257,
            color: "gray"
        },
        {
            id: "Head of Broccoli",
            points: 8874,
            color: "gray"
        },
        {
            id: "Sulferic Acid",
            points: 7045,
            color: "gray"
        },
        {
            id: "Grim Reaper",
            points: 13642,
            color: "gray"
        },
        {
            id: "Aerowulffe",
            points: 349,
            color: "gray"
        },
        {
            id: "Luftballoon",
            points: 14779,
            color: "gray"
        },
        {
            id: "cheezy cracker",
            points: 700,
            color: "gray"
        },
        {
            id: "YoRkShIrE TeRrIeR",
            points: 5545,
            color: "gray"
        },
        {
            id: "Rodriguez",
            points: 1787,
            color: "gray"
        },
        {
            id: "Covid19",
            points: 468,
            color: "gray"
        },
        {
            id: "Typhoon Figgero",
            points: 4744,
            color: "gray"
        },
        {
            id: "peterpeterson55",
            points: 9796,
            color: "gray"
        },
        {
            id: "Nashville rockstar",
            points: 25745,
            color: "gray"
        },
        {
            id: "Erika from 'Merica",
            points: 2588,
            color: "gray"
        },
        {
            id: "SummarCuukout",
            points: 4295,
            color: "gray"
        },
        {
            id: "noreaster",
            points: 3779,
            color: "gray"
        },
        {
            id: "YouReeka",
            points: 997,
            color: "gray"
        },
        {
            id: "cozy housewife",
            points: 5049,
            color: "gray"
        },
        {
            id: "bringback Firefly",
            points: 6140,
            color: "gray"
        },
        {
            id: "Doomslayer",
            points: 6224,
            color: "gray"
        },
        {
            id: "infinity bagels",
            points: 7395,
            color: "gray"
        },
        {
            id: "roxanne newonika",
            points: 12886,
            color: "gray"
        },
        {
            id: "Gueyduc",
            points: 9956,
            color: "gray"
        },
        {
            id: "AllThatGlitters IsGold",
            points: 2075,
            color: "gray"
        },
        {
            id: "Ghibli summer",
            points: 45747,
            color: "gray"
        }

    ])
</script>

<style scoped>
    .red {
        color: black
    }
    .gray {
        color: gray 
    }
</style>