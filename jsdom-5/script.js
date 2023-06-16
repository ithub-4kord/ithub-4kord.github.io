let form = document.getElementsByTagName('form')[0]

let table = document.querySelector('.table')
let btn = document.querySelector('.btn')

let number = document.querySelector('.number')
let card_number = document.getElementById('card_number')

let cardholder = document.querySelector('.cardhld')
let name = document.querySelector('.name')

let date = document.querySelector('.date')
let exp_date = document.getElementById('exp_date')

let bank = document.querySelector('.bank')
let logo = document.getElementById('logo')

let system = document.getElementById('system')
let card_type = document.getElementById('card_type')

let card = document.querySelector('.card')

card_number.innerText = '0000 0000 0000 0000'
cardholder.innerText = 'NAME'

number.addEventListener('input', e => {
    card_number.textContent = e.target.value
})

date.addEventListener('input', e =>{
    let str_date = ''
    let mass = []
    str_date = e.target.value
    for(let i = 0; i< str_date.length; i++){
        mass[i] = str_date[i]
    }
    str_date = mass[5] + mass[6] + '/' + mass[2] + mass[3]
    exp_date.textContent = str_date
})

name.addEventListener('input', e => {
    cardholder.textContent = e.target.value.toUpperCase()
})

bank.addEventListener('input', e => {
    let bgc
    let image
    let sys_val
    sys_val = e.target.value
    switch(sys_val){
        case "Сбербанк":
            bgc = 'green'
            image = "https://bankinginnovation.qorusglobal.com/sites/default/files/styles/innovation_slider/public/2021-06/sberbank-logo.png?itok=XqCD6XyC"
            break;
        case "Тинькофф":
            bgc = 'yellow'
            image = "https://acdn.tinkoff.ru/static/pages/files/e74612f5-1bfa-49c3-94d1-2b12b39fd006.png"
            break;
        default:
            image=""
            bgc="gray"
    }
    card.style.backgroundColor = `${bgc}`
    logo.style.backgroundImage = `url(${image})`
})

card_type.addEventListener('input', e => {
    let sys_val
    let image
    sys_val = e.target.value
    switch(sys_val){
        case "VISA":
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            break;
        case "MASTER CARD":
            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1199px-Mastercard_2019_logo.svg.png"
            break;
        default:
            image = ""
    }
    system.style.backgroundImage = `url(${image})`
})

form.addEventListener('submit', e =>{
    e.preventDefault();
    let html = "<tr>";
    html += `<td>${card_number.outerText}</td>`;
    html += `<td>${cardholder.textContent}</td>`;
    html += `<td>${exp_date.textContent ? exp_date.textContent : "01/00"}</td>`;
    html += `<td>${card_type.value}</td>`;
    html += `<td>${bank.value}</td>`;
    html += "</tr>"
    table.innerHTML += html;
    e.target.reset()
    logo.style.backgroundImage = ''
    card_number.innerText = '0000 0000 0000 0000'
    exp_date.innerText = '01/01'
    cardholder.innerText = 'NAME NAME'
    system.style.backgroundImage = ''
    card.style.backgroundColor = '#f1f1f1'
})
