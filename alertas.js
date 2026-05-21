const BIN_ID = '6a0e3b31ee5a733b12f2044a';
const API_KEY = '$2a$10$6ZRnbODXOLMMocK8JD4pze8pwg6gM3Dd1cLRNLQg./MuB8ht/wtV6'; // ¡CAMBIÁ ESTO POR TU CLAVE REAL!

// Función para descargar las alertas (para el Cliente)
async function obtenerAlertas() {
    try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: { "X-Master-Key": API_KEY }
        });
        const data = await res.json();
        return data.record.alertas || [];
    } catch (e) {
        console.error("Error al obtener datos:", e);
        return [];
    }
}

// Función para subir las alertas (para el Admin)
async function subirAlertas(lista) {
    try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": API_KEY
            },
            body: JSON.stringify({ alertas: lista })
        });
        return await res.json();
    } catch (e) {
        console.error("Error al subir datos:", e);
    }
}