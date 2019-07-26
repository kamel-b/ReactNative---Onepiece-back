const express = require ('express');
const router = express.Router();
const connection = require('../config')



router.get ('/', (req, res) =>{
    connection.query(``,(err, results) => {

        if (err) {
   
          
          res.status(500).send('Erreur lors de la récupération de character');
        } else {
   
          
          res.json(results);
        }
      })
    });

    router.get('/:id', (req, res) => {


        const id = req.params.id;
        const formData = req.body;
        
        
        connection.query('', [formData, id], err => {
        
          if (err) {
          
            console.log(err);
            res.status(500).send("Erreur lors de la mise a jour de character");
          } else {
        
           
            res.sendStatus(200);
          }
        });
    });