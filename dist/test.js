async function request() {
    try {
        const response = await fetch('http://127.0.0.1:5000/love/Vladimir');
        const contentType = response.headers.get('content-type');
        if (!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`);
        }
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        }
        else {
            return await response.text();
        }
    }
    catch (error) {
        console.log(`Error: \n${error}`);
    }
}
request().then(response => {
    console.log(response);
});
export {};
//# sourceMappingURL=test.js.map