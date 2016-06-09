//
//= require jquery
//= require jquery_ujs
//= require_tree .

//= require semantic-ui/modules/accordion.js
//= require semantic-ui/modules/behavior/api.js
//= require semantic-ui/modules/behavior/colorize.js
//= require semantic-ui/modules/behavior/form.js
//= require semantic-ui/modules/behavior/state.js
//= require semantic-ui/modules/chatroom.js
//= require semantic-ui/modules/checkbox.js
//= require semantic-ui/modules/dimmer.js
//= require semantic-ui/modules/dropdown.js
//= require semantic-ui/modules/modal.js
//= require semantic-ui/modules/nag.js
//= require semantic-ui/modules/popup.js
//= require semantic-ui/modules/rating.js
//= require semantic-ui/modules/search.js
//= require semantic-ui/modules/shape.js
//= require semantic-ui/modules/sidebar.js
//= require semantic-ui/modules/tab.js
//= require semantic-ui/modules/transition.js
//= require semantic-ui/modules/video.js

$(document).ready(function() {

  var i = 0

  while (i < 6) {
    var flipOverButtonId = '#flip-over-button-' + i;
    var flipBackButtonId = '#flip-back-button-' + i;
    var flashcardId = '#flashcard-' + i;

    $(animateShape(flipOverButtonId, flashcardId, 'flip over'));
    $(animateShape(flipBackButtonId, flashcardId, 'flip back'));

    i++;
  };

  function animateShape(directionalButtonId, flashcardId, direction) {
    $(directionalButtonId).click(function(){
      $(flashcardId).shape(direction);
    })
  };

});
