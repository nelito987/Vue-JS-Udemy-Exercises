<template>
    <li 
        class="list-group-item"
        @click="selectServer"
        style="cursor: pointer">
        Server # {{server.id}} ------   Status: {{server.status}}
    </li>
</template>

<script>
import {serverBus} from '../../main'
export default {
    props:['server'],
    methods:{
        selectServer(){           
            serverBus.$emit('selectServer', this.server);
        }
    }
}
</script>