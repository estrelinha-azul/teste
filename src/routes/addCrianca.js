const connection = require('../config/configDataBase');

module.exports = function (app) {
  app.post("/addcrianca",function (req, res) {
    const data = req.body;

    const query = `insert into dadoscrianças(nome,idade,cpf,rg,tipoCabelo,corCabelo,corOlho,etnia,sexo, infoAdicional) values ('${data.nome}', ${data.idade}, ${data.cpf}, ${data.rg}, '${data.tipo_cabelo}', '${data.cor_cabelo}', '${data.cor_olho}', '${data.etnia}', '${data.sexo}', '${data.adicionais}')`;

    connection.query(query,(err,result) => {
      if(err){
        throw err;
      }else{
        res.status(200).json({message:"sucess"});
      }
    });
  });
}
