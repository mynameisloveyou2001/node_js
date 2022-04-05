class SiteController{

    index(req, res) {
        res.render('home');
    }
    //home/search
    search(req,res){
        res.render('search')
    }
}

module.exports = new SiteController;