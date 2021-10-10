// define html main elements
var slideImages = Array.from(document.querySelectorAll('.slide'));

var slideNumber = document.getElementById('slide_number')
var nextBtn = document.getElementById('next')
var prevBtn = document.getElementById('prev')

//slide count
var slidesCount = slideImages.length;

// stating slide
var currentSlide = 1;

//add event listener for next & prev buttons
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

//create container for lis
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul')

//create lis according to slides count
for (var i = 1; i <= slidesCount; i++) {
    var paginationItem = document.createElement('li')
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i))
    paginationElement.appendChild(paginationItem)
}

// append the ul into the html existing element
document.getElementById('indicators').appendChild(paginationElement)

//create an array for pagination bullets
var paginationCreated = document.getElementById('pagination-ul');
var paginationBullet = Array.from(document.querySelectorAll('#pagination-ul li'));

//add event listener to make bullets active
for (var i = 0; i < paginationBullet.length; i++) {
    paginationBullet[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker()
    }
}

//the main function for the project (the big boss)
function theChecker() {

    //create the content of slide number
    slideNumber.textContent = 'Slide #' + currentSlide + ' of ' + slidesCount;

    //calling the removal of active classes
    removeAllActive()

    //add active class into current img
    slideImages[currentSlide - 1].classList.add('active')

    //add active class into wanted bullet
    paginationCreated.children[currentSlide - 1].classList.add('active')

    // control disabled class for next & prev buttons
    if (currentSlide == 1) {
        prevBtn.classList.add('disabled')
    } else {
        prevBtn.classList.remove('disabled')
    }
    if (currentSlide == slidesCount) {
        nextBtn.classList.add('disabled')
    } else {
        nextBtn.classList.remove('disabled')
    }
}

theChecker()

//create the removal function 
function removeAllActive() {

    slideImages.forEach(function (img) {
        img.classList.remove('active')
    })

    paginationBullet.forEach(function (bullet) {
        bullet.classList.remove('active')
    })
}

//create functions for next and previous buttons 
function nextSlide() {
    if (nextBtn.classList.contains('disabled')) {
        return false
    } else {
        currentSlide++;
        theChecker()
    }
}
function prevSlide() {
    if (prevBtn.classList.contains('disabled')) {
        return false
    } else {
        currentSlide--;
        theChecker()
    }
}
