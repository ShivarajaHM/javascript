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
    }
}