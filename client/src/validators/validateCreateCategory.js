export default function validate (input) {
    let errors = {
        empty: true
    };
    if(!input.category) {
      errors.category = 'Category is required'
      errors.empty = false
    } else if(!/^[a-z]+$/i.test(input.category)) {
      errors.category = 'Category is invalid (A-Z or a-z)'
      errors.empty = false
    };
    return errors
}