<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 form-group">
                <h3>Quote</h3>
                <textarea rows="3" v-model="quote" class="form-control"></textarea>
            </div>
            <div class="col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 form-group">
                <button @click.prevent="createNew" class="btn btn-success">Add new quote</button>
            </div>
        </form>
    </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
    data:function(){
        return{
            quote: ''
        };
    },
    methods:{
        createNew(){
            this.$emit('quoteAdded', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style>
    
</style>