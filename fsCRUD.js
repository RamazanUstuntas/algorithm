const fs = require('fs');

// CREATE FILE 

/* fs.writeFile("employees.json", '{"name":"Employee 1 Name", "salary":2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("dosya olusturuldu");
});
 */

// READING FILE
/* fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("dosya okundu.");
}); */


// APPEND TO FILE

/* fs.appendFile("employees.json", '\n{"name":"Employee 2 Name", "salary":7000}','utf8',(err) => {
    if (err) console.log(err);
    console.log("dosya guncellendi.");
}); */

// REMOVE FILE

/* fs.unlink("employees.json", (err) => {
    if (err) console.log(err);
    console.log("dosya silindi..");
}); */