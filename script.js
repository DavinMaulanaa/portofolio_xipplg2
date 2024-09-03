document.getElementById('loginform').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername = 'Davin';
    const correctPassword = 'atmin123';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctUsername && password === correctPassword){
        alert('login berhasil')
        window.location.href = 'index.html';
    }else{
        alert ('Login Gagal');
    }
})