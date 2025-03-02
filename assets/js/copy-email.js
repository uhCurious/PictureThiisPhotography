document.getElementById('copy-email').addEventListener('click', function(event) {
    event.preventDefault();
    const email = this.getAttribute('data-email');
    navigator.clipboard.writeText(email).then(function() {
        alert('Email address copied to clipboard');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});