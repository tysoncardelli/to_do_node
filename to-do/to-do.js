const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
      cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const guardarDB = ()=>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err)=>{
        if(err) throw new Error('No se pudo grabar',err);
    })

}

const cargarDb = () => {
    listadoPorHacer = require ('../db/data.json');
    console.log(listadoPorHacer);
}
module.exports = {
    crear
}