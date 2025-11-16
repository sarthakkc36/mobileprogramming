$(document).ready(function() {
    $('#hamburger').click(function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('active');
    });
    
    $('.menu a').click(function() {
        $('#hamburger').removeClass('active');
        $('#menu').removeClass('active');
    });
    
    let recording = false;
    
    // Click button to start/stop
    $('#recordBtn').click(function() {
        recording = !recording;
        
        if (recording) {
            // Start recording
            $(this).text('⏹️ Stop').addClass('active');
            $('#status').text('Recording...');
        } else {
            // Stop recording
            $(this).text('🎤 Record').removeClass('active');
            $('#status').text('Saved!');
            
            // Add new recording to list
            $('#list').html(''); // Clear "no recordings"
            $('#list').append('<div class="recording">Recording ' + new Date().toLocaleTimeString() + '</div>');
        }
    });
    
    // Click on recording to view
    $(document).on('click', '.recording', function() {
        let time = $(this).text();
        alert('Playing: ' + time);
    });
    
    // Button hover effect
    $('#recordBtn').hover(
        function() { $(this).css('opacity', '0.8'); },
        function() { $(this).css('opacity', '1'); }
    );
});
