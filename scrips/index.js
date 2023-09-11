const botonMenu = document.querySelector(".quit-menu");
const toggleMenuCheckbox = document.getElementById("toggle-menu");
const toggleMenu = document.querySelector(".menu-container");
const main = document.querySelector("main");


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
        main.innerHTML += `
        <section id="${sectionName}" class="sections">
            <h2>${sectionName}</h2>
        </section>`;
        console.log(sectionName);
        const DOMCurrentsecion = document.getElementById(sectionName);
        const currentSection = sections[sectionName];
        for (const currentNew in currentSection){
            const {title, author, image, paragraph} = currentSection[currentNew];
            DOMCurrentsecion.innerHTML += `
            <a class="article-container" href="#">
                <article class="article">
                    <img src="./assets/imgs/${title}.jpg" alt="" class="article-img">
                    <h2 class="article-header">${title}</h2>
                    <p class="article-paragraph">${paragraph.slice(0,70)+"..."}</p>
                    <span class="article-author">${author}</span>
                </article>
            </a>
            
            `;
            console.log(currentSection[currentNew]);
            
        }
    }
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
    console.log(sectionNews);
    return sectionNews;
}

const APIDolar = async() =>{
    const dolars = await getAPIDolar();
    console.log(dolars);
    
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
    <div class="price-box ${contador === 0 ? '' : 'wea'} ${contador === 3 ? 'box-laster' : ''}">
        <h2>${parte.nombre}</h2>
        <span>Compra: ${parte.compra}</span>
        <span>Venta: ${parte.venta}</span>
    </div>
    `).join("");
}

const quitMenu =() =>{
    botonMenu.parentNode.style.display = "none";
    toggleMenuCheckbox.checked = false;
}
const addMenu =() =>{
    toggleMenu.style.display="block";
}





const init = () =>{
    document.addEventListener("DOMContentLoaded", ()=>{
        APIDolar();
        //APINews();
        addNews();
    });
    botonMenu.addEventListener("click",quitMenu);
    toggleMenuCheckbox.addEventListener("change",addMenu);
}
init();