
        document.getElementById('uploadButton').addEventListener('click', function() {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];
            if (file) {
                processAndGeocode(file);
            } else {
                alert('Please upload a file.');
            }
        });

        function processAndGeocode(file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                console.log(event.target.result); // Log the file content
                // Further processing...
            };
            reader.readAsText(file);
        }
    