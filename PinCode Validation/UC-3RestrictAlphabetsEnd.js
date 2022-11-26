console.log("welcome to pin validation");
const pincoderegex = RegExp("^[0-9]{6,}$");

function ValidatePincode(pincode){
    if(pincoderegex.test(pincode))
    console.log(pincode + " : Valid Pin code !!");
    else
    console.log(pincode + " :PINCODE is Invalid !");


}
ValidatePincode("123456");
ValidatePincode("400124")
ValidatePincode("400124B")