function doo_for (min_value ,max_value ,step = 1 ,code) {
    for (idx = min_value ; idx <= max_value ; idx += step) {
        eval(code);
    }
}

export { doo_for }