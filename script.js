$(document).ready(function() {
    $('#prediction-form').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: form.serialize(),
            success: function(response) {
                // Replace the entire page content with the response
                document.open();
                document.write(response);
                document.close();
            },
            error: function(error) {
                console.log(error);
                $('#result').text('An error occurred. Please try again.');
            }
        });
    });

    // Basic form validation
    $('input[type="number"]').on('input', function() {
        var min = $(this).attr('min');
        var max = $(this).attr('max');
        var value = parseFloat($(this).val());

        if (min !== undefined && value < parseFloat(min)) {
            $(this).val(min);
        }
        if (max !== undefined && value > parseFloat(max)) {
            $(this).val(max);
        }
    });
});