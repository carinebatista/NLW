module.exports = async function(db, {proffyValue, classValue, classScheduleValue}){
    // inserir dados na table de teachers
    const insertedProffy = await db.run(`
            INSERT INTO proffys (
                name, 
                avatar, 
                whatsapp,
                bio
            )  VALUES(
                ${proffyValue.name},
                ${proffyValue.avatar},
                ${proffyValue.whatsapp},
                ${proffyValue.bio}
            );
    `)
   
}