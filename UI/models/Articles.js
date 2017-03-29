/*global Article*/

function Articles(){
	this.models = [];
}

Articles.prototype.findArticleById = function(id) {
	var result;
	for (var i=0; i<this.models.length; i++) {
		if (this.models[i].id == id) {
			result = this.models[i];
		}
	}
	return result;
}
Articles.prototype.getAll = function() {
/*	//get all article items from server/localStorage
	var articlesStr = localStorage.getItem("articles");
	var articles = JSON.parse(articlesStr);
	if (articles) {
		for (var i=0; i<articles.length; i++) {
			var article = new Article(articles[i]);
			this.models.push(article);
		}

		console.log(articles);
		console.log(this.models);
	*/
	var that = this;
	var config = {
		url:"https://web9-sergiuvalenas.c9users.io/curs21-PHP-API/articles",
		method: "GET", 
		success: function (resp) {
			for (var i=0; i<resp.length; i++) {
				var article = new Article(resp[i]);
				that.models.push(article);
			}
			console.log("articles")
		}, 
		error: function () {
			console.log("something went wrong in getting articles")
		}
	}
	return $.ajax(config);
}

Articles.prototype.removeArticle = function(articleId) {
	//here we will search for article model by id
	//and we remove it from models array and from 
	//server/localStorage
}

Articles.prototype.save = function(articleData) {
	//here we should save the new article to server
}