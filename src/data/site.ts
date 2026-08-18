// ============================================================
// Datos centrales del sitio — Centro de Salud C.E.O (mockup)
// ============================================================

export const site = {
  name: "Centro de Salud C.E.O",
  shortName: "CEO",
  tagline: "Para tu mejor sonrisa",
  description:
    "Clínica odontológica y de salud integral en San Luis, Argentina. 16 especialistas, más de 10 años de experiencia y atención por obras sociales o particular.",
  url: "https://centrodesaludceo.com",
  phoneDisplay: "+54 9 266 470 95 35",
  phoneTel: "+542664709535",
  whatsappMessage:
    "Hola buenos días, quisiera un turno para …",
  whatsappUrl:
    "https://api.whatsapp.com/send?phone=542664709535&text=Hola%20buenos%20d%C3%ADas%2C%20quisiera%20un%20turno%20para%20%E2%80%A6",
  email: "info@centrodesaludceo.com",
  address: "Ayacucho 1357",
  city: "San Luis Capital, San Luis, Argentina",
  hours: "Lunes a viernes · 08:00 a 20:00 hs",
  instagram: "https://www.instagram.com/ceo.centrodesalud/",
  instagramHandle: "@ceo.centrodesalud",
  mapsEmbed:
    "https://www.google.com/maps?q=Ayacucho+1357,+San+Luis,+Argentina&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Ayacucho+1357+San+Luis+Argentina",
  years: "+10",
};

export const stats = [
  { value: "+10", label: "Años cuidando sonrisas" },
  { value: "16", label: "Especialistas en un solo lugar" },
  { value: "+10.000", label: "Pacientes atendidos" },
  { value: "6", label: "Obras sociales y prepagas" },
];

export const obrasSociales = [
  { name: "DOSEP", note: "Obra Social del Personal del Estado Provincial" },
  { name: "Swiss Medical", note: "Medicina Privada" },
  { name: "Galeno", note: "Líderes en Medicina Privada" },
  { name: "SanCor Salud", note: "Grupo de Medicina Privada" },
  { name: "Omint", note: "Cuida tu salud" },
  { name: "Prevención Salud", note: "Obra Social" },
];

export type Service = {
  icon: string;
  title: string;
  description: string;
  tag?: string;
};

export const services: Service[] = [
  {
    icon: "implant",
    title: "Implantes dentales",
    description:
      "Reemplazamos piezas perdidas con raíces de titanio: recuperá la confianza al hablar, comer y sonreír con una solución duradera y estética.",
    tag: "Más consultado",
  },
  {
    icon: "braces",
    title: "Ortodoncia y ortopedia",
    description:
      "Alineamos tus dientes y maxilares con brackets, alineadores o aparatología funcional, en adultos y niños.",
  },
  {
    icon: "sparkle",
    title: "Cosmética dental",
    description:
      "Blanqueamiento, carillas y remodelación dental para una sonrisa armónica, más blanca y de aspecto natural.",
    tag: "Estética",
  },
  {
    icon: "root",
    title: "Endodoncia (conducto)",
    description:
      "Salvamos dientes que de otro modo se perderían, eliminando el dolor y la infección de forma rápida y sin molestias.",
  },
  {
    icon: "kid",
    title: "Odontopediatría",
    description:
      "Cuidamos los primeros dientes de los más chicos con un trato cálido y sin miedos, desde la primera visita.",
  },
  {
    icon: "surgery",
    title: "Cirugía bucomaxilofacial",
    description:
      "Extracciones, cirugía ortognática e implantes complejos realizados por especialistas certificados.",
  },
  {
    icon: "shield",
    title: "Revisión y prevención",
    description:
      "Exámenes completos para detectar caries, enfermedad de encías y otros problemas a tiempo. Tu salud bucal empieza con una buena evaluación.",
  },
  {
    icon: "prosthesis",
    title: "Prótesis y rehabilitación",
    description:
      "Rehabilitación con prótesis fija y removible, con odontología digital para resultados precisos y cómodos.",
  },
];

// Especialidades que el equipo cubre pero la web actual no muestra
export const masEspecialidades = [
  "Blanqueamiento dental",
  "Carillas y estética",
  "Odontología digital",
  "Kinesiología maxilofacial",
  "Fonoaudiología (voz, lenguaje, deglución)",
  "Nutrición y alimentación saludable",
  "Pediatría",
  "Dermatología y tricología",
  "Medicina estética",
  "Psicoterapia",
  "Diabetes y obesidad",
  "Laboratorio bioquímico",
];

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  area: string;
  photo?: string;
};

export const team: TeamMember[] = [
  { name: "Dra. Daniela Bartolucci", role: "Odontóloga", specialty: "Ortodoncia y ortopedia de los maxilares", area: "Odontología", photo: "/personal/Dra.-Daniela-Bartolucci.png" },
  { name: "Dra. Ana Laura Feliciani", role: "Odontóloga", specialty: "Implantes, estética dental, odontología digital, prótesis", area: "Odontología", photo: "/personal/Dra-Ana-Felicciani.png" },
  { name: "Dr. Ramiro Martínez", role: "Odontólogo", specialty: "Cirugía bucomaxilofacial, ortognática e implantes", area: "Odontología", photo: "/personal/Dr-Ramiro-Martinez.png" },
  { name: "Dr. Milton Saavedra Sierra", role: "Odontólogo", specialty: "Endodoncia", area: "Odontología", photo: "/personal/Dr-Milton-Saavedra-Sierra.png" },
  { name: "Dra. María Paula Britos", role: "Odontóloga", specialty: "Ortodoncia, odontopediatría y estética dental", area: "Odontología", photo: "/personal/Dra-Maria-Paula-Britos.png" },
  { name: "Dr. Agustín Ejarque", role: "Odontólogo", specialty: "Implantes, estética, prótesis y odontología digital", area: "Odontología", photo: "/personal/Dra-Agustin-Ejarque.png" },
  { name: "Dra. Luciana Picco", role: "Odontóloga", specialty: "Ortodoncia, estética, blanqueamientos, endodoncia, cirugías y prótesis", area: "Odontología", photo: "/personal/Dra-Luciana-Picco.png" },
  { name: "Dr. Mariano Forlino", role: "Médico", specialty: "Diabetes y obesidad", area: "Medicina", photo: "/personal/Dr-Mariano-Forlino.png" },
  { name: "Dra. Andrea Aquila", role: "Médica", specialty: "Pediatría", area: "Medicina", photo: "/personal/Dra-Andrea-Aquila.png" },
  { name: "Dra. Leticia Scarcelli", role: "Médica", specialty: "Dermatología, tricología y medicina estética", area: "Medicina", photo: "/personal/Dra-Alejandra-Scarcelli.png" },
  { name: "Lic. María Laura López", role: "Bioquímica", specialty: "Laboratorio López-Gaute", area: "Salud", photo: "/personal/Laboratorio-Lopez-Gaute.png" },
  { name: "Lic. Jimena Gaute", role: "Bioquímica", specialty: "Laboratorio López-Gaute", area: "Salud", photo: "/personal/Laboratorio-Lopez-Gaute.png" },
  { name: "Lic. Jessica Malinovsky", role: "Psicoterapeuta", specialty: "Psicoterapia", area: "Salud", photo: "/personal/Lic.-Jessica-Malinovsky.png" },
  { name: "Lic. Florencia Cobarruvia", role: "Kinesióloga", specialty: "Kinesiología maxilofacial", area: "Salud", photo: "/personal/Lic-Florencia-Cobaruvia.png" },
  { name: "Lic. Milena Pérez", role: "Nutricionista", specialty: "Alimentación real, antiinflamatoria y descenso de peso", area: "Salud", photo: "/personal/Lic-Milena-Perez.png" },
  { name: "Fga. María Alejandra Baggini", role: "Fonoaudióloga", specialty: "Voz, lenguaje y deglución", area: "Salud", photo: "/personal/Fga.-Maria-Alejandra-Baggini.png" },
];

export const testimonios = [
  {
    quote:
      "Me atendieron la urgencia el mismo día y quedé sin dolor. El trato fue excelente de principio a fin.",
    name: "Paciente · Ortodoncia",
    area: "Odontología",
  },
  {
    quote:
      "Mis hijos van sin miedo desde chiquitos. Que los atiendan con tanta paciencia no tiene precio.",
    name: "Paciente · Odontopediatría",
    area: "Odontología",
  },
  {
    quote:
      "Me hice dos implantes y el resultado es increíble. La atención por obra social fue simple y sin vueltas.",
    name: "Paciente · Implantes",
    area: "Odontología",
  },
  {
    quote:
      "Vengo por nutrición y kinesiología maxilofacial. Es raro encontrar tantas especialidades en un solo lugar.",
    name: "Paciente · Salud integral",
    area: "Salud",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
  image: string;
};

export const posts: Post[] = [
  {
    slug: "sonrisa-saludable",
    title: "Consigue una sonrisa saludable: hábitos que sí funcionan",
    date: "2026-07-25",
    category: "Higiene dental",
    excerpt:
      "Cepillarse parece sencillo, pero hacerlo bien marca la diferencia entre una boca sana y problemas que se podrían evitar. Te contamos cómo.",
    image: "/img-blog-consigue-una-sonrisa.webp",
    body: [
      "Mantener una sonrisa saludable no depende de la suerte: es el resultado de hábitos simples aplicados todos los días. La buena noticia es que nunca es tarde para empezar, y los resultados se notan en pocas semanas.",
      "La técnica importa más de lo que creés. Colocá el cepillo en un ángulo de 45° sobre la línea de las encías y hacé movimientos cortos y suaves. No te olvides de la lengua y el paladar: allí se acumulan la mayoría de las bacterias que causan mal aliento.",
      "Cepillate al menos dos veces por día, durante dos minutos. Un truco simple: usá un cronómetro o escuchá una canción que dure ese tiempo. Y no subestimes el hilo dental: limpia el 35% de la superficie del diente que el cepillo no alcanza.",
      "Elegí herramientas correctas: un cepillo de cerdas suaves y pasta con flúor. Cambiá el cepillo cada tres meses, o antes si las cerdas se desgastan. Y visitá al odontólogo al menos una vez al año: la prevención siempre sale más barata que el tratamiento.",
    ],
  },
  {
    slug: "primeros-dientes-ninos",
    title: "Los primeros dientes de los niños también son importantes",
    date: "2026-07-25",
    category: "Odontopediatría",
    excerpt:
      "Los dientes de leche se caen solos, pero cuidarlos desde el primer diente define la salud bucal de toda la vida. Te explicamos por qué y cómo.",
    image: "/img-blog-los-primeros-dientes.webp",
    body: [
      "\"Si se caen solos, ¿para qué cuidarlos?\" Es la pregunta más común en el consultorio y la respuesta es contundente: los dientes de leche son los guías de los definitivos. Si se pierden antes de tiempo por caries, los dientes permanentes pueden salir torcidos o apiñados.",
      "Además, la caries en la infancia duele, afecta la alimentación, el sueño y el rendimiento escolar. Un niño con dolor no come bien, no duerme bien y rinde peor. Prevenirla es más fácil de lo que parece.",
      "Empezá la higiene desde el primer diente: una gasa húmeda al principio y un cepillo de cerdas suaves cuando aparezcan varios. Sin pasta hasta los 2 años, y a partir de ahí una cantidad del tamaño de un grano de arroz.",
      "La primera visita al odontólogo recomendamos hacerla alrededor del primer año, o cuando erupcione el primer diente. Así el niño conoce el consultorio sin miedo y nosotros detectamos cualquier problema a tiempo. Traerlos temprano es el mejor regalo para su sonrisa.",
    ],
  },
  {
    slug: "alimentacion-y-salud-bucal",
    title: "La conexión entre la alimentación y la salud bucal",
    date: "2026-07-25",
    category: "Nutrición",
    excerpt:
      "Lo que comemos no solo afecta el peso: también define la salud de nuestros dientes y encías. Estos son los alimentos que te conviene sumar.",
    image: "/img-blog-comida-y-salud.webp",
    body: [
      "Cada vez que comemos algo con azúcar, las bacterias de la boca producen ácido que ataca el esmalte durante unos 20 minutos. Por eso no importa solo cuánto azúcar comés, sino con qué frecuencia: picar dulces todo el día es peor que un postre después de las comidas.",
      "Hay alimentos que son aliados de tu boca. El queso ayuda a neutralizar los ácidos y aporta calcio. Las manzanas y las zanahorias crudas estimulan la saliva, el limpiador natural de la boca. El té verde tiene compuestos que frenan el crecimiento de bacterias.",
      "El agua es la gran olvidada: tomar agua después de cada comida lava los restos y diluye los ácidos. En nuestra provincia, además, la fluoración del agua ayuda a fortalecer el esmalte: otra razón para elegirla sobre las bebidas azucaradas.",
      "En el Centro de Salud C.E.O trabajamos en equipo: nuestra nutricionista y nuestros odontólogos pueden ayudarte a armar un plan que cuide tu peso y tu sonrisa al mismo tiempo. Consultanos, la salud bucal empieza por el plato.",
    ],
  },
];
