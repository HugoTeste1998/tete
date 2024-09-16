const input_color = document.getElementById("input-color");
var cor_selecionada = input_color.value;
input_color.style.background = cor_selecionada

input_color.addEventListener('input', function() {
    cor_selecionada = input_color.value;
    input_color.style.background = cor_selecionada
    document.documentElement.style.setProperty('--color-theme', cor_selecionada);
});




const btn_dark_light = document.getElementById("btn-dark-light")
var  icon_dark_light = document.querySelector("bi bi-moon-stars")



btn_dark_light.addEventListener("click", function (){
    if (document.body.style.background === "black"){
        document.body.style.background = "white"
        document.documentElement.style.setProperty('--color-white', "black");
        btn_dark_light.classList.remove('bi-moon-stars')
        btn_dark_light.classList.add("bi-moon-stars-fill")
        
    }else{
        document.body.style.background = "black"
        document.documentElement.style.setProperty('--color-white', "white");
        btn_dark_light.classList.remove('bi-moon-stars-fill')
        btn_dark_light.classList.add("bi-moon-stars")
        
    }
})