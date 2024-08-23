var express = require('express')
var router = express.Router()
const connection = require('../Database')

//Student Login Page
router.get('/StudentLogin', (req, res) => {
  res.render('StudentLogin', {
    title: 'StudentLogin',
    session: req.session.id,
    err:null
  })
})
router.post('/StudentLogin', (req, res) => {
 const {Name,Password}=req.body;
  if (Name) {
    if (Password) {
      const query = 'select * from faculty where Name=? and Password=?'
   
      connection.query(query, [Name,Password], (err, result) => {
        console.log(result)
        if (err) {
          console.log('internal server error')
        } else if (result.length > 0) {
          if (result[0].Name ===Name) {
            //Password Checking Steps After name verified
            if (result[0].Password === Password) {
              const Blob = result[0].Image
              const Image = Blob.toString('base64')
              const ImageUrl = `data:image/jpeg;base64,${Image}`

              res.render('StudentPanel', {
                title: 'Studentpanel',
                result: result,
                ImageUrl: ImageUrl
              })
            } else {
            return  res.status(400).render('StudentLogin', {
                title: 'StudentLogin',
                err: 'Please Enter the Correct RollNumber or Password.'
              })
            } //Steps end
          } else {
            //Name check if end here
          return  res.status(400).render('StudentLogin', {
              title: 'StudentLogin',
              err: 'Please Enter the Correct RollNumber or Password.'
            })
          }
        } else {
          res.render('StudentLogin', {
  title: 'StudentLogin',
  err: 'Please Enter the Correct RollNumber or Password.'
})

        }
      })
    }
  }
})

router.post('/ExamPage',(req,res)=>{
const start=req.body;
if(start)
{
  res.render('ExamPage', { title: 'Exampage', start: 'true' })


}
  
  else
  {
    res.render('/StudentPanel')
  }


})



module.exports = router
