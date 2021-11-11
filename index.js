// Write your solution in this file!
let employee = {
    name:"Xica",
    streetAddress: "345 West End Avenune"
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    return {...employeeObject, [key]:value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    employeeObject[key]=value;
    return employeeObject;
}

function deleteFromEmployeeByKey(employeeObject, key){
    let {[key]: omit, ...res} = employeeObject;
    return res;
}    

function destructivelyDeleteFromEmployeeByKey(employeeObject, key){
    delete employeeObject[key];
    return employeeObject;
}