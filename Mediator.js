// Clase utilizada para crear a nuestros miembros.
class Miembro{ 

    // Dentro de este constructor tenemos el nombre de nuestros miembros, y la sala de chat a la que pertecen.
    constructor(nombre){
        this.nombre = nombre

        // Antes de instanciar esta clase es necesario que exista una sala de chat para poder ser colocados dentro, esto es debido a que un miembro tiene una sala de chat como nulo al momento de ser creado hasta que entra a una sala de chat existente.
        this.chatroom = null
    }

    // Cuando un miembro desea enviar un mensaje, este es el metodo al que tendra acceso, luego de enviar un mensaje, se llamara a un metodo dentro de la sala de chat para poder reconocer el mensaje, quien lo envia y para quien. 
    enviar(mensaje, aQuien){
        this.chatroom.enviarPara(mensaje, this, aQuien)
    }

    // Este sera el metodo final, el receptor recibir el mensaje del emisor de modo que sera visualizado tal que:
    recibirMensaje(mensaje, deQuien){
        // Emisor (el que envia el mensaje) a receptor (para quien): [Texto del mensaje]
        console.log(`${deQuien.nombre} a ${this.nombre}: ${mensaje}`)
    }
}

// Clase mediador Chatroom (Sala de chat).
class Chatroom{

    // Contrustor vacio ya que solo usaremos esta clase para ser instanciada por sus metodos.
    constructor(){}

    // Este metodo sera el intermediario entre los Miembros y la Sala de chat, puesto 
    agregarMiembro(miembro){
        miembro.chatroom = this // chat Objeto
    }
    
    // Metodo llamado a traves de 'enviar' por parte de los Miembros, recibe el mensaje del emisor, quien es el emisor y el destinario.
    enviarPara(mensaje, deQuien, aQuien){
        // Quien recibira el mensaje, obtendra el mensaje y quien lo envio para ser procesado en la ventana de chat.
        aQuien.recibirMensaje(mensaje, deQuien)
    }
}

const chat = new Chatroom()

const marcelo = new Miembro("Marcelo")
const juan = new Miembro("Juan")

chat.agregarMiembro(marcelo)
chat.agregarMiembro(juan)

marcelo.enviar("Hola, Juan", juan)
juan.enviar("Hola, Marcelo, que tal tu dia?", marcelo)
marcelo.enviar("Bien y el tuyo?", juan)