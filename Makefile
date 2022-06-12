install: #установить зависимости
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

publish: #апустить отладку публикации
	sudo npm publish --dry-run

lint: #запустить eslint
	npx eslint .
