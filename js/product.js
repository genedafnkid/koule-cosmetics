document.querySelectorAll('.products-slide').forEach(e => {
    var width = window.innerWidth;
    new Glide(e.querySelector('.glide'), {
        type: 'slider',
        starAt: 0,
        perView: width > 1400 ? 4 : 
            width > 1000 ? 3 : 
            width > 700 ? 2 : 1,
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

window.addEventListener('resize', function(event) {
    if (event.currentTarget.innerWidth > 1400) {
        console.log("4 PER VIEW");
        document.querySelectorAll('.products-slide').forEach(e => {
            new Glide(e.querySelector('.glide'), {
                type: 'slider',
                starAt: 0,
                perView: 4,
                rewind: false,
                bound: true
            }).mount()
        })
    } else if (event.currentTarget.innerWidth > 1000){
        console.log("3 PER VIEW");
        document.querySelectorAll('.products-slide').forEach(e => {
            new Glide(e.querySelector('.glide'), {
                type: 'slider',
                starAt: 0,
                perView: 3,
                rewind: false,
                bound: true
            }).mount()
        })
    } else if (event.currentTarget.innerWidth > 700){
        console.log("2 PER VIEW");
        document.querySelectorAll('.products-slide').forEach(e => {
            new Glide(e.querySelector('.glide'), {
                type: 'slider',
                starAt: 0,
                perView: 2,
                rewind: false,
                bound: true
            }).mount()
        })
    } else {
        console.log("1 PER VIEW");
        document.querySelectorAll('.products-slide').forEach(e => {
            new Glide(e.querySelector('.glide'), {
                type: 'slider',
                starAt: 0,
                perView: 1,
                rewind: false,
                bound: true
            }).mount()
        })
    }
    document.querySelectorAll('.product-img').forEach(e => {
        e.style.width = e.parentElement.offsetWidth + 'px'
        e.style.height = e.parentElement.offsetWidth + 'px'
    });
    
}, true);

