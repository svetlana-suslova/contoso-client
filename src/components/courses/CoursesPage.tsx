import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import Course from './Course';
import {loadCourses} from 'actions/courseActions';
import {Container, Button} from '../bootstrap';
import {Heading} from 'styles/shared';

function CoursesPage() {
  const courses: Array<Course> = useSelector((state: AppState) => state.course.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses(null));
  }, []);

  function render() {
    return (
      <Container>
        <Heading>Courses</Heading>
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
