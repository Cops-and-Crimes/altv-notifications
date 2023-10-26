const notificationContainer = document.getElementById('Container');
function createNotification(type, msg, time, titel = '') {
    let template = document.getElementById('NotificationItemTemplate');
    let content = document.importNode(template.content, true);
    let notificationItem = content.querySelector('#NotificationContainer');
    let notificationTitle = content.querySelector('#NotificationTitle');
    let notificationMessage = content.querySelector('#NotificationMessage');
    let notificationProgressbar = content.querySelector('#NotificationProgressbar');
    // Item
    notificationItem.classList.add(type);
    // Title
    if (titel != '') {
        notificationTitle.textContent = titel;
    } else {
        notificationTitle.textContent = type;
    }
    // Message
    notificationMessage.textContent = msg;
    // Progress
    notificationProgressbar.max = time;
    notificationProgressbar.value = time;
    notificationContainer.appendChild(notificationItem);
    fadeIn(notificationItem);
    animateProgressbar(notificationProgressbar);
    setTimeout(() => {
        fadeOut(notificationItem);
    }, time);
}
function animateProgressbar(element) {
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
if ('alt' in window) {
    alt.on('CEF:Nofitications:Show', createNotification);
    setTimeout(() => {
        alt.emit('Client:Notifications:Ready');
    }, 1500);
}
