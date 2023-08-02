
class NewsControllers {
    
    //[GET] /news
    index(req, res){
        res.render('news');
    }

    // [GET] /news/:slugs
    show(req, res){
        res.send('News Detail!!');
    }
}

module.exports = new NewsControllers;