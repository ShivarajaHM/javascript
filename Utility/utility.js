const readline=require('readline-sync');

module.exports={
    leap(year){
        if(year%4==0 && year%100!=0 || year%400==0)
        console.log(year+" is leap year");
        else
        console.log(year+" is not leap year");
    },

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
    harmonicNumber(number){
        var sum=0;
        for(let i=1;i<=number;i++)
        {
            sum=1/i;
            console.log(sum);
        }
        console.log("Nth harmonic Value is :"+sum);

    },
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
    distance(a,b){
        var res=Math.sqrt(a*a +b*b);
        return res;
    },
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
    currentSeconds(){
        var date=new Date();
        return date.getSeconds();
    },
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
    
    random() 
    {
        var value = Math.floor(Math.random() * 3);
        console.log(value+1);
        return value;
    },
    
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
    windchill(a,b){
        if(a<=50 && b>3 && b<120){
            var w = 35.74 + 0.6215 * a + (0.4275 * a - 35.75) * Math.pow(b, 0.16);
            console.log("Windchill for temperature " + a + " and wind speed " + b + " is " + w);
        } 
        else 
        {
            console.log("Wrong temperature or wind speed");
        }
    }
    

    
}