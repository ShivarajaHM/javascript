const readline=require('readline-sync');

module.exports={

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
    binarySearch(arr, number) {
        console.log("in binary search " + arr)
        var n = arr.length;
        var l = 1;
        var tem;
        while (tem != number) {
            if (n < l)
                break;
            var m = l + Math.floor((n - l) / 2)
    
            if (arr[m] < number)
                l = m + 1
            else if (arr[m] > number)
                n = m - 1;
            else if (arr[m] == number) {
                console.log("number is present")
                tem = number;
                return true;
            }
            else {
                break;
                return false;
            }
    
    
        }
    
    
    },
   
    binaryString(res, low, high, ele) 
    {
        var mid;
    
        while (high >= low) 
        {
            mid = Math.floor(low + (high - low) / 2);
            if (res[mid] == ele) 
            {
    
                return mid;
            }
            else if (res[mid] > ele) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
        return -1;
    },
    
    insertArray(arr) {
        var number = readline.question("Enter total number of array elements : ");
        console.log("Enter your Array elements : ");
        for (let index = 0; index < number; index++) {
            arr[index] = Number(readline.question(""));
        }
        return arr;
    },

    insertion(res) 
    {
        for (let i = 1; i < res.length; i++) 
        {
            var point = res[i];
            var j = i - 1;
            while (j >= 0 && res[j] > point) 
            {
                res[j + 1] = res[j];
                j = j - 1;
            }
            res[j + 1] = point;
        }
        return res;
    },
    insertionString(str) 
    {
        var ch = str;
        for (let i = 0; i < ch.length; i++) 
        {
            var point = ch[i];
            var j = i - 1;
            while (j >= 0 && ch[j] > point) 
            {
                ch[j + 1] = ch[j];
                j = j - 1;
            }
            ch[j + 1] = point;
        }
        return ch;
    },
    
    bubbleSort(res) 
    {
        for (let i = 0; i < res.length; i++) 
        {               
            for (let j = i + 1; j < res.length; j++) 
            {
                if (res[i] > res[j]) 
                {
                    var temp = res[i];   
                    res[i] = res[j];
                    res[j] = temp;
                }
            }
        }
        return res;
    },
    bubbleString(str) 
    {
        var ch = str;
        for (let i = 0; i < ch.length; i++) 
        {
            for (let j = 0; j < ch.length; j++) 
            {
                if (ch[j] > ch[j + 1]) 
                {
                    var temp = ch[j];
                    ch[j] = ch[j + 1];
                    ch[j + 1] = temp;
                }
            }
        }
        return ch;
    }
    

}