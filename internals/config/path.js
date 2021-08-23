const path = require('path');

// ref: https://nodejs.org/api/process.html#process_process_cwd
const resolveApp = (relativePath) => path.resolve(process.cwd(), relativePath);

module.exports = {
    src: resolveApp('src'),
    build: resolveApp('build'),
    public: resolveApp('public'),
    dotenv: resolveApp('.env'),
};