


//fade in effect
          function reveal() {
            var reveals = document.querySelectorAll(".reveal");
          
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }
          
          window.addEventListener("scroll", reveal);
          
    


//nav menu underline and color
              function underlineme1() {
                document.getElementById("menu1").setAttribute("style", "color:rgb(112, 248, 169);  text-Decoration:underline");
                document.getElementById("ABOUT").setAttribute("style", "text-Decoration:underline");
                document.getElementById("menu2").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
                document.getElementById("menu3").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
                document.getElementById("menu4").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
              }

              function underlineme2() {
                
                document.getElementById("menu1").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
                document.getElementById("menu2").setAttribute("style", "color:rgb(112, 248, 169);  text-Decoration:underline");
                document.getElementById("SKILLS").setAttribute("style", "text-Decoration:underline");
                document.getElementById("menu3").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
                document.getElementById("menu4").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
              }

              function underlineme3() {
                
                document.getElementById("menu1").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
                document.getElementById("menu2").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
                document.getElementById("menu3").setAttribute("style", "color:rgb(112, 248, 169);  text-Decoration:underline");
                document.getElementById("PROJECTS").setAttribute("style","text-Decoration:underline");
                document.getElementById("menu4").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
              }

              function underlineme4() {
                
                document.getElementById("menu1").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
                document.getElementById("menu2").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
                document.getElementById("menu3").setAttribute("style", "color:rgb(63, 203, 207);  text-Decoration:none");
                document.getElementById("menu4").setAttribute("style", "color:rgb(112, 248, 169);  text-Decoration:underline");
                document.getElementById("CONTACT").setAttribute("style", "text-Decoration:underline");
              }
              
              
              

//skills gallery

let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}



//slideshow gallery1
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots1 = document.getElementsByClassName("demo1");
  let captionText1 = document.getElementById("caption1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
  captionText1.innerHTML = dots1[slideIndex1-1].alt;
}

//slideshow gallery2

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(a) {
  showSlides2(slideIndex2 += a);
}

function currentSlide2(a) {
  showSlides2(slideIndex2 = a);
}

function showSlides2(a) {
  let b;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("demo2");
  let captionText2 = document.getElementById("caption2");
  if (a > slides2.length) {slideIndex2 = 1}
  if (a < 1) {slideIndex2 = slides2.length}
  for (b = 0; b < slides2.length; b++) {
    slides2[b].style.display = "none";
  }
  for (b = 0; b < dots2.length; b++) {
    dots2[b].className = dots2[b].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
  captionText2.innerHTML = dots2[slideIndex2-1].alt;
}