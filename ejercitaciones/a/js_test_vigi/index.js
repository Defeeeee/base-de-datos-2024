class Alumno {
    constructor(nombre, apellido, dni, anio, curso, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.anio = anio;
        this.curso = curso;
        this.nota = nota;
    }

    isAprobado() {
        return this.nota >= 6;
    }
}

const ArrayAlumnos = [];

ArrayAlumnos.push(
    new Alumno(
        'Juan',
        'Perez',
        48123456,
        3,
        'B',
        3
    ),
    new Alumno(
        'Pedro',
        'Garcia',
        48123457,
        3,
        'B',
        5
    ),
    new Alumno(
        'Juan',
        'Si',
        48123458,
        4,
        'A',
        10
    ),
    new Alumno(
        'Pedro',
        'Pebe',
        48123459,
        4,
        'A',
        7
    ),
    new Alumno(
        'Maria',
        'Gerzenstein',
        48123460,
        4,
        'B',
        2
    ),
    new Alumno(
        'Luis',
        'Rodriguez',
        48123461,
        4,
        'B',
        4
    ),
    new Alumno(
        'Carlos',
        'Gonzalez',
        48123462,
        5,
        'A',
        6
    ),
    new Alumno(
        'Ana',
        'Lopez',
        48123463,
        5,
        'A',
        8
    )
);

function capitalize(nombre) {
    return nombre[0].toUpperCase() + nombre.substring(1);
}

function mostrarAlumno(Alumno) {
    console.log(
`         DNI: ${String(Alumno.dni).substring(0,2)}.${String(Alumno.dni).substring(2,5)}.${String(Alumno.dni).substring(5,8)}
         Nombre y Apellido: ${capitalize(Alumno.nombre)} ${capitalize(Alumno.apellido)}
         Curso: ${Alumno.anio}°${Alumno.curso}
         Nota: ${Alumno.nota}\n`
    )

}


ArrayAlumnos.forEach(mostrarAlumno)
ArrayAlumnos.forEach((alumno) => (capitalize(alumno.nombre), capitalize(alumno.apellido)))

ArrayAlumnos.filter((alumno) => alumno.nota >= 6).forEach(mostrarAlumno)
ArrayAlumnos.filter((alumno) => alumno.anio === 5).forEach(mostrarAlumno)
ArrayAlumnos.filter((alumno) => alumno.curso === 'B').forEach(mostrarAlumno)