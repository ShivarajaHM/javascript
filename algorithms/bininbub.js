var binary=require('../Utility/algorithmUtilities');
var time=require('../Utility/utility');
const readline=require('readline-sync');
console.log("1 for Binary Integer");
console.log("2 for Insertion Integer");
console.log("3 for Insertion string");
console.log("4 for bubblesort Integer");
console.log("5 for bubblesort string");
var num=readline.questionInt("enter choice number : ");

switch(num){
    case 1:
        var start=time.currentSeconds();
        var num=readline.questionInt("enter the size of an array : ");
        var arr=[],arr1=[];
        while(num!=arr.length)
        {
            var number=readline.questionInt("enter the array elements : ");
            arr.push(number)
        }
        console.log(arr);
        arr1=binary.bubbleSort(arr);
        var num=readline.questionInt("enter the number to be searched : ");
        var b=binary.binarySearch(arr1,num)
        if(b==true)
        console.log("Number is present");
        else
        console.log("Number is not present");
        var stop=time.currentSeconds();
        var res=stop-start;
        console.log("Time : "+res);
        break;
    case 2:
        function insertion() {
            var arr = [];
            var res = binary.insertArray(arr);
            var res1 = binary.insertion(res);
            console.log(res1);
        }
        insertion();
    break;
     default:
     console.log("Invalid");
}
