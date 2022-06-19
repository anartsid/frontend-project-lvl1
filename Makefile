install: #установить зависимости
	npm ci

brain-even: #запуск игры на четность
	node bin/brain-even.js

publish: #апустить отладку публикации
	sudo npm publish --dry-run

lint: #запустить eslint
	npx eslint .