
	//mobile menu open
	function openNav() {
	  document.getElementById("dimmed").style.display = "block";
	}
	//mobile menu close
	function closeNav() {
	  document.getElementById("dimmed").style.display = "none";  
	}
	
	let m_title = '';
	$(".m_nav_title").click(function(){
		if(m_title != $(this).prop("id")){
			$(".m_sudNav").stop().slideUp();
			$(this).children(".m_sudNav").stop().slideDown(250); 
			m_title = $(this).prop("id");
		}
		else{
			$(this).children(".m_sudNav").stop().slideUp();
			 m_title = '';
		}
	});