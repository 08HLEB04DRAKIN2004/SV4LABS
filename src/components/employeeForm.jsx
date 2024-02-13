import React, { useState } from 'react';
<<<<<<< HEAD
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/modal.css'; // Импорт файла стилей для модального окна

function EmployeeForm({ onCloseForm, onAddEmployee }) {
=======
import '../styles/modal.css'; // Импорт файла стилей для модального окна

function EmployeeForm({ onCloseModal, onAddEmployee }) {
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
    const [employee, setEmployee] = useState({ name: '', position: '', access: '', birthdate: '', phone: '', address: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        onAddEmployee(employee); // Вызываем функцию для добавления сотрудника
        onCloseForm(); // Закрываем форму
    };

    const handleCancel = () => {
        onCloseForm(); // Закрываем форму без добавления сотрудника
=======
        onAddEmployee(employee);
        onCloseModal();
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    return (
        <div className="modal"> {/* Обертка для модального окна */}
            <div className="modal-content">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <label>Имя:</label>
<<<<<<< HEAD
                    <TextField type="text" name="name" value={employee.name} onChange={handleChange} />

                    <label>Должность:</label>
                    <TextField type="text" name="position" value={employee.position} onChange={handleChange} />

                    <label>Допуск:</label>
                    <TextField type="text" name="access" value={employee.access} onChange={handleChange} />

                    <label>День рождения:</label>
                    <TextField type="text" name="birthdate" value={employee.birthdate} onChange={handleChange} />

                    <label>Телефон:</label>
                    <TextField type="text" name="phone" value={employee.phone} onChange={handleChange} />

                    <label>Адрес:</label>
                    <TextField type="text" name="address" value={employee.address} onChange={handleChange} />

                    <div style={{ marginTop: '16px' }}> {/* Добавление стиля для расстояния между кнопками */}
                        <Button type="submit" variant="contained" color="primary" style={{ marginRight: '78px' }}>Добавить</Button>
                        <Button type="button" onClick={handleCancel} variant="contained">Отмена</Button> {/* Кнопка "Отмена" */}
                    </div>
=======
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

                    <button type="submit">Добавить</button>
                    <button type="button" onClick={onCloseModal}>Отмена</button> {/* Кнопка "Отмена" */}
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
                </form>
            </div>
        </div>
    );
}

export default EmployeeForm;
