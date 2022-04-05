class NewsController{

    index(req, res) {
        res.render('new');
    }
    // news/slug
    show(req,res){
        res.send("Hello Tao Le")
    }
}

module.exports = new NewsController;