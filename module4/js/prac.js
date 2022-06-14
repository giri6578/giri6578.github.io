var list= new Array();
list[0] = "Nani";
list[1] = "Giri";
list[2] = "Hari";
list[3] = "James";
list[4] = "jhonny";
list[5] = "joe";
list[6] = "mary";
list[7] = "jack";
list[8] = "Jhones";
list[9] = "virat";


// Here we are using charAT to know the the first character in a String list (FYI) below line is for individual test
//console.log("first char of Nani is: " + list[0].charAt(0)); 

 for (var i = 0; i < list.length; i++) {
   // console.log(list[i]);
   if (list[i].charAt(0) == "j" || list[i].charAt(0) == "J"){
    console.log("Goodbye "+ list[i]);
   }
   else{
    console.log("Hello " + list[i]);
   }
 }