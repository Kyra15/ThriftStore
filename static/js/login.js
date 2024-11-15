let current_user = "";

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
    let username = document.forms["loginform"]["username"].value;
    let password = document.forms["loginform"]["password"].value;
    console.log(username, password);

    const user_data = await fetchFromDB(username);

    if (user_data) {
        console.log("stuff", user_data.password, password);

        if (user_data.password === password) {
            console.log("success!");
            return true;
        }
    } else {
        console.log("no user");
    }
    return false;
}


async function fetchFromDB(username) {
    try {
        const response = await fetch('/users_testbank');
        if (!response.ok) {
            throw new Error('Network response error: ' + response.statusText);
        }
        const data = await response.json();

        // have to get only one object based on id
        const user_data = data.find((user) => user.username == username);

        if (user_data) {
            console.log("user found", user_data);
            changePage('inventory');
            return user_data;
        } else {
            window.alert("No user by that name");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            return null;
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}
