class View {
    // añadimos un botón en tiempo de ejecución
    constructor() {
        this.miBoton
        this.crearBoton()
    }

    /**
     * Muestra la frase en el elemento del HTML de id=respuesta
     * @param {String} frase que queremos mostrar
     */
    displayFrase(frase) {
        $("#respuesta").html("<b>Frase aleatoria</b>: " + frase);
    }

    /**
     *  creamos un boton y lo añadimos al contenedor
     */

    crearBoton() {
        this.miBoton = document.createElement('button')
        this.miBoton.id = "obtener"
        this.miBoton.innerHTML = "<b>Obtener Frase</b>"
        document.getElementById("root").appendChild(this.miBoton)
    }

    /**
     * Método que llamaremos desde el controller
     * Configura el listener del boton con la función del Model
     * Importante el uso de la funcion bind(), de esta manera podemos utilizar 'this'
     * Explicación: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
     * @param {funcion} handle función del Model que devuelve la frase
     */
    recibirFrase(handle) {
        this.miBoton.addEventListener(
            'click',
            function(event) {
                // el listener utiliza displayFrase para meter el contenido en el HTML
                // como parámetro recibe lo que devuelve la función handle()
                // handle es la función obtnerFrase del Model
                // devuelve una string, la frase
                var frase = handle()
                this.displayFrase(frase)
            }.bind(this), false)
    }
}