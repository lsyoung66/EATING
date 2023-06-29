function loadlist(){
	var key = "";
	var pairs = "<tr><th colspan=\"2\" style=\"font-size: 37px; font-weight: 600; color: #615400;\">찜목록</th></tr>\n";
	var i=0;
	document.getElementById("likes").innerHTML = pairs;
	for(i=0;i<localStorage.length;i++){
		key = localStorage.key(i);
		pairs += "<tr><td>"+key+"</td>\n<td><a data-role=\"button\" style=\"border-radius: 30%; font-family:\'Stylish\'; font-size: 27px; font-weight: 100; background-color: #FFDA05; color: #9E8600;\" onclick=\"document.location.href=\'tel:"+localStorage.getItem(key)+"\'\">전화</a></th></tr>\n";
		document.getElementById("likes").innerHTML = pairs;
	}
}

function loadlist_recipe() {
	var key = "";
	var pairs = "<tr><th colspan=\"2\" style=\"font-size: 37px; font-weight: 600; color: #615400;\">찜목록</th></tr>\n";
	var i=0;
	document.getElementById("recipe_likes").innerHTML = pairs;
	for(i=0;i<localStorage.length;i++){
		key = localStorage.key(i);
		pairs += "<tr><td>"+key+"</td>\n<td><a data-role=\"button\" style=\"border-radius: 30%; font-family:\'Stylish\'; font-size: 27px; font-weight: 100; background-color: #FFDA05; color: #9E8600;\" onclick=\"location.href=\'"+localStorage.getItem(key)+"\'\">레시피</a></th></tr>\n";
		document.getElementById("recipe_likes").innerHTML = pairs;
	}
}