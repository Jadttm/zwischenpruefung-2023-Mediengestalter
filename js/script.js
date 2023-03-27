const headerEl = document.querySelector("header"),
inputs = document.querySelectorAll(".contact-input");



// header change bg animation 
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        headerEl.classList.add("header-scrolled");
    } else if (window.scrollY <= 50) {
        headerEl.classList.remove("header-scrolled");
    }
});

// header shrink scroll animation
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "10px 50px 5px 50px";
    document.getElementById("logo").style.height = "5vw";
  } else {
    document.getElementById("header").style.padding = "20px 50px";
    document.getElementById("logo").style.height = "15vw";
  }
}


// form styles changes if focused
inputs.forEach((ipt) => {
  ipt.addEventListener("focus", () => {
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });
  ipt.addEventListener("blur", () => {
    if (ipt.value == "") {
      ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
  });
});



// radio btn switch
function alleineoderfamilieCheck() {
  if (document.getElementById("alleineCheck").checked) {
      document.getElementById("ifAlleine").style.display = "block";
  }
  else document.getElementById("ifAlleine").style.display = "none";


  if (document.getElementById("familieCheck").checked) {
    document.getElementById("ifFam").style.display = "block";
    document.getElementById("ifFam5").style.display = "block";
    document.getElementById("ifFam13").style.display = "block";
    document.getElementById("ifFam17").style.display = "block";
    document.getElementById("ifFamAdult").style.display = "block";
  }
  else document.getElementById("ifFam").style.display = "none",
  document.getElementById("ifFam5").style.display = "none",
  document.getElementById("ifFam13").style.display = "none",
  document.getElementById("ifFam17").style.display = "none",
  document.getElementById("ifFamAdult").style.display = "none";
}


