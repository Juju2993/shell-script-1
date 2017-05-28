function Currency(color, type, unit) {
  this.whichcolor = color;
  this.whichtype = type;
  this.whichunit = unit;
}

Currency.prototype.tellme = function() {
  return this.whichunit + ' ' + this.whichtype +' is '+ this.whichcolor;
}

let euro = new Currency('pink', 'euro', '500');
let dollar = new Currency('green', 'dollar', '100');

console.log(euro.tellme());
console.log(dollar.tellme());
