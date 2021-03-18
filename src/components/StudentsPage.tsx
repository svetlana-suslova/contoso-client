import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import {isEmpty} from 'lodash';
import {Container, Button} from './bootstrap';
import Student from './students/Student';
import {loadStudents} from 'actions/studentActions';
import Paginator from './common/Paginator';

function StudentsPage() {
  const students: Array<Student> = useSelector((state: AppState) => state.student.list);
  const totalCount: number = useSelector((state: AppState) => state.student.totalCount);
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);
  const [sortOrder, setSortOrder] = useState('name');
  const pageSize = 3;

  useEffect(() => {
    if (isEmpty(students && totalCount)) {
      dispatch(loadStudents(sortOrder, activePage, pageSize));
    }
  }, [activePage]);

  function changeSortOrder(e) {
    let option = e.target.value;
    let newSortOrder = '';

    switch (option) {
      case 'name':
        newSortOrder = sortOrder === 'name' ? 'name_desc' : 'name';
        break;
      case 'date':
        newSortOrder = sortOrder === 'date' ? 'date_desc' : 'date';
        break;
      default:
        newSortOrder = 'name';
    }
    setSortOrder(newSortOrder);
    dispatch(loadStudents(newSortOrder, activePage, pageSize));
  }

  function render() {
    return (
      <Container>
        <h2>Students</h2>
        <table className="table">
          <thead>
            <tr>
              <th>
                <Button type="link" value="name" onClick={changeSortOrder}>
                  Last Name
                </Button>
              </th>
              <th>First Name</th>
              <th>
                <Button type="link" value="date" onClick={changeSortOrder}>
                  Enrollment Date
                </Button>
              </th>
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
