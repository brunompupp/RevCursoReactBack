
exports.up = function(knex) {

	return knex.schema.createTable('usuarios', function(table){
		table.increments('id');
		table.string('nome').notNullable();
		table.string('email').notNullable();
		table.string('senha').notNullable();
		table.string('idade').notNullable();

	})
  
};

exports.down = function(knex) {
	
	return knex.schema.dropTable('usuarios')

};
