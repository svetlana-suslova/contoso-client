import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import {isEmpty} from 'lodash';
import {Container} from './bootstrap';
import Student from './students/Student';
import {loadStudents} from 'actions/studentActions';

function StudentsPage() {
  const students: Array<Student> = useSelector((state: AppState) => state.student.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(students)) dispatch(loadStudents());
  }, []);

  function render() {
    return (
      <Container>
        <h2>Students</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Enrollment Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <Student key={student.id} student={student} />
            ))}
          </tbody>
        </table>
      </Container>
    );
  }
  return render();
}
export default StudentsPage;
