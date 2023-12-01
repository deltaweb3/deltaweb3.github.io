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
    const form_1 = document.querySelector('div[name="name"]')
    const form_2 = document.querySelector('div[name="email"]')
    const form_3 = document.querySelector('div[name="company"]>div:nth-child(1)')
    const form_4 = document.querySelector('div[name="company"]>div:nth-child(2)')
    const form_5 = document.querySelector('div[name="message"]')
    const input_1 = document.createElement("input")
    const input_2 = document.createElement("input")
    const input_3 = document.createElement("input")
    const input_4 = document.createElement("input")
    const input_5 = document.createElement("textarea")
    const tips = document.createElement("span")

    input_1.style.cssText = input_2.style.cssText = "flex: none;height: 50px;width: 100%"
    input_3.style.cssText = input_4.style.cssText = "flex: 1 0 0px;height: 50px;width: 1px"
    input_5.style.cssText = "flex: none;height: 300px;width: 100%"
    input_1.placeholder = "Name"
    input_2.placeholder = "Email"
    input_3.placeholder = "Company"
    input_4.placeholder = "Title"
    input_5.placeholder = "Message";
    [input_1, input_2, input_3, input_4, input_5].map((v) => {
        v.style.cssText += "background-color: #f2f2f2;font-family:'Bodoni Moda';font-size:18px;outline:none;padding:12px;border:none;position:relative;overflow: hidden;border-radius: 5px;"
    })

    setTimeout(() => {
        form_1.parentNode.replaceChild(input_1, form_1)
        form_2.parentNode.replaceChild(input_2, form_2)
        form_3.parentNode.replaceChild(input_3, form_3)
        form_4.parentNode.replaceChild(input_4, form_4)
        form_5.parentNode.replaceChild(input_5, form_5)
        document.querySelector("div[name='form']").appendChild(tips)
    }, 1000)

    let timer, submitted
    const notify = (text, color) => {
        clearTimeout(timer)
        tips.innerText = text
        tips.style.color = color
        timer = setTimeout(() => (tips.innerText = ""), 6000)
    }
    const signup = document.querySelector("div[name='sign up']")
    signup.style.cursor = "pointer"
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
})