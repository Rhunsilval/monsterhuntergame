<template>
    <div class="text-center items-center">
        <button @click="emitLifeHit" class="bg-blue-200 border border-black px-2 py-2">Hit Player Life: <br/> {{ playerLife }}</button>
        <!-- <button @click="$emit('emit-health-hit')" class="bg-red-200 border border-black px-2 py-2">Hit Player Health: <br/>{{ playerHealth }}</button>  -->
                <!-- no longer emitting event - receiving method directly via props/inject -->
        <button @click="receivedHitMethod" class="bg-red-200 border border-black px-2 py-2">Hit Player Health: <br/>{{ playerHealth }}</button> 
                <!-- instead of emitting an event that the parent hears and then uses as a cue to execute a method, 
                we're now receiving a provided method and executing it instead
                works much like an emit, but a bit different -->
        
        <!-- note: you can add a method to a click event and define the emit in the method
        OR
        you can emit directly from the click event, especially if you aren't moving data, just an event -->

        <!-- another note: props/emits should be your default method of communicating data, not provide/inject.  
        useful to know that it exists and to know how it works, but should not be your automatic go-to method of 
        parent/child communication -->
    </div>
</template>

<script>
    export default {
        props: [
            'playerLife',   //receiving this data from PracticeComponent
            // 'playerHealth', //data originates in HomePage, getting routed via PracticeComponent
                            //NOT ANYMORE - now inject straight from HomePage            
        ],
        inject:[
            'playerHealth',
            'receivedHitMethod'
        ],
        // note that inject only works to receive data from a higher up level.  from a parent/ancestor/etc
        // you can not provide/inject between siblings/neighbors, or from child to parent
        // note: with this injected value, the component only partially works
            // when i hit the button and the event is emitted, it gets to the parent and changes the data in the health rendered on 
            // practice component
            // but it does NOT change the value rendered here inside the button.  this inject is not dynamically bound in parent to 
            // be reflected here, unlike the dynamically bound prop that practiceComponent is using
            // it DOES UPDATE when it receives the data via a prop relay.  since everything was bound,
            // it changed in real time in all three locations.  but not via inject

        emits: [
            'emit-life-hit',   //emitting event to PracticeComponent
            // 'emit-health-hit', //emitting event to HomePage via routing via PracticeComponent (in html, not methods)
        ],
        methods: {
            emitLifeHit() {
                this.$emit(
                    'emit-life-hit',
                );
            }
        }
    }
</script>