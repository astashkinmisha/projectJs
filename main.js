fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => {
    const usersBox = document.getElementById('users-box');
    value.forEach(user => {
    const pUserBox = document.createElement('p');
    const usersButton = document.createElement('button');
    pUserBox.append(`${(user.id).toString()}. ${(user.name).toString()}`, usersButton);
    usersBox.append(pUserBox);
    // usersButton.innerText = 'user posts';
    const linkData = document.createElement('a');
    linkData.innerText = 'open me'
    linkData.href = `user-details.html?user=${JSON.stringify(user)}`;
    // usersBox.append(linkData)
        usersButton.append(linkData)


    })



})
