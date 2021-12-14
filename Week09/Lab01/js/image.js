$(document).ready(function() {
    $('#gallery img').css('opacity', 0.6)
   
    $('#gallery img').on({
      mouseenter:function() {
        $(this).stop().fadeTo(4000, 1)
      },
      mouseleave:function() {
        $(this).stop().fadeTo(4000, 0.6)
      }
    })
   
    $('#gallery a').on('click', function(evt) {
        evt.preventDefault()
        let imgPath = $(evt.currentTarget).attr('href')
        let newImage = $('<img src=' + imgPath +' alt = "" >')
        let oldImage = $('#photo img')
        $('#photo').prepend(newImage)
        oldImage.fadeOut(4500,function(e){
             $(e.currentTarget).remove()
        })
   })
   
   $('#gallery a:first').click()
   
   })