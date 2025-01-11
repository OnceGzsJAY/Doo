function doo_if(expression ,code ,different_id) {
    the_expression_code = eval(expression);
    let file_id_object = document.getElementById(different_id);
    if (the_expression_code) {
        file_id_object.innerHTML(code);
        return true;
    }else {
        return false;
    }
    return "Error : please email the Doo Team";
}

export { doo_if }