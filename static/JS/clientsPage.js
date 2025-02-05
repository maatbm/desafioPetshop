import { CRUDLocalStorage } from "./CRUDLocalStorage.js";

const clientFullData = document.getElementById('clientFullData');
const clientName = document.getElementById('clientName');
const clientTel = document.getElementById('clientTel');
const clientAddress = document.getElementById('clientAddress');
const appointmentDate = document.getElementById('appointmentDate');
const animalName = document.getElementById('animalName');
const animalAge = document.getElementById('animalAge');
const animalSize = document.getElementById('animalSize');

function displayClients(){
    let clients = CRUDLocalStorage.getClientsArray();
    let clientsHTML = '';
    if(!!clients.length){
        clients.forEach( (client, index) => {
            clientsHTML += `
                <div class="clientCard" id="${index}">
                    <h2>${client.animal.name}</h2>
                    <h3>Data de atendimento: ${client.appointmentDate}</h3>
                </div>
            `;
        });

        document.getElementById('clientsPageContainer').innerHTML = clientsHTML;

        clients.forEach((client, index) => {
            document.getElementById(`${index}`).addEventListener('click', () => {
                clientFullData.style.zIndex = '1';
                clientFullData.style.display = 'flex';

                clientName.innerText = `Nome: ${client.name}`;
                clientTel.innerText = `Telefone: ${client.tel}`;
                clientAddress.innerText = `Endereço: ${client.address}`;
                appointmentDate.innerText = `Data de atendimento: ${client.appointmentDate}`;
                animalName.innerText = `Nome: ${client.animal.name}`;
                animalAge.innerText = `Idade (anos): ${client.animal.age}`;
                animalSize.innerText = `Porte: ${client.animal.size}`;
            });
        });
    };
};

clientFullData.addEventListener('click', () => {
    clientFullData.style.zIndex = '-1';
    clientFullData.style.display = 'none';
});

window.onload = displayClients();