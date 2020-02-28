<template>
  <div>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" :value="firstName" @input="nameChanged(first, $event)"/>
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" :value="lastName" @input="nameChanged(last, $event)"/>
    </div>
  </div>
</template>

<script>
export default {
    props:['value'],
    methods:{
        nameChanged(isFirst, event){
            console.log('name changed')
            let name = '';
            if(isFirst === true){
                name = event.target.value + ' ' + this.lastName;
            }else{
                name = this.firstName + ' ' + event.target.value;
            }
            this.value = name;
            this.$emit('input', this.value )
        }
    },
    computed:{
        firstName(){
            return this.value.split(' ')[0]
        },
        lastName(){
            return this.value.split(' ')[1]
        }
    }
};
</script>