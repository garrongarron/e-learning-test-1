class Searcher {
    constructor() {
        this.input = document.querySelector('input')
        this.n = 0
        this.database = JSON.parse(localStorage.getItem('database') || null)
        this.callback = null
    }
    loadDatabase() {
        if (this.database) return new Promise((res, rej) => { res(this.database) })
        return fetch('api/db.json').then(data => data.json()).then(data => {
            this.database = data
            localStorage.setItem('database', JSON.stringify(this.database))
        })
    }
    setCallback(callback) {
        this.callback = callback
    }
    delay() {
        this.loadDatabase()
        this.input.addEventListener('keyup', this.eventHander)
    }
    setInput(input) {
        this.input = input
        this.input.addEventListener('keyup', this.eventHander)
    }

    eventHander = (e) => {
        clearTimeout(this.n)
        this.n = setTimeout(() => {
            if (e.target.value.length < 3) return false
            console.log('buscando', e.target.value)
            this.search(e.target.value)
        }, 500);
    }
    match = (paragraph, word) => {
        return paragraph.toLowerCase().includes(word.toLowerCase())
    }
    search = (text) => {
        console.log(text);
        let results = []
        Object.keys(this.database).forEach(key => {
            let obj = this.database[key]
            if (this.match(obj.title, text)) {
                results.push({ title: obj.title, type: 'list', id: key })
            }
            obj.list.forEach(video => {
                if (this.match(video.title, text)) {
                    results.push({
                        title: video.title,
                        type: 'video',
                        id: video.videoId,
                        img: video.img,
                        uploadDate: video.uploadDate,
                        interactionCount: video.interactionCount,
                        list: key
                    })
                }
            })
        })
        // console.log(results);
        if (this.callback) {
            this.callback(results)
        }
    }
}

const searcher = new Searcher()

export default searcher

