export const inputTags = () => {
    const inputTags = document.getElementById("category");
    const listaTags = document.getElementById("list-tags");
    const botaoPublicar = document.querySelector(".button-publish");

    listaTags.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("remove-tag")) {
            const tagQueQueremosRemover = evento.target.parentElement;
            listaTags.removeChild(tagQueQueremosRemover);
        }
    });

    const tagsDisponiveis = ["Front-end", "Back-end", "Mobile", "Desktop", "DevOps", "Data Science", "JavaScript"];

    async function verificaTagsDisponiveis(tagTexto) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(tagsDisponiveis.includes(tagTexto));
            }, 1000);
        });
    }

    inputTags.addEventListener("keypress", async (evento) => {
        if (evento.key === "Enter") {
            evento.preventDefault();
            const tagTexto = inputTags.value.trim();
            if (tagTexto !== "") {
                try {
                    const tagExiste = await verificaTagsDisponiveis(tagTexto);
                    if (tagExiste) {
                        const tagNova = document.createElement("li");
                        tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                        listaTags.appendChild(tagNova);
                        inputTags.value = "";
                    } else {
                        alert("Tag não foi encontrada.");
                    }
                } catch (error) {
                    console.error("Erro ao verificar a existência da tag");
                    alert("Erro ao verificar a existência da tag. Verifique o console.");
                }
            }
        }
    });

    botaoPublicar.addEventListener("click", (evento) => {
        evento.preventDefault();

        const nomeDoProjeto = document.getElementById("name").value;
        const descricaoDoProjeto = document.getElementById("description").value;
        const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

        console.log(nomeDoProjeto);
        console.log(descricaoDoProjeto);
        console.log(tagsProjeto);
    });
};