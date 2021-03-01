$('#add-btn').on('click', function(evt) {

    let $str = $('#input-box').val();
    const emptyRow = $('<tr>');

    $(emptyRow).append('<button class="btn">X</button>');
    $(emptyRow).append($str);
    $('tbody').append(emptyRow);
    $('#input-box').val('')
});

//function to remove rows when clicking on X button
$('tbody').on('click', 'button', function () {
    $(this).closest('tr').remove();
});


