import * as alt from 'alt-client';
import * as native from "natives";

var notificationBrowser;
let notificationBrowserReady = false;

notificationBrowser = new alt.WebView("http://resource/client/cef/notification.html");
notificationBrowser.on("Client:Notifications:Ready", () => {
    notificationBrowserReady = true;
});

alt.onServer("Client:Nofitications:Show", (type, msg, duration, title) => {
    if (!notificationBrowserReady) return;

    notificationBrowser.emit("CEF:Nofitications:Show", type, msg, duration, title);
})

alt.on("Client:Notifications:Show", (type, msg, duration, title) => {
    if (!notificationBrowserReady) return;

    notificationBrowser.emit("CEF:Nofitications:Show", type, msg, duration, title);
})
