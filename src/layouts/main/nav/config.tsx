import { PATH_PAGE } from '../../../routes/paths';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: 'eva:home-fill',
    path: '/',
    color: '#fff', // White
  },
  {
    title: 'About Us',
    icon: 'ic:round-grain',
    path: PATH_PAGE.about,
    color: '#fff',
  },
  {
    title: 'Our Services',
    icon: 'eva:book-open-fill',
    path: PATH_PAGE.services,
    color: '#fff',
  },
  {
    title: 'Our Partners',
    icon: 'eva:book-open-fill',
    path: PATH_PAGE.ourpartners,
    color: '#fff',
  },
  {
    title: 'Contact Us',
    icon: 'eva:book-open-fill',
    path: PATH_PAGE.contact,
    color: '#fff',
  },
];

export default navConfig;
