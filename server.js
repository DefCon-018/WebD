const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

let task = [];

app.get('/', (req, res)=>{
    let taskList = task.map(t => `<li>${t}</li>`).join('\n');
    res.send(`
    <html>
       <head>
       </head>
       <body>
          <h1>Welcome</h1>
          <form action= "/" method= "POST">
            <input name= "newTask">
            <button type= "submit">Add</button>
          </form>
          <ul>${taskList}</ul>
        </body>  
    </html>
    `)
})

app.post('/', (req, res)=>{
    task.push(req.body.newTask);
    res.redirect('/');
})

app.listen(5555);