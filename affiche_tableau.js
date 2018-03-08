function displaySection( obj ) {
    return "<h2>Metier: " + obj.metier + "</h2>" + 
      "<table>" +
      "<tr><th>Nom</th><th>Genre</th></tr>" +
      "<tr><td>" + obj.nom + "</td><td>" + obj.genre + "</td></tr>";
  }
  
  var resultatHtml = "<p>";
  for( var i=0; i < tab.length; i++) {
    // Si on est sur la première itération
    if( i === 0 ) {
    resultatHtml += displaySection(tab[i]);
    } 
    // si on n'est pas sur la première itération
    else {
        //Si la section courante est la même que la précédente
        if( tab[i].metier === tab[i-1].metier) {
            resultatHtml += "<tr><td>" + tab[i].nom + "</td><td>" + tab[i].genre + "</td></tr>";
        } else { //si non
            resultatHtml += "</table>";
            resultatHtml += displaySection(tab[i]);
      }
    }
  }
  if ( i > 0) {
    resultatHtml += "</table>";
  }
  resultatHtml += "</p>";
  
  document.body.innerHTML = resultatHtml;