const newRoutes = require('./news')
const homeRoutes = require('./site')
function route(app){
    app.use('/news',newRoutes)
    app.use('/',homeRoutes)
    // app.get('/search', (req, res) => res.render('search'))
    // app.post('/search', (req, res) =>{
    //     console.log(req.body);
    //     res.send('');
    // }) 
}

module.exports = route;