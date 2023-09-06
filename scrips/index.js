const botonMenu = document.querySelector(".quit-menu");
const toggleMenuCheckbox = document.getElementById("toggle-menu");
const toggleMenu = document.querySelector(".menu-container");


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
    document.addEventListener("DOMContentLoaded",APIDolar);
    botonMenu.addEventListener("click",quitMenu);
    toggleMenuCheckbox.addEventListener("change",addMenu)
}
init();