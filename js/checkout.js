
document.querySelector("button").addEventListener("click",checkOut,false);

function checkOut(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var bankName = document.getElementById("bankName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var homePhone = document.getElementById("homePhone").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var cardDate = document.getElementById("cardDate").value;


    

 var flag=1;

    if( (firstName.length <= 0)||firstName <= " "){
        alert("ENTER VALID FIRST NAME"); flag=0;

    }  else if( (lastName.length <= 0)|| lastName <= " "){
        alert("ENTER VALID LAST NAME"); flag=0;
    }
       else if( (mobileNumber.length !=10)||(mobileNumber.length == " " )){
        alert("ENTER VALID MOBILE NUMBER"); flag=0;
    }
    else if( (cardNumber.length !=16)||(cardNumber.length == " " )){
        alert("ENTER VALID CARD NUMBER"); flag=0;
    }
    else if(flag==1){
        window.location.href = 'success.html';
    }
    
}