

  $(function(){
		$('.scale').on('click', function(){ 
			var parent = $(this).closest('.img-inn');
			console.log(parent)
			var src = parent.find('.source').attr('src')
			 $(".recive").attr("src", src);
       	     $(".view-block").css("display" ,"block")
       		});
		$('.esc').on('click', function(){
 			$(".view-block").css("display" ,"none")
			});
	});