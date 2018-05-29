
var app = new Vue ({ 
  el: '#app' , 
  data: { 
    message: 'Hello Vue!'
   } 
})


var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

var app6 = new Vue({
  el: '#app-7',
  data: {
    message: 'Esto es un string',
    numero: 2,
    booleano: true,
    unArray: [],
    unObjeto: {nombre: 'Pedrito' , apellidos: 'Lopez Perez'}
  }
})

var app6 = new Vue({
  el: '#selector',
  data: {
    numero: 0,
  },
  methods:{
    sumar: function (){
      this.numero = this.numero += 1;
      $('button').css({'background-color':'#28d34a', 'color':'#eee'});
    }
  
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    ok: true
  }
})


