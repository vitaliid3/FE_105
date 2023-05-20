let baseUrl = 'https://api.themoviedb.org/3/search/movie';
let apiKey = 'b03d508a9e788070ca877f98f3f8bbba';
let query = '';
let imgBaseURL = "https://image.tmdb.org/t/p/w500"

$('#search').on('click', function (e) {
  e.preventDefault();
  query = $('[name="search"]').val();
  if (query !== '' || query !== 'undefined') {
    data ();
  }
})

function data () {
  $.ajax({
    url: baseUrl,
    method: 'get',
    dataType: 'json',
    data: {
      api_key: apiKey,
      query: query,
    },
    success: function(data){
     render (data);
    },
    error: function (jqXHR, exception) {
      if (jqXHR.status === 0) {
        alert('Not connect. Verify Network.');
      } else if (jqXHR.status == 404) {
        alert('Requested page not found (404).');
      } else if (jqXHR.status == 500) {
        alert('Internal Server Error (500).');
      } else if (exception === 'parsererror') {
        alert('Requested JSON parse failed.');
      } else if (exception === 'timeout') {
        alert('Time out error.');
      } else if (exception === 'abort') {
        alert('Ajax request aborted.');
      } else {
        alert('Uncaught Error. ' + jqXHR.responseText);
      }
    }
  });
}
function render (data) {
  $( ".movie" ).remove();
  let items = data.results;
  for (let i = 0; i < items.length; i++) {
    let layout = `<div class="movie">` +
        `<h2 class="title">${items[i].title}</h2>` +
        `<img src="${imgBaseURL + items[i].poster_path}">` +
        `<a href="movie.html#id=${items[i].id}">More</a>` +
        `</div>`;
    $(".search-movie").append(layout);
  }
}
