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
    var content = document.querySelector('.content');
    var contentRect = content.getBoundingClientRect();
    var offset = targetRect.top - contentRect.top + content.scrollTop + (targetRect.height / 2) - (contentRect.height / 2);
    content.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}
