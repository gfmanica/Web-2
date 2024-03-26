async function validateLogin(username, password) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (username === "gfmanica" && password === "senha123") {
        console.log("Usário e senha corretas!");
    }
}

validateLogin("gfmanica", "senha123");
