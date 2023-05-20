let baseUrl = 'https://api.themoviedb.org/3/movie/';
let movieId = window.top.location.hash.substr(4);
let apiKey = 'b03d508a9e788070ca877f98f3f8bbba';
let imgBaseURL = "https://image.tmdb.org/t/p/w500"

function data () {
  $.ajax({
    url: baseUrl + movieId,
    method: 'get',
    dataType: 'json',
    data: {
      api_key: apiKey,
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

data ();

function render (data) {
    let layout = `<div class="movie">` +
        `<h2 class="title">${data.title}</h2>` +
        `<img src="${imgBaseURL + data.poster_path}">` +
        `<p>${data.overview}</p>` +
        `</div>`;
   $(".single-movie").append(layout);
}
