perguntas = [{
    pergunta: 'Qual é o nome do personagem principal da série de TV "Breaking Bad"?',
    alternativas: [
        {text: 'Walter White', correta: true},
        {text: 'Jesse Pinkman', correta: false},
        {text: 'Saul Goodman', correta: false},
        {text: 'Gustavo Fring', correta: false}
    ]
},
    {
        pergunta: 'Qual é o nome da nave espacial icônica da franquia "Star Wars"?',
        alternativas: [
            {text: 'Enterprise', correta: false},
            {text: 'Millennium Falcon', correta: true},
            {text: 'USS Discovery', correta: false},
            {text: 'Serenity', correta: false}
        ]
    },
    {
        pergunta: 'Qual é o nome do vilão icônico da série de filmes "Harry Potter"?',
        alternativas: [
            {text: 'Voldemort', correta: true},
            {text: 'Draco Malfoy', correta: false},
            {text: 'Severus Snape', correta: false},
            {text: 'Lucius Malfoy', correta: false}
        ]
    }

];

const defaultClass = 'row mb-4'
function onclickEscolha(event) {
    const target = event.target;
    if (target.firstChild) {
        target.firstChild.click();
        return;
    }
    console.log(this, event.target);
    const div = target.parentNode.parentNode;

    if (this.correta) {
        div.setAttribute('class', defaultClass+' resposta-certa');
        return;
    }
    div.setAttribute('class', defaultClass+' resposta-errada');
}

function createRow() {
    const div = document.createElement('div')
    div.setAttribute('class', defaultClass);
    return div;
}

function createCheckbox(group) {
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', group);
    return input;
}

function createCol(text, size = 12) {
    const div = document.createElement('div')
    div.setAttribute('class', 'col-' + size);
    div.textContent = text;
    return div;
}

const out = document.getElementById("output")
let i = 0;
for (const pergunta of perguntas) {
    const row = createRow();
    row.append(createCol(pergunta.pergunta));
    for (const alternativa of pergunta.alternativas) {
        const col = createCol('', 12)
        col.append(createCheckbox('group-' + i));
        col.append(alternativa.text);
        col.addEventListener('click', onclickEscolha.bind(alternativa));
        row.append(col);

    }
    out.append(row);
    i++;
}
