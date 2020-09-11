const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue ={
    name:"Carine Batista",
    avatar: "https://avatars2.githubusercontent.com/u/18583716?s=460&v=4",
    whatsapp: "19992489970",
    bio:'Entusiasta da área de Veterinária, com uma paixão imensa por animais. Apaixonada por cuidar e ensinar, e por mudar a vida de pessoas atraves do tratamento paliativo e Ozonioterápico. Mais de 200. 000 pessoas já passaram por essa imersão de cuidado e amor',
    }
  
    classValue = {
    subject:'Veterinária', 
    cost:'20'
    // o proffy id virá pelo banco de dados
    }

    classScheduleValues =[
        //Class_id virá do bd após cadastrarmos a class
        {
            weekday: 1, 
            time_from:720,
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from:520,
            time_to: 1220
        }
     ]


     await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseriddos

})