var StateOfText = 0

var gg = document.getElementsByTagName("p")

document.addEventListener("click", () => {
    if (StateOfText === 1) {
        StateOfText = 0
        for (var i = 0; i < gg.length; i++)
        {
            gg[i].style.color = "orange"
        }
        return
    }
    if (StateOfText === 0) {
        StateOfText = 1
        for (var i = 0; i < gg.length; i++)
        {
            gg[i].style.color = "white"
        }
        return
    }
})