$(function() {
    var letterRegEx = /[a-z]/i;

    var emojify = function(string) {
        var array = Array.from(string);

        var emoji = array.map(
            function(letter) {
                letter = letter.toLowerCase();

                if (letter.match(letterRegEx)) {
                    return ':regional_indicator_' + letter + ': ';
                }
                else {
                    switch (letter) {
                        case '.':
                            return ':record_button: ';
                        case'?':
                            return ':grey_question: ';
                        case '!':
                            return ':grey_exclamation: ';
                        case '#':
                            return ':hash: ';
                        case '*':
                            return ':asterisk: ';
                        case '$':
                            return ':moneybag: '
                        case '0':
                            return ':zero: ';
                        case '1':
                            return ':one: ';
                        case '2':
                            return ':two: ';
                        case '3':
                            return ':three: ';
                        case '4':
                            return ':four: ';
                        case '5':
                            return ':five: ';
                        case '6':
                            return ':six: ';
                        case '7':
                            return ':seven: ';
                        case '8':
                            return ':eight: ';
                        case '9':
                            return ':nine: ';
                        default:
                            return letter;
                    }
                }
            }
        )

        return emoji.join('');
    }

    $('#normal').keyup(function() {
        var value = $(this).val();

         $('#emojified').val(emojify(value));
    });

    new Clipboard('.btn');

    $('[data-toggle="tooltip"]').tooltip({delay: { "show": 200, "hide": 200 }})

    $('.clippy').on(
        'show.bs.tooltip',
        function() {
            setTimeout(
                function() {
                    hideTooltip();
                },
                1000
            );
        }
    );

    function hideTooltip() {
        $('.clippy').tooltip('hide');
    }
})

