const wea = (e) => {
    e.preventDefault();
    let globalData; // Variable global
    fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => {
            globalData = data; // ALmacenar los datos
            console.log(globalData); //sacar luego
            const weaContainer = document.getElementById("dolar-api");
            weaContainer.innerHTML = globalData.slice(0,4).map(parte =>
                `<div class="dolar-item ${parte.nombre}-container">
                    <h2>${parte.nombre === "Contado con liquidación" ? "Cdo C/liq" : parte.nombre}</h2>
                    <div class="dolar-value-container">
                        <span>Compra: ${parte.compra ||"--"}</span>
                        <span>Venta: ${parte.venta || "--"}</span>
                    </div>
                </div>`
            ).join("");
        });
}




const init = () =>{
    document.addEventListener("DOMContentLoaded",wea)
}
init();


//https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${key}//