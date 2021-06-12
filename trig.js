jQuery(function () {

    var x = 0; var h = 0; var H = 0;
    var y = 0;

    var i = 0; var a = 0; var b = 0;

    var hor = 0; var ver = 0;
    var SinA = 0; var CosA = 0;

    var Width = 0; var Height = 0;
    var radian = 180 / Math.PI;

    function ClearTriangle() {
        $('.desk').remove();
        x = 0; h = 0; H = 0; y = 0; i = 0; a = 0; hor = 0; ver = 0; SinA = 0; CosA = 0;
    }
    function ShowLog() {
        $('.wx').html(`Width: ${Width}`);
        $('.hy').html(`Height: ${Height}`);
        $('.hip').html(`Hypotenuse: ${H}`);
        $('.alfa').html(`Alpha: ${a}º`);
        $('.beta').html(`Beta: ${b}º`);
    }

    $('#tWidth').on('input', function () { Width = $('#tWidth').val(); DrawTriangle(); });
    $('#tHeight').on('input', function () { Height = $('#tHeight').val(); DrawTriangle(); });
   
    function DrawTriangle() {
        ClearTriangle();
        $('body').append('<div class="desk"></div>');

        for (y; y < Height; y++) {
            $('.desk').append(`<div id='y${y}' class="point"></div>`);
            $(`#y${y}`).css({
                'top': `${y}px`,
                'left': `${x}px`
            });
        }
        for (x; x < Width; x++) {
            $('.desk').append(`<div id='x${x}' class="point"></div>`);
            $(`#x${x}`).css({
                'top': `${y}px`,
                'left': `${x}px`
            });
        }

        H = Math.sqrt(Math.pow(Height, 2) + Math.pow(Width, 2));
        a = (Math.atan(Width / Height) * radian);
        b = (Math.atan(Height / Width) * radian);
        console.log(a);

        hor = (Width / H);
        ver = (Height / H);

        for (h; h < H; h++) {
            $('.desk').append(`<div id='h${h}' class="point"></div>`);
            $(`#h${h}`).css({
                'top': `${CosA}px`,
                'left': `${SinA}px`
            });
            SinA += hor;
            CosA += ver;
        }
        ShowLog();
    }
});
