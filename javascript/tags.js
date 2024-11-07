export let listTags;

export const inputTags = () => {
    const inputTag = document.getElementById("category");
    listTags = document.getElementById("list-tags");

    
    listTags.addEventListener("click", (event) => {
        if(event.target.classList.contains("remove-tag")) {
            const tagRemove = event.target.parentElement;
            listTags.removeChild(tagRemove);
        }
    })
    
    const tagsAvaliable = ["Front-end", "Back-end", "Mobile", "Desktop", "DevOps", "Data Science", "JavaScript"];
    
    async function verifyTags (tagText) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(tagsAvaliable.includes(tagText));
            }, 1000);
        })
    }

    inputTag.addEventListener("keypress", async(event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const tagText = inputTag.value.trim();
    
            if (tagText !== "") {
                try {
                    const tagExist = await verifyTags(tagText);
                    if (tagExist) {
                        const newTag = document.createElement("li");
                        newTag.innerHTML = `<p>${tagText}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                        listTags.appendChild(newTag);
                        inputTag.value = "";
                    } else {
                        alert("Essa tag não está disponível");
                    }
                } catch (error) {
                    console.log("Erro ao verificar a tag", error);
                    alert("Erro ao verificar a tag");
                }
            }    
        }    
    })
} 