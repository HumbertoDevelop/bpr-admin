import { v4 as uuid } from "uuid";

export const DashboardMenu = [
  {
    id: uuid(),
    title: "Pangina Princial",
    icon: "home",
    link: "/",
  },
  {
    id: uuid(),
    title: "Jugadores",
    icon: "user-plus",
    link: "/jugadores",
  },
  {
    id: uuid(),
    title: "Organizadores",
    icon: "user-plus",
    link: "/organizadores",
  },
  {
    id: uuid(),
    title: "Publicidad",
    icon: "user-plus",
    link: "/configuracion",
  },
  {
    id: uuid(),
    title: "Patrocinantes",
    icon: "user-plus",
    link: "/patrocinantes",
  },
  {
    id: uuid(),
    title: "Club",
    icon: "user-plus",
    link: "/club",
  },
  {
    id: uuid(),
    title: "Torneos",
    icon: "user-plus",
    children: [
      { id: uuid(), link: "/torneos", name: "Menu de torneos" },
      { id: uuid(), link: "/inscripciones", name: "Inscripciones" },
      { id: uuid(), link: "/reservas", name: "Reservas" },
      { id: uuid(), link: "/categorias", name: "Categorias" },
    ],
  },
  {
    id: uuid(),
    title: "Partidos",
    icon: "user-plus",
    link: "/partidos",
  },
  {
    id: uuid(),
    title: "Rangos",
    icon: "user-plus",
    link: "/rangos",
  },
  {
    id: uuid(),
    title: "Formas de pago",
    icon: "user-plus",
    link: "/formas-pago",
  },
  // {
  // 	id: uuid(),
  // 	title: 'Usuarios',
  // 	icon: 'user',
  // 	children: [
  // 				{ id: uuid(), link: '/clientes', name: 'Clientes' },
  // 				{ id: uuid(), link: '/choferes', name: 'Choferes'},
  // 				{ id: uuid(), link: '/administradores', name: 'Administradores' },
  // 			]
  // },
  // {
  // 	id: uuid(),
  // 	title: 'Transportes',
  // 	icon: 'truck',
  // 	link: '/transportes'
  // },
  // {
  // 	id: uuid(),
  // 	title: 'Lineas',
  // 	icon: 'book',
  // 	link: '/lineas'
  // },
  // {
  // 	id: uuid(),
  // 	title: 'Rutas',
  // 	icon: 'arrow-right-circle',
  // 	link: '/rutas'
  // },
  // {
  // 	id: uuid(),
  // 	title: 'Paradas',
  // 	icon: 'octagon',
  // 	link: '/paradas'
  // },
];

export default DashboardMenu;
