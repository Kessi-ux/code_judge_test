var express = require('express');
var router = express.Router();

/* Post/api/add */
router.post('/', async(req, res, next)=>{
 let num1 = req.body.num1
 let num2 = req.body.num2
 const num3 = Number(num1) + Number(num2)

 try { 
//   const newNumber = await num3.save()

    if (num3 !== 0 && (typeof(num3) !== 'number' || !num3) ) {
        throw new Error('num1 or num2 is not a valid number')
    }

  res.status(201).json({ sum: num3 })
 }catch (err){
  res.status(400).json({message:err.message})
 }

});

module.exports = router;
