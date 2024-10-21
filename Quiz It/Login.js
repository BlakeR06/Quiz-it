const login_Form = document.getElementById('login_Form')
const alert_Container = document.getElementById('alert_Container')
const alert_Container_Text = document.getElementById('alert_Container_Text')
const loading_Container = document.getElementById('loading_Container')

login_Successful = false;

const sheets_Url = 'https://script.google.com/macros/s/AKfycbxXcdWAqXaiAaPiura4rZgQl2_sXMWZi4NtWVJl3cya11pNXQOAwyn1M3zyaetfs_Ie/exec';

login_Form.addEventListener('submit', Login);

function Login(event){
    event.preventDefault();
    loading_Container.style.display = 'flex'
    var login_Form_Data = new FormData(login_Form)

    fetch(sheets_Url, {
        method: 'POST',
        body: login_Form_Data
    })
    .then(response => response.text())
    .then(data => {
        if(data === 'Login_Successful'){
            alert_Container.style.display = 'block'
            alert_Container_Text.textContent = 'Login Successful.'
            localStorage.setItem('current_User', document.getElementById('login_Username_Input').value)
            login_Successful = true
        }
        if(data === 'Login_Failed'){
            alert_Container.style.display = 'block'
            alert_Container_Text.textContent = 'Incorrect username or password.'
        }
        loading_Container.style.display = 'none'
    })
    .catch(error => {
        console.error('Error:', error);
    })
}

function CloseAlert(){
    alert_Container.style.display = 'none'
    if(login_Successful == true){
        window.location.href = 'YourSets.html'
    }
}