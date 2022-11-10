
export function verifyJWT(user, logOut) {

    const currentUser = {
        email: user.email
    };
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => {
            if (res.status === 403 || res.status === 401) {
                return logOut();
            }
            return res.json();
        })
        .then(data => {
            if (data.token) {
                localStorage.setItem('photographer_token', data.token);
            }
        })
}