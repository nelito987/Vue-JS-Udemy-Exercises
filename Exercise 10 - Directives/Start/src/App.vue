<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <!-- <button v-local-custom-on="clicked">Click ME</button>
                <div v-local-custom-mouseover="hovered" class="customDiv">Hover me</div> -->
                <button v-local-custom-on:click="clicked">Click ME</button>
                <div v-local-custom-on:mouseenter="hovered" 
                     v-local-custom-on:mouseleave="leave" class="customDiv">Hover me
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            "local-custom-on":{
                bind(el, binding, vnode){                   
                    // el.onclick = function(){
                    //    console.log(binding);
                    //    binding.value();
                    // }
                    //listen to any event
                    const type= binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);

                }
            }//,
            // separate directive for mouseover event
        //     "local-custom-mouseover":{
        //         bind(el, binding, vnode){
        //             el.onmouseover = function(){
        //                 console.log(el)
        //                 el.style.backgroundColor = 'green'
        //                 binding.value()
        //             }
        //         }
        //     }
        },
        methods:{
            clicked(){
                alert(' Clicked!!! ')
            },
            hovered(el){
                el.target.style.backgroundColor = "lightgreen"
                console.log('Hovered !!!')
            },
            leave(el){
                el.target.style.backgroundColor = "blueviolet"
                console.log("mouse leave")
            }
        }
    }
</script>

<style>
.customDiv{
    background-color: blueviolet;
    margin: 50px;
    padding: 50px;
    color: white;
    font-weight: bold;
}
</style>
