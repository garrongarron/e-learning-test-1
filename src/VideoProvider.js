class VideoProvider {
    constructor() {
        this.urlProvider = 'https://samugarron.herokuapp.com/video/'
        this.url = JSON.parse(localStorage.getItem('videos') || '{}')
        Object.keys(this.url).forEach(video=>{
            this.url[video].forEach(element=>{
                if(element.hasOwnProperty('date') && element['date'] < new Date().getTime() ){
                    delete this.url[video]
                }
            })
        })
    }
    getUrl(videoId = 'jshcaIRvrB8') {
        if (!this.url[videoId]) {
            return new Promise((res, rej) => {
                fetch(this.urlProvider + videoId).then(data => {
                    return data.json();
                }).then(data => {
                    data.push({date:new Date().getTime() + 1000 * 60 *60 }) //an hour from now
                    this.url[videoId] = data
                    localStorage.setItem('videos', JSON.stringify(this.url))
                    res(this.url[videoId]);
                }).catch(err => rej(err))
            })
        }
        return new Promise((res, rej) => {
            res(this.url[videoId]);
        })
    }
}
const videoProvider = new VideoProvider()

export default videoProvider