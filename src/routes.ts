import HomePage from 'components/HomePage';
import AboutPage from 'components/AboutPage';
import StudentsPage from 'components/students/StudentsPage';

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    pageProps: {
      pageId: 'home',
      title: 'Home',
    },
  },
  {
    path: '/about',
    component: AboutPage,
    pageProps: {
      pageId: 'about',
      title: 'About',
    },
  },
  {
    path: '/students',
    component: StudentsPage,
    pageProps: {
      pageId: 'students',
      title: 'Students',
    },
  },
];
