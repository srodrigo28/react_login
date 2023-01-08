export function Login({email, password}){
    const delay = (0.7 + Math.random() * 2) * 1000;

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if(password === '1234567' && !!email) {
            resolve();
        } else {
            reject({ message: 'e-mail or password wrong.'});
        }
        }, delay);
    });
}