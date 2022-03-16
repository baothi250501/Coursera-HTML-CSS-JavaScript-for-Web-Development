function billingFunction(){
    var isSame = document.getElementById("same");
    var billingName = document.getElementById("billingName");
    var billingZip = document.getElementById("billingZip");
    if (isSame.checked){
        var shippingName = document.getElementById("shippingName");
        var shippingZip = document.getElementById("shippingZip");
        billingName.value= shippingName.value;
        billingZip.value = shippingZip.value;
    } else {
        billingName.value= "";
        billingZip.value = "";
    }
}