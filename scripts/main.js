setTimeout("afficherMessage()", 3000);

		function afficherMessage()
		{
			reponse = confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please');
			if (reponse==true) {
				document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			}
			
		}

		function changementApparence()
		{
			var elmt = document.getElementById("corps");
			elmt.style.backgroundColor = "magenta";

			
			var xx = document.getElementsByClassName("paragraphes");
			xx.style.color = "blue";

		}
