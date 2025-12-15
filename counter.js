// URL de tu API Gateway generada por Terraform
const apiUrl = "https://buu9i8e9t1.execute-api.us-east-1.amazonaws.com/visit";

async function updateCounter() {
    try {
        const response = await fetch(apiUrl, {
            method: "POST"
        });
        const data = await response.json();
        
        // Buscamos el elemento HTML con id="counter" y ponemos el número
        const counterElement = document.getElementById("counter");
        if (counterElement) {
            counterElement.innerText = data.count;
        }
    } catch (error) {
        console.error("Error al obtener visitas:", error);
    }
}

// Ejecutar la función cuando cargue la página
document.addEventListener("DOMContentLoaded", updateCounter);
