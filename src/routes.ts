import HomePage from 'components/HomePage';
import AboutPage from 'components/AboutPage';
import StudentsPage from 'components/students/StudentsPage';
import CoursesPage from 'components/courses/CoursesPage';
import DepartmentsPage from 'components/departments/DepartmentsPage';
import InstructorsPage from 'components/instructors/InstructorsPage';

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
  {
    path: '/courses',
    component: CoursesPage,
    pageProps: {
      pageId: 'courses',
      title: 'Courses',
    },
  },
  {
    path: '/departments',
    component: DepartmentsPage,
    pageProps: {
      pageId: 'departments',
      title: 'Departments',
    },
  },
  {
    path: '/instructors',
    component: InstructorsPage,
    pageProps: {
      pageId: 'instructors',
      title: 'Instructors',
    },
  },
];
