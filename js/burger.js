const navList=document.querySelector(".header__navigation-lists"),navToggle=document.querySelector(".header__button"),body=document.querySelector(".body");navList.classList.remove("header__navigation-lists--nojs");const onClickToggleMenu=()=>{navList.classList.contains("header__navigation-lists--opened")?(navToggle.classList.remove("header__button--nav-opened"),navList.classList.remove("header__button--fade-out"),navList.classList.add("header__navigation-lists--fade-in"),body.style.overflowY="auto",setTimeout((()=>navList.classList.remove("header__navigation-lists--opened")),300),setTimeout((()=>navList.classList.add("header__navigation-lists--closed")),300)):(navToggle.classList.add("header__button--nav-opened"),navList.classList.remove("header__navigation-lists--fade-in"),navList.classList.add("header__navigation-lists--fade-out"),body.style.overflowY="hidden",setTimeout((()=>navList.classList.add("header__navigation-lists--opened")),300),setTimeout((()=>navList.classList.remove("header__navigation-lists--closed")),300))};navToggle.addEventListener("click",onClickToggleMenu);