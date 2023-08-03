

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function greet() {
  console.log('Hello world');
  showdivs(slideIndex += 1);
}

setInterval(greet, 5000);

function showdivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";

}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";

}



var projectIndex = 1;
showProjectItems(projectIndex);


function plusProjectItems(n) {
  showProjectItems(projectIndex += n);
}

function showProjectItems(n) {
  var i;
  var x = document.getElementsByClassName("projectitems");
  if (n + 2 > x.length) { projectIndex = 1 }
  if (n < 1) {
    projectIndex = x.length - 2

  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[projectIndex - 1].style.display = "block";
  x[projectIndex].style.display = "block";
  x[projectIndex + 1].style.display = "block";


}

