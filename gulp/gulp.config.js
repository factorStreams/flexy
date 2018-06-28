const path = require('path');
exports.config = {
    basePath: path.resolve('./src/'),
    style: 'style.scss',
    buildPath: path.resolve('./build'),
    sassGlob: '**/*.scss'
};
