new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth:100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function(){
            console.log(' start')
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function(){
            console.log(' attack')
            var damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })
            if(this.checkWin()){
                return;
            }
            this.monsterDamage();

        },
        specialAttack: function(){
            console.log(' specialAttack')
            var damage = this.calculateDamage(10,20);
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster HARD for ' + damage
            })
            if(this.checkWin()){
                return;
            }
           this.monsterDamage();
        },
        heal: function(){
            console.log(' heal')
           if(this.playerHealth <= 90){
               this.playerHealth += 10;
           }else{
               this.playerHealth = 100;
           }
           this.turns.unshift({
            isPlayer: true,
            text: 'Player HEALS for 10'
        })
           this.monsterDamage();
        },
        giveUp: function(){
           this.gameIsRunning = false;
        },
        calculateDamage: function(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        checkWin: function(){
            console.log(' checkwin')
            if(this.monsterHealth <= 0){              
                if(confirm('You won! Do you want to start a new game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }else if(this.playerHealth <= 0){
                if(confirm('You lost! Do you want to start a new game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterDamage: function(){
            
            var damage = this.calculateDamage(3,12);
            this.playerHealth -= damage
            this.checkWin();
            console.log(' monsterDamage')
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            })
        }

    }
})