install: #установить зависимости
	npm ci

brain-even: #запуск игры на четность
	node bin/brain-even.js

brain-calc: #запуск игры калькулятор
	node bin/brain-calc.js

brain-gcd: #запуск игры наибольший общий делитель
	node bin/brain-gcd.js

brain-progression: #запуск игры прогрессии
	node bin/brain-progression.js

brain-prime: #запуск игры на простые числа
	node bin/brain-prime.js

publish: #запустить отладку публикации
	npm publish --dry-run

lint: #запустить eslint
	npx eslint .

brain-games: #запуск игры
	node bin/brain-games.js
