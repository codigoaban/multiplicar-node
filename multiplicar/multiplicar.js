const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite=10) => {
	
	console.log('====================');
	console.log(`===tabla de ${ base }====`.yellow);
	console.log('====================');

	return new Promise ( (resolve, reject) => {
		if( !Number(base) ){
			reject('No es un numero');
			return;
		}

		//let data ='';

		for (let i=base; i<=limite; i++){
			//data += `${ base } * ${ i } = ${ base * i }\n`;
			console.log(`${ base } * ${ i } = ${ base * i }\n`);
		}

		//resolve(data);

	});
}

let crearArchivo = (base, limite=10) => {

	return new Promise( (resolve, reject) => {

		if( !Number(base) ){
			reject('No es un numero');
			return;
		}

		let data ='';

		for (let i=base; i<=limite; i++){
			data += `${ base } * ${ i } = ${ base * i }\n`;
		}


		fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
		  if (err) 
		  	reject(err)
		  else
		  	resolve(`tabla-${base}-al-${ limite }.txt`);
		});



	});


}


module.exports = {
	crearArchivo,
	listarTabla
}
