async function upvoteClickHandler(event) {
  event.preventDefault();

  // gets post_id by last index in url
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // updates post with upvote
  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // refreshes page
  if (response.ok) {
    document.location.reload();
  } else {
    alert('You can only like a post once');
  }
}

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);