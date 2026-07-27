var SteveEnabled = false

document.addEventListener("click", () => {
    if (SteveEnabled === false) {
        SteveEnabled = true
        document.body.style.backgroundImage = "url(graphics/Steve.png)"
        return
    }
        if (SteveEnabled === true) {
        SteveEnabled = false
        document.body.style.backgroundImage = null
        return
    }
    
})



