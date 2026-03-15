const db = require('../util/database');


module.exports = class Raza {
 constructor(mi_nombre, mi_foto) {
    this.nombre = mi_nombre;
    this.foto = mi_foto;
  };

  save() {
    return db.execute('INSERT INTO razas(nombre, foto) VALUES(?, ?)', 
            [this.nombre, this.foto]);
   };

   static fetchAll() {
         return db.execute('SELECT * FROM razas');;
    };

    static fetchOne(id) {
        return db.execute('SELECT * FROM razas WHERE id = ?', [id]);
    }

   static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
};
