# triangle

Ingenzi Assumpta

This project is about to build an application that will help us know whether a triangle is isosceles, equilateral, scalene or NOT a triangle at all.

## Function

function myTriangle(){
    var numberx=parseInt(document.getElementById("numberx").value);
    var numbery=parseInt(document.getElementById("numbery").value);
    var numberz=parseInt(document.getElementById("numberz").value);

if(numberx === numbery && numberx === numberz && numbery === numberz){
    console.log(alert("equilateral triangle"));
}
else if(numberx === numbery|| numberx < numberz || numbery < numberz){
    console.log("isoceles triangle");
}
else if(numberx +numbery !==numberz ||numberx + numberz !==numbery ||numbery + numberz !==numberx){
    console.log("scalene triangle");
}
else{
    console.log("not a triangle")
}
}
## set up
Google Chrome
Visual Studio Code
Terminal

##DBB
    
 |-----------------------------------|------------|---------------| 
 |Behavior                           |   input    |    Output     | 
 |-----------------------------------|------------|---------------| |                                   |            |               |
 |                                   |            |               |
 |                                   |            |               |
 |                                   |            |               |
 |                                   |            |

## contributors
-Ingenzi Assumpta <ingenziass@gmail.com>

## License & Copyright
(c)Ingenzi Assumpta,2018

## Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc








