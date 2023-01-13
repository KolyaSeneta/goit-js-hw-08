var throttle = require('lodash.throttle');
const noUpdate = JSON.parse(localStorage.getItem('feedback-form-state'));
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name=email]');
const message = document.querySelector('.feedback-form textarea');
import { loadFromLS, saveToLS } from "./helper";

form.addEventListener('input', throttle(onFormData, 500));

let formData = loadFromLS('feedback-form-state') || {};


function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', e => {
    
    const data = loadFromLS('feedback-form-state') || {};

    const nameElem = e.target.name;
    // const value = e.target.value;
    // e.target.email;
    // e.target.message;
    // saveToLS(nameElem, value);
    // console.log(nameElem, value );
    data[nameElem] = e.target.value;
    saveToLS('feedback-form-state', data);
});
form.addEventListener('submit', e => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const message = e.target.message.value;
    // console.log(email, message);
    
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem("feedback-form-state")
    form.reset()
  formData = {};
    
   
});
(function dataFromLocalStorage() {
  if (noUpdate) {
    email.value = noUpdate.email || "";
    message.value = noUpdate.message || "";
  }
})();
