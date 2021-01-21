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
    ClienteRepository,
    HabilitacionRepository,
    NovedadRepository,
    DocumentoRepository,
    OcurrenciaRepository,
    ImpactoRepository,
    VotacionRepository,
    CursoRepository,
    EncuestaRepository,
    UsuarioRepository,
    UsuariosRepository,
    MenuRepository,
    PerfilRepository,
    ObjetoPerfilRepository,
    PerfilAsignadoRepository
} = require("../data-access/repositories");

// mongo repositories
const {
    ParametroRepository,
    LogRepository,
    InscriptoRepository,
    EmailEditorRepository
} = require("../data-mongo-access/repositories");

// business
const {
    Profile,
    Job,
    Login,
    Menu
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
    ClienteService,
    HabilitacionService,
    NovedadService,
    DocumentoService,
    OcurrenciaService,
    ImpactoService,
    VotacionService,
    ParametroService,
    LogService,
    CursoService,
    EncuestaService,
    EmailEditorService,
    LoginService,
    MenuService,
    ProfileService
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
    ClienteController,
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
    EncuestaController,
    LoginNewController,
    EmailEditorController,
    JobController,
    MenuController
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
const ClienteRoutes = require("./routes/cliente.routes");
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
const LoginNewRoutes = require("../api/routes/login-new.routes");
const EmailEditorRoutes = require("../api/routes/emailEditor.routes");
const JobRoutes = require("../api/routes/job.routes");
const MenuRoutes = require("../api/routes/menu.routes");

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
        ClienteController: asClass(ClienteController).singleton(),
        ClienteRoutes: asClass(ClienteRoutes).singleton(),
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
        EncuestaRoutes: asFunction(EncuestaRoutes).singleton(),
        LoginNewController: asClass(LoginNewController).singleton(),
        LoginNewRoutes: asFunction(LoginNewRoutes).singleton(),
        EmailEditorController: asClass(EmailEditorController).singleton(),
        EmailEditorRoutes: asFunction(EmailEditorRoutes).singleton(),
        JobRoutes: asFunction(JobRoutes).singleton(),
        JobController: asClass(JobController).singleton(),
        MenuRoutes: asFunction(MenuRoutes).singleton(),
        MenuController: asClass(MenuController).singleton()

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
        ClienteRepository: asClass(ClienteRepository).singleton(),
        PartePublicoRepository: asClass(PartePublicoRepository).singleton(),
        ImpactoRepository: asClass(ImpactoRepository).singleton(),
        OcurrenciaRepository: asClass(OcurrenciaRepository).singleton(),
        VotacionRepository: asClass(VotacionRepository).singleton(),
        ParametroRepository: asClass(ParametroRepository).singleton(),
        LogRepository: asClass(LogRepository).singleton(),
        CursoRepository: asClass(CursoRepository).singleton(),
        InscriptoRepository: asClass(InscriptoRepository).singleton(),
        EncuestaRepository: asClass(EncuestaRepository).singleton(),
        EmailEditorRepository: asClass(EmailEditorRepository).singleton(),
        UsuarioRepository: asClass(UsuarioRepository).singleton(),
        UsuariosRepository: asClass(UsuariosRepository).singleton(),
        MenuRepository: asClass(MenuRepository).singleton(),
        PerfilRepository: asClass(PerfilRepository).singleton(),
        ObjetoPerfilRepository: asClass(ObjetoPerfilRepository).singleton(),
        PerfilAsignadoRepository: asClass(PerfilAsignadoRepository).singleton()

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
        ClienteService: asClass(ClienteService).singleton(),
        PartePublicoService: asClass(PartePublicoService).singleton(),
        ImpactoService: asClass(ImpactoService).singleton(),
        OcurrenciaService: asClass(OcurrenciaService).singleton(),
        VotacionService: asClass(VotacionService).singleton(),
        ParametroService: asClass(ParametroService).singleton(),
        LogService: asClass(LogService).singleton(),
        CursoService: asClass(CursoService).singleton(),
        EncuestaService: asClass(EncuestaService).singleton(),
        EmailEditorService: asClass(EmailEditorService).singleton(),
        LoginService: asClass(LoginService).singleton(),
        MenuService: asClass(MenuService).singleton(),
        ProfileService: asClass(ProfileService).singleton()
    })
    .register({
        Profile: asClass(Profile).singleton(),
        Job: asClass(Job).singleton(),
        Login: asClass(Login).singleton(),
        Menu: asClass(Menu).singleton()
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