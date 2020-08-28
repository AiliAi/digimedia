$(document).ready(function(){
    $('p:eq(1)').attr('id', 'sp');
    $('#fp').remove();
    $('#fdiv').css(
        {
            backgroundColor: 'grey',
            color: 'white',
        },
    );
    
    /*
    $('div').click(function() {
        console.log('klikki', $(this).css('background-color'))
    });*/

    $('#nappi').click(function() {
        $('#fdiv').append('<p id="tp">Hello user</p>');
    });

    //$('#4p').hide();

    $('#sdiv').hover(
        function() {
            //$('#4p').show();
            $('#4p').text('About to select a link');
        },
        function() {
            //$('#4p').hide();
            $('#4p').html('&nbsp;');
        },
    );
});