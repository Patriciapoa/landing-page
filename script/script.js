const form = document.getElementById("formAdocao");

const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const animal = document.getElementById("animal").value;

    if(nome==="" || email==="" || telefone==="" || animal===""){

        mensagem.innerHTML = `
           Preencha todos os campos
           
        `;
        mensagem.style.color = "red"
        return;

    }

    mensagem.innerHTML = `
        <div class="alert alert-success">
            Obrigado <strong>${nome}</strong>! Recebemos seu interesse em adotar um <strong>${animal}</strong>.
        </div>
    `;

    form.reset();

});