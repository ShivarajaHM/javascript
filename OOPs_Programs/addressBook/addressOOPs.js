var read = require('readline-sync');
var file = require('fs');

class Person {
    constructor(fname, lname, city, state, phnum, zip) {
        this.firstname = fname;
        this.lastname = lname;
        this.city = city;
        this.state = state;
        this.phonenumber = phnum;
        this.zip = zip;
    }
}

class AddressBook {
    constructor() { }
    // create new address book function
    addPerson(data) {
        var fname = read.question("Enter firstname of person :")
        var lname = read.question("Enter lastname of person :")
        var city1 = read.question("Enter city of person:")
        var state1 = read.question("Enter state of person:")
        var phonenum1 = read.question("Enter phonenumber:")
        var zip = read.question("Enter zip code:")
        // create object of Person class
        var o = new Person(fname, lname, city1, state1, phonenum1, zip)
        /**
        * push each value into json
        */
        data.Person.push(o);
        // write data into json file
        var d = file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/adressBook.json', JSON.stringify(data))
    }
    // updating address book function
    updatePerson(data) {
        var name = read.question("enter Firstname of person :")
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personfname == name) {
                var index = data.Person.indexOf(data.Person[i]);
                console.log(" select which information to be update ")
                console.log("Enter 1 for firstname of person to be update")
                console.log("Enter 2 for  lastname of person to be update")
                console.log("Enter 3 for  phonenumber person to be update")
                console.log("Enter 4 for  city of person to be update")
                console.log("Enter 5 for  state of person to be update")
                console.log("Enter 6 for  zip code of person to be update")
                var num1 = read.questionInt("select any number:")
                switch (num1) {
                    case 1: this.firstname(data, index)
                        break;
                    case 2: this.lastname(data, index)
                        break;
                    case 3: this.phonenumber(data, index)
                        break;
                    case 4: this.city(data, index)
                        break;
                    case 5: this.state(data, index)
                        break;
                    case 6: this.zipcode(data, index)
                        break;
                }
            }
        }
    }
    // update first name
    firstname(data, index) {
        var fname1 = read.question("enter the name changed first name:")
        data.Person[index].personfname = fname1
        var d = file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/adressBook.json', JSON.stringify(data))

    }
    // update last name
    lastname(data, index) {
        var lname1 = read.question("enter changed last name:")
        data.Person[index].personlname = lname1
        var d = file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/adressBook.json', JSON.stringify(data))

    }
    // update phone number
    phonenumber(data, index) {
        var phonenumber1 = read.question("enter  changed phonenumber:")
        data.Person[index].phonenumber = phonenumber1
        var d = file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/adressBook.json', JSON.stringify(data))

    }
    // update city
    city(data, index) {
        var cityname = read.question("enter changed city name")
        data.Person[index].city = cityname
        var d = file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/adressBook.json', JSON.stringify(data))

    }
    // update city
    state(data, index) {
        var statename = read.question("enter the changed state name")
        data.Person[index].state = statename
        var d = file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/adressBook.json', JSON.stringify(data))

    }
    // update zipcode
    zipcode(data, index) {
        var zipcode = read.question("enter the name changed zip code")
        data.Person[index].zip = zipcode
        var d = file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/adressBook.json', JSON.stringify(data))

    }
    // removing or deleting particulor person
    removeperson(data) {

        var name = read.question("enter name of person to be remove:")
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personfname == name) {
                var index = data.Person.indexOf(data.Person[i]);
                // This will remove the object that name of the person
                var dd = data.Person.splice(index, 1);
            }
            var d = file.writeFileSync('/home/admin1/Documents/javascript/OOPs_Programs/JSON_files/adressBook.json', JSON.stringify(data))

        }

    }
    sortfname(data) {
        let fname = data.Person;
        function sortbyfname(a, b) {
            if (a.personfname == b.personfname);
            return 0
            if (a.personfname > b.personfname);
            return 1
            if (a.personfname < b.personfname);
            return -1
        }
        var result = fname.sort(sortbyfname);
        console.log(result);


    }
    sortzip(data) {
        let refer = data.Person;
        function sortbyzip(a, b) {
            return (a.zip - b.zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);

    }
    printadd(data) {
        var person = data.Person
        for (const key in person) {
            console.log(person[key])
        }


    }
}
module.exports = { Person, AddressBook }