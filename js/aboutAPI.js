// url de la API
var urlAPI = 'https://experienciasxcaret.github.io/Developers/api/front.json';
new Vue({
el: '#wrapper',
created: function () {
  this.consultarAPI();
},
data: {
  atractivos : [],
  contenido : []
},
methods:{
    consultarAPI:function () {
      // Obtiene los datos para mostrar
      this.$http.get(urlAPI)
          .then(function(respuesta){
          // La respuesta se guarda en el modelo
          this.atractivos = respuesta.body[0].atractivos;
          this.contenido = respuesta.body[0];
          });
    }
}

});
