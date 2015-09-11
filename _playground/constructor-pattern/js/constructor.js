var CarColor = function (color) {
//enforces new
    this.color = color;
  }

  var color1 = new CarColor("red");
  var color2 = new CarColor("silver");
  var color3 = new CarColor("electric blue");

CarColor.prototype.getDetail = function() {
	var car1 = "My favorite color car is " + "<span>" + this.color + "</span>!";
	document.getElementById('red').innerHTML = car1;
}

color1.getDetail();
console.log(Object.getOwnPropertyNames(CarColor.prototype));

CarColor.prototype.getDetail = function() {
	// debugger;
	var car2 = "The car I drive is " + "<span>" + this.color + "</span>!";
	document.getElementById('silver').innerHTML = car2;
}

color2.getDetail();
console.log(Object.getOwnPropertyNames(CarColor.prototype));

CarColor.prototype.getDetail = function (){
	var car3 = "I also really like the " + "<span>" + this.color + "</span> on the Lexus IS!";
	document.getElementById('blue').innerHTML = car3;
}

color3.getDetail();
console.log((Object.getOwnPropertyNames(CarColor.prototype)));