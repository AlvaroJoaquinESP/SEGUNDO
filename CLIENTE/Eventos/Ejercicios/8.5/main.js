const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q', 'R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
document.querySelector("#boton").addEventListener("click",()=> {
    let longitud = document.querySelector("#lenght").value
    if (longitud < 4) {
        alert("The minimun length is 4")
    }
    let pass = ""
    for (let i = 0; i < longitud; i++) {
        let index = Math.round(Math.random()* arr.length -1)
        pass += arr[index]
    }
    document.querySelector("#salida").value = pass
});