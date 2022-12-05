let isUpadte=false;
let employeePayrollObj={};

window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function()
    {
        if(name.value.length==0)
        {
            textError.textContent="";
            return;
        }
        try{
            (new EmpPayrollData()).name=name.value;
            textError.textContent="";
        }catch(e)
        {
            textError.textContent=e;
        }
    });

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    salary.addEventListener('input',function()
    {
        output.textContent=salary.value;
    });

    checkForUpdate();
});

const checkForUpdate=()=>
{
    const employeePayrollJson=localStorage.getItem('editEmp213');
    isUpadte=employeePayrollJson?true:false;
    if(!isUpadte) return;
    employeePayrollObj=JSON.parse(employeePayrollJson);
    setForm();
}

const setForm=()=>
{
    setValue('#name',employeePayrollObj._name);
    setSelectedValues('[name=profile]',employeePayrollObj._profilePic);
}

const setValue=(id,value)=>
{
    const element=document.querySelector(id);
    element.value=value;
}

const setSelectedValues=(propertyValue,value)=>
{
    let allItems=document.querySelectorAll(propertyValue);
    allItems.forEach(item=>
        {
            if(Array.isArray(value))
            {
                if(value.includes(item.value))
                {
                    item.checked=true;
                }
            }
            else if(item.value==value)
            item.checked=true;
        })
}

const save=()=>
{
    try{
        let employeePayrollData=createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);

    }catch(e)
    {
        return;
    }
}


function createAndUpdateStorage(employeePayrollData)
{
    let employeePayRollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayRollList!=undefined)
    {
        employeePayRollList.push(employeePayrollData);
    }else{
        employeePayRollList=[employeePayrollData]
    }

    alert(employeePayRollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayRollList))

}

const createEmployeePayroll=()=>
{
    let employeePayrollData=new EmpPayrollData();
    try{
        employeePayrollData.name=getInputValueById('#name');
    }catch(e)
    {
        throw e;
    }
    employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary=getInputValueById('#salary');
    employeePayrollData.note=getInputValueById('#notes');
    let date=getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.date=Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getInputValueById=(id)=>
{
    let value=document.querySelector(id).value;
    return value;
}

const getSelectedValues=(propertyValue)=>
{
    let allItems=document.querySelectorAll(propertyValue);s
    let selItems=[];
    allItems.forEach(item=>
        {
            if(item.checked) selItems.push(item.value);
        });

        return selItems;
}