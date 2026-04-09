function onSubmit(e) {
    // Retrieve form data
    var name = e.values[1];
    var email = e.values[2];

    // Prepare the data to send
    var data = {
        "name": name,
        "email": email
    };

    // Send the data to the backend
    var response = UrlFetchApp.fetch('https://your-backend-url.com/api/lead', {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(data),
    });

    // Parse the response
    var score = JSON.parse(response.getContentText()).score;

    // Log the score or handle it as needed
    Logger.log('Lead Score: ' + score);
}