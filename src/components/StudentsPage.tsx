import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import {isEmpty} from 'lodash';
import {Container, Button} from './bootstrap';
import Student from './students/Student';
import {loadStudents, loadStudent} from 'actions/studentActions';
import Paginator from './common/Paginator';
import StudentSearch from './students/StudentSearch';
import StudentDetails from './students/StudentDetails';

function StudentsPage() {
  const students: Array<Student> = useSelector((state: AppState) => state.student.list);
  const currentStudent: Student = useSelector((state: AppState) => state.student.current);
  const totalCount: number = useSelector((state: AppState) => state.student.totalCount);
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);
  const [sortOrder, setSortOrder] = useState('name');
  const [search, setSearch] = useState('');
  const [detailsModal, toggleDetailsModal] = useState(false);
  const pageSize = 3;

  useEffect(() => {
    if (isEmpty(students && totalCount)) {
      dispatch(loadStudents(sortOrder, search, activePage, pageSize));
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
    dispatch(loadStudents(newSortOrder, search, activePage, pageSize));
  }

  function handleKeyPress(target) {
    if (target.charCode === 13) {
      dispatch(loadStudents(sortOrder, search, activePage, pageSize));
    }
  }

  function onSearch() {
    setActivePage(1);
    dispatch(loadStudents(sortOrder, search, activePage, pageSize));
  }

  function onClearSearch() {
    setSearch('');
    dispatch(loadStudents(sortOrder, '', activePage, pageSize));
  }

  function showDetailsModal(studentId) {
    dispatch(loadStudent(studentId));
    toggleDetailsModal(!detailsModal);
  }

  function closeDetailsModal() {
    toggleDetailsModal(!detailsModal);
  }

  function render() {
    return (
      <Container>
        <h2>Students</h2>
        <StudentSearch
          search={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          onSearch={onSearch}
          onClearSearch={onClearSearch}
        />
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
              <Student key={student.id} student={student} onDetailsClick={() => showDetailsModal(student.id)} />
            ))}
          </tbody>
        </table>
        <br />
        {totalCount && students ? (
          <Paginator
            totalCount={totalCount}
            pageSize={pageSize}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        ) : null}
        <StudentDetails visible={detailsModal} close={closeDetailsModal} currentStudent={currentStudent} />
      </Container>
    );
  }
  return render();
}
export default StudentsPage;
