const beginButton = document.getElementById('fetchButton');
const url = 'https://gist.githubusercontent.com/yuchengguan/3fafa31fff1adf21ba553e22db0f41d4/raw/a2f1d48b548073310fa1eb04d5e6e9484d5f8ca0/degree.json';

// set button
beginButton.onclick = function() {
    getDegree(url);
}

// get data
function getDegree(url) {
    fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {

        // create table
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');

        table.appendChild(thead);
        thead.appendChild(tr);

        // set the thead
        for (let key in data.my_degree[0].degree) {
            let th = document.createElement('th');
            th.innerHTML = key;
            tr.appendChild(th);
        }

        // create tbody
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);

        // get all the data in tbody
        for (let index = 0; index < data.my_degree.length; index++) {
            let tr = document.createElement('tr');

            for (let key in data.my_degree[index].degree) {
                let td = document.createElement('td');
                td.innerHTML = data.my_degree[index].degree[key];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        // set the table into div
        document.getElementById('degreeTable').appendChild(table);

        // hide the button
        beginButton.style.display = 'none';

        console.log(data);
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}