$('form').on('submit', function(e) {
    e.preventDefault()
    const nomeLista = $('#nome-lista').val()
    const novoItem = $('<li style="display: none"></li>');

    $(`<li>${nomeLista}</li>`).appendTo(novoItem);

    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#nome-lista').val('');
    $(document).on('click', 'li', function() {
        $(this).toggleClass('riscar');
    });

})
