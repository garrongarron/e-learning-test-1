
if (typeof global === 'undefined') {
    window.global = {}
}
global.routeList = {
    '/': 'Landing.js',
    '/index.html': 'Landing.js',
    '/curso.html': 'Course.js',
    '/cursos.html': 'Courses.js',
};

try {
    module.exports = routeList;
} catch (error) {

}