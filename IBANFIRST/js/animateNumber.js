function commaSeparateNumber(val){
     val = Math.round(val * 100) / 100;

    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
    }
    var valeur = val.toString().replace(/\./g, ',');
    return valeur + " €";
  }

  $({someValue: 0}).animate({someValue: 182584.09}, {
      duration: 4500,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#solde1').text(commaSeparateNumber(this.someValue));
      },
      complete:function(){
          $('#solde1').text(commaSeparateNumber(this.someValue));
      }
  });
