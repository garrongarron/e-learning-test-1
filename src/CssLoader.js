let storage = {}
let tmp = []
const cssloader = (_folder = null, _cssList = null) => {
    let insert = () => {
        let style = document.querySelector('style')
        style = (!style)?document.createElement('style'):style
        style.innerHTML = localStorage.getItem(_folder)
        document.head.appendChild(style)
        // localStorage.removeItem(_folder)
    }
    function cb() {
        let folder = _folder || 'src/components/landing/css/'
        let cssList = _cssList || [
            'block__banner.css',
            'block__column.css',
            'block__curriculum.css',
            'block__email_leads.css',
            'block__featured-products.css',
            'block__image-with-text.css',
            'block__pricing.css',
            'block__text.css',
            'footer.css',
            'header.css',
        ];
        if (localStorage.getItem(_folder)) {
            console.log('css from localStorage');
            insert()
            return
        }
        let files = []
        cssList.forEach(css => {
            files.push(loadCss(folder + css))
        });
        Promise.all(files).then((a) => {
            localStorage.setItem(_folder, a.reverse().join('\n'))
            insert()
        })
    }
    function loadCss(filename) {
        return fetch(filename).then(data => data.text())


    }
    window.addEventListener('load', cb);
}

export default cssloader