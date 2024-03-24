
function fetching () {
    try {
    const takingData = fetch('http://localhost:3004/api/users')
    .then((res) => {
        if(!res.ok) {
            throw new Error
        }
        return res.json()
    .then((data) => {

        const userDataDiv = document.getElementById('userDataDiv')

        data.map((user) => {
            const userDiv = document.createElement('div');
            userDiv.textContent = `Name is ${user.name}, Surname is ${user.surname}`;
            userDataDiv.appendChild(userDiv)
        })

    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
    })

    } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', err);
    }
}

fetching ()
const putInput = document.getElementById('putInput');

putInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    const userData = {
        name: name,
        surname: surname
    };

    const createUserURL = 'http://localhost:3004/api/user';
    const options = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    fetch(createUserURL, options)
        .then((res) => {
        })
        .catch((error) => {
        });
});

const btnRefresh = document.getElementById('btn-refresh')

btnRefresh.addEventListener('click',()=> {
    userDataDiv.innerHTML = '';
    fetching()
})