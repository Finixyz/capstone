// Initialize Firebase Auth
const auth = getAuth(firebaseApp);

// Sign-up form submission
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            console.log('User signed up:', user);

            // You can redirect to a new page or perform other actions here
        })
        .catch((error) => {
            // Handle errors (e.g., invalid email, weak password)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Sign-up error (${errorCode}): ${errorMessage}`);
        });
});
