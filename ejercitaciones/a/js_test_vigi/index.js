/*
    Ejericio 1

    Preferimos utilizar clases para definir la estructura de alumno
    pero si no se puede, se puede hacer de la siguiente manera:

    const ArrayAlumnos = [
        {
            nombre: "Juan",
            apellido: "aaaa",
            dni: 48313053,
            anio: 4,
            curso: "A",
            nota: 8,
        },
        { ... }, { ... }, {...}, {...}, {...}, {...}, {...}
    ];
 */

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

/*
    Ejericio 2
 */

function capitalize(nombre) {
    return nombre[0].toUpperCase() + nombre.substring(1);
}

// con arrow function
// const capitalize = (nombre) => nombre[0].toUpperCase() + nombre.substring(1);

/*
    Ejericio 3
 */

function mostrarAlumno(Alumno) {
    console.log("DNI: " + String(Alumno.dni).substring(0,2) + "." + String(Alumno.dni).substring(2,5) + "." + String(Alumno.dni).substring(5,8))
    console.log("Nombre y Apellido: " + capitalize(Alumno.nombre) + " " + capitalize(Alumno.apellido))
    console.log("Curso: " + Alumno.anio + "°" + Alumno.curso)
    console.log("Nota: " + Alumno.nota + "\n")
}

// con arrow function
// const mostrarAlumno = (Alumno) => {
//     console.log("DNI: " + String(Alumno.dni).substring(0,2) + "." + String(Alumno.dni).substring(2,5) + "." + String(Alumno.dni).substring(5,8))
//     console.log("Nombre y Apellido: " + capitalize(Alumno.nombre) + " " + capitalize(Alumno.apellido))
//     console.log("Curso: " + Alumno.anio + "°" + Alumno.curso)
//     console.log("Nota: " + Alumno.nota + "\n")
// }

/*
    Ejericio 4
*/

ArrayAlumnos.forEach((alumno) => {alumno.nombre = capitalize(alumno.nombre); alumno.apellido = capitalize(alumno.apellido)})

/*
    Ejericio 5
*/

ArrayAlumnos.forEach(mostrarAlumno)

/*
    Ejericio 6
*/

ArrayAlumnos.filter((alumno) => alumno.isAprobado()).forEach(mostrarAlumno)
ArrayAlumnos.filter((alumno) => alumno.anio === 4).forEach(mostrarAlumno)
ArrayAlumnos.filter((alumno) => alumno.curso === 'B').forEach(mostrarAlumno)
// si se desea mostrar los alumnos aprobados de 4toB se podria hacer
// ArrayAlumnos.filter((alumno) => alumno.anio === 4 && alumno.curso === 'B' && alumno.isAprobado()).forEach(mostrarAlumno)