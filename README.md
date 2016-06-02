# MEAN

De clone 

Instale o node.js

Depois intales os modulos

> npm install bower gulp -g

entre na pasta do seu projeto e instale o gulp 

> npm install gulp --save-dev

> npm install gulp-webserver --save-dev

Crie um arquivo chamado gulpfile.js na raiz da sua pasta e digite o código para configurar o gulp 

```javascript
var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('serve', function() {
	gulp.src('app')
		.pipe(webserver({
			livereload: true,
			open: true,
			directoryListerning: true
		}));

});
```
Depois de um: 

> bower init

não funcinou no git bash do windows. Tive que usar o cmd

Entre na pasta app e dê os comandos

> bower install angular --save

> bower install bootstrap-material-design --save

