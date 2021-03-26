var slideShowIndexProjects = 0;
var slideShowIndexEducation = 0;
var slideShowIndexLanguages = 0;

window.onload = function (){
    console.log("window onload fired");
    startSliders();
    showSlideProjects(slideShowIndexProjects);
    showSlideEducation(slideShowIndexEducation);
    showSlideLanguages(slideShowIndexLanguages);
    document.getElementById("header").style.fontSize = "xxx-large";

}


function startSliders(){
    document.getElementById("firstSlider").style.left = "0px";
    document.getElementById("secondSlider").style.left = "0px";
    document.getElementById("thirdSlider").style.left = "0px";
}

function showSlideProjects(n){
    var slides = document.getElementsByClassName("mySlidesProjects");
    for (var i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
   }
   slides[n].style.display = "block";
   slideShowIndexProjects=n;
   var selectorsProjects = document.getElementsByClassName("selectorsProjects");
   for (var j = 0; j<selectorsProjects.length; j++){
        selectorsProjects[j].classList.remove("active");
   }
   selectorsProjects[n].classList.add("active");

   console.log ("showSlideProjects fired, end valueof slideShowIndexProjects: "+slideShowIndexProjects);
}

function showSlideEducation(n){
  var slidesEducation = document.getElementsByClassName("mySlidesEducation");
    for (var i = 0; i<slidesEducation.length; i++){
        slidesEducation[i].style.display = "none";
   }
   slidesEducation[n].style.display = "block";
   slideShowIndexEducation=n;
   var selectorsEducation = document.getElementsByClassName("selectorsEducation");
   for (var j = 0; j<selectorsEducation.length; j++){
        selectorsEducation[j].classList.remove("active");
   }
   selectorsEducation[n].classList.add("active");
}

function showSlideLanguages(n){
  var slidesLanguages = document.getElementsByClassName("mySlidesLanguages");
    for (var i = 0; i<slidesLanguages.length; i++){
        slidesLanguages[i].style.display = "none";
   }
   slidesLanguages[n].style.display = "block";
   slideShowIndexLanguages=n;
   var selectorsLanguages = document.getElementsByClassName("selectorsLanguages");
   for (var j = 0; j<selectorsLanguages.length; j++){
        selectorsLanguages[j].classList.remove("active");
   }
   selectorsLanguages[n].classList.add("active");

}

function cycleSlidesProjects(){
    var slides = document.getElementsByClassName("mySlidesProjects");
    slideShowIndexProjects=slideShowIndexProjects+1;
    if (slideShowIndexProjects > slides.length-1){slideShowIndexProjects=0;}
    showSlideProjects(slideShowIndexProjects);

    console.log ("cycleSlidesProjects fired, ending value of slideshowIndexProjects: "+slideShowIndexProjects);
}

function cycleSlidesEducation(){
    var slides2 = document.getElementsByClassName("mySlidesEducation");
    slideShowIndexEducation=slideShowIndexEducation+1;
    if (slideShowIndexEducation > slides2.length-1){slideShowIndexEducation=0;}
    showSlideEducation(slideShowIndexEducation);

}

function cycleSlidesLanguages(){
    var slidesLanguages = document.getElementsByClassName("mySlidesLanguages");
    slideShowIndexLanguages=slideShowIndexLanguages+1;
    if (slideShowIndexLanguages > slidesLanguages.length-1){slideShowIndexLanguages=0;}
    showSlideLanguages(slideShowIndexLanguages);

}

function displayProjectSlideshow(){
    document.getElementById("projectSlideShow").style.height="200px";
}

function hideProjectSlideshow(){
    document.getElementById("projectSlideShow").style.height="0px";
}

function displayLanguagesSlideShow(){
    document.getElementById("languagesSlideShow").style.height="200px";
}

function hideLanguagesSlideShow(){
    document.getElementById("languagesSlideShow").style.height="0px";
}

function displayEducationSlideShow(){
    document.getElementById("educationSlideShow").style.height="200px";
}

function hideEducationSlideShow(){
    document.getElementById("educationSlideShow").style.height="0px";
}
