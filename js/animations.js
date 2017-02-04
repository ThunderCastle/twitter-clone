$(document).ready(function() {

var keystrokes = 140;

  $('.tweet-compose').on('click', function() {
    $(this).height(65);
    $("#tweet-controls").show();
  });

  $('.tweet-compose').keyup(function() {
    var length = $(this).val().length;
    var length = keystrokes - length;
    $('#char-count').text(length);

    if (length <= 10) {
      $('#char-count').css("color", "red");
    }
      else {
        $('#char-count').css("color", "black");
      }
    if (length < 0) {
      $(".button").prop("disabled", true);
    }
      else {
        $(".button").prop("disabled", false);
      }
});






})
