/* Script permettant de maintenir la liste ouverte quand on clique en dehors*/

$('.dropdown.keep-open').on({
  "shown.bs.dropdown": function() { this.closable = false; },
  "click":             function() { this.closable = true; },
  "hide.bs.dropdown":  function() { return this.closable; }
});

/* Script permettant de maintenir la liste ouverte après la sélection */

$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});

/* Colorer la liste à la selection */

$('.dropdown-menu li').on('click', function(e) {
  $('.clic').removeClass('selected');
    $('.clic div').css('background', ' #C4C3E4 !important');
    $('.clic a').css('color', '#596391 !important');
    $('.selected').removeClass('.selected');
    $(this).children().addClass('selected clic');
    e.preventDefault();
  });
