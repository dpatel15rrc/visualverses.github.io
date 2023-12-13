/* 
 *  Project 4
 *  Name: Dharmi Patel
 *  Date: 2023-12-09
 *  Description: Project 4
**/

/* FOR INDEX PAGE HAMBURGER MENU */
let menu= document.querySelector('#mobile-menu')
let menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active');
})

/* FOR CONTACT PAGE VALIDATION*/
/* submit form function */
function validateForm(e) {
  hideErrors();

  if (formHasErrors()) {
    e.preventDefault();
    return false;
  }

  return true;
}

/* reset form funtion */
function resetForm(){
  if (confirm('Clear Form?')){
    hideErrors();

    document.getElementById("name").focus();

    return true;
  }

  e.preventDefault();

  return false;
}

/* form error checking */
function formHasErrors() {
  let errorFlag = false;

  let requiredFields = ["name", "email", "phone", "message"];

  for (let i=0; i<requiredFields.length; i++){
    textfield = document.getElementById(requiredFields[i]);
    if (!formFieldHasInput(textfield)){
      document.getElementById(requiredFields[i] + "_error").style.display = "block";

      if (!errorFlag){
        textfield.focus();
        textfield.select();
      }
      errorFlag = true;
    }
  }

  let emailRegex = new RegExp(/^\S+@\S+\.\S+$/);
	let emailValue = document.getElementById("email").value;

	if(!emailRegex.test(emailValue)){
		document.getElementById("emailformat_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}
		errorFlag = true;
	}

  let phoneRegex = new RegExp(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/);
  let phoneValue = document.getElementById("phone").value;

  if(!phoneRegex.test(phoneValue)){
    document.getElementById("phoneformat_error").style.display = "block";
    
    if(!errorFlag){
			document.getElementById("phone").focus();
			document.getElementById("phone").select();
		}
		errorFlag = true;
  }

  return errorFlag;
}

function formFieldHasInput(fieldElement) {
  // Check if the text field has a value
  if (fieldElement.value == null || fieldElement.value.trim() === "") {
      // Invalid entry
      return false;
  }

  // Valid entry
  return true;
}

/* hide errors */
function hideErrors() {
  let errorFields = document.getElementsByClassName("error");
  
  for (let i = 0; i < errorFields.length; i++) {
    errorFields[i].style.display = "none";
  }
}

/* load event */
function load() {
  hideErrors();

  //event listener for the contact form submit
  document.getElementById('contact_form').addEventListener('submit', validateForm);

  //event listener for the form reset
  document.getElementById('contact_form').reset();
  document.getElementById('contact_form').addEventListener('reset', resetForm);
}

document.addEventListener('DOMContentLoaded', load);
