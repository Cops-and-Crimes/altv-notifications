const container = document.getElementById("Container");

function showNotification(type, msg, duration, titleText = ""){
    let notification = document.createElement('div');
    notification.classList.add("Notification");
    notification.classList.add(type);
    notification.style.opacity = 0;

    let title = document.createElement('h2');
    if (titleText != ""){
        title.appendChild(document.createTextNode(titleText));
    }
    else{
        title.appendChild(document.createTextNode(type));
    }
    notification.appendChild(title);

    let message = document.createElement('h4');
    message.appendChild(document.createTextNode(msg))
    notification.appendChild(message);

    let progress = document.createElement("progress");
    progress.max = duration;
    progress.value = duration;
    notification.appendChild(progress);

    container.appendChild(notification);
    
    fadeIn(notification);
    animateProgressbar(progress);
    setTimeout(() => {
        fadeOut(notification);
    }, duration)
}

function animateProgressbar(element){
    setInterval(function () {
        element.value = element.value - 10;
    }, 10);
}

function fadeIn(element, duration = 500) {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in-out`;

    setTimeout(() => {
        element.style.opacity = '1';
    }, 10);
}

function fadeOut(element, duration = 500) {
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.opacity = '0';
    setTimeout(() => {
        element.style.visibility = 'hidden';
        notificationContainer.removeChild(element);
    }, duration);
}

alt.on("CEF:Nofitications:Show", showNotification);

setTimeout(() => {
    alt.emit('Client:Notifications:Ready');
}, 1500);
