const loadUserFetch = () => {
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => {
            document.getElementById('error-box').innerHTML = `<h2 style="color: red;">${error}</h2>`;
        })
}

const loadUserAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUser(data.results[0]);
    } catch (error) {
        document.getElementById('error-box').innerHTML = `<h2 style="color: red;">${error}</h2>`;
    }
}

const displayUser = (data) => {
    const userElement = document.getElementById('users');
    userElement.innerHTML = `
        <h1>${data.name.title} ${data.name.first} ${data.name.last}</h1>
        <h3>${data.location.city}, ${data.location.state}, ${data.location.country}</h3>
        <h3>${data.cell}</h3>
        <h3>${data.email}</h3>
    `;
    console.log(data);
}