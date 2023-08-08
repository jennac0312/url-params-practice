//  creating the environment
    // npm init -y (says yes to all ?s )
    // npm i express
    // touch index.js .gitignore (for node_modules)
    // code .

    // npm i nodemon ( for auto refreshing )
        // "start" : "nodemon index.js" (inside package.json)


// 3 statments to create server
const express = require("express")
const app = express()
const PORT = 3000

// variables to render
const shoppingList = [ "hats", "glasses", "shirts", "pants", "socks", "shoes", "banana", "mangos", "peaches", "food", "more food"]


// MIDDLE WARE FOR VIEWS ------------------------------------------------
    // npm i express-react-views 
    // which i dont think we need since we are sending variables directly from this file and not components in a views folder
app.set("view engine", "jsx")
app.engine( "jsx", require("express-react-views").createEngine() )


// ROUTES ----------------------------------------------------------------
app.get('/:indexOfShoppingListArray', ( req, res ) => {
    if(shoppingList[req.params.indexOfShoppingListArray]){
        res.send(`<h1>${shoppingList[req.params.indexOfShoppingListArray]}</h1>`)
    } else {
        res.send(` <h1 style="font-size:20px"> Shopping List doesn't have <span style="font-size: 40px; color:red">${req.params.indexOfShoppingListArray}</span> items </h1> `)
    }
})




app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on PORT ${PORT}`)
})