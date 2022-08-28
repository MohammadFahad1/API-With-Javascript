const loadUser = () => {
    fetch('https://randomuser.me/api/?page=3&results=100')
        .then(res => res.json())
        .then(data => displayUser(data.results));
}

const displayUser = users => {
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        const userDiv = document.createElement('div');
        console.log(user);
        userDiv.innerHTML = `
        <h3>User Name</h3>
        <p>User Info</p>
        `;
        usersContainer.appendChild(userDiv);
    }
}