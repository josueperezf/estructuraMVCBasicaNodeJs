const {response, request} = require('express');
// el response es como agregar la interfaz en typescript ejemplo persona:Persona
const index = (req = request, res = response) => {
    // parametros que puedan pasar, ejemplo ?pag=2 etc
    const parametros = req.query;
    const personas = {
        nombre:'josue',
        apellido:'Perez desde controller'
    };
    res.json(personas);
}
const store = (req = request, res = response) => {
    const body =  req.body;
    res.json({body});
}

const update = (req = request, res = response) => {
    const body =  req.body;
    const {id} =  req.params;
    res.json({
        'metodo':'put',
        id,
        body});
}

module.exports = {
    index,
    store,
    update
}