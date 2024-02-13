import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Button, TextField, Box } from '@mui/material'; // Импорт компонентов из Material-UI

function EmployeeEditForm({ employeeData, onUpdateEmployee, onCloseModal }) {
    const [employee, setEmployee] = useState({
        id: '',
        name: '',
        position: '',
        access: '',
        birthdate: '',
        phone: '',
        address: ''
    });
=======

function EmployeeEditForm({ employeeData, onUpdateEmployee, onCloseModal }) {
    const [employee, setEmployee] = useState({ id: '', name: '', position: '', access: '', birthdate: '', phone: '', address: '' });
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517

    useEffect(() => {
        if (employeeData) {
            setEmployee(employeeData);
        }
    }, [employeeData]);

    const handleSubmit = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        onUpdateEmployee(employee); // Здесь нужно использовать текущее значение employee
=======
        onUpdateEmployee(employee);
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
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
<<<<<<< HEAD
                    <TextField
                        label="Имя"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Должность"
                        name="position"
                        value={employee.position}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Допуск"
                        name="access"
                        value={employee.access}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="День рождения"
                        name="birthdate"
                        value={employee.birthdate}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Телефон"
                        name="phone"
                        value={employee.phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Адрес"
                        name="address"
                        value={employee.address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="primary" type="submit">
                            Сохранить
                        </Button>
                        <Button variant="contained" onClick={onCloseModal}>
                            Отмена
                        </Button>
                    </Box>
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

                    <button type="submit">Сохранить</button>
                    <button type="button" onClick={onCloseModal}>Отмена</button> {/* Кнопка "Отмена" */}
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
                </form>
            </div>
        </div>
    );
}

export default EmployeeEditForm;
