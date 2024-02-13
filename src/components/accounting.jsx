import React, { useState } from 'react';
<<<<<<< HEAD
import { TextField, Select, MenuItem, Button } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmployeeForm from './employeeForm';
import EmployeeEdit from './employeeEdit';
import EmployeeDetails from './employeeFormDetails'; 
import PopupComponent from './Popup'; // Поправленный импорт
=======
import EmployeeForm from './employeeForm';
import EmployeeEdit from './employeeEdit';
import EmployeeDetails from './employeeFormDetails';
import EmployeeDelete from './employeeDelete';
import Popup from './Popup'; // Импортируем компонент Popup
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
import data from '../data.json';
import '../styles/accounting.css';

function Accounting() {
<<<<<<< HEAD
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isEditFormVisible, setIsEditFormVisible] = useState(false);
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const [employees, setEmployees] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleOpenForm = () => {
        setIsFormVisible(true);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    const handleOpenEditForm = (employee) => {
        setSelectedEmployee(employee);
        setIsEditFormVisible(true);
    };

    const handleCloseEditForm = () => {
        setSelectedEmployee(null);
        setIsEditFormVisible(false);
    };

    const handleOpenDetails = (employee) => {
        setSelectedEmployee(employee);
        setIsDetailsVisible(true);
    };

    const handleCloseDetails = () => {
        setIsDetailsVisible(false);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleSortDirectionChange = () => {
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newDirection);
    };

    const handleUpdateEmployee = (updatedEmployeeData) => {
        const updatedEmployees = employees.map((employee) => {
            if (employee.id === updatedEmployeeData.id) {
                return updatedEmployeeData;
            } else {
                return employee;
            }
        });
        setEmployees(updatedEmployees);
        setIsEditFormVisible(false);
    };

    const handleAddEmployee = (newEmployeeData) => {
        setEmployees([...employees, newEmployeeData]);
        setIsFormVisible(false);
    };

    const handleDeleteEmployee = (employeeId) => {
        const updatedEmployees = employees.filter((employee) => employee.id !== employeeId);
        setEmployees(updatedEmployees);
    };
    
    const sortEmployees = () => {
        const sortedEmployees = [...employees];
        if (sortBy === 'name') {
            sortedEmployees.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return sortDirection === 'asc' ? -1 : 1;
                }
                if (nameA > nameB) {
                    return sortDirection === 'asc' ? 1 : -1;
                }
                return 0;
            });
        } else if (sortBy === 'birthdate') {
            sortedEmployees.sort((a, b) => {
                const dateA = new Date(a.birthdate);
                const dateB = new Date(b.birthdate);
                return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
            });
        }
        return sortedEmployees;
    };

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedEmployees = sortEmployees();

    const sortDirectionText = sortDirection === 'asc' ? 'по возрастанию' : 'по убыванию';
    let sortTypeText = '';
    if (sortBy === 'name') {
        sortTypeText = 'по имени';
    } else if (sortBy === 'birthdate') {
        sortTypeText = 'по дате рождения';
    }

    return (
        <div>
            <PopupComponent isOpen={isFormVisible || isEditFormVisible || isDetailsVisible} onClose={() => { handleCloseForm(); handleCloseEditForm(); handleCloseDetails(); }}>
                {isFormVisible && (
                    <EmployeeForm onCloseForm={handleCloseForm} onAddEmployee={handleAddEmployee} />
                )}
                {isEditFormVisible && selectedEmployee && (
                    <EmployeeEdit 
                        employeeData={selectedEmployee} 
                        onUpdateEmployee={handleUpdateEmployee} 
                        onCloseModal={handleCloseEditForm} 
                    />
                )}
                {isDetailsVisible && selectedEmployee && (
                    <EmployeeDetails employee={selectedEmployee} isDetailsVisible={isDetailsVisible} handleCloseDetails={handleCloseDetails} />
                )}
            </PopupComponent>

            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TextField
                    id="search"
                    label="Поиск"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ marginRight: '10px' }}
                />
                <Select
                    value={sortBy}
                    onChange={handleSortChange}
                    variant="outlined"
                    style={{ minWidth: '120px', marginRight: '10px' }}
                >
                    <MenuItem value="name">Имени</MenuItem>
                    <MenuItem value="birthdate">Дата рождения</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleSortDirectionChange}>
                    {`Сортировать ${sortTypeText} ${sortDirectionText}`}
                </Button>
            </div>

=======
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

>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Должность</th>
                        <th>Допуск</th>
<<<<<<< HEAD
                        <th>Дата рождения</th>   
=======
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
<<<<<<< HEAD
                {sortedEmployees.map((employee, index) => (
    <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.position}</td>
        <td>{employee.access}</td>
        <td>
            {employee.birthdate}
        </td>
        <td>
            <IconButton aria-label="details" onClick={() => handleOpenDetails(employee)}>
                <VisibilityIcon />
            </IconButton>
            <IconButton color="primary" aria-label="edit" onClick={() => handleOpenEditForm(employee)}>
                <EditIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="delete" onClick={() => handleDeleteEmployee(employee.id)}>
                <DeleteIcon />
            </IconButton>
        </td>
    </tr>
))}

                </tbody>
            </table>

            {!isFormVisible && !isEditFormVisible && !isDetailsVisible && (
                <div className="containeradd text-center">
                    <Fab color="primary" aria-label="add" onClick={handleOpenForm}>
                        <AddIcon />
                    </Fab>
                </div>
            )}
=======
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
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
        </div>
    );
}

export default Accounting;
