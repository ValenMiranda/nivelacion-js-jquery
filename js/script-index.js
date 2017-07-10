$(document).ready( function(){
	$('.js-back').hide();//Ocultar icono flecha
	
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	function printNews(){
		$('p.nuevas').append('<p>NUEVAS RECETAS</p>');
	}

	printNews();
	

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	var contador = 0;
	recipesArray.forEach(function(element){
		if(element.highlighted == true){
			contador++;
			renderRecipe(element);
		}
	});
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

var arr = jQuery.makeArray(recipe);
	arr.forEach(function(val){
		$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+val.title+'</span><span class="metadata-recipe"><span class="author-recipe">'+val.source.name+'</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/spring-fromage-fort.jpg"/></a>');
	});
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


