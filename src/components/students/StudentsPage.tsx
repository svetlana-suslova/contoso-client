import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import {isEmpty} from 'lodash';
import {Container, Button} from '../bootstrap';
import Student from './Student';
import {loadStudents, loadStudent, saveStudent, deleteStudent} from 'actions/studentActions';
import Paginator from '../common/Paginator';
import StudentSearch from './StudentSearch';
import StudentDetails from './StudentDetails';
import StudentSave from './StudentSave';
import uiHelper from 'helpers/uiHelper';
import dateHelper from 'helpers/dateHelper';
import {confirmAction} from 'actions/commonActions';
import styled from 'styled-components';

const Heading = styled.h1`
  margin: 20px 0;
  font-size: 2rem;
}
`;

function StudentsPage() {
  const students: Array<Student> = useSelector((state: AppState) => state.student.list);
  const currentStudent: Student = useSelector((state: AppState) => state.student.current);
  const totalCount: number = useSelector((state: AppState) => state.student.totalCount);
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);
  const [sortOrder, setSortOrder] = useState('name');
  const [search, setSearch] = useState('');
  const [detailsModal, toggleDetailsModal] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState<Student | null>(null);
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

  function createStudent() {
    setStudentToEdit({
      id: 0,
      enrollmentDate: dateHelper.getCurrentDate(),
      firstName: '',
      lastName: '',
      enrollments: [],
    });
  }

  function updateStudent(student) {
    setStudentToEdit({...student});
    dispatch(loadStudent(student.id));
  }

  function updateStudentState(field: string, value) {
    if (!studentToEdit) return;

    setStudentToEdit({...studentToEdit, [field]: value});
  }

  async function onSaveStudent() {
    let completed = await dispatch(saveStudent(studentToEdit));
    if (completed !== undefined) {
      dispatch(loadStudents(sortOrder, search, activePage, pageSize));
      uiHelper.showMessage('Student updated!');
    }
    closeSaveModal();
  }

  function closeSaveModal() {
    setStudentToEdit(null);
  }

  function onDeleteStudent(id) {
    dispatch(
      confirmAction({
        title: 'Delete student',
        action: async () => {
          let completed = await dispatch(deleteStudent(id));
          if (completed !== undefined) {
            dispatch(loadStudents(sortOrder, search, activePage, pageSize));
            uiHelper.showMessage('Student deleted!');
          }
        },
      })
    );
  }

  function render() {
    let editMode = studentToEdit ? true : false;
    return (
      <Container>
        <Heading>Students</Heading>
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
                <Button variant="link" value="name" onClick={changeSortOrder}>
                  Last Name
                </Button>
              </th>
              <th>First Name</th>
              <th>
                <Button variant="link" value="date" onClick={changeSortOrder}>
                  Enrollment Date
                </Button>
              </th>
              <th>
                <Button variant="link" onClick={createStudent}>
                  Create New
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <Student
                key={student.id}
                student={student}
                onDetailsClick={() => showDetailsModal(student.id)}
                onSaveClick={() => updateStudent(student)}
                onDeleteClick={() => onDeleteStudent(student.id)}
              />
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
        {editMode && (
          <StudentSave
            visible={editMode}
            close={closeSaveModal}
            student={studentToEdit}
            saveStudent={onSaveStudent}
            onChange={updateStudentState}
          />
        )}
      </Container>
    );
  }
  return render();
}
export default StudentsPage;
