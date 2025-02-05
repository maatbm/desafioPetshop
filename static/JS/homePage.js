import { CRUDLocalStorage } from "./CRUDLocalStorage.js";

document.getElementById('formClientAnimal').addEventListener('submit', (event) => {
    event.preventDefault();
    const clientName = document.getElementById('clientName').value;
    const clientTel = document.getElementById('clientTel').value;
    const clientAddress = document.getElementById('clientAddress').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const animalName = document.getElementById('animalName').value;
    const animalAge = document.getElementById('animalAge').value;
    const animalSize = document.getElementById('animalSize').value;

    const newClient = {
        name: clientName,
        tel: clientTel,
        address: clientAddress,
        appointmentDate: appointmentDate,
        animal: {
            name: animalName,
            age: animalAge,
            size: animalSize
        }
    };

    CRUDLocalStorage.addClient(newClient);

    window.location.reload();
});

