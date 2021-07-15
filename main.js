// const con = require('./connect');

function sendParams() {

    const host = document.getElementById('host').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const database = document.getElementById('database').value;

    document.getElementById('txtData').value = `host: ${host} user: ${user} password: ${password} database: ${database}`;


}

function addData() {
    // Crear query para INSERT, SELECT, UPDATE O DELETE
    const nombre = document.getElementById('nombre').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;

    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES (${nombre},${ap_pat},${ap_mat},${edad} )`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            return;
        }

        console.log("Query exitoso", rows);
    });

    con.end(function () {
        // Conexión Finalizada 
    });

    // Input data conection database
}