//  creating the environment
    // npm init -y (says yes to all ?s )
    // npm i express
    // touch index.js
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
    // npm i ecpress-react-views 
    // which i dont think we need since we are sending variables directly from this file and not components in a views folder
app.set("view engine", "jsx")
app.engine( "jsx", require("express-react-views").createEngine() )


// ROUTES ----------------------------------------------------------------
app.get('/:indexOfShoppinListArray', ( req, res ) => {
    res.send(shoppingList[req.params.indexOfShoppinListArray])
})




app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on PORT ${PORT}`)
})