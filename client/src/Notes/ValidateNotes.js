export default function validateNotes(values) {
  let errors = [];

  function validateField(field) {
    if (!(values[field] && values[field].length > 0)) {
      errors.push(field);
    }
  }

  validateField("");

  return errors;
}