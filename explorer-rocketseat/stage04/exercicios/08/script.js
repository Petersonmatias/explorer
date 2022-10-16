
//Estruturando dados com Objetos

const patients = [
    {
        name: 'John',
        age: 32,
        weight: 89,
    },
    {
        name: 'Carlos',
        age: 21,
        weight: 78,
    },
    {
        name: 'Bianca',
        age: 61,
        weight: 77,
    },
]

let patientsNames = []

for ( let patient of patients) {
    patientsNames.push(patient.name)
}


alert(patientsNames)