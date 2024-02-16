// validation.js

export function validateEmail(email) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
}

export function validateName(name) {
    const regex = /^[A-Za-z]+$/; // Only letters
    return name.length > 1 && name.length < 50 && regex.test(name);
}

export function validatePostcode(postcode) {
     // This regex matches exactly 4 digits
  const regex = /^\d{4}$/; 
  return regex.test(postcode);
}