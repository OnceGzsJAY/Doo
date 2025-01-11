function doo_for (min_value ,max_value ,step = 1 ,id ,code) {
    if (typeof min_value !== 'number' || typeof max_value !== 'number' || typeof step !== 'number') {
        throw new Error('min_value, max_value, and step must be numbers'); // error
    }
    if (typeof code !== 'string') {
        code = String(code); // type to string
    }
    let document_object = document.getElementById(id);
    for (let idx = min_value; idx <= max_value; idx += step) {
        document_object.innerHTML += code;
    }
}

export { doo_for }