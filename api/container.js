const { asClass, asFunction, createContainer, asValue } = require("awilix");

//db
const db = require('../data-access/models')[0];
const dbSM = require('../data-access/models')[1];
//base de datos mongodb
const mongodb = require('../data-mongo-access/models');

// repositories
const {
    ModuloRepository,
    ParteRepository,
    ObjetoRepository,
    SptestRepository,
    VersionRepository,
    ContactoRepository,
    PartePublicoRepository,
    UsuarioRepository,
    HabilitacionRepository,
    NovedadRepository,
    DocumentoRepository,
    OcurrenciaRepository,
    ImpactoRepository,
    VotacionRepository,
    CursoRepository,
    EncuestaRepository
} = require("../data-access/repositories");

// mongo repositories
const {
    PerfilRepository,
    AsignadoRepository,
    ParametroRepository,
    LogRepository,
    InscriptoRepository
} = require("../data-mongo-access/repositories");

// business
const {
    Profile
} = require("../business");

// services
const {
    ModuloService,
    ParteService,
    ObjetoService,
    SptestService,
    VersionService,
    ContactoService,
    PartePublicoService,
    UsuarioService,
    HabilitacionService,
    NovedadService,
    DocumentoService,
    OcurrenciaService,
    ImpactoService,
    VotacionService,
    SecurityService,
    ParametroService,
    LogService,
    CursoService,
    EncuestaService
} = require("../services");

// controllers
const {
    ModuloController,
    ParteController,
    ObjetoController,
    SptestController,
    VersionController,
    ContactoController,
    PartePublicoController,
    UsuarioController,
    HabilitacionController,
    NovedadController,
    DocumentoController,
    OcurrenciaController,
    ImpactoController,
    ImagenesController,
    IntercambioController,
    VotacionController,
    SecurityController,
    ImagenPerfilController,
    LoginController,
    ParametroController,
    CursoController,
    EncuestaController
} = require("../api/controllers");

//Routes
const Routes = require('./routes');
const ModuloRoutes = require("../api/routes/modulo.routes");
const ParteRoutes = require("../api/routes/parte.routes");
const ObjetoRoutes = require("../api/routes/objeto.routes");
const SptestRoutes = require("../api/routes/sptest.routes");
const VersionRoutes = require("../api/routes/version.routes");
const ContactoRoutes = require("../api/routes/contacto.routes");
const PartePublicoRoutes = require("../api/routes/partepublico.routes");
const UsuarioRoutes = require("../api/routes/usuario.routes");
const HabilitacionRoutes = require("../api/routes/habilitacion.routes");
const NovedadRoutes = require("../api/routes/novedad.routes");
const DocumentoRoutes = require("../api/routes/documento.routes")
const OcurrenciaRoutes = require("../api/routes/ocurrencia.routes");
const ImpactoRoutes = require("../api/routes/impacto.routes");
const ImagenesRoutes = require("../api/routes/imagenes.routes");
const IntercambioRoutes = require("../api/routes/intercambio.routes");
const VotacionRoutes = require("../api/routes/votacion.routes");
const SecurityRoutes = require("../api/routes/security.routes");
const ImagenPerfilRoutes = require("../api/routes/imagenPerfil.routes");
const LoginRoutes = require("../api/routes/login.routes");
const ParametroRoutes = require("../api/routes/parametro.routes");
const CursoRoutes = require("../api/routes/curso.routes");
const EncuestaRoutes = require("../api/routes/encuesta.routes");

//App
const Server = require("./server");
const config = require('../config/config');
const container = createContainer();

container
    .register({
        app: asClass(Server).singleton(),
        router: asClass(Routes).singleton(),
        ModuloController: asClass(ModuloController).singleton(),
        ModuloRoutes: asFunction(ModuloRoutes).singleton(),
        ParteController: asClass(ParteController).singleton(),
        ParteRoutes: asFunction(ParteRoutes).singleton(),
        ObjetoController: asClass(ObjetoController).singleton(),
        ObjetoRoutes: asFunction(ObjetoRoutes).singleton(),
        ContactoController: asClass(ContactoController).singleton(),
        ContactoRoutes: asFunction(ContactoRoutes).singleton(),
        UsuarioController: asClass(UsuarioController).singleton(),
        UsuarioRoutes: asClass(UsuarioRoutes).singleton(),
        HabilitacionController: asClass(HabilitacionController).singleton(),
        HabilitacionRoutes: asClass(HabilitacionRoutes).singleton(),
        NovedadController: asClass(NovedadController).singleton(),
        NovedadRoutes: asClass(NovedadRoutes).singleton(),
        DocumentoController: asClass(DocumentoController).singleton(),
        DocumentoRoutes: asClass(DocumentoRoutes).singleton(),
        SptestController: asClass(SptestController).singleton(),
        SptestRoutes: asFunction(SptestRoutes).singleton(),
        VersionController: asClass(VersionController).singleton(),
        VersionRoutes: asFunction(VersionRoutes).singleton(),
        PartePublicoController: asClass(PartePublicoController).singleton(),
        PartePublicoRoutes: asFunction(PartePublicoRoutes).singleton(),
        OcurrenciaController: asClass(OcurrenciaController).singleton(),
        OcurrenciaRoutes: asFunction(OcurrenciaRoutes).singleton(),
        ImpactoController: asClass(ImpactoController).singleton(),
        ImpactoRoutes: asFunction(ImpactoRoutes).singleton(),
        ImagenesController: asClass(ImagenesController).singleton(),
        ImagenesRoutes: asFunction(ImagenesRoutes).singleton(),
        IntercambioController: asClass(IntercambioController).singleton(),
        IntercambioRoutes: asFunction(IntercambioRoutes).singleton(),
        VotacionController: asClass(VotacionController).singleton(),
        VotacionRoutes: asFunction(VotacionRoutes).singleton(),
        SecurityController: asClass(SecurityController).singleton(),
        SecurityRoutes: asFunction(SecurityRoutes).singleton(),
        ImagenPerfilController: asClass(ImagenPerfilController).singleton(),
        ImagenPerfilRoutes: asFunction(ImagenPerfilRoutes).singleton(),
        LoginController: asClass(LoginController).singleton(),
        LoginRoutes: asFunction(LoginRoutes).singleton(),
        ParametroController: asClass(ParametroController).singleton(),
        ParametroRoutes: asFunction(ParametroRoutes).singleton(),
        CursoRoutes: asFunction(CursoRoutes).singleton(),
        CursoController: asClass(CursoController).singleton(),
        EncuestaController: asClass(EncuestaController).singleton(),
        EncuestaRoutes: asFunction(EncuestaRoutes).singleton()
    })
    .register({
        ModuloRepository: asClass(ModuloRepository).singleton(),
        ParteRepository: asClass(ParteRepository).singleton(),
        ObjetoRepository: asClass(ObjetoRepository).singleton(),
        SptestRepository: asClass(SptestRepository).singleton(),
        VersionRepository: asClass(VersionRepository).singleton(),
        ContactoRepository: asClass(ContactoRepository).singleton(),
        HabilitacionRepository: asClass(HabilitacionRepository).singleton(),
        DocumentoRepository: asClass(DocumentoRepository).singleton(),
        NovedadRepository: asClass(NovedadRepository).singleton(),
        UsuarioRepository: asClass(UsuarioRepository).singleton(),
        PartePublicoRepository: asClass(PartePublicoRepository).singleton(),
        ImpactoRepository: asClass(ImpactoRepository).singleton(),
        OcurrenciaRepository: asClass(OcurrenciaRepository).singleton(),
        VotacionRepository: asClass(VotacionRepository).singleton(),
        PerfilRepository: asClass(PerfilRepository).singleton(),
        AsignadoRepository: asClass(AsignadoRepository).singleton(),
        ParametroRepository: asClass(ParametroRepository).singleton(),
        LogRepository: asClass(LogRepository).singleton(),
        CursoRepository: asClass(CursoRepository).singleton(),
        InscriptoRepository: asClass(InscriptoRepository).singleton(),
        EncuestaRepository: asClass(EncuestaRepository).singleton()
    })
    .register({
        ModuloService: asClass(ModuloService).singleton(),
        ParteService: asClass(ParteService).singleton(),
        ObjetoService: asClass(ObjetoService).singleton(),
        SptestService: asClass(SptestService).singleton(),
        VersionService: asClass(VersionService).singleton(),
        ContactoService: asClass(ContactoService).singleton(),
        HabilitacionService: asClass(HabilitacionService).singleton(),
        DocumentoService: asClass(DocumentoService).singleton(),
        NovedadService: asClass(NovedadService).singleton(),
        UsuarioService: asClass(UsuarioService).singleton(),
        PartePublicoService: asClass(PartePublicoService).singleton(),
        ImpactoService: asClass(ImpactoService).singleton(),
        OcurrenciaService: asClass(OcurrenciaService).singleton(),
        VotacionService: asClass(VotacionService).singleton(),
        SecurityService: asClass(SecurityService).singleton(),
        ParametroService: asClass(ParametroService).singleton(),
        LogService: asClass(LogService).singleton(),
        CursoService: asClass(CursoService).singleton(),
        EncuestaService: asClass(EncuestaService).singleton()
    })
    .register({
        Profile: asClass(Profile).singleton()
    })
    .register({
        config: asValue(config)
    })
    .register({
        db: asValue(db),
        dbSM: asValue(dbSM)
    })
    .register({
        mongodb: asValue(mongodb)
    });

module.exports = container;