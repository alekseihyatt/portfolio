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

document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

  let divs = document.getElementsByClassName('myDiv');
        for (let div of divs) {
            let shadow = '';
            for (let i = 0; i < 15; i++) {
                shadow += (shadow ? ',' : '') + i * 1 + 'px ' + i * 1 + 'px 0 rgba(248, 251, 250, 0.1)';
            }
            div.style.boxShadow = shadow;
        }