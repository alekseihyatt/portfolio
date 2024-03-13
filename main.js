document.getElementById('scrollButton1').addEventListener('click', function() {
    scrollIntoMiddle('targetSection1');
});

document.getElementById('scrollButton2').addEventListener('click', function() {
    scrollIntoMiddle('targetSection2');
});

document.getElementById('scrollButton3').addEventListener('click', function() {
    scrollIntoMiddle('targetSection3');
});

document.getElementById('scrollButton4').addEventListener('click', function() {
    scrollIntoMiddle('targetSection4');
});

document.getElementById('scrollButton5').addEventListener('click', function() {
    scrollIntoMiddle('targetSection5');
});

function scrollIntoMiddle(elementId) {
    var target = document.getElementById(elementId);
    var targetRect = target.getBoundingClientRect();
    var offset = targetRect.top + window.scrollY + (targetRect.height / 2) - (window.innerHeight / 2);
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}


