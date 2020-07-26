let nome = prompt('Digite seu nome:')
let sobrenome = prompt('Digite seu sobrenome:')
let idade = Number(prompt('Digite seu idade:'))
let corFavorito = prompt('Digite seu cor favorito:')

console.log(`Seja Ben-Vindo sr/sra: ${nome}`)
console.log(`Sobrenome: ${sobrenome}`)
console.log(`Idade: ${idade}`)
console.log(`Cor: ${corFavorito}`)

console.table(
    {
        Nome: prompt('Digite seu nome:'),
        Sobrenome: prompt('Digite seu sobrenome:'),
        Idade: Number(prompt('Digite seu idade:')),
        Cor: prompt('Digite seu cor favorito:')
    }
)


