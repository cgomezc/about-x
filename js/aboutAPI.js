var urlAPI = 'https://experienciasxcaret.github.io/Developers/api/front.json';
new Vue({
el: '#wrapper',
created: function () {
  this.consultarAPI();
},
data: {
  atractivos : []
},
methods:{
    consultarAPI:function () {
      this.$http.get(urlAPI)
          .then(function(respuesta){

          this.atractivos = respuesta.body[0].atractivos;
          });
    }
}

});
