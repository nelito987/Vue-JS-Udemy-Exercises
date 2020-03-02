<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase}}</p>
                <p>{{otherText | to-lowercase}}</p>
                <hr>
                <!-- filter by using the computed property -->
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from "./fruitMixin.js";

    export default {
        data(){
            return{
                text: "Hello Vue world :)))",
                otherText: "WHAT A LOVELY DAY"                
            }
        },
        mixins: [fruitMixin],
        components:{
            appList: List
        },
        //filter registered locally
        filters: {
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        //for more complex scenarios the computed  property might be a better solution
        // computed: {
        //     filteredFruits(){
        //         return this.fruits.filter((el) =>{
        //             return el.match(this.filterText);
        //         })
        //     }
        // }
    }
</script>

<style>

</style>
