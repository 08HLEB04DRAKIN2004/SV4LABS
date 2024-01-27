import React from 'react';

function EmployeeDelete({ employee, onDeleteEmployee, onCloseModal }) {
    const handleDelete = () => {
        onDeleteEmployee(employee);
        onCloseModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Удаление сотрудника</h2>
                <p>Вы уверены, что хотите удалить сотрудника {employee.name}?</p>
                <div className="modal-buttons">
                    <button onClick={handleDelete}>Удалить</button>
                    <button onClick={onCloseModal}>Отмена</button>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDelete;
