$(document).ready(function() {

var keystrokes = 140;
var userTweet;

// Doubles text box size and shows tweet controls upon clicking in text box.
  $('.tweet-compose').on('click', function() {
    $(this).height(65);
    $("#tweet-controls").show();
  });

// Counts keystokes and lowers the char-count accourdingly
  $('.tweet-compose').keyup(function() {
    var length = $(this).val().length;
    var length = keystrokes - length;
    $('#char-count').text(length);
    userTweet = $(this).val();

// Turns char-count display red when 10 or fewer characters remain.
    if (length <= 10) {
      $('#char-count').css("color", "red");
    }
      else {
        $('#char-count').css("color", "black");
      }

// Disables the tweet button if more than 140 characters have been used.
    if (length < 0) {
      $(".button").prop("disabled", true);
    }
      else {
        $(".button").prop("disabled", false);
      }
});

// When a user clicks the tweet button the following happens:
  $('.button').click(function() {

// Resets the text box so nothing is in it
    $('.tweet-compose').val("");

// Resets the character count to 140.
    $('#char-count').text(140);
    $('#char-count').css("color", "black");

// clones the tweet class and sends the tweet to the first spot in the stream
    var mirror = $('.tweet:first').clone();
    mirror.prependTo('#stream');

// Changes fullname
    mirror.find('.fullname').text('Bilingsly Croffulflop');

// Changes username
    mirror.find('.username').text('@bcroffyo');

// Inputs tweet string to correct spot.
    mirror.find('.tweet-text').text(userTweet);

// Changes image for correct user
    var image = $('.avatar:first').attr('src');
    mirror.find('.avatar').attr('src', 'img/alagoon.jpg');
});

// Hides reply and retweet links and revels them when the tweet is hovered over.
$('.tweet-actions').hide();

$('.tweet').hover(
  function(){
    $(this).find('.tweet-actions').show();
  },
  function(){
    $('.tweet-actions').hide();
  });

// Hides tweet stats and reveals them upon clicking the tweet.
$('.stats').hide();

$('.tweet').on('click',
  function(){
    $(this).find('.stats').show();
  });


})
