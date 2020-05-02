let inpCode = document.getElementById('inpCode')
let btnEncode = document.getElementById('btnEncode')
let btnEncrypt = document.getElementById('btnEncrypt')

let code = document.getElementById('code')

btnEncode.onclick = function () {
    let data = inpCode.value 
    data = btoa(data)
    code.value = data
}

btnEncrypt.onclick = function () {
    let data = code.value
    data = encryptData(data)
    code.value = data
}

function encryptData(rawData) {
    /*
        TODO: actually encrypt data
        logic: turn lowercase chars to uppercase and viceversa 
     */
    return 'XXXXXXXX'
}