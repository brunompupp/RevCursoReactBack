const connection = require('../database/connection');

const tabela = 'usuarios';


module.exports = {

	//lista todos os usuarios
	async index(req,res){

		try{

			const usuario = await connection(tabela).select();

			return res.json({

				dados: usuario,
				status: 'sucesso'
			});


		}catch(e){

			return res.json({

				message: e.message,
				status: 'erro'
			});

		}
	},

	//listar por ID

	async store(req,res){

		let{id} = req.params;

		try{

			const usuario = await connection(tabela).select('*').where('id', id);

			return res.json({
				dados: usuario,
				message: 'dados',
				status: 'sucesso'
			});


		}catch(e){

			return res.json({

				message: e.message,
				status: 'erro'
			});

		}
	},

	async update(req,res){

		let {id} = req.params;
		let{ nome, email, senha, idade } = req.body;

		try{

			await connection(tabela).update({
				nome,email,senha,idade
			}).where('id', id);

			return res.json({

				message: 'Usuario atualizado com sucesso',
				status: 'sucesso'
			});


		}catch(e){

			return res.json({

				message: e.message,
				status: 'erro'
			});

		}
	},

	async create(req,res){

		let{nome, email, senha, idade} = req.body;

		try{

			const usuario = await connection(tabela).insert({
				nome: nome,
				email: email,
				senha: senha,
				idade: idade
			})

			return res.json({
				message: 'usuario cadastrado',
				dados: usuario,
				status: 'sucesso'
			});


		}catch(e){

			return res.json({

				message: e.message,
				status: 'erro'
			});

		}
	},

	async delete(req,res){

		let{id} = req.params;

		try{

			await connection(tabela).delete().where('id', id);

			return res.json({

				message: 'usuário deletado ',
				status: 'sucesso'
			});


		}catch(e){

			return res.json({

				message: e.message,
				status: 'erro'
			});

		}
	}
}

