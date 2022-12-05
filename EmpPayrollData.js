// class EmpPayRollData
// {
//      id;
//      salary;
//      gender;
//      StartDate;
//      constructor(id,name,salary,gender,StartDate){
//         this.id=id;
//         this.salary=salary;
//         this.name=name;
//         this.StartDate=StartDate;
//         this.gender=gender;
//      }
//      get name(){
//         return this._name;
//      }
//      set name(name){
//         let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
//         if(nameRegex.test(name))
//         this._name=name;
//         else
//         throw "Name is Incorrect"
//         //this._name=name;
//      }
//      toString(){
//         const options={year:'numeric',month:'long',day:'numeric'};
//         const empDate=this.StartDate==undefined ? "undefined" : this.StartDate.toLocaleString("en-US",options);
//         return "id= "+this.id+" name= "+this.name+" salary= "+this.salary+" gender= "+this.gender+" StartDate= "+empDate;
//     }
// }
// let empPayrollData=new EmpPayRollData(1,"Mark",1300,"M",new Date());
// console.log(empPayrollData.toString());
// try{
//     empPayrollData.name="John";
//     console.log(empPayrollData.toString());
// }catch(e){
// console.log(e);
// }

// class AddressBook{
//    Address;
//    City;
//    State;
//    Zip;
//    Phone;
//    Email;
//    constructor(FirStName,LastName,Address,City,State,Zip,Phone,Email)
//    {
//      this.FirStName=FirStName;
//      this.LastName=LastName;
//      this.Zip=Zip;
//      this.Address=Address;
//      this.City=City;
//      this.State=State;
//      this.Phone=Phone;
//      this.Email=Email;
//    }
//    get FirStname(){
//       return this._Firstname;
//    }
//    set FirStname(FirStName){
//       let RegexFirstName=RegExp('^[A-z]{1}[a-z]{2,}$');
//       if(RegexFirstName.test(FirStName))
//         this._Firstname=FirStName;
//         else
//         throw " First Name is Incorrect"
//    }
//    get Lastname(){
//       return this._Lastname;
//    }
//    set Lastname(LastName){
//       let RegexLastName=RegExp('^[A-z]{1}[a-z]{2,}$');
//       if(RegexLastName.test(LastName))
//         this._Lastname=LastName;
//         else
//         throw "Last Name is Incorrect"
//    }
//      toString(){
//       return "FirstName: "+this.FirStName+" LastName: "+this.LastName+" Address: "+this.Address+" City: "+this.City+" state: "+this.State+" Zip: "+this.Zip+" phone: "+this.Phone+" Email: "+this.Email;
//      }
// }
// let contact=new AddressBook("joel","Thomos","shivaji nagar","Bengaluru","Karnataka",560064,"7894561230","joel@gmail.com");
// try{
//        contact.FirStName="jeol";
//        console.log(contact.toString());
//    }catch(e){
//    console.log(e);
//    }
//console.log(contact);


class EmpPayrollData{
   get id(){
      return this._id;
   }
   set id(id){this._id=id;}
   get name(){ return this._name}
   set name(name)
   { 
      let nameRegex = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) 
        {
          this._name=name;
        } else 
        {
           throw 'Name is in correct'
        }
   }
   get profilePic() {return this._profilepic;}
   set profilePic(profilePic){ this._profilepic=profilePic;}

   get gender() {return this._gender;}
   set gender(gender) { this._gender=gender;}
    
   get department() {return this._department;}
   set department(department) { this.__departmentr=department;}

   get salary() {return this._salary;}
   set salary(salary) { this.__salary=salary;}

   get note() {return this._note;}
   set note(note) { this.__note=note;}

   get startDate() {return this._startDate;}
   set startDate(startDate) { this.__startDate=startDate;}

   toString()
    {
        const options={year:'numeric',month:'long',day:'numeric'};
        const empDate=!this.startDate ? "undefined":this.startDate.toLocaleString("en-US",options);
        return "id= "+this.id+" , name = "+this.name+", gender = "+this.gender+" , profilePic = "+this.profilePic+
        " , department = "+this.department+" , salary = "+this.salary+" ,notes = "+this.note+", startDate = "+empDate;
    }
}
// let employeePayrollData=new EmpPayrollData(1,"Mark",3000,"F",new Date());
// console.log(employeePayrollData.toString());
// try{
//     employeePayrollData.name="Abhi";
//     console.log(employeePayrollData.toString());
// }catch(e)
// {
//     console.error(e);
// }