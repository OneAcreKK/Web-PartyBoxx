window.onload = () =>{
  const faq = document.getElementsByClassName("faq")[0]
  for(i=0;faq.children.length>i;i++){
    console.log(faq.children[0])
    console.log(faq.children[i].children[0].clientHeight)
    faq.children[i].style.height = faq.children[i].children[0].clientHeight + "px"
    faq.children[i].addEventListener('click', function() {
      if(event.target.closest("[data-state]").dataset.state == "open"){
        event.target.closest("[data-state]").dataset.state = "close"
      }
      else{
        event.target.closest("[data-state]").dataset.state = "open"
      }
      console.log(event.target.closest("[data-state]"))

    }, false);
  }
}
window.onresize = () =>{
  const faq = document.getElementsByClassName("faq")[0]
  for(i=0;faq.children.length>i;i++){
    console.log(faq.children[0])
    console.log(faq.children[i].children[0].clientHeight)
    faq.children[i].style.height = faq.children[i].children[0].clientHeight + "px"
  }
}