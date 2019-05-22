function myFunction() {
	var x = document.getElementById("myNavBar");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}
function getBackgroundURL(){

}
function modalShit(div,contentStyle){
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img01");
	$(modalImg).removeClass();
	$(modalImg).addClass("modal-content");

	$(modalImg).addClass(contentStyle);
	var captionText = document.getElementById("caption");
	modal.style.display = "block";

	$(modalImg).addClass($(div).attr("class")); //Would it be possible to add css of div to the modal img.
	$(modalImg).removeClass("row");
	
	captionText.innerHTML = $(div).attr("alt");
}
function closeModal() {
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
}