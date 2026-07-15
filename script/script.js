document.addEventListener("DOMContentLoaded", function () {

    const cep = document.getElementById("cep");

    if (cep) {

        cep.addEventListener("blur", function () {

            let valorCep = cep.value.replace(/\D/g, "");

            if (valorCep.length !== 8) {
                alert("Digite um CEP válido com 8 números.");
                return;
            }

            fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
                .then(response => response.json())
                .then(dados => {

                    if (dados.erro) {
                        alert("CEP não encontrado.");
                        return;
                    }

                    document.getElementById("logradouro").value = dados.logradouro;
                    document.getElementById("bairro").value = dados.bairro;
                    document.getElementById("cidade").value = dados.localidade;

                })
                .catch(() => {

                    alert("Erro ao consultar o CEP.");

                });

        });

    }

    const form = document.getElementById("formAdocao");
    const resultado = document.getElementById("resultado");


    if (form) {

        form.addEventListener("submit", function(event){

            event.preventDefault();


            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const animal = document.getElementById("animal").value;


            if (
                nome === "" ||
                email === "" ||
                telefone === "" ||
                animal === ""
            ){

                resultado.innerHTML = `
                    
                        Preencha todos os campos obrigatórios.
                    
                `;
                
                return;

            }


            resultado.innerHTML = `
                <div class="alert alert-success">
                    Obrigado <strong>${nome}</strong>!
                    Recebemos seu interesse em adotar um
                    <strong>${animal}</strong>.
                </div>
            `;


            form.reset();

        });

    }

});