// Получить поле ввода почты из HTML-разметки.
inputUserEmail = document.getElementById('emailInput')

// Получить кнопку рассылки из HTML-разметки.
buttonSendEmail = document.getElementById('sendEmailButton');

function show_email() {
    // Получить введённую почту.
    userEmail = inputUserEmail.value;

    // Показать введённую почту.
    alert(`Вы ввели почту ${userEmail}`)
}

// Назначить слот сигналу clicked кнопки buttonSendEmail.
buttonSendEmail.addEventListener('click', show_email);