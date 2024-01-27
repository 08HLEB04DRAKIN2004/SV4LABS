import React, { useState } from 'react';
import EmployeeForm from './employeeForm';
import EmployeeEdit from './employeeEdit';
import EmployeeDetails from './employeeFormDetails';
import EmployeeDelete from './employeeDelete';
import Popup from './Popup'; // Импортируем компонент Popup
import data from '../data.json';
import '../styles/accounting.css';

function Accounting() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [employees, setEmployees] = useState(data);
    const [selectedEmployee, setSelectedEmployee] = useState(null); // Состояние для хранения выбранного сотрудника

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEmployee(null);
    };

    const handleEditModalOpen = () => {
        setIsEditModalOpen(true);
    };

    const handleEditModalClose = () => {
        setIsEditModalOpen(false);
        setSelectedEmployee(null);
    };

    const handleDeleteModalOpen = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteModalClose = () => {
        setIsDeleteModalOpen(false);
        setSelectedEmployee(null);
    };

    const handleAddEmployee = (employeeData) => {
        setEmployees([...employees, employeeData]);
        handleCloseModal();
    };

    const handleUpdateEmployee = (employeeData) => {
        const updatedEmployees = employees.map(employee => {
            if (employee.id === employeeData.id) {
                return employeeData;
            }
            return employee;
        });
        setEmployees(updatedEmployees);
        handleEditModalClose();
    };

    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee); // Установка выбранного сотрудника
        handleEditModalOpen();
    };

    const handleDeleteEmployee = (employee) => {
        setSelectedEmployee(employee); // Установка выбранного сотрудника
        handleDeleteModalOpen();
    };

    const handleConfirmDelete = () => {
        const updatedEmployees = employees.filter(emp => emp.id !== selectedEmployee.id);
        setEmployees(updatedEmployees);
        handleDeleteModalClose();
    };

    const handleShowDetails = (employee) => {
        setSelectedEmployee(employee); // Установка выбранного сотрудника
        setIsDetailsOpen(true);
    };

    const handleCloseDetails = () => {
        setIsDetailsOpen(false);
        setSelectedEmployee(null);
    };

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <EmployeeForm onCloseModal={handleCloseModal} onAddEmployee={handleAddEmployee} />
                </div>
            )}

            {isEditModalOpen && selectedEmployee && (
                <div className="modal-overlay">
                    <EmployeeEdit
                        employeeData={selectedEmployee}
                        onUpdateEmployee={handleUpdateEmployee}
                        onCloseModal={handleEditModalClose}
                    />
                </div>
            )}

            {isDeleteModalOpen && selectedEmployee && (
                <div className="modal-overlay">
                    <EmployeeDelete
                        employee={selectedEmployee}
                        onDeleteEmployee={handleConfirmDelete}
                        onCloseModal={handleDeleteModalClose}
                    />
                </div>
            )}

            {isDetailsOpen && selectedEmployee && (
                <div className="modal-overlay">
                    {/* Использование компонента EmployeeDetails с модальным окном Popup */}
                    <Popup isOpen={isDetailsOpen} onClose={handleCloseDetails}>
                        <EmployeeDetails employee={selectedEmployee} />
                    </Popup>
                </div>
            )}

            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Должность</th>
                        <th>Допуск</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.access}</td>
                            <td>
                                <button className="button" onClick={() => handleShowDetails(employee)}>Детали</button>
                                <button className="button" onClick={() => handleEditEmployee(employee)}>Редактировать</button>
                                <button className="button" onClick={() => handleDeleteEmployee(employee)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="containeradd">
                <button className="buttonadd" onClick={handleOpenModal}>Добавить сотрудника</button>
            </div>
        </div>
    );
}

export default Accounting;
