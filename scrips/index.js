const wea = (e) => {
    e.preventDefault();
    let globalData; // Variable global
    fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => {
            globalData = data; // ALmacenar los datos
            console.log(globalData);

        });
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




const init = () =>{
    document.addEventListener("DOMContentLoaded",APIDolar);
}
init();