
// script permettant de parser le JSON
// fonction à créer : 
// (0 - générer les cases à cocher en fonction du JSON ?)
// 1 - lire le JSON
// 2 - remplir les cases de l'emploi du temps 

var semaine=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];

// parser JSON : essai avec l'année B3
// s'active quand la case B3 est cochées

$("form input:checkbox[value=B3]").click(function(){

	$.getJSON('js/horaires.json',function(data) {

		// sélectionne l'année, de façon à simplifier la suite.
		var annee = data.B3;

		//co = cours obligatoires, ct = cours théoriques, ctc = cours techniques;
		var co = annee.obligatoire;
		var cth = annee.theorique;
		var cte = annee.technique;

		// va afficher les cours obligatoire suivis en B3
		var text_toWrite = "Cours suivis:<br/><br/>";
		for (var cours in co){

			text_toWrite += co[cours].nom +" : ";
			for (var heure in co[cours].horaires) {
				var date = co[cours].horaires[heure];//co[cours].horaires[i];
				text_toWrite += "le "+semaine[date[0]-1]+" de "+date[1]+"h à "+date[2]+"h.<br/>";
			};
			text_toWrite += "<br/>";
		};
		$("#results").html(text_toWrite);
	});
});


