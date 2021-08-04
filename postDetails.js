const post = JSON.parse(new URL(location).searchParams.get('post'));

//console.log(post);

const
    {
        body,
        title,
        id,
        userId
} = post;

const detailOfPost = document.getElementById('post-details');
const h2 = document.createElement('h2');
const  p = document.createElement('p');
const button = document.createElement('button');

h2.innerText = title;
p.innerText = `${id};
${userId};
${body}`

detailOfPost.append(h2, p, button)
button.innerText = 'comments for posts';

const commentsOfPosts = document.getElementById('commentsOfPosts');
button.addEventListener('click', ()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json())
        .then(comments => {
            comments.forEach(comment => {
            const pOfComments = document.createElement('p');
            pOfComments.innerText = comment.body;
            commentsOfPosts.append(pOfComments)
            })
        })
})
