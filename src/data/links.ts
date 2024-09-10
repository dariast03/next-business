/* 

Inicio
 
¿Qué es la rueda?
 
¿Cómo participar?
 
Contáctenos
 
Sala de prensa
 */
import { MenuItemProps } from "@/components/layout/menu/menu-item";

export const links: MenuItemProps[] = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "¿Qué es la rueda?",
    url: "/que-es-la-rueda",
    subitems: [
      {
        title: "¿Quienes participan?",
        url: "/que-es-la-rueda#quienes-participan",
      },
      {
        title: "Servicios de la rueda",
        url: "/que-es-la-rueda#servicios-de-la-rueda",
      },
    ],
  },
  {
    title: "¿Cómo participar?",
    url: "/como-participar",
    subitems: [
      {
        title: "Metodologia para reuniones",
        url: "/como-participar",
      },
      /*  {
        title: "Misiones Empresariales",
        url: "/como-participar",
      },
      {
        title: "Preguntas Frecuentes",
        url: "/como-participar",
      }, */
    ],
  },
  {
    title: "Contáctenos",
    url: "/contacto",
  },
  {
    title: "Galeria de Fotos",
    url: "/galeria-de-fotos",
  },
];
