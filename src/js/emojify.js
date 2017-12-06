(function() {
  var letterRegEx = /[a-z]/i;
  var wordRegEx = /[\w]/i;

  var clippy = document.querySelector('.clippy');
  var copyClass = document.querySelector('.copied').classList;
  var customCheck = document.querySelector('#custom');
  var emojiPreview = document.querySelector('#preview');
  var emojifiedText = document.querySelector('#emojified');
  var normalText = document.querySelector('#normal');

  var customEmoji = false;

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
            case ' ':
              return ':black_large_square: ';
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
            case '\'':
              if (customEmoji) {
                return ':apostrophe: '
              }
              return letter + ' ';
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
              return letter + ' ';
          }
        }
      }
    )

    return emoji.join('');
  };

  var previewify = function(string) {
    var array = Array.from(string);

    var previewMap = array.map(
      function(char) {
        char = char.toLowerCase();

        if (char.match(wordRegEx)) {
          return char + '.svg';
        }
        else {
          switch (char) {
            case ' ':
              return 'space.svg';
            case '.':
              return 'period.svg';
            case'?':
              return 'question.svg';
            case '!':
              return 'exclamation.svg';
            case '#':
              return 'hash.svg';
            case '*':
              return 'asterisk.svg';
            case '$':
              return 'moneybag.svg'
            case '\'':
              if (customEmoji) {
                return 'apostrophe.svg'
              }
              return char + ' ';
            default:
              return char + ' ';
          }
        }
      }
    );

    var preview = previewMap.map(
      function(svg) {
        if (svg.indexOf('.svg') === -1) {
          return '<span class="nomoji">' + svg + '</span>'
        }

        return '<img class="emoji" src="assets/emoji/' + svg + '" />'
      }
    );

    return preview.join('')
  };

  normalText.addEventListener('keyup', function() {
    var currentValue = normalText.value;

    emojifiedText.value = emojify(currentValue);
    emojiPreview.innerHTML = previewify(currentValue);
  });

  new Clipboard(clippy);

  clippy.addEventListener('click', function() {
    copyClass.add('show');

    setTimeout(function() {
      copyClass.remove('show');
    },
    1000)
  });

  customCheck.addEventListener('change', function() {
    customEmoji = customCheck.checked;

    var normalTextValue = normalText.value;

    emojifiedText.value = emojify(normalTextValue);
    emojiPreview.innerHTML = previewify(normalTextValue);
  })
})();

