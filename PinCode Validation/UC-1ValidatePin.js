console.log("welcome to pin validation");
const pincoderegex = RegExp("^[0-9]{6,}$");

function ValidatePincode(pincode){
    if(pincoderegex.test(pincode))
    console.log(pincode + " : Valid Pin code !!");
    else
    console.log(pincode + " :PINCODE is Invalid !");


}
ValidatePincode("12345");
ValidatePincode("123456")