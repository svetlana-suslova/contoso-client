import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import {isEmpty} from 'lodash';
import {Container} from './bootstrap';
import Student from './students/Student';
import {loadStudents} from 'actions/studentActions';
import Paginator from './common/Paginator';

function StudentsPage() {
  const students: Array<Student> = useSelector((state: AppState) => state.student.list);
  const totalCount: number = useSelector((state: AppState) => state.student.totalCount);
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    if (isEmpty(students && totalCount)) {
      dispatch(loadStudents(activePage, pageSize));
    }
  }, [activePage]);

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
        <br />
        {totalCount && students && (
          <Paginator
            totalCount={totalCount}
            pageSize={pageSize}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        )}
      </Container>
    );
  }
  return render();
}
export default StudentsPage;
