fetch("https://jsonplaceholder.typicode.com/comments").then(
   response => response.json()
).then(json => json.forEach(element => {
   console.log(element.email) 
})
).catch(err => console.log(err))