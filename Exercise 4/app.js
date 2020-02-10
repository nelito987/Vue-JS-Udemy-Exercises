new Vue({
  el: '#exercise',
  data: {
    effects: {
      highlight: false,
      shrink: true
    },
    userClass: '',
    secondUserClass: '',
    isAttached: false,
    customStyle: {
      height: '50px',
      width: '150px',
      background: 'blue',
      color: 'red'
    },
    progressBar: {
      width: '0px',
      background: 'green'
    }
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.effects.highlight = !vm.effects.highlight;
        vm.effects.shrink = !vm.effects.shrink;
      }, 1000);
    },
    startProgressbar: function () {      
      var vm = this;
      var width = 0;

      setInterval(function () {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
