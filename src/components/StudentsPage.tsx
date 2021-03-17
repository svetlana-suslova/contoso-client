import React from 'react';
import {Container} from './bootstrap';

function StudentsPage() {
  function render() {
    return (
      <Container>
        <h2>Students</h2>
        <div className="col-md-4">
          <table className="table">
            <thead>
              <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Enrollment Date</th>
                <th />
              </tr>
            </thead>
            <tbody>Students</tbody>
          </table>
        </div>
      </Container>
    );
  }
  return render();
}
export default StudentsPage;
