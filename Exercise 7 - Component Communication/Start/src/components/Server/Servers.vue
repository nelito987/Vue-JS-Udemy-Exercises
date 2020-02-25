<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-list 
                v-for="server in servers"
                :server="server">
            </server-list>
        </ul>
    </div>
</template>

<script>
    import ServerList from './Server.vue';

    export default {
        data: function(){
            return {
                servers: [
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Uknown'},
                    { id: 4, status: 'Normal'},
                    { id: 5, status: 'Critical'}
                ]
            }
        },
        components: { ServerList }
    }
</script>

<style>

</style>
