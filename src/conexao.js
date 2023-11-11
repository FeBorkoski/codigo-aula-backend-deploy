const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 3452,
      user : 'postgres',
      password : '3430',
      database : 'deploy'
    }
  });
  