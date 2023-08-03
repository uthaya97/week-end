// var today=new Date();
// console.log(today);
// var year=today.getFullYear();
// console.log(year);
// if(year%4==0){
//     document.write(year+" "+"This year is leaf year");
// }
// else{
//     document.write(year+" "+"This year is not leaf year");
// }
    



    // var today=new Date();
    // console.log(today);
    // today.setFullYear(2025);
    // var b=today.getFullYear();
    // console.log(b);
    // if(b%4==0){
    //     document.write(b+"<br>"+"<br>"+"This year is leap year");
    // }
    // else{
    //     document.write(b+"<br>"+"<br>"+"This year is not leap year");
    // }


    var today=new Date();
    console.log(today);
    var b=today.getDay();
   

    console.log(b);
    if((b==0)||(b==6)){
        document.write(b+" "+"This is week end");
    }
    else{
        document.write(b+" "+ "This is not week end");
    }

      
    
    