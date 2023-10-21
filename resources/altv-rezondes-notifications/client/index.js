import * as alt from 'alt-client';
var notificationBrowser;
let notificationBrowserReady = false;
notificationBrowser = new alt.WebView('http://resource/client/cef/notification.html');
notificationBrowser.on('Client:Notifications:Ready', () => {
    notificationBrowserReady = true;
});
alt.onServer('Client:Nofitications:Show', (type, msg, time, titel = '') => {
    if (!notificationBrowserReady) return;
    notificationBrowser.emit('CEF:Nofitications:Show', type, msg, time, titel);
});
alt.on('Client:Notifications:Show', (type, msg, time, titel = '') => {
    if (!notificationBrowserReady) return;
    notificationBrowser.emit('CEF:Nofitications:Show', type, msg, time, titel);
});
