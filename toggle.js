/* TOGGLE A VISTA / PARCELADO */

            const toggleToAVista = document.getElementById("a-vista-button");
            const toggleToParcelado = document.getElementById("parcelado-button");            

            const disneyAVista = document.getElementById("disney-result-div ");
            const disneyParcelado = document.getElementById("disney-parcelado");
            
            const hide = el => el.style.setProperty("display", "none");
            const show = el => el.style.setProperty("display", "block");

            toggleToParcelado.addEventListener("click", () => {
                hide(disneyAVista)
            })



/* TOGGLE PARKS */

function getval() {
    if (self.value == "1") {
        window.location.href = "universal-result.html";
    } else if (self.value == "2") {
        window.location.href = "disney-result.html"
    }
}