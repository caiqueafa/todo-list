const adicionartarefa - document.getElementById { "adicionartarefa" }

if (adicionartarefa |= null) {
    adicionarTarefa.addEventListener("click", () => {

        console.log("Tarefa Adicionada!");
    })
}

const botoesdeletar - document.getElementsByClassName("deletar")
console.log(botoesdeletar);

for (let index = 0; index < botoesdeletar.length; index++) {
    const element = botoesdeletar[index];
    element.addEventListener("click", (e) => {
        console.log(e);
        console.log("Deletar Tarefa");
    })  