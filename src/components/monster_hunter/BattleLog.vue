<template>
    <div id="log" class="container border border-t-[#a6bf8e] border-t-2"> 
        <h2 class="mt-2 pb-5">Battle Log:</h2>
        <ul class="border border-green-800 h-96 ">
            <div class="overflow-x-auto">
                <div class="inline-block w-full py-2 align-middle">
                    <div class="table-wrp block max-h-80 ">
                
                        <li v-for="entry in monsterStore.battleLog" :key="entry.entryId" class="flex flex-col border border-b-black ">
                            <span
                                :class="{'log--player': entry.actionBy === 'player', 'log--monster': entry.actionBy === 'monster'}" >
                                {{ entry.actionBy === 'player' ? 'Player' : 'Monster' }}
                            </span>
                            <span v-if="entry.actionType === 'heals' && entry.actionBy === 'player'"> heals themselves for <span class="log--heal">{{ entry.actionValue }}</span> </span>
                            <span v-else-if="entry.actionType === 'heals' && entry.actionBy === 'monster'"> healed itself for <span class="log--heal">{{ entry.actionValue }}</span> </span>
                            <span v-else-if="entry.actionType === 'attacks'"> attacks for <span class="log--damage">{{ entry.actionValue }}</span> </span>
                            <span v-else> uses their Special Attack and hits for <span class="log--damage">{{ entry.actionValue }}</span> </span>
                        </li>
                        
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script setup>
    import { useMonsterStore } from '@/stores/monster'
    const monsterStore = useMonsterStore();

    // const props = defineProps({
    //     battleLog:{}
    // })
    
    // export default {
    //     components: {},
    //     props: [
    //         'battleLog',
    //     ],
    //     emits: [],
    //     setup() {}
    // }  
</script>

<style scoped> 
.logcontainer {
    text-align: center;
    padding: 0.5rem;
    margin: 1rem auto;
    box-shadow: 0 2px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
}

#monster h2, 
#player h2 {
    margin: 0.25rem;
}

#log ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#log li {
    margin: 0.5rem 0;
}

.log--player {
    color: #7700ff;
}

.log--monster {
    color: #da8d00;
}

.log--damage {
    color: red;
}

.log--heal {
    color: green;
}
</style>