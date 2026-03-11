const video = document.getElementById("video");
const startBtn = document.getElementById("startBtn");

// Função para iniciar câmera
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "environment"
            },
            audio: false
        });
        video.srcObject = stream;

        // Esconde o botão quando a câmera iniciar
        startBtn.style.display = "none";
    } catch (err) {
        alert("Erro ao iniciar câmera: " + err);
        console.error(err);
    }
}
