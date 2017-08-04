$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
        var firstName = $('#first').val();
        var lastName = $('#last').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (firstName === "") {
            $('.first-name-error').html('Veuillez entrer votre Nom');
        };

        if (lastName === "") {
             $('.last-name-error').html('Veuillez entrer votre Prénom');
         };

        if (email === "") {
             $('.email-error').html('Veuillez entrer votre e-mail');
         };

        if (message === ""){
            $('.message-error').html('Veuillez entrer votre message')
        };
        
        if (firstName && lastName && email && message){
          $('.messageSubmit').html('Votre message à bien été envoyé !')
        }
    });
    });
