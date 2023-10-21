import * as alt from 'alt-client';

var notificationBrowser: alt.WebView;
let notificationBrowserReady: boolean = false;

notificationBrowser = new alt.WebView('http://resource/client/cef/notification.html');
notificationBrowser.on('Client:Notifications:Ready', () => {
    notificationBrowserReady = true;
});

alt.onServer(
    'Client:Nofitications:Show',
    (type: 'Error' | 'Info' | 'Success' | 'Dispatch', msg: string, time: number, titel: string = '') => {
        if (!notificationBrowserReady) return;

        notificationBrowser.emit('CEF:Nofitications:Show', type, msg, time, titel);
    }
);

alt.on(
    'Client:Notifications:Show',
    (type: 'Error' | 'Info' | 'Success' | 'Dispatch', msg: string, time: number, titel: string = '') => {
        if (!notificationBrowserReady) return;

        notificationBrowser.emit('CEF:Nofitications:Show', type, msg, time, titel);
    }
);
