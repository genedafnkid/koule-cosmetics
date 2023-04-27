document.querySelectorAll('.products-slide').forEach(e => {
    new Glide(e.querySelector('.glide'), {
        type: 'slider',
        starAt: 0,
        perView: 4,
        rewind: false,
        bound: true
    }).mount()
})

document.querySelectorAll('.product-img').forEach(e => {
    e.style.width = e.parentElement.offsetWidth + 'px'
    e.style.height = e.parentElement.offsetWidth + 'px'

    new hoverEffect({
        parent: e,
        intensity: 0.6,
        image1: e.getAttribute('data-img-1'),
        image2: e.getAttribute('data-img-2'),
        displacementImage: './photos/distortion.jpg'
    })
})
