(function($){
  $(document).ready(function(){
    var movRest;
    var n;
    var aNumAleat;
    startGame();

    $('img').click(function(){
      cambiar();
    });
  });
  function startGame() {
    //document.write("<input type='button' onclick='iniciar();' value='Iniciar/Reiniciar'>");
	    n = 3;
	    movRest = n*n*n;
	    aNumAleat = aleatorio(n);

	    $('#movernumerogame').append("<table>");

	    for(x = 0; x < n; x++) {
	      $('#movernumerogame').append("<tr>");
	      for(z = 0; z < n; z++) {
		    $('#movernumerogame').append("<td><img  src='" + Drupal.settings.basePath +"sites/all/modules/movernumeros/img/n" + aNumAleat[x][z] + ".gif' onclick='cambiar("+ x +","+ z +");' id='img"+ x + z+"' ><td>");
		  }
	      $('#movernumerogame').append("</tr>");
	    }
	    $('#movernumerogame').append("</table>");

	    $('#movernumerogame').append("<p>Movimientos restantes: <span id='mv'>"+movRest+"</span></p>");
	  }


})(jQuery);

function cambiar(f,c){

	    if(movRest > 0) { //Si quedan movimientos, se ejecuta el codigo
	      var f0, c0;
	      for( x = 0; x < n; x++ ){
		for( z = 0; z < n; z++ ) {
		  if(aNumAleat[x][z] == 0) {
		    f0 = x;
		    c0 = z;
		  }
		}
		/*EO: for*/
	      }
	      /*EO: for*/

	      //Busca si el 0 se encuentra al lado de donde se ha realizado click
	      if( ((f == f0) && ((c0 == c-1) || (c0 == c+1)) ) || ( (c == c0) && ((f0 == f-1) || (f0 == f+1)) ) ){
		movRest--;
		var movimientos = document.getElementById("mv");
		movimientos.innerHTML = movRest;

                //Se intercambian las posiciones
		aNumAleat[f0][c0] = aNumAleat[f][c];
		aNumAleat[f][c] = 0;

		//Se obtiene la Id de la posicion donde se ha echo click
		idElement = "img" + f + c;
		var imgIdNum = document.getElementById(idElement);

		//Se obtiene la Id del la posicion del 0
		idElement = "img" +f0 + c0;
		var imgIdBlanco = document.getElementById(idElement);
		imgIdNum.src = Drupal.settings.basePath + "sites/all/modules/movernumeros/img/n0.gif";
		imgIdBlanco.src = Drupal.settings.basePath +"sites/all/modules/movernumeros/img/" + "n" + aNumAleat[f0][c0] + ".gif";

		//Comprobacion si se ha ganado el juego
		var cont = 0;
		var y = 0;
		for(x = 0; x < n; x++) {
		  for( z = 0; z < n; z++ ) {
		    y++;
		    if(aNumAleat[x][z] == y)
		      //Se cuenta cuantas veces se ha cumplido la condicion
		      cont++;
		  }
		}/*
		* //Si la condicion anterior se ha cumplido tantas veces
		* como la longitud del array menos 1, porque el 0 no se cuenta
		*
		*/
		if( cont == (n*n)-1){
		  alert(Drupal.t("Felicidades, has ganado!! :)"));
		}
	      }
	    } else {
	      alert(Drupal.t("Una lastima, no has ganado :("));
	    }
	  }

	  function aleatorio(n) {
  var aTabla = new Array(n*n);
  var aAzar = new Array(n);
  for(i = 0; i < (n*n); i++){
    bMal = true;
    while(bMal){
      bMal = false;
      iAzar =  Math.floor(Math.random() * (n*n));
      for (j = 0; j < i; j++) {
	if(iAzar == aTabla[j]){
	  bMal = true;
        }
      }
    }
    aTabla[i] = iAzar;
  }

  for(i = 0; i < n; i++ ){
    aAzar[i] = new Array(n);
  }

  k = 0;
  for(i = 0; i < n; i++){
    for(j = 0; j < n; j++){
      aAzar[i][j] = aTabla[k];
      k++;
    }
  }
  return (aAzar);
}




