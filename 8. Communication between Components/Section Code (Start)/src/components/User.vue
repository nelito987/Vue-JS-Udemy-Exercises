<template>
    <div class="component">
        <h1>The User Component fghfhfgh</h1>
        <p>I'm an awesome User! {{name}}</p>
        <button @click="changeName">Change the name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :username="name" 
                @nameWasReset="name=$event"                
                :resetFn="resetWithCb"
                :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                @ageWasEdited="age = $event"
                :editAgeFn="editAgeCb">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data:function(){
            return{
                name: 'Dido',
                age: 34
            }            
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName(){
                this.name = 'Mika'
            },
            // change from the child using callback
            resetWithCb(){
                this.name = 'Yana'
            },
            editAgeCb(){
                this.age = 28
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
