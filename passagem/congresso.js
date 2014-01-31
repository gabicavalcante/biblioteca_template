var parliament = new google.maps.LatLng(-5.795871,-35.219723);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: parliament
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
	title: 'Assembleia de Deus - Templo Central',
    animation: google.maps.Animation.DROP,
    position: parliament
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

$(function(){
	var navPos = $("nav").offset().top; 

	$(window).scroll(function(){
		if($(window).scrollTop() > navPos) {
			$("nav").addClass("sticky");
			$("body > header").css("margin-bottom", "60px");
		}
		else {
			$("nav").removeClass("sticky");
			$("body > header").css("margin-bottom", "0");
		}

		var scrollSpeed = 0.2;
		var yPos = -(parseInt($(window).scrollTop()*scrollSpeed+100));
        $("body").css("background-position", "center " + yPos + "px");
	});

	$("nav a").smoothScroll();

	$("#programacao li").mouseenter(function(){
		$(this).parent().find("li").removeClass("active");
		if($(this).not(".active")) $(this).addClass("active");
	});
});