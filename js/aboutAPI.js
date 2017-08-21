var urlAPI = 'https://experienciasxcaret.github.io/Developers/api/front.json';
new Vue({
el: 'body',
created: function () {
  this.consultarAPI();
},
methods:{
    consultarAPI:function () {
      this.$http.get(urlAPI)
          .then(function(respuesta){
            console.log(respuesta);
          });
    }
}

});
