const btn = document.querySelector('#goto_top')
btn.addEventListener('click', function () {
    //window.scrollTo(0, 100) //or
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
})
