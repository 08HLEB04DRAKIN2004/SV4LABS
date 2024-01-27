import React from 'react';
import EmployeeEditForm from './employeeEditForm'; // Импорт нового компонента для формы редактирования сотрудника

function EmployeeEdit({ employeeData, onUpdateEmployee, onCloseModal }) {
    return (
        <div>
            <h2>Редактирование сотрудника</h2>
            <EmployeeEditForm
                employeeData={employeeData}
                onUpdateEmployee={onUpdateEmployee}
                onCloseModal={onCloseModal}
            />
        </div>
    );
}

export default EmployeeEdit;
