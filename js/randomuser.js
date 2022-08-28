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
        <h3>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>User Email: ${user.email}</p>
        <p>User Gender: ${user.gender}</p>
        <p>User Age: ${user.dob.age}</p>
        <p>User Location: ${user.location.city}</p>
        `;
        usersContainer.appendChild(userDiv);
    }
}
loadUser();