h = document.querySelectorAll("nav .navbar-collapse ul li")
apple = document.getElementById("apple")

main = document.getElementById("mainimg")
allImgs = document.querySelectorAll("#secondary img")
bb = document.getElementById("content")
bbParent = document.getElementById("bbParent")
bbGrand = document.getElementById("bbGrand")
cont = document.querySelector(".container")

if (localStorage.color) {
  colormode(localStorage.getItem('color'), localStorage.getItem('src'))

} else {

  colormode("#897C68", "images/3.png")

}





function colormode(x, newsrc) {
  document.body.style.backgroundColor = x
  // document.body.style.cssText=`background-color='${color}'`
  main.src = newsrc;
  if (main.src == "file:///E:/web%20development/Tutorial/js%20projescts/project/images/1.jpg"
    || main.src == "file:///E:/web%20development/Tutorial/js%20projescts/project/images/4.jpg") {
    bb.firstElementChild.style.cssText = `color:black;`
    bb.firstElementChild.nextElementSibling.style.cssText = `color:black;`
    //  bb.style.cssText=`color:black;`


  } else {
    bb.firstElementChild.style.cssText = `color:white;`
    bb.firstElementChild.nextElementSibling.style.cssText = `color:white;`
  }
  addimgtolocal(newsrc)
  addcolortolocal(x)
  addActiveClass(main.src)
}



function addcolortolocal(bodyColor) {
  localStorage.setItem('color', bodyColor);
  borderColor(bodyColor)
  //  meueColor(bodyColor)
}
function addimgtolocal(src) {
  localStorage.setItem('src', src);

}


function borderColor(color) {
  apple.style.color = color;
  for (i = 0; i < h.length; i++) {
    h[i].style.setProperty("--border-Color", color)

  }
}


function addActiveClass(src) {
  for (i = 0; i < allImgs.length; i++) {
    if (src == allImgs[i].src) {
      allImgs[i].classList.add('active')
    } else {
      allImgs[i].classList.remove('active')

    }
  }

}
//  function meueColor(Color){
//   for(i=0;i<dd.length;i++){
//     dd[i].style.setProperty("--menuColor",Color)
//  }}
btn = document.getElementById("btn1")
btn.addEventListener("mouseover", (e) => {
  y = (e.pageY - $(btn).offset().top)
  // console.log(x)
  // console.log($(btn).offset().top)
  x = (e.pageX - $(btn).offset().left)
  btn.style.setProperty("--posX", `${x}px`)
  btn.style.setProperty("--posY", `${y}px`)
  btn.style.setProperty("--btnColor", localStorage.getItem('color'))



})
// console.log(bb.parentElement)
// console.log(bbParent.parentElement)
// console.log(bbGrand.parentElement)