module.exports = async function(db, { proffyValue, classValue, classScheduleValues }){
    // inserir dados na table de teachers
    const insertedProffy = await db.run(`
            INSERT INTO proffys (
                name, 
                avatar, 
                whatsapp,
                bio
            )  VALUES(
                "${proffyValue.name}",
                "${proffyValue.avatar}",
                "${proffyValue.whatsapp}",
                "${proffyValue.bio}"
            );
    `)
    
    const proffy_id = insertedProffy.lastID;

    //inserir dados na tabela classes
    const insertedClass = await db.run(`
                INSERT INTO classes(
                    subject,
                    cost, 
                    proffy_id
                ) VALUES(
                    "${classValue.subject}",
                    "${classValue.cost}",
                    "${proffy_id}"
                );
    `)

    const class_id = insertedClass.lastID

    // Inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })    
    
    // aqui vai executar todos os db.runs() da class_schedules
    // await Promise.all(insertedAllClassScheduleValues)

    // consultar os dados inseridos

    // toddos os proffys
    const selectedProffys =  await db.all(" SELECT * FROM proffys")
    console.log(selectedProffys)

    // Consultar as classes de um determinado professor 
    // Trazer junto os dados do prof
        const selectClassesAndProffys = await db.all(`
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON ()
        `)
}
