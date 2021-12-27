for(y = 1; y <= 31; y++){
	var optn = document.createElement("OPTION");
	optn.text = y;
	optn.value = y;

	var optns = document.createElement("OPTION");
	optns.text = y;
	optns.value = y;

	document.getElementById('day').options.add(optn);
	document.getElementById('dayy').options.add(optns);
}

var d = new Date();
var monthArray = new Array();
monthArray[0] = "იანვარი";
monthArray[1] = "თებერვალი";
monthArray[2] = "მარტი";
monthArray[3] = "აპრილი";
monthArray[4] = "მაისი";
monthArray[5] = "ივნისი";
monthArray[6] = "ივლისი";
monthArray[7] = "აგვისტო";
monthArray[8] = "სექტემბერი";
monthArray[9] = "ოქტომბერი";
monthArray[10] = "ნოემბერი";
monthArray[11] = "დეკემბერი";
for(m = 0; m <= 11; m++) {
    var optn = document.createElement("OPTION");
    optn.text = monthArray[m];
    optn.value = (m+1);
    
    var optns = document.createElement("OPTION");
    optns.text = monthArray[m];
    optns.value = (m+1);

    document.getElementById('month').options.add(optn);
    document.getElementById('monthh').options.add(optns);
}

for(y = 2022; y >= 1900; y--){
	var optn = document.createElement("OPTION");
	optn.text = y;
	optn.value = y;

	document.getElementById('year').options.add(optn);
}

var serv = ["პარაშუტით ხტომა", "საჰაერო ბუშტით ფრენა", "დრონის მართვა"];
for(var i = 0; i < 3; i++){
	var optn = document.createElement("OPTION");
	optn.text = serv[i];
	optn.value = serv[i];

	document.getElementById('servi').options.add(optn);
}

var quarterHours = ["00", "30"];
var times1 = [];
var times2 = [];
var times3 = [];
var fulltime = [];

for(var i = 0; i < 12; i++){
	times1.push((i+9) + ":" + quarterHours[0]);
	times2.push((i+9) + ":" + quarterHours[1]);
	times3.push((i+10) + ":" + quarterHours[0]);
	fulltime.push(times1 + "-" + times2);
	var optn = document.createElement("OPTION");
	optn.text = fulltime[0];
	optn.value = fulltime[0];
	document.getElementById('hours').options.add(optn);
	fulltime = [];
	fulltime.push(times2 + "-" + times3);
	var optns = document.createElement("Option");
	optns.text = fulltime[0];
	optns.value = fulltime[0];
	document.getElementById('hours').options.add(optns);
	times1 = [];
	times2 = [];
	times3 = [];
	fulltime = [];
}

const nameInput = document.querySelector('#nam');
const lastName = document.querySelector('#lastname');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const service = document.querySelector('#servi');
const dayy = document.querySelector('#dayy');
const monthh = document.querySelector('#monthh');
const hours = document.querySelector('#hours');
const email = document.querySelector('#email');
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
	if(lastName.value.length < 1){
		errorNodes[1].innerText = "გვარის გრაფა არ შეიძლება იყოს ცარიელი";
		lastName.classList.add("error-border");
		errorFlag = true;
	}

	if(!emailIsValid(email.value)){
		errorNodes[3].innerText = "არასწორი იმეილ ადრესი";
		email.classList.add("error-border");
		errorFlag = true;
	}

    var optionSelIndex = day.options[day.selectedIndex].value;
    var optionSelectedText = day.options[day.selectedIndex].text;
    if (optionSelIndex == 0) {
        errorNodes[2].innerText = "მიუთითეთ თარიღი";
		day.classList.add("error-border");
		errorFlag = true;
    }
    var optionSelIndex = year.options[year.selectedIndex].value;
    var optionSelectedText = year.options[year.selectedIndex].text;
    if(optionSelIndex == 0) {
    	errorNodes[2].innerText = "მიუთითეთ თარიღი";
    	year.classList.add("error-border");
    	errorFlag = true;
    }

    var optionSelIndex = month.options[month.selectedIndex].value;
    var optionSelectedText = month.options[month.selectedIndex].text;
    if(optionSelIndex == 0){
    	errorNodes[2].innerText = "მიუთითეთ თარიღი";
		month.classList.add("error-border");
		errorFlag = true;    	
    }

    var optionSelIndex = service.options[service.selectedIndex].value;
    var optionSelectedText = service.options[service.selectedIndex].text;
    if(optionSelIndex == 0) {
    	errorNodes[4].innerText = "აირჩიეთ მომსახურება";
    	service.classList.add("error-border");
    	errorFlag = true;
    }

    var optionSelIndex = dayy.options[dayy.selectedIndex].value;
    var optionSelectedText = dayy.options[dayy.selectedIndex].text;
    if (optionSelIndex == 0) {
    	errorNodes[5].innerText = "აირჩიეთ დრო";
    	dayy.classList.add("error-border");
    	errorFlag = true;
    }

    var optionSelIndex = monthh.options[monthh.selectedIndex].value;
    var optionSelectedText = monthh.options[monthh.selectedIndex].text;
    if (optionSelIndex == 0) {
    	errorNodes[5].innerText = "აირჩიეთ დრო";
    	monthh.classList.add("error-border");
    	errorFlag = true;
    }
    var optionSelIndex = hours.options[hours.selectedIndex].value;
    var optionSelectedText = hours.options[hours.selectedIndex].text;
    if (optionSelIndex == 0) {
        errorNodes[5].innerText = "აირჩიეთ დრო";
		hours.classList.add("error-border");
		errorFlag = true;
    }

	if (!errorFlag) {
		success.innerText = "შეტყობინება წარმატებით გაიგზავნა";
	}
}

function clearMessages(){
	for(let i = 0; i < errorNodes.length; i++){
		errorNodes[i].innerText = "";
	}
	success.innerText = "";
	nameInput.classList.remove("error-border");
	lastName.classList.remove("error-border");
	email.classList.remove("error-border");
	
}

function emailIsValid(email){
	let pattern = /\S+@\S+\.\S+/;
	return pattern.test(email);
}