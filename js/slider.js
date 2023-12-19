let point = document.querySelectorAll('.point');
let imageSlider = document.querySelectorAll('.imageSlider');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

point[0].classList.add('activeImage');
imageSlider[0].classList.add('activeImage');

let counter = 0;

function showSlide(index) {
    for (let i=0; i < imageSlider.length; i++) {
        point[i].classList.remove('activeImage');
        imageSlider[i].classList.remove('activeImage');
    }
    imageSlider[index].classList.add('activeImage');
    point[index].classList.add('activeImage');
}

function nextSlide() {
    counter++;
    if (counter >= imageSlider.length) {
        counter = 0;
    }
    showSlide(counter);
}

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = imageSlider.length - 1;
    }
    showSlide(counter);
}

leftBtn.addEventListener('click', () => {
    prevSlide();
    clearInterval(intervalId);
    startInterval();
});

rightBtn.addEventListener('click', () => {
    nextSlide();
    clearInterval(intervalId);
    startInterval();
});

function startInterval() {
    intervalId = setInterval(nextSlide, 3000);
}

startInterval();

document.addEventListener('DOMContentLoaded', function () {
    let points = document.querySelectorAll('.point');

    points.forEach(function (point) {
        point.addEventListener('click', function () {
            clearInterval(intervalId);
            points.forEach(function (p) {
                p.classList.remove('selected');
            });
            point.classList.add('selected');
            counter = Array.from(points).indexOf(point);
            showSlide(counter);
            startInterval();
        });
    });
});


