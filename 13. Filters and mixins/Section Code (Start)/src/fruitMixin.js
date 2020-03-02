export const fruitMixin = {
    data(){
        return{               
            fruits: ['Apple', 'Banana', 'Melon', 'Watermelon', 'Kiwi', 'Pear', 'Peach', 'Mango', 'Pineapple', 'Strawberry', 'Blueberry'],
            filterText: '',
        }
    },
    //for more complex scenarios the computed  property might be a better solution
    computed: {
        filteredFruits(){
            return this.fruits.filter((el) =>{
                return el.match(this.filterText);
            })
        }
    },
    created(){
        console.log('Created!!!')
    }
}