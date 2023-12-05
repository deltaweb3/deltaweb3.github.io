//Video
const onEnded = async () => {
    const d = document.getElementById("opening").style
    const m = document.getElementById("main").style
    while (d.opacity > 0) {
        d.opacity -= 0.1
        m.opacity = 1 - d.opacity
        await new Promise(r => setTimeout(r, 66))
    }
    d.display = "none"
}

document.addEventListener('DOMContentLoaded', async () => {
    //Scroll
    ["home", "asia-growth", "about", "service", "team", "network", "contact"].map((v) => (document.getElementById(v).style.scrollSnapAlign = "start", document.getElementById(v).style.paddingTop = "120px"))
    document.getElementById("home").style.paddingTop = "40px"
    document.getElementById("contact").style.cssText += "padding: 160px 40px"
    document.getElementById("about").style.paddingBottom = "160px"
    document.getElementById("service").style.paddingBottom = "160px"
    // document.querySelector("div[name='nav']").style.cssText += "background-color:rgba(0,0,0,0);backdrop-filter:blur(10px);"
    document.querySelector("div[name='footer']").style.cssText += "height:100vh;scroll-snap-align:start;"
    document.querySelector("#main>div>div").style.cssText += "overflow:auto;height:100vh;scroll-snap-type:y mandatory;flex-wrap:nowrap;"
    document.getElementById("__framer-badge-container").style.display = "none"

    //Form
    const input_1 = document.querySelector('input[placeholder="Name"]')
    const input_2 = document.querySelector('input[placeholder="Email"]')
    const input_3 = document.querySelector('input[placeholder="Company"]')
    const input_4 = document.querySelector('input[placeholder="Title"]')
    const input_5 = document.querySelector('textarea[placeholder="Message"]')
    const signup = document.querySelector("input[type='submit']")
    const tips = document.createElement("span")
    input_4.type = "text"
    signup.type = "button"
    tips.style.fontFamily = "bodoni moda Regular"
    setTimeout(() => {
        document.querySelector("div[name='form']").appendChild(tips)
    }, 1000)

    let timer, submitted
    const notify = (text, color) => {
        clearTimeout(timer)
        tips.innerText = text
        tips.style.color = color
        timer = setTimeout(() => (tips.innerText = ""), 6000)
    }
    signup.onclick = () => {
        if (submitted) {
            notify("You have already submitted!", "green")
            return
        }
        if (!input_1.value) {
            notify("Empty Name!", "red")
            return
        }
        if (!input_2.value) {
            notify("Empty Email!", "red")
            return
        }
        if (!input_3.value) {
            notify("Empty Company!", "red")
            return
        }
        if (!input_4.value) {
            notify("Empty Title!", "red")
            return
        }
        if (!input_5.value) {
            notify("Empty Message!", "red")
            return
        }
        notify("Submitting...", "green")
        Email.send({
            SecureToken: "5db6b265-8edc-4fd7-af63-72f0f9c5fc67",
            From: "deltalabs.mkt@gmail.com",
            To: "grace@deltalabs.pro",
            Subject: "MARKET EMAIL",
            Body:
                `
        <div>Name:\t${input_1.value}</div>
        <div>Email:\t${input_2.value}</div>
        <div>Company:\t${input_3.value}</div>
        <div>Title:\t${input_4.value}</div>
        <div>Message:\t${input_5.value}</div>
        `})
            .then(_ => {
                alert("Submitted successfully!")
                tips.innerText = ""
                submitted = true
            })
            .catch(_ => {
                alert("Sorry something went wrong, please try again later!")
                tips.innerText = ""
            })
    }

    setTimeout(() => {
        document.querySelector("#team > div > div.framer-11gi12d > div.framer-12lqqoo-container > div > div > div.framer-13ijm5y > div.framer-1932sbs > div > h3").textContent = "Grace"
        document.querySelector("#team > div > div.framer-11gi12d > div.framer-13vvoda-container > div > div > div.framer-13ijm5y > div.framer-1932sbs > div > h3").textContent = "Mizuno"
        document.querySelector("#team > div > div.framer-11gi12d > div.framer-13qjnuk-container > div > div > div.framer-13ijm5y > div.framer-1932sbs > div > h3").textContent = "Laura"
        document.querySelector("#team > div > div.framer-11gi12d > div.framer-13vvoda-container > div > div > div.framer-fse472 > div > img").srcset = "images/Mizuno.jpg"
        document.querySelector("#team > div > div.framer-11gi12d > div.framer-13qjnuk-container > div > div > div.framer-fse472 > div > img").srcset = "images/Ruby.jpg";
        ((_) => _.parentElement.removeChild(_))(document.querySelector("#team > div > div.framer-11gi12d > div.framer-13qjnuk-container > div > div > div.framer-13ijm5y > div.framer-1932sbs > a"));
        ((_) => _.parentElement.removeChild(_))(document.querySelector("#network > div > div.framer-1rbh8zh > div.framer-kjiw88"))
    }, 1000)
})