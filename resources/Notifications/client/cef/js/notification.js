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

function fadeIn(element) {
    var op = 0.1; 
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fadeOut(element) {
    var op = 1;  
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            container.removeChild(element);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

alt.on("CEF:Nofitications:Show", showNotification);

setTimeout(() => {
    alt.emit('Client:Notifications:Ready');
}, 1500);