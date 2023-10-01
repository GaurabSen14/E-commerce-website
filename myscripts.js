const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// like button

var btnvar1= document.getElementById('Newbtm1');

function Toggle1(){
    if (btnvar1.style.color =="red"){
        btnvar1.style.color ="black"
    }
    else{
        btnvar1.style.color="red"
    }

}