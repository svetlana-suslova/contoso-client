import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import Course from './Course';
import CoursesFilter from './CoursesFilter';
import {loadCourses} from 'actions/courseActions';
import {loadDepartments} from 'actions/departmentActions';
import {Container, Button} from '../bootstrap';
import {Heading} from 'styles/shared';
import {getDepartmentsOptions} from 'helpers/entityHelper';

function CoursesPage() {
  const courses: Array<Course> = useSelector((state: AppState) => state.course.list);
  const departments: Array<Department> = useSelector((state: AppState) => state.department.list);
  const dispatch = useDispatch();

  const [departmentId, setDepartmentId] = useState('');

  useEffect(() => {
    dispatch(loadCourses(null));
    dispatch(loadDepartments());
  }, []);

  function filterCourses() {
    dispatch(loadCourses(departmentId));
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
              <Course key={course.id} course={course} />
            ))}
          </tbody>
        </table>
      </Container>
    );
  }
  return render();
}
export default CoursesPage;
