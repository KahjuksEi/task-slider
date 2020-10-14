npm init
i -D webpack webpack-cli ставим зависимости
touch webpack.config.js
to package.json to scripts "build": "./node_modules/.bin/webpack" and "dev": "./node_modules/.bin/webpack --watch"
to webpack.config.js добавляем семпл с сайта и вписываем entry
npm run build