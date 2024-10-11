import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DocumentService, myDocument } from '../document.service';
import { FilesService } from 'src/app/services/files/files.service';

export type OptionInputSelect = {
  label: string;
  value: any;
  icon?: string
}

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css']
})
export class TracingComponent implements OnInit {

  form!: FormGroup;

  indexPosition = 1;

  stepsArray: string[] = ['', '', '', '', '', ''];
  stepLabels: string[] = ['Documento', 'Fecha','Sin procesar', 'Descargando archivos', 'Normalizando', 'Generando imagen', 'Procesando', 'Finalizado'];

getStepLabel(index: number): string {
  return this.stepLabels[index] || '';
}

  documents: myDocument[] = [];
  values: OptionInputSelect[] = [
    { label: 'Abrego', value: 'abrego' },
    { label: 'Acacias', value: 'acacias' },
    { label: 'Agua de Dios', value: 'aguaDios' },
    { label: 'Aguachica', value: 'aguachica' },
    { label: 'Aguadas Caldas', value: 'aguadasCaldas' },
    { label: 'Aguazul Casanare', value: 'aguazulCasanare' },
    { label: 'Aipe', value: 'aipe' },
    { label: 'Albania', value: 'albania' },
    { label: 'Amaga', value: 'amaga' },
    { label: 'Ambalema', value: 'ambalema' },
    { label: 'Anapoima', value: 'anapoima' },
    { label: 'Andes', value: 'andes' },
    { label: 'Anolaima', value: 'anolaima' },
    { label: 'Anserma Caldas', value: 'ansermaCaldas' },
    { label: 'Anserma nuevo', value: 'ansermaNuevo' },
    { label: 'Apartado', value: 'apartado' },
    { label: 'Aranzazu', value: 'aranzazu' },
    { label: 'Arauca', value: 'arauca' },
    { label: 'Ariguani El dificil', value: 'ariguaniElDificil' },
    { label: 'Arjona', value: 'arjona' },
    { label: 'Armenia', value: 'armenia' },
    { label: 'Armero Guayabal', value: 'armeroGuayabal' },
    { label: 'Arroyohondo', value: 'arroyohondo' },
    { label: 'Ataco Tolima', value: 'atacoTolima' },
    { label: 'Ayapel', value: 'ayapel' },
    { label: 'Baranoa', value: 'baranoa' },
    { label: 'Barbosa Antioquia', value: 'barbosaAntioquia' },
    { label: 'Barbosa Santander', value: 'barbosaSantander' },
    { label: 'Barrancabermeja', value: 'barrancabermeja' },
    { label: 'Barrancas Guajira', value: 'barrancasGuajira' },
    { label: 'Barranquilla', value: 'barranquilla' },
    { label: 'Becerril', value: 'becerril' },
    { label: 'Belen Boyaca', value: 'belenBoyaca' },
    { label: 'Belen de Umbria', value: 'belenDeUmbria' },
    { label: 'Bello', value: 'bello' },
    { label: 'Betania Antioquia', value: 'betaniaAntioquia' },
    { label: 'Bogota', value: 'bogota' },
    { label: 'Bojaca', value: 'bojaca' },
    { label: 'Bosconia', value: 'bosconia' },
    { label: 'Bucaramanga', value: 'bucaramanga' },
    { label: 'Buenaventura', value: 'buenaventura' },
    { label: 'Buenavista', value: 'buenavista' },
    { label: 'Buga Guadalajara', value: 'bugaGuadalajara' },
    { label: 'Bugalagrande', value: 'bugalagrande' },
    { label: 'Cachipay Cundinamarca', value: 'cachipayCundinamarca' },
    { label: 'Caicedo Antioquia', value: 'caicedoAntioquia' },
    { label: 'Caicedonia', value: 'caicedonia' },
    { label: 'Cajamarca', value: 'cajamarca' },
    { label: 'Cajica', value: 'cajica' },
    { label: 'Calarca', value: 'calarqa' },
    { label: 'Caldas', value: 'caldas' },
    { label: 'Cali', value: 'cali' },
    { label: 'Campoalegre', value: 'campoalegre' },
    { label: 'Candelaria Valle', value: 'candelariaValle' },
    { label: 'Cañas Gordas', value: 'canasGordas' },
    { label: 'Caparrapi', value: 'caparrapi' },
    { label: 'Caqueza Cundinamarca', value: 'caquezaCundinamarca' },
    { label: 'Carepa', value: 'carepa' },
    { label: 'Carmen de apicala', value: 'carmenDeApicala' },
    { label: 'Cartagena', value: 'cartagena' },
    { label: 'Cartago', value: 'cartago' },
    { label: 'Caucasia', value: 'caucasia' },
    { label: 'Cepita Santander', value: 'cepitaSantander' },
    { label: 'Cerete', value: 'cerete' },
    { label: 'Chaparral', value: 'chaparral' },
    { label: 'Charala', value: 'charala' },
    { label: 'Chia', value: 'chia' },
    { label: 'Chigorodo', value: 'chigorodo' },
    { label: 'Chimichagua', value: 'chimichagua' },
    { label: 'Chinacota', value: 'chinacota' },
    { label: 'Chinchina', value: 'chinchina' },
    { label: 'Chinú', value: 'chinu' },
    { label: 'Chiquinquira', value: 'chiquinquira' },
    { label: 'Choachi', value: 'choachi' },
    { label: 'Chocontá', value: 'choconta' },
    { label: 'Cienaga', value: 'cienaga' },
    { label: 'Cienaga de Oro', value: 'cienagaDeOro' },
    { label: 'Circasia', value: 'circasia' },
    { label: 'Cisneros Antioquia', value: 'cisnerosAntioquia' },
    { label: 'Ciudad Bolivar', value: 'ciudadBolivar' },
    { label: 'Coello', value: 'coello' },
    { label: 'Cogua Cundinamarca', value: 'coguaCundinamarca' },
    { label: 'Concordia', value: 'concordia' },
    { label: 'Copacabana', value: 'copacabana' },
    { label: 'Corozal', value: 'corozal' },
    { label: 'Cota', value: 'cota' },
    { label: 'Coveñas', value: 'covenas' },
    { label: 'Cucuta', value: 'cucuta' },
    { label: 'Cumaral', value: 'cumaral' },
    { label: 'Dabeiba', value: 'dabeiba' },
    { label: 'Dagua -Valle', value: 'daguaValle' },
    { label: 'Dibulla', value: 'dibulla' },
    { label: 'Don Matias', value: 'donMatias' },
    { label: 'Doncello', value: 'doncello' },
    { label: 'Dosquebradas', value: 'dosquebradas' },
    { label: 'Duitama', value: 'duitama' },
    { label: 'El Bagre', value: 'elBagre' },
    { label: 'El Banco Magdalena', value: 'elBancoMagdalena' },
    { label: 'El calvario', value: 'elCalvario' },
    { label: 'El Carmen de Viboral', value: 'elCarmenDeViboral' },
    { label: 'El carmen Norte de Santander', value: 'elCarmenNorteDeSantander' },
    { label: 'El Castillo Meta', value: 'elCastilloMeta' },
    { label: 'El Cerrito', value: 'elCerrito' },
    { label: 'El Colegio', value: 'elColegio' },
    { label: 'El Guamal Meta', value: 'elGuamalMeta' },
    { label: 'El Guamo', value: 'elGuamo' },
    { label: 'El Peñol Antioquia', value: 'elPenolAntioquia' },
    { label: 'El Peñol Nariño', value: 'elPenolNarino' },
    { label: 'El Peñón Bolivar', value: 'elPenonBolivar' },
    { label: 'El Retiro', value: 'elRetiro' },
    { label: 'El Rosal', value: 'elRosal' },
    { label: 'El Santuario', value: 'elSantuario' },
    { label: 'El Socorro', value: 'elSocorro' },
    { label: 'El Zarzal Valle', value: 'elZarzalValle' },
    { label: 'Entrerrios', value: 'entrerrios' },
    { label: 'Envigado', value: 'envigado' },
    { label: 'Espinal', value: 'espinal' },
    { label: 'Facatativa', value: 'facatativa' },
    { label: 'Flandes Tolima', value: 'flandesTolima' },
    { label: 'Florencia', value: 'florencia' },
    { label: 'Florida Valle', value: 'floridaValle' },
    { label: 'Floridablanca', value: 'floridablanca' },
    { label: 'Fonseca', value: 'fonseca' },
    { label: 'Fontur', value: 'fontur' },
    { label: 'Fredonia', value: 'fredonia' },
    { label: 'Fresno', value: 'fresno' },
    { label: 'Fundacion', value: 'fundacion' },
    { label: 'Funes Nariño', value: 'funesNarino' },
    { label: 'Funza', value: 'funza' },
    { label: 'Fusagasuga', value: 'fusagasuga' },
    { label: 'Gachala', value: 'gachala' },
    { label: 'Gachancipa', value: 'gachancipa' },
    { label: 'Galapa', value: 'galapa' },
    { label: 'Garagoa Boyaca', value: 'garagoaBoyaca' },
    { label: 'Garzon', value: 'garzon' },
    { label: 'Genova - Quindio', value: 'genovaQuindio' },
    { label: 'Gigante', value: 'gigante' },
    { label: 'Girardot', value: 'girardot' },
    { label: 'Girardota', value: 'girardota' },
    { label: 'Giron', value: 'giron' },
    { label: 'Granada', value: 'granada' },
    { label: 'Guachene', value: 'guachene' },
    { label: 'Guacheta', value: 'guacheta' },
    { label: 'Guaduas', value: 'guaduas' },
    { label: 'Guamal Meta', value: 'guamalMeta' },
    { label: 'Guapota Santander', value: 'guapotaSantander' },
    { label: 'Guarne', value: 'guarne' },
    { label: 'Guasca', value: 'guasca' },
    { label: 'Guatape', value: 'guatape' },
    { label: 'Hato Santandder', value: 'hatoSantandder' },
    { label: 'Hatonuevo', value: 'hatonuevo' },
    { label: 'Honda', value: 'honda' },
    { label: 'Ibague', value: 'ibague' },
    { label: 'Imues Nariño', value: 'imuesNarino' },
    { label: 'Ipiales', value: 'ipiales' },
    { label: 'Itagui', value: 'itagui' },
    { label: 'Jamundi', value: 'jamundi' },
    { label: 'Jardin', value: 'jardin' },
    { label: 'Juan de Acosta Atlantico', value: 'juanDeAcostaAtlantico' },
    { label: 'La Calera', value: 'laCalera' },
    { label: 'La Ceja Antioquia', value: 'laCejaAntioquia' },
    { label: 'La Dorada', value: 'laDorada' },
    { label: 'La Estrella', value: 'laEstrella' },
    { label: 'La Loma o El Paso', value: 'laLomaOElPaso' },
    { label: 'La Mesa', value: 'laMesa' },
    { label: 'La Plata', value: 'laPlata' },
    { label: 'La Tebaida', value: 'laTebaida' },
    { label: 'La union Antioquia', value: 'laUnionAntioquia' },
    { label: 'La Union Nariño', value: 'laUnionNarino' },
    { label: 'La union Valle', value: 'laUnionValle' },
    { label: 'La Vega', value: 'laVega' },
    { label: 'La Virginia Risaralda', value: 'laVirginiaRisaralda' },
    { label: 'Lebrija', value: 'lebrija' },
    { label: 'Leticia', value: 'leticia' },
    { label: 'Libano', value: 'libano' },
    { label: 'Lorica', value: 'lorica' },
    { label: 'Los Patios', value: 'losPatios' },
    { label: 'Macheta', value: 'macheta' },
    { label: 'Madrid', value: 'madrid' },
    { label: 'Magangue', value: 'magangue' },
    { label: 'Maicao', value: 'maicao' },
    { label: 'Malaga', value: 'malaga' },
    { label: 'Malambo', value: 'malambo' },
    { label: 'Manaure', value: 'manaure' },
    { label: 'Mani Casanare', value: 'maniCasanare' },
    { label: 'Manizales', value: 'manizales' },
    { label: 'Mapiripan', value: 'mapiripan' },
    { label: 'Marinilla', value: 'marinilla' },
    { label: 'Mariquita', value: 'mariquita' },
    { label: 'Medellin', value: 'medellin' },
    { label: 'Medina', value: 'medina' },
    { label: 'Melgar', value: 'melgar' },
    { label: 'Miraflores Boyaca', value: 'mirafloresBoyaca' },
    { label: 'Miranda', value: 'miranda' },
    { label: 'Mocoa', value: 'mocoa' },
    { label: 'Mompox', value: 'mompox' },
    { label: 'Moniquira', value: 'moniquira' },
    { label: 'Montelibano', value: 'montelibano' },
    { label: 'Montenegro', value: 'montenegro' },
    { label: 'Monteria', value: 'monteria' },
    { label: 'Mosquera', value: 'mosquera' },
    { label: 'Mutata', value: 'mutata' },
    { label: 'Necocli', value: 'necocli' },
    { label: 'Neiva', value: 'neiva' },
    { label: 'Nemocon', value: 'nemocon' },
    { label: 'Ocaña', value: 'ocana' },
    { label: 'Orocue', value: 'orocue' },
    { label: 'Pacho', value: 'pacho' },
    { label: 'Paipa', value: 'paipa' },
    { label: 'Palermo', value: 'palermo' },
    { label: 'Palmira', value: 'palmira' },
    { label: 'Pamplona', value: 'pamplona' },
    { label: 'Paratebueno', value: 'paratebueno' },
    { label: 'Pasto', value: 'pasto' },
    { label: 'Patia El Bordo', value: 'patiaElBordo' },
    { label: 'Paz de Ariporo', value: 'pazDeAriporo' },
    { label: 'Peque Antioquia', value: 'pequeAntioquia' },
    { label: 'Pereira', value: 'pereira' },
    { label: 'Piedecuesta', value: 'piedecuesta' },
    { label: 'Pitalito', value: 'pitalito' },
    { label: 'Pivijay', value: 'pivijay' },
    { label: 'Planeta Rica', value: 'planetaRica' },
    { label: 'Plato', value: 'plato' },
    { label: 'Popayan', value: 'popayan' },
    { label: 'Pradera Valle', value: 'praderaValle' },
    { label: 'Puerto Asis', value: 'puertoAsis' },
    { label: 'Puerto Berrio', value: 'puertoBerrio' },
    { label: 'Puerto Boyaca', value: 'puertoBoyaca' },
    { label: 'Puerto Carreño', value: 'puertoCarreno' },
    { label: 'Puerto Colombia', value: 'puertoColombia' },
    { label: 'Puerto Concordia', value: 'puertoConcordia' },
    { label: 'Puerto Escondido', value: 'puertoEscondido' },
    { label: 'Puerto Gaitan', value: 'puertoGaitan' },
    { label: 'Puerto Nare', value: 'puertoNare' },
    { label: 'Puerto Salgar', value: 'puertoSalgar' },
    { label: 'Quibdo', value: 'quibdo' },
    { label: 'Quibdo', value: 'quibdo' },
    { label: 'Quimbaya', value: 'quimbaya' },
    { label: 'Quipile', value: 'quipile' },
    { label: 'Rionegro', value: 'rionegro' },
    { label: 'Riosucio Caldas', value: 'riosucioCaldas' },
    { label: 'Riosucio Choco', value: 'riosucioChoco' },
    { label: 'Riosucio Quindio', value: 'riosucioQuindio' },
    { label: 'Roldanillo', value: 'roldanillo' },
    { label: 'Salamina', value: 'salamina' },
    { label: 'Salento', value: 'salento' },
    { label: 'San Andres', value: 'sanAndres' },
    { label: 'San Carlos', value: 'sanCarlos' },
    { label: 'San Gil', value: 'sanGil' },
    { label: 'San Juan de Pasto', value: 'sanJuanDePasto' },
    { label: 'San Juan Nepomuceno', value: 'sanJuanNepomuceno' },
    { label: 'San Luis', value: 'sanLuis' },
    { label: 'San Vicente', value: 'sanVicente' },
    { label: 'Santa Barbara', value: 'santaBarbara' },
    { label: 'Santa Cruz', value: 'santaCruz' },
    { label: 'Santa Marta', value: 'santaMarta' },
    { label: 'Santiago de Cali', value: 'santiagoDeCali' },
    { label: 'Santander', value: 'santander' },
    { label: 'Santo Domingo', value: 'santoDomingo' },
    { label: 'Santo Tomas', value: 'santoTomas' },
    { label: 'Sasaima', value: 'sasaima' },
    { label: 'Sibate', value: 'sibate' },
    { label: 'Sierra Nevada', value: 'sierraNevada' },
    { label: 'Sonsón', value: 'sonson' },
    { label: 'Soacha', value: 'soacha' },
    { label: 'Sogamoso', value: 'sogamoso' },
    { label: 'Sonsón', value: 'sonson' },
    { label: 'Soledad', value: 'soledad' },
    { label: 'Tamesis', value: 'tamesis' },
    { label: 'Tao', value: 'tao' },
    { label: 'Tarazá', value: 'taraza' },
    { label: 'Tausa', value: 'tausa' },
    { label: 'Tibú', value: 'tibu' },
    { label: 'Tibú', value: 'tibu' },
    { label: 'Tocancipa', value: 'tocancipa' },
    { label: 'Tolú', value: 'tolu' },
    { label: 'Tuluá', value: 'tulua' },
    { label: 'Turbo', value: 'turbo' },
    { label: 'Tunja', value: 'tunja' },
    { label: 'Tunja', value: 'tunja' },
    { label: 'Turbaco', value: 'turbaco' },
    { label: 'Ubaté', value: 'ubate' },
    { label: 'Ucaramanga', value: 'ucarammanga' },
    { label: 'Ubaté', value: 'ubate' },
    { label: 'Umbita', value: 'umbita' },
    { label: 'Uribia', value: 'uribia' },
    { label: 'Urumita', value: 'urumita' },
    { label: 'Usaquén', value: 'usaquen' },
    { label: 'Valledupar', value: 'valledupar' },
    { label: 'Valle de San Juan', value: 'valleDeSanJuan' },
    { label: 'Valladolid', value: 'valladolid' },
    { label: 'Valparaiso', value: 'valparaiso' },
    { label: 'Venecia', value: 'venecia' },
    { label: 'Villavicencio', value: 'villavicencio' },
    { label: 'Villanueva La Guajira', value: 'villanuevaLaGuajira' },
    { label: 'Viterbo', value: 'viterbo' },
    { label: 'Yumbo', value: 'yumbo' },
    { label: 'Zipaquira', value: 'zipaquira' }
  ];

  currentPage: number = 1;
  showtable = false;


  constructor(private fb: FormBuilder, private documentService: DocumentService, private filesService: FilesService) { }
  

  onPageChange(page: number): void {
    this.documentService.changePage(page);
    this.documentService.getPaginatedDocuments(page).subscribe(data => {
      this.documents = data;
    });
  }
  ngOnInit() {
    this.form = this.fb.group({
      municipio: ['']
    });
    this.documentService.loadDocuments();
    this.documentService.getPaginatedDocuments(this.currentPage).subscribe(data => {
      this.documents = data;
    });

    this.documentService.getCurrentPage().subscribe(page => {
      this.currentPage = page;
    });
  }

  getProcess(municipality: string) {
    this.showtable = false;
    this.filesService.getProcess(municipality).subscribe({
        next: (data) => {
            console.log(data[0].task);
            this.indexPosition = (data[0].task);
            this.showtable = true;
            
        },
        error: () => {
            console.log("error");
        }
    });
}
  showSelectedValue(event: any) {
    this.getProcess(event)
  }





}
