const connection = require ("../config/configDatabase");

module.exports = function (app){
    app.get("/users",function(req,res){
        connection.query("Select* from users", function(err,result){
            if(err){
                throw err;
            }else{
                res.json(result);
            }
        });
    });
}