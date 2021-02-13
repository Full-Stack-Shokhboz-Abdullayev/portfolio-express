export function onMouseMove(e, index) {
    let card = document.querySelectorAll('.project-card')[index],
        cardWrapper = document.querySelectorAll('.card-wrapper')[index],
        rect = cardWrapper.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top,
        yAxis = (rect.height / 2 - y) / 8,
        xAxis = (rect.width / 2 - x) / 8
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
}
export function onMouseEnter(e, index) {
    console.log(this.browser)
    if (this.browser === 'Chrome') {
        let btn = document.querySelectorAll('.link-mask')[index],
            title = document.querySelectorAll('.card-title')[index],
            img = document.querySelectorAll('.card-img-holder')[index],
            minText = document.querySelectorAll('.card-text1')[index]
        btn.classList.add('transformed')
        title.classList.add('transformed3')
        img.classList.add('transformed')
        minText.classList.add('transformed4')
    }
    let card = document.querySelectorAll('.project-card')[index]

    setTimeout(() => (card.style.transition = ``), 300)
}
export function onMouseLeave(e, index) {
    let card = document.querySelectorAll('.project-card')[index]
    if (this.browser === 'Chrome') {
        let btn = document.querySelectorAll('.link-mask')[index],
            title = document.querySelectorAll('.card-title')[index],
            img = document.querySelectorAll('.card-img-holder')[index],
            minText = document.querySelectorAll('.card-text1')[index]
        btn.classList.remove('transformed')
        title.classList.remove('transformed3')
        img.classList.remove('transformed')
        minText.classList.remove('transformed4')
    }

    card.style.transform = ``
    card.style.transition = `0.3s ease-out all`
}