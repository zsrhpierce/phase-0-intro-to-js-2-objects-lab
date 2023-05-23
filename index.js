
const employee = {};

employee;
employee.name = 'Cathy Pierce';
employee['streetAdress'] = '11660 So Olive Berry';
employee;

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}
const updateEmployee = updateEmployeeWithKeyAndValue(employee, "Haley", "123 Main");
updateEmployee;

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const destroyEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Zachary", "1234 Wisteria");
destroyEmployee;

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key]
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key]
    return employee;
}


