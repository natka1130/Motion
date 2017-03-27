function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Nieznane połączenie';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI]     = 'WiFi';
    states[Connection.CELL_2G]  = 'Siec 2G';
    states[Connection.CELL_3G]  = 'Siec 3G';
    states[Connection.CELL_4G]  = 'Siec 4G';
    states[Connection.CELL]     = 'Siec';
    states[Connection.NONE]     = 'Brak polaczenia';

    navigator.notification.alert('Rodzaj polaczenia: ' + states[networkState]);
}