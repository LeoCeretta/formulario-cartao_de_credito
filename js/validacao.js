const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const validacao = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.'
    },
    numero: {
        valueMissing: 'O campo de número do cartão não pode estar vazio.'
    },
    data: {
        valueMissing: 'Os campos de mês e ano não podem estar vazio.'
    },
    cvc: {
        valueMissing: 'O campo cvc não pode estar vazio.'
    }
}