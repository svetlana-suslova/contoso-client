import HomePage from './components/HomePage';

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
];
