const connection = require ("../config/configDataBase");

module.exports = function(app){
    app.get("/users", function(req, res){
        connection.query("Select from users", function (err,result){
            if(err){
                return err
            }else{
                res.json(result);
            }
        });
    });
}
