class Model {
    constructor() {}

    /**
     * Método para obtener una frase al azar de la base de datos
     * Solo vamos a devolver la frase como String
     * La vista se encargará de mostrarla
     * @returns contenido frase elegida al azar
     */
    obtenerFrase = () => {
        var contenido = ""

        // buscamos una frase aleatoria, una api cualquiera 
        $.ajax({
            data: {},
            url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text',
            type: 'get',
            success: function(response) {
                // recojemos la respuesta si fue todo correcto
                contenido = response.toString()
            },
            /* importante hacer la conexión sync
             * para esperar el resultado antes de hacer el return
             * si n o el return va vacio, se ejecuta antes de obtener la respuesta
             * */
            async: false // importante hacer la conexión sync
        })

        // devolvemos la frase
        return contenido
    }
}