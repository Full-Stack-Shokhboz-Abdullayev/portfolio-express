export default function intersectionAnimation() {
    const observables = document.querySelectorAll('.observable')
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {{
            const observable = entry.target
            if (entry.isIntersecting) {
                observable.classList.add('intersected')
            } else {
                observable.classList.remove('intersected')
            }
        }})
        }, {
        })
        observables.forEach((observable) => {
        observer.observe(observable)
        })
}