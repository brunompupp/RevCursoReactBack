module.exports = {
	

	index(req,res){

		try{

			return res.json({
				message:'conectado', status: 'sucesso'
			
			});

		}catch(e){

			return res.json({message:e.message, status: 'erro'});

		}
		
	}
}