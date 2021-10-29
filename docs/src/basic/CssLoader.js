class CssLoader{
    constructor(){
        this.files = {}
    }
    loadCss = (filename) => {
        return fetch(filename).then(data => data.text())
    }
    insert = (_folder) => {
        let folder = _folder.replace(/\//g, '-');
        let style = document.querySelector('#'+folder)
        style = (!style)?document.createElement('style'):style
        style.id = folder
        style.innerHTML = localStorage.getItem(_folder)
        document.head.appendChild(style)
        localStorage.removeItem(_folder)
    }
    load(folder, cssList ){
        if (localStorage.getItem(folder)) {
            this.insert(folder)
            return
        }
        if(!this.files[folder]){
            this.files[folder] = []
        }
        cssList.forEach(css => {
            console.log( folder + css);
            this.files[folder].push(this.loadCss(folder + css))
        });
        Promise.all(this.files[folder]).then((a) => {
            console.log('ok');
            localStorage.setItem(folder, a.reverse().join('\n'))
            this.insert(folder)
        })
    }
    stop(){}
}

const cssLoader = new CssLoader()

export default cssLoader