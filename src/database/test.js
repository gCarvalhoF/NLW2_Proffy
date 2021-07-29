const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: 'Gabriel Carvalho',
        avatar: 'https://avatars3.githubusercontent.com/u/46879123?s=460&u=63fc10fbb78d0299588ad8bd3b7d6f484c678ae2&v=4',
        whatsapp: '4564545645641231',
        bio: 'Instrutor de física',

    }

    classValue = {
        subject: 1,
        cost: '25',
        // o proffy id virá pelo banco de dados    
    }

    classScheduleValues = [
            {
                weekday: 1,
                time_from: 720,
                time_to: 1220
            },
            {
                weekday: 0,
                time_from: 520,
                time_to: 1220
            }
        ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // Consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;     
    `)
    //console.log(selectClassesAndProffys)

    // O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // O horário do time_from (8h) precisa ser maior ou igual ao horário solicitado
    // O time_to precisa ser menor
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        And class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesSchedules)

})


 