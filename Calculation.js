function SalCalculator(){

   var amount= parseInt($("#sAmount").val());
   var hours= parseFloat($("#sHours").val());
   var sPay = parseFloat($("#sPay").val());
   var name=$("#sName").val();

   if(name=="")  alert("Name should not be empty. Please enter the name");   
   if(isNaN(amount)||amount<=0)  alert("Hourly wage must be greater than zero or an Integer"); 
   if(isNaN(hours)||hours<=0)  alert(" Hours must be greater than zero or an Integer"); 

   let final_sal=cal_logic(sPay,amount,hours);

   
document.getElementById("sSalary").value=final_sal;
}
function cal_logic(sPay,amount,hours){

    if(sPay==1){//Monthly
        return amount*hours*4;
    }
    else if(sPay==3){//Quarterly
        return amount*hours*12;
     }
    else if(sPay==12){//Yearly
        return amount*hours*52;
         }
    else if (sPay==7){//Weekly
        return amount*hours;
         }  
    else 
        alert("Please select type of pay from the dropdown list ");
        throw error('Please select type of pay from the dropdown list ' )
    
}


function salClear(){
    $("#sAmount").val("");
    $("#sHours").val("");
    $("sPay").val("");
    document.getElementById("sName").value="";
    document.getElementById("sSalary").value="";
}