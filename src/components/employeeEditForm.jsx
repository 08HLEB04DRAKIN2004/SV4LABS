import React, { useState, useEffect } from 'react';

function EmployeeEditForm({ employeeData, onUpdateEmployee, onCloseModal }) {
    const [employee, setEmployee] = useState({ id: '', name: '', position: '', access: '', birthdate: '', phone: '', address: '' });

    useEffect(() => {
        if (employeeData) {
            setEmployee(employeeData);
        }
    }, [employeeData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateEmployee(employee);
        onCloseModal();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    return (
        <div className="modal"> {/* Обертка для модального окна */}
            <div className="modal-content">
                <form className="modal-form" onSubmit={handleSubmit}>
               
                
                    <input type="text" name="name" value={employee.name} onChange={handleChange} />

                    <label>Должность:</label>
                    <input type="text" name="position" value={employee.position} onChange={handleChange} />

                    <label>Допуск:</label>
                    <input type="text" name="access" value={employee.access} onChange={handleChange} />

                    <label>День рождения:</label>
                    <input type="text" name="birthdate" value={employee.birthdate} onChange={handleChange} />

                    <label>Телефон:</label>
                    <input type="text" name="phone" value={employee.phone} onChange={handleChange} />

                    <label>Адрес:</label>
                    <input type="text" name="address" value={employee.address} onChange={handleChange} />

                    <button type="submit">Сохранить</button>
                    <button type="button" onClick={onCloseModal}>Отмена</button> {/* Кнопка "Отмена" */}
                </form>
            </div>
        </div>
    );
}

export default EmployeeEditForm;
