// Generated by CoffeeScript 1.9.1
var TCPConnection, XbmcApi, connection, ref, xbmc;

ref = require('xbmc'), TCPConnection = ref.TCPConnection, XbmcApi = ref.XbmcApi;

connection = new TCPConnection({
  host: '192.168.178.111',
  port: 9090,
  verbose: true
});

xbmc = new XbmcApi;

xbmc.setConnection(connection);

xbmc.on('connection:open', function() {
  return console.log('Connection is open');
});

setTimeout((function() {
  console.log('PlayPause');
  return xbmc.player.playPause().then(function() {
    return console.log('done');
  });
}), 1000);
