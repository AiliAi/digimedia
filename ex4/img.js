$(document).ready(() => {
    $('img').on('click', event => {
        $(event.currentTarget).hide();
        var color = $(event.currentTarget).attr('alt');
        $('#selection ul').append($('<li>').text(color));
    });

    $('button').on('click', () => { 
        $('img').show();
        $('#selection li').remove();
    });
});