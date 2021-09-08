async function post(req, res, next){
    const keys = Object.keys(req.body)

    for (key of keys) { 
        if (req.body[key] == "") {
            return res.send("porfavor preencha todos os campos")
        }
    }

    if (req.files.length == 0) {
        return res.send('Porfavor, envie pelo menos 1 imagem.')
    }
}

module.exports = {
    post
}