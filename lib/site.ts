/**
 * Source unique des infos de marque et de contact.
 * Modifier ici se répercute sur la nav, le hero, les CTA, le footer et le SEO.
 */
export const SITE = {
  name: "LCDP",
  nameFull: "La Centrale Des Pneus",
  tagline: "LA CENTRALE DES PNEUS",
  legalName: "LCDP — La Centrale Des Pneus",
  phone: {
    display: "07 63 90 72 78",
    href: "tel:0763907278",
  },
  email: "lacentraldespneus@gmail.com",
  address: {
    line1: "Z.I des Ardilles",
    line2: "Chem. des Ardilles",
    city: "78680 Épône",
  },
  /**
   * Destination du badge « Avis clients Google » du hero.
   * Recherche Google sur « proluxe pare brise » ouvrant le panneau d'avis
   * (paramètres si= / uds=). Contient des jetons de session (sca_esv, sxsrf,
   * ved) susceptibles d'expirer : préférer à terme le lien court Google
   * Business Profile (https://g.page/r/…).
   */
  google: {
    url: "https://www.google.com/search?sca_esv=e1249698417ee68e&rlz=1C1VDKB_frFR1094FR1094&sxsrf=APpeQnvQmBfBvagKAck3H3sZoFtdiuUPOw:1785074272587&q=proluxe+pare+brise&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3G8HqI81KZGtiPuM35dKTi7Alnik7EJutEhNyHkTUEUXWieQl3qT2fdR6Fn0mK_DSKfNLo%3D&uds=AJ5uw1-YMpuyF7uCL7tivJR8dYckSOWFbx3T_rAQDIq6EX-UCmuqdIp13jhaFDt5ZIHSdwD-ONoQhFeG2w75wuofg-Q4ShN27id6ChTXU_cHYgabgbuoD6U&sa=X&ved=2ahUKEwi356jvv_CVAxVQU6QEHc5JAv0Q3PALegQIHBAE",
    rating: "4,9",
    count: 286,
  },
  hours: {
    days: "Lun – Sam",
    range: "10h – 19h",
    closed: "Dimanche fermé",
  },
  since: 2022,
} as const;
