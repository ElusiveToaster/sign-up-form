

document.getElementById("submitButton").addEventListener("click", function(){
	document.getElementById("sign-up-form").className="submitted";
    const pwdVal = document.getElementById('pwd').value;
    const pwdConfirmVal = document.getElementById('pwdConfirm').value;
    const pwdConfirm = document.getElementById('pwdConfirm');
    if (pwdVal != pwdConfirmVal) {
        pwdConfirm.setCustomValidity('Passwords must match');
        pwdConfirm.reportValidity();
    } else {
        pwdConfirm.setCustomValidity('');
        pwdConfirm.reportValidity();
    }
});

function pwdValidity() {
    const pwdVal = document.getElementById('pwd').value;
    const pwdConfirmVal = document.getElementById('pwdConfirm').value;
    const pwdConfirm = document.getElementById('pwdConfirm');
    if (pwdVal == pwdConfirmVal) {
        pwdConfirm.setCustomValidity('');
        pwdConfirm.reportValidity();
    }
    
}

function testValidity() {
    const formInput = document.querySelector('input')

    formInput.reportValidity();
    console.log('test');
}



