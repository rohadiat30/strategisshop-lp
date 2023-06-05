import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

import {
  cctv,
  cctv1,
  finger,
  orbit,
  instagram,
  whatsapp,
  facebook,
  tokopedia,
  whatsapplogo,
  shopee,
} from '../assets'

export const navLinks = [
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'method',
    title: 'Method',
  },
  {
    id: 'order',
    title: 'Order',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

export const category = [
  {
    id: 'cctv',
    title: 'CCTV',
    img: cctv1,
  },
  {
    id: 'finger',
    title: 'Finger Print',
    img: finger,
  },
  {
    id: 'ipcam',
    title: 'IPcam 4MP',
    img: cctv,
  },
  {
    id: 'orbit',
    title: 'Orbit',
    img: orbit,
  },
]

export const method = [
  {
    id: '1',
    title: 'Discussion',
  },
  {
    id: '2',
    title: 'Installation',
  },
  {
    id: '3',
    title: 'Maintenance',
  },
]
export const footerLinks = [
  {
    title: 'Company',
    links: [
      {
        name: 'About Us',
        link: '#',
      },
      {
        name: 'Our Product',
        link: '#',
      },
      {
        name: 'Our Method',
        link: '#',
      },
    ],
  },
]
export const footerLinks2 = [
  {
    title: 'Contact',
    links: [
      {
        name:
          'Jalan Bojong koneng rt 5 rw 12 no 32, kecamatan cibeunying kidul kelurahan sukapada',
        icon: <FaMapMarkerAlt className="h-[25px] mr-4" />,
        link:
          'https://www.google.com/maps/search/Jalan+Bojong+koneng+rt+5+rw+12+no+32,+kecamatan+cibeunying+kidul+kelurahan+sukapada/@-6.893956,107.6391881,17z',
      },
      {
        name: 'Cctv@strategis.co.id',
        icon: <GrMail className="h-[25px] mr-4" />,
        link:
          'https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=cctv@strategis.co.id',
      },
      {
        name: '+62 811-2001-1647',
        icon: <FaPhoneAlt className="h-[20px] mr-4" />,
        link: 'https://api.whatsapp.com/send?phone=6281120011647',
      },
    ],
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/strategisshopbdg/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://m.facebook.com/profile.php?id=100082613958069',
  },
  {
    id: 'social-media-3',
    icon: whatsapp,
    link: 'https://api.whatsapp.com/send?phone=6281120011647',
  },
]
export const marketPlaces = [
  {
    imgUrl: tokopedia,
    title: 'Order Via Tokopedia',
    subtitle: 'Get more discount and free ongkir',
    link: 'https://tokopedia.link/ug4M9t4pnAb ',
  },
  {
    imgUrl: shopee,
    title: 'Order via Shopee',
    subtitle: 'Get more discount and free ongkir',
    link: 'https://shp.ee/xtav8fk',
  },
  {
    imgUrl: whatsapplogo,
    title: 'Order via whatsApp',
    subtitle:
      'You can get consultations at the same time and there are installation services too',
    link: 'https://api.whatsapp.com/send?phone=6281120011647',
  },
]
