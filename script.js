const getUser = document.getElementById("users")
fetch('https://jsonplaceholder.typicode.com/users')
.then(
    (data)=>data.json()
)
.then((data) => {
    data.forEach((user) => {
       
        getUser.innerHTML+=`
        <div class='child'>
            <p>Id: <span class="value">${user.id}</span></p>
            <p>Name: <span class="value">${user.name}</span></p>
            <p>Phone: <span class="value">${user.phone}</span></p>
            <p>Email: <span class="value">${user.email}</span></p>
        </div>
        `
    });
})
.catch(
    (err)=>{
        console.log(err)
    }
)