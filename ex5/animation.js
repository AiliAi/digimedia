$(document).ready(function () {
    let top = true;
    let outerWidth = $("nav").outerWidth();
    let outerHeigth = $("nav").outerHeight();

    //navigation hide and show when mouse hoover on top 
    $('nav').hide();
    $(document).mousemove(function (event) {
        //test
        //$("span").text(event.pageX + ", " + event.pageY);

        if (event.pageY == $(document).scrollTop()) {
            $('nav').slideDown(800);
        }
        if (event.pageX > $(document).scrollLeft() + outerWidth || event.pageY > $(document).scrollTop() + outerHeigth) {
            $('nav').slideUp(800);
        }
    });


    //animate page change
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            //animate top to bottom and bottom to top
            if (top == true) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            //animate left to right and right to left
            } else {
                $('html, body').animate({
                    scrollLeft: $(hash).offset().left
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        }
    });

    //button - verical alignment
    $('#vertical').on('click', () => {
        top = true;
        $('body').css(
            {
                display: '',
                width: '',
            },
        );
    });

    //button - horisontal alignment
    $('#horisontal').on('click', () => {
        top = false;
        $('body').css(
            {
                display: 'flex',
                width: '200%',
            },
        );
    });
});

