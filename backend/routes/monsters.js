const router = require('express').Router();
let Monster = require('../models/monster.model');

router.route('/').get((req,res)=>{
  Monster.find()
    .then(monsters => res.json(monsters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=> {
  const name = req.body.name;
  const newMonster = new Monster({name});

  newMonster.save()
    .then(() => res.json('Monster added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req,res)=> {
  Monster.findById(req.params.id)
    .then(monster => res.json(monster))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;