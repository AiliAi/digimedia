$(document).ready(() => {
    $('img').hide();

    $('img').on('click', event => {
        $(event.currentTarget).hide();
        var color = $(event.currentTarget).attr('src').split('.')[0];
        $('#selection ul').append($('<li>').text(color));
    });

    $('button').on('click', () => { 
        $('img').show();
        $('#selection li').remove();
        $('#advice').html('select your favourite colour among the colours');
        $('#img1').attr('src', 'red.jpg');
        $('#img2').attr('src', 'blue.jpg');
        $('#img3').attr('src', 'yellow.jpg');
        $('#sel').html('your favourite colours in order');
    });
});

  