fetch('./data.json')
.then(res => res.json())
.then(data => showData(data));

function showData(data){
    let lists = '';
    const count = document.getElementById('user-count');
    count.innerHTML = `Here is my user data : ${data.length}`; 
    console.log(data)
    data.forEach(user => {
        let name1 = user.name.title;
        let name2 = user.name.first;
        let name3 = user.name.last;
        let fullName = name1 + " " + name2 + " " + name3;
        
        lists = lists + `<div class = 'container d-flex'>

    <div class = 'mama'> 
        <img src=${user.picture.large} alt="">
    </div> 

    <div class = 'information'>
        <h3> Name : ${fullName}</h3> 
        <h5>Country : ${user.location.country}</h5>
        <h5>City : ${user.location.city}</h5>
        <h5>Email : ${user.email}</h5>
        <h5>Phone : ${user.phone}</h5>
        <h5>Gender : ${user.gender}</h5>
        <h5>Age : ${user.dob.age}</h5>
        <h5>Jobe : ${user.jobe}</h5>
        <h5>Registered : ${user.registered.date}</h5>
        </div>
    </div> `
    });
    const ul = document.getElementById('user-list');
    ul.innerHTML = lists;
};
