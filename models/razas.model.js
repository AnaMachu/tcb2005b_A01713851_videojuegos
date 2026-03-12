const razas = [
  { nombre: "Golden Retriever", foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Hund_Dog.jpg/320px-Golden_Retriever_Hund_Dog.jpg" },
  { nombre: "Husky Siberiano",  foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Draw_husky.jpg/320px-Draw_husky.jpg" },
];

module.exports = class Raza {
 constructor(mi_nombre, mi_imagen) {
    this.nombre = mi_nombre;
    this.foto = mi_imagen;
  };

  save() {
    razas.push(this);
   };

   static fetchAll() {
        return razas;
    }
}
