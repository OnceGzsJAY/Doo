function doo_if(expression ,code ,id) {
    let the_expression_code = eval(expression);
    let file_id_object = document.getElementById(id);
    if (the_expression_code) {
        file_id_object.innerHTML = code;
        return true;
    }else {
        return false;
    }
}
export { doo_if }