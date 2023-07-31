const btn = document.querySelector('.registerBtn')
const btn2 = document.querySelector('.signIn')
const btn3 = document.querySelector('.mainBtn');

btn.addEventListener('click', async () => {
    const username = document.querySelector('.username').value
    const email = document.querySelector('.email').value
    const phone = document.querySelector('.phone').value
    const passw = document.querySelector('.passw').value
    const confimPassword = document.querySelector('.confimPassword').value

    const obj = { username, email, phone, passw, confimPassword }

    const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const json = await res.json();
    console.log(json);
})