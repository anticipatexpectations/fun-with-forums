$(document).ready(function() {

  const get = function(id) {
    console.log('id',id);
      $.ajax ({
        url: `https://api.spotify.com/v1/artists/${id}/albums`,
        type: 'GET',
        dataType: 'json'
      })
      .then((album) => {
        const context = albumTemplate(album);
        $('#artistAlbumsModalInfo').html(context);
      }).catch(err => console.log(err));
    }
});
