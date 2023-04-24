function generateNumber() {
    return Math.floor(Math.random() * 99)
}

function createCell() {
    return `<td></td>`
}

function generateCell() {
    let number = generateNumber()
    return `<td class="cell ${number >= 50 ? 'orange' : ''}">${number}</td>`
}


function createString() {
    return `<tr></tr>`
}

let tbody = document.body.childNodes[3].childNodes[1]
console.log(tbody)

let array = []
for (let i = 0; i < 30; ++i) {
    array[i] = generateNumber()
}

for (let i = 1; i <= 6; ++i) {
    tbody.innerHTML += createString()

    for (let j = 1; j <= 5; ++j) {
        tbody.lastChild.innerHTML += `<td class="cell ${array[i * j - 1] >= 50 ? 'orange' : ''}">${array[i * j - 1]}</td>`
    }
}

function addElement() {
    if (tbody.lastChild.childNodes.length === 5) {
        tbody.innerHTML += createString()
    }
    tbody.lastChild.innerHTML += generateCell()
}

console.log(tbody)