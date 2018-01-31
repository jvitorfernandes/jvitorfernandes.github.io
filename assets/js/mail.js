$(document).ready(function(){
    
    $("#contactForm").on('submit', function(e){
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        
        $.ajax({
            url: "https://formspree.io/fernandesjvb@gmail.com", 
            method: "POST",
            data: {
                name: name,
                email: email,
                message: message
            },
            dataType: "json",
            beforesend: function(xhr){
                $('.feedbackMessage').empty();
            },
            success: function(result, status) { 

                $('.feedback').addClass('success');
                $('.feedbackMessage').text('Thanks for getting in touch! You will soon receive an answer in your email.');
                
                $("#name").val('');
                $("#email").val('');
                $("#message").val('');
                
            },
            error: function(result, status){
                $('.feedback').addClass('error');
                $('.feedbackMessage').text(':( Something went wrong. Try again later or send a direct message to fernandesjvb@gmail.com.');
            }  
        });
    });
    
    $('.close').on('click', function(){
        $('.feedback').removeClass('success error');
    });
    
});