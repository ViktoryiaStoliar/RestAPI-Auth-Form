const btn = document.querySelector('.login-button');
const btn2 = document.querySelector('.login-button2')

btn.addEventListener("click", async () => {
    const inp1 = document.querySelector('.e-mail').value
    const inp2 = document.querySelector('.password').value

    const obj = { email: inp1, pwd: inp2 }

    const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const json = await res.json();
    console.log(json);
});

btn2.addEventListener('click', async () => {
    const inp1 = document.querySelector('.e-mail2').value
    const inp2 = document.querySelector('.password2').value

    const obj = { email: inp1, pwd: inp2 }

    const res = await fetch('http://localhost:3000/api/authorize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const json = await res.json();
    console.log(json);
})