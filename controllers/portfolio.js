const Projects = require('../models/projects');

exports.getPortfolio = (req, res, next) => {
    const projectId = req.query.page;
    
    Projects.fetchAll(projectId, prj => {

        res.render('portfolio', {
            pageTitle: 'Portfolio',
            path: '/portfolio',
            query: projectId,
            projects: prj
        });
    });
}

