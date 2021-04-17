import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import Department from './Department';
import {loadDepartments, loadDepartment, saveDepartment, deleteDepartment} from 'actions/departmentActions';
import {Container, Button} from '../bootstrap';
import {loadInstructors} from 'actions/instructorActions';
import {Heading} from 'styles/shared';
import DepartmentDetails from './DepartmentDetails';
import DepartmentSave from './DepartmentSave';
import uiHelper from 'helpers/uiHelper';
import dateHelper from 'helpers/dateHelper';
import DEPARTMENT from 'constants/literals/departments';
import {confirmAction} from 'actions/commonActions';
import _ from 'helpers/entityHelper';

function DepartmentsPage() {
  const departments: Array<Department> = useSelector((state: AppState) => state.department.list);
  const currentDepartment: Department = useSelector((state: AppState) => state.department.current);
  const instructors: Array<Instructor> = useSelector((state: AppState) => state.instructor.list);
  const dispatch = useDispatch();

  const [detailsModal, toggleDetailsModal] = useState(false);
  const [departmentToEdit, setDepartmentToEdit] = useState<Department | null>(null);

  useEffect(() => {
    dispatch(loadDepartments());
    dispatch(loadInstructors());
  }, []);

  function showDetailsModal(departmentId) {
    dispatch(loadDepartment(departmentId));
    toggleDetailsModal(!detailsModal);
  }

  function closeDetailsModal() {
    toggleDetailsModal(!detailsModal);
  }

  function createDepartment() {
    setDepartmentToEdit({
      budget: '',
      id: 0,
      instructor: {},
      instructorId: 0,
      name: '',
      startDate: dateHelper.getCurrentDate(),
    });
  }

  function updateDepartment(department) {
    setDepartmentToEdit({...department});
    dispatch(loadDepartment(department.id));
  }

  function updateDepartmentState(field: string, value) {
    if (!departmentToEdit) return;

    setDepartmentToEdit({...departmentToEdit, [field]: value});
  }

  async function onSaveDepartment() {
    const completed = await dispatch(saveDepartment(departmentToEdit));
    const message = departmentToEdit && departmentToEdit.id ? DEPARTMENT.UPDATED : DEPARTMENT.CREATED;
    if (completed !== undefined) {
      dispatch(loadDepartments());
      uiHelper.showMessage(message);
    }
    closeSaveModal();
  }

  function closeSaveModal() {
    setDepartmentToEdit(null);
  }

  function onDeleteDepartment(id) {
    dispatch(
      confirmAction({
        title: DEPARTMENT.DELETE,
        action: async () => {
          let completed = await dispatch(deleteDepartment(id));
          if (completed !== undefined) {
            dispatch(loadDepartments());
            uiHelper.showMessage(DEPARTMENT.DELETED);
          }
        },
      })
    );
  }

  function render() {
    let editMode = departmentToEdit ? true : false;
    return (
      <Container>
        <Heading>Departments</Heading>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Budget</th>
              <th>Start Date</th>
              <th>Administrator</th>
              <th>
                <Button variant="link" onClick={createDepartment}>
                  Create New
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <Department
                key={department.id}
                department={department}
                onDetailsClick={() => showDetailsModal(department.id)}
                onSaveClick={() => updateDepartment(department)}
                onDeleteClick={() => onDeleteDepartment(department.id)}
              />
            ))}
          </tbody>
        </table>
        <DepartmentDetails visible={detailsModal} close={closeDetailsModal} currentDepartment={currentDepartment} />
        {editMode && (
          <DepartmentSave
            visible={editMode}
            close={closeSaveModal}
            department={departmentToEdit}
            saveDepartment={onSaveDepartment}
            onChange={updateDepartmentState}
            options={_.getInstructorsOptions(instructors)}
          />
        )}
      </Container>
    );
  }
  return render();
}
export default DepartmentsPage;
