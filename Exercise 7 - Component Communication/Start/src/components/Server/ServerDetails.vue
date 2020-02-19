<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>
            Server <span class="bold">#{{server.id}}</span> selected, 
            Status: <span class="bold">{{server.status}}</span>
        </p>
        <button v-show="server" @click="changeStatus">Change Status to Normal</button>
    </div>

</template>

<script>
import {serverBus} from '../../main'

export default{
    data: function(){
        return{
            server: null
        }
    },
    methods:{
        changeStatus(){
            this.server.status = 'Normal'
        }
    },
    created(){
        serverBus.$on('selectServer', (server) =>{
            this.server = server;
        } );
    }
}
</script>

<style scoped>
.bold{
    font-weight: bold;
}
</style>