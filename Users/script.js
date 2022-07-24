const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch('http://localhost/htMLProject/rest-api/items/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});

const api_url = "http://localhost/htMLProject/rest-api/items/read";

async function getapi(url) {

    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
            <th>fullName</th>
            <th>telephoneNumber</th>
            <th>Age</th>
        </tr>`;

    // Loop to access all rows 
    for (let r of data.items) {
        tab += `<tr> 
                    <td>${r.fullName} </td>
                    <td>${r.telephoneNumber}</td>
                    <td>${r.Age}</td>        
                </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("users").innerHTML = tab;
}
