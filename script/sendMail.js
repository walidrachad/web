//Send Form
if(!error) {
    fetch('/sendmail.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({
      nomcomplet: nomComplet.value,
      telephone: telephone.value,
      email: email.value,
      message: message.value
  })
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    if(data.state == 'success') {
        nomComplet.value = '';
        telephone.value = '';
        email.value = '';
        message.value = '';
        alert.classList.add('shown');
    }
})
}