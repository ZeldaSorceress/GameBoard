// Connection to a broadcast channel
const bc = new BroadcastChannel('test_channel');

// Example of sending of a very simple message
bc.postMessage('This is a test message.');

// A handler that only logs the event to the console:
bc.onmessage = function (ev) { console.log(ev); }

// Disconnect the channel
bc.close();