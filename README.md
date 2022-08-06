### Description
This repository is created as an education project

It contains 5-s files, which starts math games:
1) Brain-even (player need to answer is the number even or no)
2) Brain-calc (player need to calculate the result of the expression)
3) Brain-ghd (player need to find the greatest common divisor of given numbers)
4) Brain-progression (player need to answer the number, which is missing in the progression)
5) Brain-prime (player need to answer is the number prime or no)


### Structure of repository
All games can be started by short commands, which consists in Makefile
These commands run files from the bin directory (bin/brain-games.js)
The bin file of each game calls a file from the crc directory, which contains unique variables. The general logic of all games is placed in a separate file src/index.js

### Hexlet tests and linter status:
[![Actions Status](https://github.com/AnartSid/frontend-project-lvl1/workflows/hexlet-check/badge.svg)]
(https://github.com/AnartSid/frontend-project-lvl1/actions)
<a href="https://codeclimate.com/github/AnartSid/frontend-project-lvl1/maintainability">
<img src="https://api.codeclimate.com/v1/badges/173ab8a46ec6ef2b9f63/maintainability" /></a>

###  Asciinemas (video of games)
1) Brain-even (https://asciinema.org/a/505847)
2) Brain-calc (https://asciinema.org/a/508905)
3) Brain-gcd (https://asciinema.org/a/509275)
4) Brain-progression (https://asciinema.org/a/510512)
5) Brain-prime (https://asciinema.org/a/510592)