function update() {
    let matches1 = new Set($('#textarea-1').val().match(/(\d+)/g));;
    let matches2 = new Set($('#textarea-2').val().match(/(\d+)/g));;
    $('#textarea-1-readonly').val([...matches1].filter(x => !matches2.has(x)));
    $('#textarea-2-readonly').val([...matches2].filter(x => !matches1.has(x)));
}

$('#textarea-1').bind('input propertychange', _.throttle(update, 100));
$('#textarea-2').bind('input propertychange', _.throttle(update, 100));
