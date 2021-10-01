const mainMenu = document.getElementById('main-menu')
const menu = document.getElementById('menu')
const menuIcon = document.getElementById('mobile-menu-icon')
const mobileMenuClose = document.getElementById('mobile-menu-close')
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay')


mainMenu.addEventListener('click',(e)=>{

    const isChild = e.target.closest('.has-child')
    if(isChild){
        if (e.target !== isChild){
            console.log('not this');
            return;
        }
        subMenu = isChild.querySelector('.sub-menu')
        subMenu.classList.toggle('active')
        subMenu.style.animation = 'showMenu 5s ease'
      
        console.log('menu click');
    }
})

menuIcon.onclick = () =>{
    toggleMenu()
}
mobileMenuClose.onclick = () =>{
    toggleMenu()
}
mobileMenuOverlay.onclick = () =>{
    toggleMenu()
}
function toggleMenu(){
    mainMenu.classList.toggle('active')
    mobileMenuOverlay.classList.toggle('active')

}


// ------------ Pagination --------------------- //

const pagi = document.getElementById('pagination')
let totalPage = 20
function paginate(page){
  let liTag = ''
  let active
  let beforePage = page - 1
  let afterPage = page + 1

  if(page > 1){
    liTag += `<li onclick='paginate(${page - 1})' class="cbtn prev"><span>Prev</span></li>`
  }

  if(page > 2){
    liTag += `<li onclick='paginate(1)' class="num"><span>1</span></li>`
      if(page > 3){
        liTag += `<li class="dots"><span>...</span></li>`
      }
  }

  for(let pageLength = beforePage; pageLength <= afterPage; pageLength++ ){
    if(pageLength > totalPage){
      continue
    }
    if(pageLength == 0){
      pageLength += 1
    }
    if(page == pageLength){
      active = 'active'
    }else{
      active = ''
    }

    liTag += `<li onclick='paginate(${pageLength})' class="num ${active}"><span>${pageLength}</span></li>`

  }

  if(page < totalPage - 1 ){
      if(page < totalPage - 2 ){
        liTag += `<li class="dots"><span>...</span></li>`
      }
      liTag += `<li onclick='paginate(${totalPage})' class="num"><span>${totalPage}</span></li>`
  }

  if(page < totalPage){
    liTag += `<li onclick='paginate(${page + 1})' class="cbtn next"><span>Next</span></li>`
  }
  
  pagi.innerHTML = liTag

}

paginate(5)