function validate(){
    
    if(document.myForm.empId.value==""){
        document.getElementById("empIdErr").innerHTML="Please enter ID";
        return false;
    }

    if(document.myForm.firstName.value==""){
        document.getElementById("firstnameErr").innerHTML="Please enter first name";
        return false;
    }

    if(document.myForm.lastName.value==""){
        document.getElementById("lastnameErr").innerHTML="Please enter last name";
        return false;
    }

    if(document.myForm.email.value==""){
        document.getElementById("emailErr").innerHTML="Please enter your email";
        return false;
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }

    if(document.myForm.contactNumber.value==""){
        document.getElementById("contactErr").innerHTML="Please enter contact number";
        return false;
    }
}

