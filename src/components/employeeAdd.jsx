import React from 'react';
import EmployeeForm from './employeeForm';

function employeeAdd({ onAddEmployee }) {
    return (
        <div>
            <h2>Добавление сотрудника</h2>
            <EmployeeForm onAddEmployee={onAddEmployee} />
        </div>
    );
}

export default employeeAdd;
