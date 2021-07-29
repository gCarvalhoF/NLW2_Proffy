const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
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


function getSubjects(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
} //Selecionar uma matéria através do index retornado pelo cadastro e transformar no nome da matéria

function convertHoursToMinutes (time) {
    const [hour, minutes] = time.split (":")
    return Number((hour * 60)) + minutes
}

module.exports = {
    subjects,
    weekdays,
    getSubjects,
    convertHoursToMinutes,
}
    