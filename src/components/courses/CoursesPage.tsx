import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import Course from './Course';
import CoursesFilter from './CoursesFilter';
import {loadCourses, loadCourse} from 'actions/courseActions';
import {loadDepartments} from 'actions/departmentActions';
import {Container, Button} from '../bootstrap';
import {Heading} from 'styles/shared';
import {getDepartmentsOptions} from 'helpers/entityHelper';
import CourseDetails from './CourseDetails';

function CoursesPage() {
  const courses: Array<Course> = useSelector((state: AppState) => state.course.list);
  const currentCourse: Course = useSelector((state: AppState) => state.course.current);
  const departments: Array<Department> = useSelector((state: AppState) => state.department.list);
  const dispatch = useDispatch();

  const [departmentId, setDepartmentId] = useState('');
  const [detailsModal, toggleDetailsModal] = useState(false);

  useEffect(() => {
    dispatch(loadCourses(null));
    dispatch(loadDepartments());
  }, []);

  function filterCourses() {
    dispatch(loadCourses(departmentId));
  }

  function showDetailsModal(courseId) {
    dispatch(loadCourse(courseId));
    toggleDetailsModal(!detailsModal);
  }

  function closeDetailsModal() {
    toggleDetailsModal(!detailsModal);
  }

  function render() {
    return (
      <Container>
        <Heading>Courses</Heading>
        <CoursesFilter
          departmentId={departmentId}
          options={getDepartmentsOptions(departments)}
          onChange={(e) => setDepartmentId(e.target.value)}
          onClick={filterCourses}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Credits</th>
              <th>Department</th>
              <th>
                <Button variant="link">Create New</Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <Course key={course.id} course={course} onDetailsClick={() => showDetailsModal(course.id)} />
            ))}
          </tbody>
        </table>

        <CourseDetails visible={detailsModal} close={closeDetailsModal} currentCourse={currentCourse} />
      </Container>
    );
  }
  return render();
}
export default CoursesPage;
