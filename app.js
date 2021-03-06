const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//let argv2 = process.argv;


let comando = argv._[0];

switch(comando) {
	case 'listar':
		//console.log('Listar');
		listarTabla(argv.base,argv.limite)
		.then( resp => console.log(`${ resp }`))
	  	.catch(e => console.log(e));
		break;
	case 'crear':
		//console.log('crear');
		crearArchivo(argv.base,argv.limite)
	  	.then( archivo => console.log(`Archivo creado`, colors.green(archivo)))
	  	.catch(e => console.log(e));
		break;
	default:
		console.log('Comando no reconocido');

}



 
