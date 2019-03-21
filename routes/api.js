const express = require('express');
const router = express.Router();
const Shoe = require('../shoes')

router.get('/shoes', (req, res, next) => {
Shoe.find({})
.then(data=>res.json(data))
.catch(next)
});

// router.post('/shoes', (req, res) => {
//    var shoe = req.body
//     Shoe.create(shoe,(err,shoe)=>{
//         if (err) {
//             throw err;
//         }
//         res.json(shoe);
//     });

    
        
// })
router.post('/shoes', (req, res, next) => {
    if (req.body.type || req.body.color || req.body.for || req.body.size || req.body.url || req.body.qty){
    Shoe.create(req.body)
    .then(data=>res.json(data))
    .catch(next)
}else{
    res.json({
        error:'the input field empty'
    })
}
});

router.delete('/shoes/:id', (req, res, next) => {
Shoe.findOneAndDelete({'_id':req.params.id})
.then(data=>res.json(data))
.catch(next)
})

module.exports = router;