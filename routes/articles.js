const express = require('express');
const router = express.Router();
const Articles = require("../models/articles");




router.get('/', (req, res)=> {
    Articles.find()
    .then(article => res.json(article))
    .catch(err=> res.status(400).json(`Error: ${err}`));
});

router.post('/add', (req, res)=> {
    const newArticle = new Articles({
        title: req.body.title,
        article:req.body.article,
        authorname:req.body.authorname
    });

    newArticle.save()
    .then(()=> res.json("the new article posted"))
    .catch(err=> res.status(400).json(`Error: ${err}`));
});

router.get('/:id', (req, res)=> {
    Articles.findById(req.params.id)
    .then(article => res.json(article))
  
    .catch(err=> res.status(400).json(`Error: ${err}`));
});


router.put('/update/:id', (req, res)=> {
    Articles.findById(req.params.id)
    .then(article => {
        article.title = req.body.title,
        article.article = req.body.article,
        article.authorname = req.body.authorname;

        article
        .save()
        .then(()=> res.json("the article updated"))
        .catch(err=> res.status(400).json(`Error: ${err}`));
    })
  
    .catch(err=> res.status(400).json(`Error: ${err}`));
});

router.delete('/:id', (req, res)=> {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("the article is deleted"))
  
    .catch(err=> res.status(400).json(`Error: ${err}`));
});


module.exports = router;
