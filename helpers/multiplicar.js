const fs = require('fs');
const colors = require('colors/safe');
const crearArchivo = async (base=5,list=false,hasta=10) => {


    let tabla='';
    let tabla_='';
    for (let i=1;i<=hasta;i++){
        tabla = tabla + `${base} ${colors.red('X')} ${i} ${colors.white('=')} ${base*i}`+'\n';
        tabla_ = tabla_ + `${base} X ${i} = ${base*i}`+'\n';
        //console.log(`${base} X ${i} = ${base*i}`);
    }

    if(list){
        console.log(colors.red('====================='));
        console.log(colors.blue('    Tabla del '),base);
        console.log(colors.red('====================='));
        console.log(colors.yellow(tabla));
    } 

    try{
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`,tabla_);
        return (colors.rainbow(`Archivo tabla-del-${base}.txt`));
    }
    catch(err){
        throw err;
    }

    /* fs.writeFile(`tabla-del-${valor}.txt`,tabla,(err) => {
        if(err) throw err;
        console.log('Archivo creado');
    }); */
}
module.exports = {
    crearArchivo
}