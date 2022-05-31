export default function validate (input) {
    let errors = {
        empty: true
    };
    if(!input.concept) {
      errors.concept = "Concept is required"
      errors.empty = false
    } else if(!/^[a-zA-Z\sñáéíóúü:=%&$·"!¿/[ª!?"¡].{2,50}$/i.test(input.concept)) {
      errors.concept = "Concept is invalid (A-Z or a-z), between 0 and 50 characters"
      errors.empty = false
    };
    if (!input.type) {
        errors.type = "Type is required"
        errors.empty = false
    } else if (!/^[a-zA-Z\sñáéíóúüª!:?"¡].{1,10}$/.test(input.type)) {
        errors.type = "Type is invalid"
        errors.empty = false
    };
    if(!input.amount) {
      errors.amount = "Amount is required"
      errors.empty = false
    } else if(!/^(?:[1-9][0-9]{0,4}(?:\.\d{1,2})?|100000|100000.00)$/i.test(input.amount)) {
      errors.amount = "Amount is invalid (0-100000) Optional: With 2 decimals"
      errors.empty = false
    };
    if (!input.category) {
        errors.category = "1 category is required"
        errors.empty = false
    } else if (!/^[a-zA-Z\sñáéíóúüª!:?"¡].{1,500}$/.test(input.category)) {
        errors.category = "Category is invalid"
        errors.empty = false
    };
    return errors;
}