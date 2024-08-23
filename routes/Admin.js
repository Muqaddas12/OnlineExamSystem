var express = require('express')
var router = express.Router()
const connection = require('../Database')

/* GET users listing. */
router.get('/AdminLogin', function (req, res) {
  res.render('AdminLogin', { title: 'AdminLogin' })
})

router.post('/StudentDetails', (req, res) => {
  const selection = req.body.typeselection
  if (selection) {
    const query = 'select * from Students'
    connection.query(query, (err, results) => {
      if (err) {
        console.log('internal server error')
      } else {
        results.forEach(element => {
          console.log(element)
        })
      }
    })
  } else{
    const query ='select * from student where rollnumber=?';
    connection.query(query,(err,results)=>{
      if(err){
        console.log('internal server error')
      } else{
        results.forEach(element=>{
          console.log(element)
        })
      }
    })
  }
})

//for blocking Student from exam
router.get('/BlockStudent', (req, res) => {
  const Status=req.body.Block;
  const RollNumber = req.body.RollNumber;
  if(Block){
    const query = 'update students set Status=? where RollNumber=? ';
    connection.query(query,[Status,RollNumber],(err,result)=>{
        if(err){
          console.log(err);
        }else{
            console.log('update successfully')
        }
    })
  }
})
module.exports = router
