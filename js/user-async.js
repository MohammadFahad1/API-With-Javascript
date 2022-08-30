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
    console.log(data);
}