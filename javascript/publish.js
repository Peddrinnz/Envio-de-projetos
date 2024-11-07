import { listTags } from "./tags.js";

export const publishButton = () => {
    const publishBtn = document.querySelector(".button-publish");

    publishBtn.addEventListener("click", async (event) =>{
        event.preventDefault();

        const projectName = document.getElementById("name").value;
        const projectDescription = document.getElementById("description").value;
        const tagsProject = Array.from(listTags.querySelectorAll("p")).map((tag) => tag.textContent);

        if (!projectName || !projectDescription || tagsProject.length === 0) {
            alert("Por favor, preencha todos os campos para publicar o projeto.");
            return;
          }

          console.log("Nome do projeto:", projectName);
          console.log("Descrição do projeto:", projectDescription); 
          console.log("Tags do projeto:", tagsProject); 
    })
}