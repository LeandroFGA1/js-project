const botonMenu = document.querySelector(".quit-menu");
const toggleMenuCheckbox = document.getElementById("toggle-menu");
const toggleMenu = document.querySelector(".menu-container");
const main = document.querySelector("main");
const logo = document.getElementById("logo");
const cart = document.querySelector(".cart-items-list");
const MENU = document.querySelector(".menu-items-list");
const CONTACT =document.querySelector(".contact-form");
const EMAIL =document.getElementById("email");
const ERROR_EMAIL =document.querySelector(".show-erros-email");
let MENU_ITEMS;
let IMGS_DELETE;

// esta funcion tuve que desactivarla ya el numero de llamados colapta llega al limite muy rapido, creare un data.json para emular larlo un poco.
//const callNews = async()=>{
//    const news = await fetch("https://newsdata.io/api/1/news?apikey=pub_291368517551a8a8388722e08cb968b400f99&country=au&language=en");
//    return news.json();
//}

const addNews =()=>{

    const dataNews = data;
    const sectionalisedNews = sectionaliserNews(dataNews);
    renderSectionNews(sectionalisedNews);
    
}

const renderSectionNews = (sections) =>{
    for (const sectionName in sections){
        const styleCSS = document.createElement("style");
        let css =`
        #add-cart-img-${sectionName}{
            display:none;
        }
        #add-cart-img-${sectionName}:checked ~ label >.add-cart-img-${sectionName}{
            transform: rotate(180deg);
            background-color: var(--accent-color);
        }
        `;
        styleCSS.innerHTML=css;
        document.head.appendChild(styleCSS);
        main.innerHTML += `
        <section id="${sectionName}---" class="sections">
            <div class ="header-section">
                <h2>${sectionName}</h2>
                <input type="checkbox" name="add-cart-img-${sectionName}" id="add-cart-img-${sectionName}">
                <label for="add-cart-img-${sectionName}">
                    <img src="./assets/imgs/boton-agregar.png" class="add-cart-img add-cart-img-${sectionName}" alt="add cart icon">
                </label>
            </div>
            
            <div class= "news-container" id="${sectionName}"></div>
        </section>`;
        const DOMCurrentsecion = document.getElementById(sectionName);
        const currentSection = sections[sectionName];
        renderMenu(sectionName);
        if (currentSection.length === 2 || currentSection.length ===5 || currentSection.length ===11 ) {
            // Si la sección tiene solo 2 elementos, agrega un artículo de publicidad
            DOMCurrentsecion.innerHTML += `
                <a class="article-container" href="#">
                    <article class="article">
                        <img src="./assets/imgs/publi.jpg" alt="" class="article-img">
                        <h3 class="article-header">Publicidad</h3>
                        <p class="article-paragraph">Este es un anuncio publicitario.</p>
                    </article>
                </a>
            `;
        }
        
        for (const currentNew in currentSection){
            const {title, author, paragraph} = currentSection[currentNew];
            DOMCurrentsecion.innerHTML += `
            <a class="article-container" href="#">
                <article class="article">
                    <img src="./assets/imgs/${title}.jpg" alt="" class="article-img">
                    <h3 class="article-header">${title}</h3>
                    <p class="article-paragraph">${paragraph.slice(0,60)+"..."}</p>
                    <span class="article-author">${author}</span>
                </article>
            </a>
            
            `;
            
        }
    }
    createListenerMenu();
    createListerCart();
}
const createListenerMenu = () => {
    MENU_ITEMS = document.querySelectorAll(".menu-item--click"); // Obtener todos los elementos
    MENU_ITEMS.forEach((item) => {
        item.addEventListener("click", quitMenu); // Agregar event listener a cada elemento
    });
}



const createListerCart = ()=>{
    // Obtén una lista de todos los elementos <input> con name que comienza con "add-cart-img-"
    const checkboxes = document.querySelectorAll('input[name^="add-cart-img-"]');

// Agrega un evento de cambio a cada elemento
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {

            listenerThisLi(event.target, true);
            
        } else {
            listenerThisLi(event.target,false);
        }
        });
});
}

const listenerThisLi = (li,boolean) => {
    const existingLi = cart.querySelector(`li[id="${li.name}-"]`);
    if (boolean ===true){

        
        if (existingLi) {
            // El elemento li ya existe, puedes hacer algo con él si lo deseas
            console.log(`El elemento ${li.name} ya existe en el carrito.`);
        } else {
            // El elemento li no existe en el carrito, así que lo agregamos
            console.log(`Agregando el elemento ${li.name} al carrito.`);
            
            cart.innerHTML += `
                <li class="cart-item" id="${li.name}-">
                    <h4>${li.name.replace('add-cart-img-', '')}</h4>
                    <img src="./assets/imgs/delete-cart.svg" alt="delete" class="cart-delete" id="img-delete-${li.name}">
                </li>`;
            const imgDelete = document.getElementById(`img-delete-${li.name}`);
            imgDelete.addEventListener("click",()=>{
                li.checked=false;
                listenerThisLi(li,false);
            })
        }
    }else{
        if(existingLi){
            existingLi.remove()
        }

    }
    isCartEmpty();
    createListenerDeleteImg();
};
const createListenerDeleteImg =()=>{
    IMGS_DELETE =document.querySelectorAll(".cart-delete");
    IMGS_DELETE.forEach((img)=>{
        img.addEventListener("click",()=>{
            const nameCheckBox = `${img.parentNode.id}`;
            document.getElementById(nameCheckBox.slice(0, -1)).checked=false;
            console.log(img.parentNode.id)
            img.parentNode.remove();
            isCartEmpty();
        })
    })
}
const isCartEmpty=()=> {
    const cartItems = cart.querySelectorAll('li.cart-item');
    const imgCart = document.querySelector(".img-menu");
    
    // Si no hay ningún elemento li en cart, el carrito está vacío
    if (cartItems.length === 0) {
        imgCart.style.backgroundColor = "transparent"; // Fondo transparente si está vacío
    } else {
        imgCart.style.backgroundColor = "var(--accent-color)"; // Fondo rojo si no está vacío
    }
};



const renderMenu=(section)=>{
    MENU.innerHTML +=`
    <li>
        <a class="menu-item--click" href="#${section}---">${section}</a>
    </li>
    
    `;
}

const sectionaliserNews = (info) =>{
    const sectionNews ={};
    info.forEach((noticia) => {
        const { type } = noticia;
        if (!sectionNews[type]) {
            sectionNews[type] = [noticia];
        } else {
        sectionNews[type].push(noticia);
        }
    });
    return sectionNews;
}

const APIDolar = async() =>{
    const dolars = await getAPIDolar();
    
    renderDolars(dolars);
    
}
const getAPIDolar = async() =>{
    try {
        const callData = await fetch("https://dolarapi.com/v1/dolares");
        return callData.json();
    } catch (error) {
        let fail ={ 0:{name:"dolar",
                    compra: null,
                    venta: null
    }};
    console.log(fail);
        return fail
        
        
    }
}
const renderDolars = (dolars) =>{
    const container = document.querySelector(".dolar-price-container");
    container.innerHTML = dolars.slice(0,4).map((parte,contador) => `
    <div class="price-box ${contador === 0 ? '' : 'dolar-price--'} ${contador === 3 ? 'box-laster' : ''}">
        <h2>${parte.nombre}</h2>
        <span>Compra: ${parte.compra}</span>
        <span>Venta: ${parte.venta}</span>
    </div>
    `).join("");
}

const quitMenu =() =>{
    botonMenu.parentNode.style.display = "none";
    toggleMenuCheckbox.checked = false;
    console.log("ghost");
}
const addMenu =() =>{
    toggleMenu.style.display="block";
}


const moveLogo = () =>{
    const position = window.scrollY;
    if (position >=150){
        logo.classList.add("img-logo-scroll");
    }else{
        logo.classList.remove("img-logo-scroll")
    }
}


const checkerEmail = (e) => {
    e.preventDefault();
    ERROR_EMAIL.innerHTML="";
    localStorage.setItem("email", EMAIL.value);
    const email = localStorage.getItem("email");
    if(email.trim() ===""){
        ERROR_EMAIL.innerHTML +=`<p>No e-mail has been entered</p>`
        return;
    }
    if (!email.includes('@')) {
        ERROR_EMAIL.innerHTML += `<p>The email must contain "@".</p>`;
        return;
    }
    if ((email.match(/@/g)).length > 1) {
        ERROR_EMAIL.innerHTML += `<p>The email cannot contain more than one "@" symbol.</p>`;
        return;
    }
    if (!email.endsWith('.com')) {
        ERROR_EMAIL.innerHTML += `<p>The e-mail must end in ".com". We do not accept any other format.</p>`;
        return;
    }
    const [prev, post] = email.split('@');
    if (prev.length < 4) {
        ERROR_EMAIL.innerHTML += `<p>The local part of the email must have at least 4 characters.</p>`;
        return;
    }
    ERROR_EMAIL.innerHTML +=`<p>Check your email inbox to confirm your subscription.</p>`;
}


const init = () =>{
    document.addEventListener("DOMContentLoaded", ()=>{
        APIDolar();
        //APINews();
        addNews();
    });
    botonMenu.addEventListener("click",quitMenu);
    toggleMenuCheckbox.addEventListener("change",addMenu);
    window.addEventListener("scroll",moveLogo);
    CONTACT.addEventListener("submit",checkerEmail);
}

init();