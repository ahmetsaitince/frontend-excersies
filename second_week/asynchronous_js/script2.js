const posts = [
  { title: 'Post One', body: 'This is post one!' },
  { title: 'Post Two', body: 'This is post two!' },
];

function addPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 1000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('.posts').appendChild(div);
    });
  }, 500);
}

addPost({ title: 'Name', body: 'Ahmet Sait İnce' }, getPosts);
