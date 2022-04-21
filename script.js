const check = function () {
    if (document.getElementById('password').value == 
        document.getElementById('passwordvalidate').value) {
        document.getElementById('message').textContent = '';
        document.getElementById('password').classList.add('match');
        document.getElementById('passwordvalidate').classList.add('match');
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'Passwords do not match';
        document.getElementById('password').classList.remove('match');
        document.getElementById('passwordvalidate').classList.remove('match');
        document.getElementById('password').classList.add('error');
        document.getElementById('passwordvalidate').classList.add('error');
    }
}