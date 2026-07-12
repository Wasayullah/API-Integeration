const getUser = document.getElementById("users")
fetch('https://jsonplaceholder.typicode.com/users')
.then(
    (data)=>{
        data.json
    }
)
.then(
    (user)=>{
        user.forEach((users)=>{
            
        getUser.innerHTML+=`
        <div class='child'>
            <p>Id: <span class="value">${users.id}</span></p>
            <p>Name: <span class="value">${users.name}</span></p>
            <p>Phone: <span class="value">${users.phone}</span></p>
            <p>Email: <span class="value">${users.email}</span></p>
        </div>
        `
    })
}
)
.catch(
    (err)=>{
        console.log(err)
    }
)