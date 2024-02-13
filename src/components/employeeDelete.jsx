import React from 'react';
<<<<<<< HEAD
import Button from '@mui/material/Button';

function EmployeeDelete({ employee, onDeleteEmployee, onCloseModal }) {
    const handleDelete = () => {
        onDeleteEmployee(employee); // Вызов функции удаления сотрудника
=======

function EmployeeDelete({ employee, onDeleteEmployee, onCloseModal }) {
    const handleDelete = () => {
        onDeleteEmployee(employee);
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
        onCloseModal();
    };

    return (
<<<<<<< HEAD
        <div>
            <h2>Вы уверены, что хотите удалить {employee.name}?</h2>
            <Button variant="contained" color="primary" onClick={handleDelete}>
                Удалить
            </Button>
            <Button variant="contained" color="secondary" onClick={onCloseModal}>
                Отмена
            </Button>
=======
        <div className="modal">
            <div className="modal-content">
                <h2>Удаление сотрудника</h2>
                <p>Вы уверены, что хотите удалить сотрудника {employee.name}?</p>
                <div className="modal-buttons">
                    <button onClick={handleDelete}>Удалить</button>
                    <button onClick={onCloseModal}>Отмена</button>
                </div>
            </div>
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
        </div>
    );
}

export default EmployeeDelete;
