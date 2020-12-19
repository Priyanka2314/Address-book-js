//UC1 creating a class

class AddressBook{
    constructor(...param){
        this.firstName= param[0];
        this.lastName = param[1];
        this.address = param[2];
        this.city =param[3];
        this.state = param[4];
        this.zip = param[5];
        this.phoneNo = param[6];
        this.email = param[7];
    }

    //UC2 validating all details
    //get & set for firstname
    //first letter should be capital and min 3 letters
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let nameRegex = RegExp("^[A-z]{1}[A-Za-z]{2,}$");
        if(nameRegex.test(firstName))
           this._firstName = firstName;
        else
        throw "Invalid first Name"
    }

    //get & set for lastName
    //lastName letter should be capital and min 3 letters
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        let nameRegex = RegExp("^[A-z]{1}[A-Za-z]{2,}$");
        if(nameRegex.test(lastName))
           this._lastName = lastName;
        else
        throw "Invalid last Name"
    }
         
    //get and set for address
    //min 4 characters
    get address(){
      return this._address;
    }
    set address(address){
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if(addressRegex.test(address))
         this._address = address;
        else 
          throw "Invalid address";
    }

     //get and set for city
    //min 4 characters
    get city(){
        return this._city;
      }
      set city(city){
          let cityRegex = RegExp("^[A-Za-z]{4,}$");
          if(cityRegex.test(city))
           this._city = city;
          else 
            throw "Invalid city";
      }

    //get and set for state
    //min 4 characters
    get state(){
        return this._state;
      }
      set state(state){
          let stateRegex = RegExp("^[A-Za-z]{4,}$");
          if(stateRegex.test(state))
           this._state = state;
          else 
            throw "Invalid state";
      }

    //get and set for zip
    //pin code of 201 301
    get zip(){
        return this._zip;
      }
      set zip(zip){
          let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
          if(zipRegex.test(zip))
           this._zip = zip;
          else 
            throw "Invalid pin code";
      }
    //get and set for phoneNumber
    //phone number should be 91 9450898791
    get phoneNumber(){
        return this._zip;
      }
      set phoneNumber(phoneNum){
          let phoneRegex = RegExp("^[1-9]{2}[[ ]{1}[0-9]{10}$");
          if(phoneRegex.test(phoneNum))
           this._phoneNo = phoneNum;
          else 
            throw "Invalid phone number ";
      }
    //get and set for email
    //ab.xyz@gmail.com.in  where .xyz and .in are optional
    get email(){
        return this._email;
      }
      set email(email){
          let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-z0-9A-Z]{2,}([.]{1}[a-z]{2,})?$");
          if(emailRegex.test(email))
           this._email = email;
          else 
            throw "Invalid email";
      }
    //defining to string method
    toString(){
        return "\nFirst Name: "+this.firstName + " Last Name: "+this.lastName
          + "\nAddress: "+this.address+" ,City: "+this.city+ " State: "+this.state+" Zip: "+this.zip
          +"\nPhoneNumber: "+this.phoneNo+" Email: "+this.email;
    }
}
try{
    //UC3 creating an array and add contact details
    let  details = new AddressBook("Priyanka","Singh","Bina","Sonbhadra","UttarPradesh","231220",
        "91 9450898791", "priyankacs102@gmail.com");
        console.log(details.toString());
    //UC3 adding details to array
    let contactDetailsArray = new Array();
    contactDetailsArray.push(new AddressBook("Praveen","Singh","Bina","Sonbhadra","UttarPradesh","231220", "91 9879504273","praveen@gmail.com"));
    contactDetailsArray.push(new AddressBook("Prashant","Singh","Rewa","Rewa","MadheyPradesh","486001", "91 8879504273","prashant@gmail.com"));
    contactDetailsArray.push(new AddressBook("Grijesh","Gautam","MaharajGanj","Gorakhpur","UttarPradesh","273006", "91 8589504273","grijesh@gmail.com"));
    contactDetailsArray.push(new AddressBook("Ankur","Yadav","Banaras","Varanasi","UttarPradesh","231233", "91 7779504273","ankur@gmail.com"));

    //printing array
    contactDetailsArray.forEach((details) => console.log(details.toString()));

    //UC4 find existing contact person using their name and edit it

    //finding index using the name
    console.log("=============================");
    let pos = contactDetailsArray.findIndex(contact => contact.firstName == "Prashant");
    //updating the contact details
    contactDetailsArray[pos].phoneNo ="91 7095670775";

    //displaying contactdetails after being updated
    contactDetailsArray.forEach((updated) => console.log(updated.toString()));

    //UC5 find a person with name and delete it from array
    console.log("====================================");
    contactDetailsArray.splice(pos,1);
    contactDetailsArray.forEach((contact) => console.log("contact after being deleted: "+contact.toString()));

    //UC6 find number of contacts in the address book
    let totalContacts=0;
    function findTotalConnection(contactDetailsArray){
        if(contactDetailsArray!=0)
            totalContacts++;
        return totalContacts;  
    }
    contactDetailsArray.reduce(findTotalConnection,1);
    console.log("Total connections: "+totalContacts);
    //UC7 check for duplicate entry
    let dulicateCount=0;
    function checkDuplicate(contact){
        if(contactDetailsArray.firstName == "Priyanka")
            dulicateCount++;
        return dulicateCount;  
    }
    //using foreach checking duplicate contact 
    contactDetailsArray.forEach((contact) => checkDuplicate(contact));
    if(dulicateCount ==1)
        console.log("Not duplicate");
    else
        console.log("Duplicate contact");
    
    //UC8 search person using city or state & UC10 -> number of contacts by city or state
    //using city
    console.log(" ");
    let noOfCity = 0;
    let noOfState = 0;
    console.log("Contact by City");
    function contactByCity(details){
        if(details.city=="Sonbhadra"){
            console.log(details.toString());
            noOfCity++;
        }
    }
    contactDetailsArray.filter(contactByCity);
    console.log("Contacts by city: "+noOfCity);

    //by state
    let stateContact = contactDetailsArray.filter((contact) => contact.state.includes("MadheyPradesh"));
    console.log(stateContact.toString());
    function contactByState(details){
        if(details.state=="UttarPradesh"){
            console.log(details.toString());
                noOfState++;
            }
    }
    contactDetailsArray.filter(contactByState);
    console.log("Contacts by State: "+noOfState);

    //UC9 view person by State or City using map
    function cityMap(contacts){
        return contacts.city+ " ==> " + contacts.firstName+" "+contacts.lastName;
    }
    let viewContactByCity =contactDetailsArray.map(cityMap);
    console.log("Contact details by city : "+viewContactByCity);
   //by state
    function stateMap(contacts){
        return contacts.state+ " ==> " + contacts.firstName+" "+contacts.lastName;
    }
    let viewContactByState =contactDetailsArray.map(stateMap);
    console.log("Contact details by state : "+viewContactByState);

    //UC11 sorting by name
    function sortByName(){
        for(let contactdetails in contactDetailsArray){
            contactDetailsArray.sort(contactdetails.firstName);
        }
        contactDetailsArray.forEach((contact) => console.log(contact.toString()));
    }
    console.log("Sorting by name: ");
    sortByName();

}catch(e){
    console.log(e);
}