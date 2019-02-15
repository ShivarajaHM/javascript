module.exports={
    inventory(data){
        try{
            var rice=data.rice;
            var wheat=data.wheat;
            var pulses=data.pulses;
            var Rname=0;
            var Wname=0;
            var Pname=0;
        
            
            var valueOfRice=0;
            var valueOfWheat=0;
            var valueOfPulses=0;
            for(let key in rice){
                var num=rice[key].weight*rice[key].price;
                console.log("cost of "+rice[Rname].rname + " is:"+ num + "Rs");
                Rname++;
                valueOfRice=valueOfRice+num;                
            }
            console.log("\n Totalvalue of rice : "+valueOfRice +" Rs");
            for(let key in wheat){
                var num=wheat[key].weight*wheat[key].price;
                console.log("cost of "+wheat[Wname].wname + " is:"+ num + "Rs");
                Wname++;
                valueOfWheat=valueOfWheat+num;                
            }
            console.log("\n Totalvalue of rice : "+valueOfWheat +" Rs");
            for(let key in pulses){
                var num=pulses[key].weight*pulses[key].price;
                console.log("cost of "+pulses[Pname].pname + " is:"+ num + "Rs");
                Pname++;
                valueOfPulses=valueOfPulses+num;                
            }
            console.log("\n Totalvalue of rice : "+valueOfPulses +" Rs");
            

        }
        catch(error){
        console.log(error.message);
        
        }   
    }
}