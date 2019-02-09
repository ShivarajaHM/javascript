const readline=require('readline-sync');

module.exports={
//--------------------------------BUSINESS LOGIC'S----------------------------------------
/************************************* Flip Coin *****************************************/ 
/* Flip Coin
*---------------
* @purpose : By using random function flip the coin. accept user input to flip number of times to flip coin
*            and print the percentage of head vs tails
*
* @description : Declaring a function and passing the userinput for fliping the coin
*                no of times
* @function: coinflip takes the no of times to flip coin and print the percentage of
*            head and tail
*/ 

flipCoin(times){
    var tails=0,heads=0;
    for(let index=0;index<times;index++){
        var value=Math.random();
        if(value<0.5)
        tails++;
        else
        heads++;
                
    }
    console.log("the percentage of heads is: "+(heads/times)*100+"%");
    console.log("the percentage of tails is: "+(tails/times)*100+"%");
},


/**************************************** Leap year ************************************/
/*3. Leap year
*--------------
* @purpose : Accept four digit input of year from the user and check given inputs is Leap year or not
*
* @description : Declaring a function and passing the four digit number from  user input.
*                
* @function: function checks length of the given number, if length equals to 4, then it prints
*given number is Leap year or not.
*/ 

    leap(year){
        if(year%4==0 && year%100!=0 || year%400==0)
        console.log(year+" is leap year");
        else
        console.log(year+" is not leap year");
    },

/*********************************** Power of Two ****************************************/
/* 4. Power of Two
*------------------
* @purpose : To Accept value of "N" from user and prints a table of the powers of 2 
*that are less than or equal to 2^N. value of N should be less then 31.
*
* @description : Prints the value of two's power
*                
* @function: function checks the given number is less then 31, if less then 31, then it prints
the value of two's power i.e., 2^N value.
*/   
    powerOfTwo(number) {
		
		
		if(number<31)
		{
		 for(let i=0;i<=number;i++)
		 {
			var res=Math.pow(2,i);
			//console.log(res);
         }
         console.log(res);
        }
        else
         console.log("You are entered grearthan 31 so overflows..")
		
    },

//********************************** Harmonic Number **********************************/
/* 5. Harmonic Number 
*--------------------
* @purpose : To generate Harmonic numbersTo Accept value of "N" from user and prints a table of the powers of 2 
*that are less than or equal to 2^N. 
*
* @description : To generate sum of harmonic numbers by accepting input from user.
*                
* @function: function Harmonic function takes user input and sum it number of times that user given.
*/
    harmonicNumber(number){
        var sum=0;
        for(let i=1;i<=number;i++)
        {
            sum=1/i;
            console.log(sum);
        }
        console.log("Nth harmonic Value is :"+sum);

    },

//********************************** Factor ******************************************/
/*6. Factors 
*-----------
* @purpose : To compute the prime factorization of N using brute force.
*
* @description : To compute the prime factorization of N by accepting input from user.
*                
*/
    primeFactor(number){
        console.log("prime factor of "+number+" is :");
        var i=2;
        while(i<=number){
            if(number%i==0){
                console.log(" "+i);
                number=number/i;
            }else if(number%i!=0){
                i++;
            }
        }
    },

//*************************************** Gambler **************************************/
/*7. Gambler 
*-----------
* @purpose : Simulates a gambler who start with some initial stake amount and place fair 1 bets until 
*he/she goes broke (i.e. has no money) or reach goal(gains expected amount). Keeps track of the number of 
*times he/she wins and the number of bets he/she makes. will run the experiment N times, 
*averages the results, and prints them out.
*
* @description : Play till the gambler is broke or has won
*                
*/
    gambler(stake,goal,number){
        var win=0,loss=0;
        for(let i=0;i<=goal;i++){
            while(stake>0 && stake<number && goal>0){
                if(Math.random()<0.5){
                    stake++;
                    win++;
                    goal--;
                }else{
                    stake--;
                    loss++;
                    goal--;
                }
            }
        }
        var perwin=(win*100)/(win+loss)
        var perloss=(loss*100)/(win+loss);

        console.log("The gambler is won : "+win);
        console.log("The gambler is loss : "+loss);
        console.log("Win percentage is : "+perwin+" %");
        console.log("Loss percentage is : "+perloss+" %");
    },

//*********************************** Coupon Numbers **************************************/
/*8. Coupon Numbers
*------------------
* @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
*need to generate distinct coupon number? This program simulates this random process.
*
*
* @description : total random number needed to have all distinct numbers.
*                
*/
   generatecoupon(number){
        var ar=[];
        for(var i=0;i<number;i++){
            ar[i]=Math.floor(Math.random()*number);
            for(var j=0;j<i;j++){
                if(ar[i]==ar[j]){
                    i--;
                }
            }
        }
        console.log(ar);
    },

//*********************************** 2D Array **************************************/
/*9. 2D Array
*------------------
* @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
*need to generate distinct coupon number? This program simulates this random process.
*
*
* @description : total random number needed to have all distinct numbers.
*                
*/
    twoDArray(m,n,arr){
        
        for(let i=0;i<m;i++){
            arr.push([]);
            for(let j=0;j<n;j++){
                arr[i][j]=readline.question("Enter value: ");
            }
            
        }
        return arr;
    },

    printArray(arr){
        for(let i=0;i<arr.length;i++){
            console.log(arr[i]);
        }
    },

    arrayCall(arr){
        var number=readline.question("Enter the number of elements : ");
        console.log("the elements are ");
        for(let i=0;i<number;i++){
            arr[i]=readline.question("");
        }
        return arr;
    },

//***************************** Sum of three Integer adds to ZERO ***********************/
/*10. Sum of three Integer adds to ZERO
*------------------
* @purpose : A program with cubic running time. Read in N integers and counts the 
*number of triples that sum to exactly 0.
*
*
* @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
*                
*/
    sumOfthree(res){
        var count=0;
        for(let i=0;i<res.length;i++){
            for(let j=i+1;j<res.length;j++){
                for(let k=j+1;k<res.length;k++){
                    if(Number(res[i])+Number(res[j])+Number(res[k])==0){
                        count++;
                        console.log("["+res[i]+","+res[j]+","+res[k]+"]");
                    }
                }
            }
        }
        console.log("Total number of count is : "+count);
    },

//************************************* Distance ***************************************/
/*11. Distance
*-------------
* @purpose : A program with cubic running time. Read in N integers and counts the 
*number of triples that sum to exactly 0.
*
*
* @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
*                
*/
    distance(a,b){
        var res=Math.sqrt(a*a +b*b);
        return res;
    },

//********************************** Permutation of String ***************************************/
/*12. Permutation of string
*--------------------------
* @purpose : A functions to return all permutation of a String 
*
*
* @description : Checks if the arrays returned by two string functions are equal.
*                
*/
    permuatation(val){
        var arr=val.split("");
        console.log(arr);
        var arr1=[];
        const a=val.length;
        for(let i=0;i<arr.length;i++){
            var value="";
            for(let j=i;j<a;j++){
                value=value+arr[j];
                var b=val.length-value.length;
            }
            if(arr1.length<arr.length){
                value=value+val.substring(0,b);
            }
            if(!arr1.includes(value)){
                arr1.push(value);
            }
        }
        console.log(arr1);
    },

//************************************* Stop Watch ***************************************/

/*
* @description: return the time in seconds from 1970.
*/
    
    currentSeconds(){
        var date=new Date();
        return date.getSeconds();
    },
    
/*13. Stop Watch
*-------------
* @purpose : A Stopwatch Program for measuring the time that elapses between 
the start and end clicks
*
*
* @description :Measure the elapsed time between start and end.
*                
*/
    stopwatch(read){
        var start=0,stop=0;
        var time1=read.question("Press 0 to start timer : ");
        {
            var time2=0;
            start=this.currentSeconds();
            var time2=read.question("Press 1 to stop timer : ");
            {
                stop=this.currentSeconds();
                console.log("elapsed time is : "+(stop-start)+" seconds");
            }
        }
    },

//************************************* Tic-Tac-Toe ***************************************/
/*14. Tic-Tac-Toe
*-----------------
* @purpose : Program to play a Cross Game or Tic-Tac-Toe Game. 
*
*
* @description : Program to play a Cross Game or Tic-Tac-Toe Game. Player 1 is the 
* Computer and the Player 2 is the user. Player 1 take Random Cell that is the Column
* and Row. 
*                
*/
    intializeGame() 
    {
        var game = [];
        for (let i = 0; i <= 2; i++) 
        {
            game.push([]);
            for (let j = 0; j <= 2; j++)
                game[i][j] = '-';
        }
        return game;
    },
    // random function generate 0,1,2
    random() 
    {
        var value = Math.floor(Math.random() * 3);
        console.log(value+1);
        return value;
    },
    // mark the values for game
    mark(game, x, y, value) 
    {
        if (game[x][y] == '-')
            game[x][y] = value;
        for (let i = 0; i <= 2; i++) 
        {
            var print = [];
            for (let j = 0; j <= 2; j++)
                print[j] = game[i][j];
            console.log(print);
        }
        return game;
    },
    //computer side playing
    computerPlayer(game) 
    {
        var arr;
        var flag = false;
        while (flag == false) 
        {
            var x = this.random();
            var y = this.random();
            if (game[x][y] == '-') 
            {
                arr = this.mark(game, x, y, 'O');
                flag = true;
            }
        }
        return game;
    },
    // user side playing
    userPlayer(game) 
    {
        var flag = false;
        while (flag == false) 
        {
            console.log("Enter the row value:");
            let x = readline.questionInt('Enter the value of x within 1,2,3 : ')-1;
            let y = readline.questionInt('Enter the value of y within 1,2,3 : ')-1;
            if (game[x][y] == '-') 
            {
                this.mark(game, x, y, 'X');
                flag = true;
            }
            else
                console.log("Please enter the correct choice");
        }
        return game;
    },
    //check the entered number assigning correct place or not
    check(game) 
    {
        for (let i = 0; i <= 2; i++) 
        {
            if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) 
            {
                if (game[i][0] == 'O' || game[i][0] == 'X') 
                {
                    return true;
                }
            }
            if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) 
            {
                if (game[0][i] == 'O' || game[0][i] == 'X') 
                {
                    return true;
                }
            }
        }
        var k = 0, l = 0;
        if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) 
        {
            if (game[0][0] == 'O' || game[0][0] == 'X') 
            {
                return true;
            }
        }
        if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) 
        {
            if (game[0][0] == 'O' || game[0][0] == 'X')
            {
                return true;
            }
        }
        return false;
    },

 //************************************* Root of a equation ***************************************/
/*15. Root of a equation
*-----------------
* @purpose : To find the roots of the equation a*x*x + b*x + c. 
*Since the equation is x*x, hence there are 2 roots. The 2 roots of the equation can be 
*found using a formula.
*
*
* @description : Take a, b and c as input values to find the roots of x.
*                
*/
    quadroot(a,b,c){
        var delta=(b*b)-(4*a*c);
        console.log(delta);
        if(delta==0){
            var root=-b/(2*a);
            console.log(root);
        }
        else if(delta>0){
            var root1 = (-b + (Math.sqrt(delta))) / 2 * a;
            var root2 = (-b - (Math.sqrt(delta))) / 2 * a;
            console.log("First root " + root1);
            console.log("Second root " + root2);
        }
        else if (delta < 0){
            var root1 = -b / 2 * a;
            var root2 = (Math.sqrt(-delta)) / 2 * a;
            console.log("First root : " + root1, "i :", root2);
            console.log("Second root : " + root1, "-i :", root2);
        } 
        else{
            console.log("Invalid number");
        }
    },

//************************************* Wind Chill ***************************************/
/*16. Wind Chill
*-----------------
* @purpose : To find the windchill. The temperature t (in Fahrenheit) and the
* wind speed v (in miles per hour),the National Weather Service defines the 
*effective temperature (the wind chill) .
*
* @description : The formula is given by the national weather service. Formula is not
* valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 3  
*                
*/
    windchill(a,b){
        if(a<=50 && b>3 && b<120){
            var w = 35.74 + 0.6215 * a + (0.4275 * a - 35.75) * Math.pow(b, 0.16);
            console.log("Windchill for temperature " + a + " and wind speed " + b + " is " + w);
        } 
        else 
        {
            console.log("Wrong temperature or wind speed");
        }
    },

/************************************ End Of Functional Programs *************************/


/************************************ Algorithm Programs **********************************/

/************************************ Anagram Detection **********************************/
/*1.0 Anagram Detection
*-----------------
* @purpose : Take 2 Strings as Input such abcd and dcba and Check for Anagrams
*
* @description : One string is an anagram of another if the second is simply a rearrangement 
* of the first. For example, 'heart' and 'earth' are anagrams...  
*                
*/


isAnagram(a,b){
    var x=[];
    x=a.toLowerCase();
    var y=[];
    y=b.toLowerCase();
    if(x.length!=y.length){
        console.log("Given string is not Anagram.");
    }
    else{
        var m=[],n=[];
        m=x.split("");
        n=y.split("");
        x=m.sort();
        y=n.sort();
        if(x.length==y.length){
            var j=0;
            while(j<x.length){
            for(let i=0;i<x.length;i++){
                if(x[j]!=y[i]){
                    return false;
                }else{
                    j++;
                }
            }      
        }return true;
    }
    }
    },

/************************************ Is Prime Number **********************************/
/*1.1 Is Prime Number
*-----------------
* @purpose : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
*
* @description : Find prime Numbers 
*                
*/  
    isPrime(n){
        if(n==0||n==1){
            return false;
        }else{
            for(let i=2;i<n;i++){
                if(n%i==0){
                    return false;
                }
            }
            return true;
        }
    },

/************************************ is Palimdrome **********************************/
/* Is Palindrome
*
* Purpose      : Use the random number that should print in the reverse order . then, the 
* reverse ordered string or number must be equal to given user input.it is similar to anagram
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with palinddrome.
             
*/
    isPalimdrome(string1){
        var str = "";
        for (let index = 0; index < string1.length; index++){
            str = string1.charAt(index) + str;
            }
        if (str == string1){
            return true;
        }
        return false;
    },

/* *************************** number is palindrome or not ****************************/
    
    isPalimdrome2String(num1,num2){
    var str="";
    num1=num1+"";
    num2=num2+"";
    for (let i = 0; i < num1.length; i++){
        str=num1.charAt(i)+str;
    }
    if(str==num2){
        return true;
    }
    return false;
    },

/* ******************************** anagram number or not ******************************/
     
    isAnagramNum(num,num1){
        var m=[],n=[];

        m=num.split("");
        n=num1.split("");
        if(m.length!=n.length){
            return false;
        }
        else{
        m=m.sort();
        n=n.sort();
        var j=0;
        while(j<m.length){
            for(let i=0;i<m.length;i++){
                if(m[j]!=n[i]){
                    return false;
                }else{
                    j++;
                }
            } 
            return true;
        }
    }
    },

/* ************************* It is anagrampalindrome or not ****************************/
/* Is Prime2String

* Purpose      : Prints anagram palindrome numbers.
*
*  @descriptipn: To prints 1 to 1000 between Prime anagram palindrome numbers.
*             
*/
    isAnagramPalimdrome(){
        var arr=[];
        for (let index = 0; index < 1000; index++) 
        {
            if (this.isPrime(index)) 
            {
                arr.push(index);
            }
    
        }
        for (let i = 0; i < arr.length; i++) 
        {
            for (let j = i+1; j < arr.length; j++) 
            {
                if(this.isAnagramNum(arr[i].toString(),arr[j].toString()))
                {
                    if(this.isPalimdrome2String(arr[i],arr[j]))
                    {
                        console.log(arr[i],"  ",arr[j]);
                    }
                }
            }
        }
    },

/************************************ Find Number **********************************/
/* To find a number 
----------------------
----------------------
* Purpose      : It is going to find the number that is between what we have to given to 
                 user input.Here we have to fix the limit.it is going to generate the random numbers
                 between the given limit.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.                    
*/ 
    findNumber(low,high,readline){
        var mid = low + Math.floor((high - low)/2)
        console.log(mid)
        if (low<high)
        {
            if(low==high-1)
            {
                var c;
                c = readline.question("Is the number "+low +" if yes, press 'Y'. Else Press 'N' : ")
                if(c=='y')
                return low;
                if(c=='n')
                return high;
            }
            c = readline.question("Is the number "+mid+-+high+" if yes, press 'Y'. Else Press 'N' : ")
            if(c=='y')
            mid = this.findNumber(mid, high, readline)
            if(c=='n')
            mid = this.findNumber(low, mid-1, readline)
        }
        return mid;
    },

/* ******************************* file call function **********************************/   
    
    fileCall() 
    {
        var fileStream = require('fs');
        var f = fileStream.readFileSync('../file.txt', 'utf8');
        var arr = f.split(' ');
        return arr;
    },

/* ***************************** create array function *********************************/
    
    createArray(num) {
		var arr = [];
		for (let index = 0; index < num; index++)
			arr[index] = readline.questionInt("Enter the element");
		return arr;
    },
    
/* ***************************** insertionsort algorithm ********************************/
/* insertion sort
* Purpose      : It is a insertion sort form sorting.it is going to sort a numbers or variable in
*                the ascending and descending order.Taken input from the user.It is going 
*                to check the next element.If it is bigger than this then it should be 
*                swapped.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.                    
*/     
    insertionsort(arr){
        var a;
        for(let i=0;i<arr.length;i++){
            for(let j=i;j>0;j--){
                if(arr[j]<arr[j-1]){
                    a=arr[j];
                    arr[j]=arr[j-1];
                    arr[j-1]=a;
                }
            }
        }
        return arr;
    },

/* ******************************* bubblesort algorithm**********************************/
/* bubble sort
* Purpose      : It is a bubble form sorting.it is going to sort a numbers or variable in
*                the ascending and descending order.Taken input from the user.It is going 
*                to check the next element.If it is bigger than this then it should be 
*                swapped.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.                    
*/   
    bubblesort(arr){
        var a;
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<(arr.length-i-1);j++){
                if(arr[j]>arr[j+1]){
                    a=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=a;
                }
            }
        }
        return arr;
    },

/* ******************************** mergesort algorithm**********************************/
 /* mergesort
* Purpose      : It is a mergesort form sorting.it is going to sort a numbers or variable in
                 the ascending and descending order.Taken input from the user.It is going to check the
                 next element.If it is bigger than this then it should be swapped.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.                    
*/  
    mergesort(arr){
        if(arr.length === 1){
            return arr;
        }
        const m=Math.floor(arr.length/2);
        const left=arr.slice(0,m);
        const right=arr.slice(m);
        return this.merge(
            this.mergesort(left),
            this.mergesort(right)
        );

    },
    
    merge (left, right) {
        let result = [];
        let i = 0;
        let j = 0;
      
        while (i < left.length && j < right.length) {
          if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
          } else {
            result.push(right[j]);
            j++;
          }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    },

 /* *************vendingmachine calculate total notes counts entered amount*************/   
/* Vending Machine
* Purpose     : It is going to generate the seperate and multiple amount based on our user
                requirements.it wil give in the seperate order.
*
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.                    
*/   
    vendingMachine(amount, i, notes) {
		var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
		if (amount == 0 && i == arr.length) {
			console.log("Total number of notes ", notes);
			return;
		}
		if (Math.floor(amount / arr[i]) > 0) {
			console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
			notes = notes + Math.floor(amount / arr[i]);
			amount = amount % arr[i];
			this.vendingMachine(amount, i + 1, notes);
			return;
		}
		this.vendingMachine(amount, i + 1, notes);
    },

/* ************************************ day of week ***********************************/
/* Day of week

* Purpose     : It is used to calculate the respective day from our given input.
                that is depends on given day ,month and year.
*
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.                    
*/     
    dayOfWeek(d, m, y) {
		var y0 = y - Math.floor((14 - m) / 12);
		var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
		m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
		var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
		return d0;
    },

/* ********************* temperature convertion depending on user************************/
/* Temperature Conversion based on formulae
 
* Purpose     : It is used to calculate the temperature based on our formulae.
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.                    
*/     
    temperaturConversion(temp, i) {
		var ctof, ftoc;
		if (i == 1) {
			ctof = (temp * 9 / 5) + 32;
			console.log("Converting temperature from celsius to fahreinheit:" + ctof);
		}
		if (i == 2) {
			ftoc = (temp - 32) * 5 / 9;
			console.log("Converting temperature from fahreinheit to celsius:" + ftoc);
		}
    },

/* *************calculating monthly payment input taken from command line***************/    
/* Monthly payment

* Purpose      : It is used to calculate the EMI depends on formulae.
* @descriptipn : Declaring the function and passing the userinput as argument.
* @function    : Diplayname takes the userinput and print it with some sentence.                    
*/      
    payment(p,y,r){
        var n=12*y;
        var r1=r/(12*100);
        var res=(p*r1)/(1-Math.pow(1+r1,(-n)));
        console.log("Payment is : "+res);
    },

/* ********Convrting decimal to binary number and binary number display base 2***********/
/* Convert to Binary

* Purpose      :It is used to generate the random numbers that should converted into 
                Binary form.
* @descriptipn :Declaring the function and passing the userinput as argument.
* @function    :Diplayname takes the userinput and print it with some sentence.                    
*/    
    tobinary(num){
        var str = num.toString();
        var bin = (+str).toString(2);
        var s=" ";
        console.log(bin);
        var j=bin.length-1;
        for(let i=0;i<bin.length;i++){
            var res=Math.floor(Math.pow(2,j));
            
            if(bin[i]==1){
            s=s+res+"+";
            bin.length--;
            j--;
            }else{
            s=""+s;
            bin.length--;
            j--;
            }
            
        }
        console.log(num+" = "+s);
        
    },

/* ************************** squareroot of given number********************************/
/* Square root of a number

* Purpose     :It is used to generate the random numbers that can be squared by a formula
               finally that must be in positive value.
* @descriptipn:Declaring the function and passing the userinput as argument.
* @function   :Diplayname takes the userinput and print it with some sentence.                    
*/ 
    sqrtfun(num){
        if(num>0){
            var t=num;
            var epsilon = 1e-15;
            while(Math.abs(t-num/t)>epsilon*t){
                t=(num/t+t)/2;
            }
            console.log("square root of non negative number is : "+t);
        }
        else{
            console.log("Invalid or negative number");
        }
    }
    

/******************************* The End of first Week ********************************/

    
}