const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Saif@1234"
});

let q = "INSERT INTO user (id, username, email, password) values (?,?,?,?)";

try {
    connection.query(q,user,(err,result) => {
        if(err) throw err    
        console.log(result);
});
} catch(err) {
    console.log(err);
}

connection.end();

let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
