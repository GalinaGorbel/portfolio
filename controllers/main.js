exports.getMain = (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home',
        path: '/',
    });
}