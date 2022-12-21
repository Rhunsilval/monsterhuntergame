<template>
    <div class="text-center">
        <p>Player Level: {{ playerLevel }}</p>
        <p>Available Funds: {{ coinsOnhand }} coins</p>
        <p>Health: {{ playerHealth }}/{{ playerStartinghealth }}</p>
        <p>Life: {{ playerLife }}/{{ playerStartinghealth }}</p>
    </div>
    <!-- <div class="text-center items-center">
        <button @click="hitPlayer" class="bg-blue-200 border border-black px-2 py-2">Hit Player Life</button>
        <button @click="emitHealthHit" class="bg-red-200 border border-black px-2 py-2">Hit Player Health</button> 
    </div> -->
    <!-- let's make these buttons a separate component instead - to practice nested components -->
    <!-- <practice-subcomponent
        :player-life="playerLife"
        :player-health="playerHealth"
        @emit-life-hit="lifeHit"
        @emit-health-hit="healthHit"        
    ></practice-subcomponent> -->
            <!-- playerLife prop from here to subcomponent -->
            <!-- playerHealth prop from HomePage to here to subcomponent: pass-through -->
            <!-- emit-life-hit event received from subcomponent and used here -->
            <!-- emit-health-hit event received from subcomponent ... 
                parent doesn't receive it directly, so how does it share it with parent? 
                data lives in parent- can't change it here
                to share emith-health-hit, i have to create healthHit method 
                and emit those results (relayed-health-hit) to the parent -->

    <!-- <practice-subcomponent
        :player-life="playerLife"
        @emit-life-hit="lifeHit"
        @emit-health-hit="healthHit"
    ></practice-subcomponent> -->
    <!-- INSTEAD OF routing the emit-health-hit event from PracticeSubcomponent, through PracticeComponent to 
    HomePage where the method that makes the change lives 
        (because, remember, if you try to change that parent-owned/provided health data directly in a child component,
        you get an error)
    you can send that method that directs that data change down as a prop/provide as well
    the command would still live in the parent, but the child would be able to use it directly, instead of relaying an emitted event -->

    <practice-subcomponent
        :player-life="playerLife"
        @emit-life-hit="lifeHit"
    ></practice-subcomponent>
            


    <!-- moving notes here from HomePage to keep HomePage clean -->
    <!-- <practice-component
        player-level="1"
        player-startinghealth="100"
        player-health="100"
        coins-onhand="1000"
    ></practice-component> -->
    <!-- you can pass props this way, but not ideal since all are default string types
    use v-bind (:) to pass other data types -->

    <!-- <practice-component
        :player-level="1"
        :player-startinghealth="100"
        :player-health="100"
        :coins-onhand="1000"
     ></practice-component> -->
     <!-- using v-bind allows your component to be used more dynamically.  
    these data values exist in the data below.  they don't need to be specified this way in html
    just point to the data values in js below
    especially useful if you're working with a list.  can add v-for x in xlist and a key="" value
    to your code to make it more reusable if that's what you need -->

<!-- DYNAMICALLY BOUND IMAGES:
    assuming you have an image as a prop or data value, instead of just written out in the html code: -->
    <!-- <img :src="image" alt="" /> -->
    <!-- this doesn't work
    research suggests the image is not available/exposed to the web server
    moving the assets folder from src to the public folder should make it work
    NOTE: i tried this and got an error message, need more research apparently -->
    <!-- while dynamic image rendering doesn't seem to work, CONDITIONAL image rendering does! -->

</template>


<script>
import PracticeSubcomponent from './PracticeSubcomponent.vue';

export default{
    // this component is reusable, but the data that it receives and renders/organizes here above comes from the parent
    // re-render it on a new parent, it will start over with new data from that new parent
    // if you want data to move from parent-to-parent, then you need export it when parent A is done with it,
    // then import it to parent B

    // NOTE: if there's any changes made to the data
            // for ex, a data value changes in response to a button click or an event, 
    // then that event/data change needs to live in the parent
    // the child only renders the data it receives
    // THE CHILD SHOULD NOT BE CHANGING DATA ONCE IT RECEIVES IT
    // what the child can do is let the parent know the data should be changed    
    
    components: {
        PracticeSubcomponent
    },

    // props:[
    //     'playerLevel',
    //     'playerStartinghealth',
    //     'playerHealth',
    //     'coinsOnhand',
    // ],
    props:{
        // written like this allows for some data validation measures.
        // note, passing bad data doesn't cause it not to work
        // but you do get a console log warning
        playerLevel: Number,
        playerStartinghealth: Number,
        playerHealth: Number,
        coinsOnhand: {
            type: Number,
            required: true
            // setting requirement to true is more validation
            // again, it missing won't cause component to not work
            // but does generate a console log error
        },
        // somethingElse: {
        //     type: Number,
        //     required: false,
        //     default: '0'
        //     // add a default value which will be used if no prop value is received
        //     // since it's not required
        //     // note that default can be a function() {} that executes to derive the default value
                //     // not using it, so commented out
        // }
        //     // props can be String, Number, Boolean, Array, Object, Date, Function, or Symbol
    },

    emits: [
        'emit-health-hit',
        'relayed-health-hit',
    ],
    // emits: {
        // 'emit-health-hit': function(id) {
        //     if (id) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // },
        // assuming there is an id parameter that you want the event to be attached to,
        // you can add validation to make it required if need-be
    // },

    // the component works without the emits being explicity named here, but it's good practice, for ease of reading,
    // to list them anyway.  then, at a glance, you'll know what events are being emitted
    // rather than searching through everything to see if you can find an emit or not

    // as with props, can be written out as a more explicit object
    // useful if you're working with a team or a client
    // that way, they have clues about how to use the component that you wrote
    // they'll know what props to receive, what kind they are (console log errors if they do it wrong)
    // and what events are emitted, and what data they share - and again, a log error if the component is used incorrectly

    data() {
        return {
            playerLife: this.playerHealth
        }
    },
    methods: {
        hitPlayer() {
            this.playerLife = (this.playerLife - 5);
        },
        lifeHit() {
            this.playerLife = (this.playerLife - 5)
        },
    
    // adding this changes what the data looks like here in the component
    // but doesn't change the data in the parent.  refresh the screen, nothing has changed
    // also note i'm not changing the parent data of playerHealth, i'm changing the child data of playerLife-
        // whose starting value is the health from parent 

    // SO!
    // if i make changes in the parent component, those changes can reflect here in child if the data is dynamically bound (:)
    // if i want to change that data in the child component, i need to change it to something else (playerLife) and then use it
    // and then send those changes back to the parent to change anything rendered there that depends on those changes 
    // via a custom emit event

        emitHealthHit() {
            this.$emit(
                'emit-health-hit',
                // this.id or other optional data cues to be sent
            );
        },
        // the emit doesn't emit an actual change here.  it just emits - hey this button was hit!
        // the change takes place in parent.  "oh, that was clicked?  here, let me change this data"
        // if the change is on something like one item in a list of items, you can also include some data with
        // the emit, such as this.id (assuming you have an id prop) so that the parent knows WHICH of the items
        // is affected by the event

        // healthHit() {
        //     this.$emit(
        //         'relayed-health-hit',
        //     );
        // }
        // instead of acting as a relay between the hit event in practiceSubcomponent to the action method in HomePage
        // the parent can instead provide that method directly to practiceSubcomponent

    },
}


</script>
