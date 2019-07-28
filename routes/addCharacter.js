const express = require('express')
const router = express.Router()
const connection = require('../config')



//to Create a new Character

router.post('/',(req, res ) => {
    const formData = req.body
    connection.query("INSERT INTO mugiwara SET ?", formData, (err, results) => {
        if(err){
            console.log(err);
            
        }
        else{
            res.sendStatus(200)
        }
    })
})

// to modify a character

router.put('/:id',(req, res) => {
    const id = req.params.id
    const formData = req.body
    connection.query('UPDATE mugiwara SET ? WHERE id = ?', [formData, id] ,err => {
        if(err){
            res.status(500).send('Erreur lors de la modification d\'un mugiwara')
            console.log('que passa ',err);
            
        }
        else{
            res.sendStatus(200)
        }
    })
})


module.exports = router