
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');


function validationForm(){

	clearMessages();
	let errorFlag = false;

	if(nameInput.value.length < 1){
		errorNodes[0].innerText = "სახელის გრაფა არ შეიძლება იყოს ცარიელი";
		nameInput.classList.add("error-border");
		errorFlag = true;
	}

	if(!emailIsValid(email.value)){
		errorNodes[1].innerText = "არასწორი იმეილ ადრესი";
		email.classList.add("error-border");
		errorFlag = true;
	}

	if(message.value.length < 1){
		errorNodes[2].innerText = "შეიყვანეთ შეტყობინება";
		message.classList.add("error-border");
		errorFlag = true;
	}

	if (!errorFlag) {
		success.innerText = "შეტყობინება წარმატებით გაიგზავნა"
	}
}

function clearMessages(){
	for(let i = 0; i < errorNodes.length; i++){
		errorNodes[i].innerText = "";
	}
	success.innerText = "";
	nameInput.classList.remove("error-border");
	email.classList.remove("error-border");
	message.classList.remove("error-border");
}

function emailIsValid(email){
	let pattern = /\S+@\S+\.\S+/;
	return pattern.test(email);
}