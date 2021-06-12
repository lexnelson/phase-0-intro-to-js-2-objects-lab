// Write your solution in this file!
const employee = {
    name: 'Dom',
    streetAddress: '180 Laguna Drive '
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee}
    newObject[key] = value;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {[key]: value});
}
function deleteFromEmployeeByKey(employee, key){
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}