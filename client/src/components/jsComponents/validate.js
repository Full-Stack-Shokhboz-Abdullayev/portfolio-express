export default function(e) {
    const val = e.target.value;
    if (val === '' || val === null) {
        e.target.parentElement.classList.remove('filled');
    } else {
        e.target.parentElement.classList.add('filled');
    }
}