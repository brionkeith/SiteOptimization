var resultsListContainer = document.getElementById ('resultsListContainer'); // parent container
var msgWrap = document.createElement('div'); //create new DIV element
msgWrap.className = 'msgWrapper'; // give new DIV a class name

var btmMsg  = document.createElement('span'); // create new SPAN element
var msgText = document.createTextNode('RESERVE NOW TO ENSURE YOU GET THIS LOW PRICE. ROOMS ARE LIMITED.');
btmMsg.className = 'btmMsg'; // give new SPAN a class name

var roomRateContainer = document.getElementById('roomRateRoomType'); // find ID with the value of 'roomRateRoomType'

resultsListContainer.insertBefore(msgWrap, roomRateContainer); // insert new DIV 'msgWrap' before 'roomRateRoomType'
msgWrap.appendChild(btmMsg); // put new SPAN inside 'msgWrap'
btmMsg.appendChild(msgText); // put message text inside 'btmMsg'

jQuery(document).ready(function(jQuery) {
	var msgWrap = jQuery('.msgWrapper');
	var btmMsg = jQuery('.btmMsg');

	jQuery('.msgWrap').hide().delay(700).fadeIn(700);
	jQuery('.btmMsg').hide().delay(700).fadeIn(500);

});