<template>
  <div class="row">    
<app-servers></app-servers>
<server-details></server-details>    
  </div>
</template>

<script>
import Servers from './Servers.vue';
import ServerDetails from './ServerDetails.vue';

export default {
    components:{
        'app-servers': Servers,
        'server-details': ServerDetails
    }
}
</script>