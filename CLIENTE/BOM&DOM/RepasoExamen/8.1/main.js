document.querySelector("#formulary").addEventListener("submit", (ev) => {
    const serialNumber = document.querySelector("#nSerie").value

})


const check = (serialNumber) => {
    const digits = serialNumber.split("")
    const n = /[0-9]/
    const A = /[A-Z]/
    const a = /[a-z]/

    for (let i = 0; i < digits.length; i++) {
        if ((digits[0],digits[1],digits[2] == n) && (digits[3], digits[4] == A) && ((digits[5] == 1) || digits[5] == 2)) {
            
        }
        
    }
}