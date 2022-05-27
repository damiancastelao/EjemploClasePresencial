/**
 * Clase Controller
 * Enlaza el model con el html
 * 
 * @field model encargado de los datos
 */
class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        // configuramos el listener del boton del View
        this.view.recibirFrase(this.model.obtenerFrase)
    }

}

// inicio de la aplicación
const juego = new Controller(new Model, new View)