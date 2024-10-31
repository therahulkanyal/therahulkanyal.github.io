onmessage = function (event) {
    console.log('Message received from main script:', event.data);

    const threshold = 500;
    const start = performance.now();
    for (let i = 0; i < 50000; i++) {
        console.log("rahul");
        console.clear();
    }
    console.log("rahul");
    const time = performance.now() - start;

    if (time > threshold) {
        postMessage('OPEN');
    }
    else {
        postMessage('CLOSED');
    }
};