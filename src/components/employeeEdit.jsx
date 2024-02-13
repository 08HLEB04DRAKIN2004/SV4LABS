import React from 'react';
import EmployeeEditForm from './employeeEditForm'; // Импорт нового компонента для формы редактирования сотрудника

function EmployeeEdit({ employeeData, onUpdateEmployee, onCloseModal }) {
<<<<<<< HEAD
    // Функция для закрытия модального окна редактирования сотрудника
    const handleClose = () => {
        onCloseModal();
    };

    return (
        <div>
         
            <EmployeeEditForm
                employeeData={employeeData}
                onUpdateEmployee={onUpdateEmployee}
                onCloseModal={handleClose} // Передаем функцию для закрытия модального окна в компонент формы редактирования
=======
    return (
        <div>
            <h2>Редактирование сотрудника</h2>
            <EmployeeEditForm
                employeeData={employeeData}
                onUpdateEmployee={onUpdateEmployee}
                onCloseModal={onCloseModal}
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
            />
        </div>
    );
}

export default EmployeeEdit;
