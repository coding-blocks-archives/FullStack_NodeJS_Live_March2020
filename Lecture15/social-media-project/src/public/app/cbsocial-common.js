$(() => {
  $('#navbar').load('/components/navbar.html', loginIfNeeded)
  $('#footer').load('/components/footer.html')
  $('#content').load('/components/all-posts.html', loadPosts)
})

function loginIfNeeded() {
  window.currentUser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null
  if (!currentUser) {
    $.post('/api/users', {}, (user) => {
      if (user) {
        console.log('registered current user as ', user.username)
        window.localStorage.user = JSON.stringify(user)
        currentUser = user
        $('#nav-username').text(currentUser.username)
      }
    })
  } else {
    console.log('resuming session as ', currentUser.username)
    console.log($('#nav-username'))
    $('#nav-username').text(currentUser.username)
  }
}

function loadPosts() {
  $.get('/api/posts', (posts) => {
    for (let p of posts) {
      $('#posts-container').append(
        $(`
        <div class="col-4">
          <div class="card m-2">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
              <p class="card-text">
                ${p.body.substr(0, 200)}
                <a href="#">...read more</a>
              </p>
              <a href="#" class="card-link">Comment</a>
              <a href="#" class="card-link">Like</a>
            </div>
          </div>
        </div>
        
        `)
      )
    }
  })
}
