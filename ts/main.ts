window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    
    // Validate first name
    validateTxtInput("first-name", "First name is required");
    
    // Validate last name
    validateTxtInput("last-name", "Last name is required");

    // Validate date of birth
    ValidateDobInput();

    // reset error messages 
    resetErrorMessages();
}

function ValidateDobInput() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isDateValid(dob)) {
        //let errSpan = dobBox.nextElementSibling;
        //dobBox.nextElementSibling.innerHTML = "Format should be mm/dd/yyyy";
        let errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "Format should be mm/dd/yyyy";
    }
}

function isDateValid(input:string):boolean{
    // Validating mm/dd/yyyy and m/d/yyyy
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{1,4}$/g;
    return pattern.test(input);
}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form > span");

    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];

        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }

        else{
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the text box with the given id has some text inside it
 * @param id the id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of the text box 
 * @returns 
 */
function validateTxtInput(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errorSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errorSpan.innerText = errMsg;
        return false;
    }
    return true;
}

