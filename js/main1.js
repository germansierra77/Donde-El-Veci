/*FUNCION QUE SIRVE PARA DIRIGIRSE A MENU PRINCIPAL*/
document.addEventListener("click", (e)=> {
    if(e.target.matches("#btningreso"))
    location.href="menuprincipal"
})
/*FUNCION QUE SIRVE PARA REGISTRARSE */
document.addEventListener("click", (e)=> {
    if(e.target.matches("#btnregistrarse"))
    location.href="creacionusuario"
})
/*FUNCION QUE SIRVE PARA REESTABLECER CONTRASEÑA*/
document.addEventListener("click", (e)=> {
    if(e.target.matches("#btnrecordar"))
    location.href="reestablecer"
})
/*FUNCION QUE SIRVE PARA GUARDAR DATOS*/
document.addEventListener("click", (e)=> {
    if(e.target.matches("#btnguardar"))
    location.href="menuprincipal"
})
/*FUNCION QUE SIRVE PARA VOLVER A INICIO DE SESION*/
document.addEventListener("click", (e)=> {
    if(e.target.matches("#btnvolver"))
    location.href="iniciosesion"
})
/*FUNCION QUE DIRIGE AL MENU CLIENTE*/
document.addEventListener("click", (e)=> {
    if(e.target.matches("#opcioncliente"))
    location.href="menuprincipal"
})
/*FUNCION QUE DIRIGE AL MENU TENDERO*/
document.addEventListener("click", (e)=> {
    if(e.target.matches("#opciontendero"))
    location.href="menutendero"
})