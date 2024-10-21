const sign_Up_Form = document.getElementById('sign_Up_Form')
const alert_Container = document.getElementById('alert_Container')
const alert_Container_Text = document.getElementById('alert_Container_Text')
const loading_Container = document.getElementById('loading_Container')

accountCreated = false;

const sheets_Url = 'https://script.google.com/macros/s/AKfycbxXcdWAqXaiAaPiura4rZgQl2_sXMWZi4NtWVJl3cya11pNXQOAwyn1M3zyaetfs_Ie/exec';

sign_Up_Form.addEventListener('submit', SignUp);

function SignUp(event) {
    event.preventDefault();
    loading_Container.style.display = 'flex'
    var sign_Up_Form_Data = new FormData(sign_Up_Form);

    fetch(sheets_Url, {
        method: 'POST',
        body: sign_Up_Form_Data
    })
    .then(response => response.text())
    .then(data => {
        if(data === 'Account_Created'){
            alert_Container.style.display = 'block'
            alert_Container_Text.textContent = 'Account created.'
            accountCreated = true
        }
        else if(data === 'Username_Is_Taken'){
            alert_Container.style.display = 'block'
            alert_Container_Text.textContent = 'Username is taken.'
        }
        loading_Container.style.display = 'none'
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function CloseAlert(){
    alert_Container.style.display = 'none'
    if(accountCreated == true){
        window.location.href = 'LoginPage.html'
    }
}
