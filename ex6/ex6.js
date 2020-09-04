$(document).ready(() => {

    const apiurl = 'http://api.tvmaze.com/search/shows?q=';

    $('#hakunappi').on('click', () => { 
        $.getJSON(apiurl + hakuteksti.value , (data) =>{
            //console.log(data);

            $('li').each(function() {
                $(this).remove();
              });

            $.each(data, (index, value) =>{
                console.log(index, value);
                $('ul').append($('<li>' + value.show.name + '</li>'));
                $('ul').append($(value.show.image ? '<li><img src=' + value.show.image.medium + '></li>' : ''));
                $('ul').append($('<li>' + value.show.genres + '</li>'));
                $('ul').append($('<li>' + value.show.url + '</li>'));
                $('ul').append($('<li>' + value.show.summary + '</li>'));
            });
                        
        });
    });
});