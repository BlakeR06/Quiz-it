current_User = localStorage.getItem('current_User')

window.onload = function(){
    if(current_User){
        alert(current_User)
    }
    else{
        window.location.href = 'LoginPage.html'
    }
}