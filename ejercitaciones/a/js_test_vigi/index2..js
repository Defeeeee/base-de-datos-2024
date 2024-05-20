const Alumnos = [
    {
        nombre: "Juan",
        apellido: "Gomez",
        dni: 48345678,
        anio: 4,
        curso: "A",
        nota: 9,
    },
    {
        nombre: "Juan",
        apellido: "Ipectopoc",
        dni: 48313053,
        anio: 4,
        curso: "A",
        nota: 8,
    },
    {
        nombre: "Rico",
        apellido: "Patriotismo",
        dni: 48690420,
        anio: 5,
        curso: "A",
        nota: 5,
    },
    {
        nombre: "Jan",
        apellido: "Mez",
        dni: 48389807,
        anio: 5,
        curso: "A",
        nota: 3,
    },
    {
        nombre: "Alfredo",
        apellido: "Btesh",
        dni: 48000000,
        anio: 4,
        curso: "B",
        nota: 0,
    },
    {
        nombre: "Federico",
        apellido: "DNemeth",
        dni: 48225513,
        anio: 3,
        curso: "B",
        nota: 8,
    },
    {
        nombre: "Benjamin",
        apellido: "Vernik",
        dni: 48240177,
        anio: 3,
        curso: "B",
        nota: 10,
    },
    {
        nombre: "Borja",
        apellido: "Izurieta",
        dni: 48390367,
        anio: 4,
        curso: "B",
        nota: 10,
    }
]

const capitalizar = (string) => {
    return string[0].toUpperCase() + string.substring(1) // primera letra en mayus + lo demas de la string
}