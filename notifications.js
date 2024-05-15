async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

let inFunction = false

async function hideNotif(notif) {
    if (notif.dataset.isHiding === "true") {
        console.log("ISI fhwsehgfshj");
        return
    } else {
        notif.dataset.isHiding = "true"
    }

    let hideAnim = notif.animate(
        [{transform: `translate(0px, 20px) scaleY(0)`}],
        {
            fill: "forwards",
            easing: "ease",
            duration: 300
        }
    )

    hideAnim.play()

    await sleep(300)
    notif.remove()
}

async function insertNotification(type, text, duration) {

    let randomId = "noti-" + Math.round(Math.random() * 2000000)

    let notification = document.createElement('div')
    notification.innerHTML = text
    notification.classList.add("notification")
    notification.classList.add(type)
    notification.id = randomId

    document.getElementById("standartNotifications").appendChild(notification)

    for (let index = 0; index < document.getElementById("standartNotifications").childNodes.length; index++) {

        if (document.getElementById("standartNotifications").childNodes.length - index > 9) {
            hideNotif(document.getElementById(document.getElementById("standartNotifications").getElementsByTagName("*")[index].getAttribute("id")))
        }
        
    }

    await sleep(duration * 1000) 
    if (document.getElementById(randomId)) {
        hideNotif(document.getElementById(randomId))
    } 

}