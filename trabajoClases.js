function validatePhone(phone) {
    const phonePattern = /^[0-9]{8}$/;
    return phonePattern.test(phone);
}


function addContact() {

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name === '' || phone === '') {
        alert('Tiene que llenar los campos obligatoriamente.');
        return;
    }

    
    if (!validatePhone(phone)) {
        alert('Favor de ingresar 8 dígitos.');
        return;
    }


    const contactList = document.getElementById('contact-list');
    const listItem = document.createElement('li');

    listItem.textContent = 'Name: ' + name + ', Phone: ' + phone;

    contactList.appendChild(listItem);


    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}
