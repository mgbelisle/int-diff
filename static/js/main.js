function matches(id) {
    return new Set($(id).val().match(/(\d+)/g));
}

function update() {
    let matches1 = matches('#textarea-1');
    let matches2 = matches('#textarea-2');
    $('#textarea-1-readonly').val([...matches1].filter(x => !matches2.has(x)));
    $('#textarea-2-readonly').val([...matches2].filter(x => !matches1.has(x)));
}

$('#textarea-1').bind('input propertychange', _.throttle(update, 100));
$('#textarea-2').bind('input propertychange', _.throttle(update, 100));
