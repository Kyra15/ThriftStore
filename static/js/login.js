document.getElementById('eye-icon').addEventListener('click', function() {
    let passwordIn = document.getElementById('password');
    if (passwordIn.type === 'password') {
        passwordIn.type = 'text';
        this.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordIn.type = 'password';
        this.classList.replace("fa-eye-slash", "fa-eye");
    }
});

async function validateForm() {
    event.preventDefault();

    let username = document.forms["loginform"]["username"].value;
    let password = document.forms["loginform"]["password"].value;
    console.log(username, password);

    const user_data = await fetchFromDB(username);

    if (user_data && user_data.password === password) {
        current_user = user_data;
        localStorage.setItem('current_user', JSON.stringify(current_user));
        changePage('inventory');
        return true;
    } else {
        window.alert("Invalid username or password");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        return false;
    }
}


async function fetchFromDB(username) {
    try {
        const response = await fetch('/users_testbank');
        if (!response.ok) {
            throw new Error('network error: ' + response.statusText);
        }
        const data = await response.json();

        // have to get only one object based on id
        const user_data = data.find((user) => user.username == username);

        if (user_data) {
            console.log("found", user_data);
            return user_data;
        } else {
            window.alert("No user by that name");
            return null;
        }
    } catch (error) {
        console.error('error w fetch:', error);
        return null;
    }
}
