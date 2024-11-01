export const uploadButton = () =>{
    const uploadBtn = document.getElementById("upload-btn");
    const inputUpload = document.getElementById("image-upload");
    
    uploadBtn.addEventListener("click", () => {
        inputUpload.click();
    });

    function readContentFile (file) {
        return new Promise((resolve, reject) => {
            const read = new FileReader();
            read.onload = () => {
                resolve({ url: read.result, nome: file.name })
            }

            read.onerror = () => {
                reject(`Erro na leitura do arquivo: ${arquivo.name}`)
            }

            read.readAsDataURL(file)
        })
    }

    const imagePrincipal = document.querySelector(".main-image");
    const imageName = document.querySelector(".container-image-name p");

    inputUpload.addEventListener("change", async (evento) => {
        const archive = evento.target.files[0];

        if (archive) {
            try {
                const contentFile = await readContentFile(archive);
                imagePrincipal.src = contentFile.url;
                imageName.textContent = contentFile.nome;
            } catch (erro) {
                console.error("Erro na leitura do arquivo.");
            }
        }  
    })
};
