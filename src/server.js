
const proffys= [ 
    {name:"Carine Batista",
    avatar: "https://avatars2.githubusercontent.com/u/18583716?s=460&v=4",
    whatsapp: "19992489970",
    bio:'Entusiasta da área de Veterinária, com uma paixão imensa por animais. Apaixonada por cuidar e ensinar, e por mudar a vida de pessoas atraves do tratamento paliativo e Ozonioterápico. Mais de 200. 000 pessoas já passaram por essa imersão de cuidado e amor',
    subject:'Veterinária', 
    cost:'20',
    weekday: [0], 
    time_from:[720],
    time_to: [1220] 
    },

    { name:"Mayk Brito",
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=44",
    whatsapp: "992489970",
    bio:'Entusiasta da área de Química, com uma paixão imensa por animais. Apaixonada por cuidar e ensinar, e por mudar a vida de pessoas atraves do tratamento paliativo e Ozonioterápico. Mais de 200. 000 pessoas já passaram por essa imersão de cuidado e amor',
    subject:'Química', 
    cost:'20',
    weekday: [1], 
    time_from:[720],
    time_to: [1220] 
    }
] 

const subjects = [ 
    "Artes",
    "Biológicas",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia" ,
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
     "Domingo",
     "Segunda-feira",
     "Terça-feira",
     "Quarta-feira",
     "Quinta-feira",
     "Sexta-feira",
     "Sábado",
]

// Funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return  subjects[position]
}


function pageLanding(req,res){
    return res.render("index.html")
}
function pageStudy(req, res){
    const filters= req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req,res){
    const data=  req.query
     
    // Se tiver dados (data)
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){

        data.subject = getSubject(data.subject)
        // Adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    // senão, mostrar a pagina
    return res.render("give-classes.html",{ subjects, weekdays })
}


// Servidor
const express = require('express')
const server = express()


// Configurar nunjucks
const nunjucks =require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache:true, 
})

// Inicio e configuração do servidor
server
// Configurar arquivos Estáticos (css, scripts, imagens)
.use(express.static("public"))

// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// Start no servidor
.listen(5000)

