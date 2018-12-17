function myTriangle(){
    var numberx=parseInt(document.getElementById("numberx").value);
    var numbery=parseInt(document.getElementById("numbery").value);
    var numberz=parseInt(document.getElementById("numberz").value);

    if(numberx+numbery>numberz && numberx+numberz> numbery && numbery+ numberz> numberx )
    {
   if(numberx === numbery && numberx === numberz){
    console.log(alert("equilateral triangle"));
   }
   else if(numberx === numbery|| numberx=== numberz || numbery===numberz){
    console.log(alert("isoceles triangle"));
  }
   else if(numberx +numbery > numberz && numberx + numberz > numbery && numbery + numberz > numberx){
    console.log(alert("scalene triangle"));
  }
  else {
    console.log(alert("not a triangle"));
    
    }
}
