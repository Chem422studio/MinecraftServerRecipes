var AlfredEnabled = false

document.addEventListener("click", () => {
    if (AlfredEnabled === false) {
        AlfredEnabled = true
        document.body.style.backgroundImage = "url(graphics/Alfred.png)"
        return
    }
    if (AlfredEnabled === true) {
        AlfredEnabled = false
        document.body.style.backgroundImage = null
        return
    }
    
})



