
    // The message received as a String
    console.log(data);

    // Sending String character by character
    for(var i=0; i<data.length; i++){
        myPort.write(new Buffer(data[i], 'ascii'), function(err, results) {
            // console.log('Error: ' + err);
            // console.log('Results ' + results);
        });
    }

    // Sending the terminate character
    myPort.write(new Buffer('\n', 'ascii'), function(err, results) {
        // console.log('err ' + err);
        // console.log('results ' + results);
    });