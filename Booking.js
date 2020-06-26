function caller(){
    var a=document.getElementById("seat").value;
    calcCost(a);
  }
function calcCost(seat){
    var rate=250;
    var totalcost=rate*seat;
    var discout=50;
    var afterDiscoutCost=(totalcost*discout)/100;
    document.getElementById("output").innerHTML="cost for "+seat+" is: "+totalcost+"<br/>"+"Percentage Discount: "+discout+"<br/>"+"Amout Payable:"+afterDiscoutCost;
   
}
