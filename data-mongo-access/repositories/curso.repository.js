const Curso = require('../Models/curso');

class CursoRepository {
    constructor() {

    }
    async getCursos() {
        return await Curso.find({}, (err, cursos) => {
            if (err) {
                return;
            }
            return cursos;
        });
    }
    async getProximoCursos() {
        var fechaActual = new Date();
        console.log(fechaActual);
        return await Curso.find({},
            // .sort({ fecha: 1 })
            // .limit(1)
            (err, cursos) => {
                // console.log(cursos);
                var cursosEncontrados = cursos.filter(data => { return data.fecha >= fechaActual; });
                cursosEncontrados.sort(function(a, b) { return a.fecha - b.fecha; });
                console.log(cursosEncontrados);
                if (err) {
                    return;
                }
                return cursosEncontrados;
            });
    }
    async getCursoPorCodigo(codigo) {
        console.log(codigo);
        return await Curso.find({
            codigo: codigo
        }, (err, cursos) => {
            if (err) {
                return;
            }
            return cursos;
        });
    }

    async postCurso(codigo, curso) {
        let dia = new Date(curso.fecha);
        var curso = new Curso({
            nombre: curso.nombre,
            cupo: curso.cupo,
            codigo: codigo,
            horario: curso.horario,
            horarios: curso.horarios,
            costo: curso.costo,
            costos: curso.costos,
            leyenda: curso.leyenda,
            aviso: curso.aviso,
            tema: curso.tema,
            temas: curso.temas,
            requisitos: curso.requisitos,
            fecha: dia,
            imagen: curso.imagen,
            archivo: curso.archivo
        });

        return await curso.save((err, cursoGuardado) => {
            if (err) throw err;
            return cursoGuardado;
        });
    }
}

module.exports = CursoRepository;