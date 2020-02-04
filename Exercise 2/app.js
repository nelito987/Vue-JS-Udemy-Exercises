new Vue({
        el: '#test',
        data: {
            value: ''
        },
        methods: {
            showAlert: function(){
                alert("Button is clicked !!!")
            },
            getValue: function(event){
                return this.value = event.target.value;
            }
        }
    });