list = []
info = {}

function show() {
    info = {

        name: document.getElementById('name').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value,
        password: document.getElementById('password').value,

    }
    list.push(info)
    let data = ""
    for (let i = 0; i < list.length; i++) {
        data += "<tr><td>" + list[i].name + "</td><td>" + list[i].lname + "</td><td>" + list[i].email + "</td><td>" + list[i].contact + "</td><td>" + list[i].password + "</td></tr>"
    }
    document.getElementById('data').innerHTML = data;
    let name = document.getElementById('name').value = "";
    let lname = document.getElementById('lname').value = "";
    let email = document.getElementById('email').value = "";
    let contact = document.getElementById('contact').value = "";
    let password = document.getElementById('password').value = "";
}