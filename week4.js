$(document).ready(function() {
// Real-time Validation 
    
    //Name can't be blank
    $('#contact_name').on('input', function() {
        var input = $(this);
        var is_name = input.val();

        if(is_name && (is_name.length > 0)) {
            input.removeClass("invalid").addClass("valid");
        }
        else {input.removeClass("valid").addClass("invalid");
        }
    });
    

    //Email must be valid 
    $('#contact_email').on('input', function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());

        if(is_email) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    
    
    //Address can't be blank 
    $('.contact_address').on('input', function() {
        var input = $(this);
        var address = $(this).val();

        if(address && (address.length > 0)) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }   
    });


    //Styling of the phone number.
    $("input[name=phone]").on('keyup', function() {
        var input = this.value.length;
        var is_phone = $(this).val();

        var input = $(this);

        var areaCode;
        var prefix;
        var suffix;

        //check for 10 digits
        if(is_phone && !isNaN(is_phone) && is_phone.length > 10) {

            areaCode = is_phone.substring(0,3);
            prefix = is_phone.substring(3,6);
            suffix = is_phone.substring(6,10);
            is_phone = input.val("(" + areaCode + ")" + " " + prefix + "-" + suffix);
            input.removeClass("invalid").addClass("valid");


        }
        else {
            input.removeClass("valid").addClass("invalid");
        }


    });


    // After Form Submitted Validation
    $("#contact_submit button").click(function(event) {
        var form_data = $("#contact").serializeArray();
        var error_free = true;

        for (var input in form_data) {
            var element = $("#contact_" + form_data[input]['name']);
            var valid = element.hasClass("valid");
            var error_element = $("span", element.parent());

            if (!valid) {
                error_element.removeClass("error").addClass("error_show"); 
                error_free = false;
            }
            else {
                error_element.removeClass("error_show").addClass("error");
            }
        }
        
        if (!error_free) {
            event.preventDefault(); 
        }
        else {
            alert('No errors: Form will be submitted');
        }
    });
});
