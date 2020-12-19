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
    contactDetailsArray.push(new AddressBook("Grijesh","Gautam","MaharajGanj","Gorakhpur","UttarPradesh","273001", "91 8589504273","grijesh@gmail.com"));
    contactDetailsArray.push(new AddressBook("Ankur","Yadav","Banaras","Varanasi","UttarPradesh","231233", "91 7779504273","ankur@gmail.com"));

    //printing array
    contactDetailsArray.forEach((details) => console.log(details.toString()));

}catch(e){
    console.log(e);
}