module.exports={
    regexp(name,fullname,mobilenumber){
        var readline=require('readline-sync');
        var patt=/[a-zA-Z]/;
        /**
        * condition to check whether the input is string.
        */
        while (!patt.test(name) || !patt.test(fullname)) {
            name = readLine.question("Enter your name(alphabets only) : ");
            fullName = readLine.question("Enter your full name(alphabets only) : ");
          }
        /**
        * condition to check whether the input is 10 digit number.
        */
        while (isNaN(mobilenumber) || mobilenumber.length != 10) {
            mobileNumber = readLine.question(
              "\nEnter valid phone number(10 digits only) : "
            );
          }
        /**
        * Replacing name, full name, mobileNumebr, date with proper values passed using regular expressions.
        */
        var fileread=require('fs');
        var line=fileread.readFileSync('/home/admin1/Documents/javascript/OOPs_Programs/Utility/regexp.txt','utf8');
        var date=new Date();
        line = line.replace(/<<name>>/g, name);
        line = line.replace(/<<full name>>/g, fullname);
        line = line.replace(/xxxxxxxxxx/g, mobilenumber);
        line = line.replace(/01-01-2016/g, date);
        return line;
    }
}