module.exports = {
  mysql: {
    host:'localhost',
    user:'asianjim',
    password:'dootdoot',
    database: 'soundsync_db',
    insecureAuth: true,
  },
  port: process.env.PORT || 8080,
};
