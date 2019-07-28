const express = require ('express');
const router = express.Router();
const connection = require('../config')

// to get all the character

router.get ('/', (req, res) =>{
    connection.query("SELECT * FROM mugiwara",(err, results) =>{
        if(err){
            res.status(500).send('Erreur lors de la recuperation des donées')
        }
        else{
            res.json(results)
        }
    })

})

//to get one character by  his id

router.get('/:id', (req, res) => {
    const id = req.params.id
    connection.query('SELECT * FROM mugiwara WHERE id=?', id,(err,results) => {
        if(err){
            res.status(500).send('Erreur lors de la recupération des données')
        }
        else{
            res.json(results)
        }
    })
})

// delete a character 

router.delete('/:id',(req ,res) => {
    const id = req.params.id
    connection.query('DELETE FROM mugiwara WHERE id=?', id, err => {
        if(err){
            res.status(500).send('Erreur lors de la suppression d\' un mugiwara')
        }
        else{
            res.sendStatus(200)
        }
    })
})



module.exports = router