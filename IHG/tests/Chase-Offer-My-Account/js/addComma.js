// regex: add comma to separate value as needed
jQuery.fn.digits = function () {
    return this.each(function () {
        jQuery(this).text(jQuery(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
};

jQuery('.bonusPts').digits(); // call 'digits' function and apply to 'bonusPts'

/*function addCommas(nStr)
{
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}*/
