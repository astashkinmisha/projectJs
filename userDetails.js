const user = JSON.parse(new URL(location).searchParams.get('user'));
// console.log(user);
// for (const item in user) {
//  document.body.append(`${item}: ${JSON.stringify(user[item])}`);
// }

const {
    id,
    name,
    username,
    email,
    address: {street, suite, city, zipcode, geo: {lat, lng}},
    phone,
    website,
    company: {name:companyName, catchPhrase, bs}
} = user

const userDiv = document.getElementById('user-details');
const h2 = document.createElement('h2');
const  p= document.createElement('p');
const button = document.createElement('button');

h2.innerText=`${id}. ${name} ${username},`;
p.innerText=`
Email: ${email},
Phone: ${phone},
Website: ${website},
Address: 
Street: ${street},
Suite: ${suite},
City: ${city},
Zipcode: ${zipcode},
Geo: 
lat: ${lat},
lng: ${lng},
Company:
name: ${companyName},
catchPhrase: ${catchPhrase},
bs: ${bs},
`;
userDiv.append(h2, p, button);

button.innerText = 'post of current user';
let postOfUser = document.getElementById('postOfUser');
button.addEventListener('click', ()=>
{fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {
            postOfUser.innerText = '';
            posts.forEach(post => {
                let pForPosts = document.createElement('p');
                pForPosts.className = 'pForPosts';


                let buttonForPost = document.createElement('button');
                const linkPostData = document.createElement('a');
                linkPostData.innerText = 'open me'
                linkPostData.href = `post-detail.html?post=${JSON.stringify(post)}`;
                buttonForPost.append(linkPostData)
                postOfUser.append(pForPosts);
                pForPosts.append(post.title.toString(), buttonForPost);



            })

        })
            }
        )


