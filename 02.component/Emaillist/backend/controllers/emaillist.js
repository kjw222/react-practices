const model = require('../models/emaillist');

module.exports = {
    readAll: async function(req, res, next) {
        try {
            const result = await model.findAll();
            res
                .set('Access-Control-Allow-Origin', req.headers.origin)    // /api로 들어오는 모든 것.  simple request 조건 중 하나!!
                .set('Access-Control-Allow-Credentials', true)
                .send({
                result: 'success',
                data: result,
                message: null
            });
        } catch(err){
            next(err);
        }
    },
    create: async function(req, res, next) {
        try {
            const result = await model.insert(req.body);
            res.send({
                result: 'success',
                data: result,
                message: null
            });
        } catch(err){
            next(err);
        }
    }
}