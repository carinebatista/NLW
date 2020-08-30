
const proffys= [ 
    {name:"Carine Batista",
    avatar: "https://avatars2.githubusercontent.com/u/18583716?s=460&v=4",
    whatsapp: "992489970",
    bio:'Entusiasta da área de Veterinária, com uma paixão imensa por animais <br> <Br> Apaixonada por cuidar e ensinar, e por mudar a vida de pessoas atraves do tratamento paliativo e Ozonioterápico. Mais de 200. 000 pessoas já passaram por essa imersão de cuidado e amor',
    subject:'Veterinária', 
    cost:'20',
    weekday: [0], 
    time_from:[720],
    time_to: [1220] 
    },

    { name:"Daniele Evangelista",
    avatar: "https://avatars2.githubusercontent.com/u/18583716?s=460&v=4",
    whatsapp: "992489970",
    bio:'Entusiasta da área de Química, com uma paixão imensa por animais <br> <Br> Apaixonada por cuidar e ensinar, e por mudar a vida de pessoas atraves do tratamento paliativo e Ozonioterápico. Mais de 200. 000 pessoas já passaram por essa imersão de cuidado e amor',
    subject:'Química', 
    cost:'20',
    weekday: [1], 
    time_from:[720],
    time_to: [1220] 
    }
] 

function pageLanding(req,res){
    return res.sendFile(__dirname + "/views/index.html")
}
function pageStudy(req, res){
    return res.sendFile(__dirname +"/views/study.html")
}

function pageGiveClasses(req,res){
    return res.sendFile(__dirname +"/views/give-class.html")
}

const express = require('express')
const server = express()

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)


.listen(5000)

