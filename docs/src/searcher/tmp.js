try {
    let queue = []
    let data = JSON.parse(localStorage.getItem('finalData'))
    Object.keys(data).forEach(key => {
        data[key].list.forEach((video, index) => {
            let videoId = data[key].list[index].videoId
            let url = 'https://www.youtube.com/watch?v=' + videoId
            queue.push({
                url,
                obj: data[key].list[index]
            })
        })
    })
    console.log('queue done')
    let process = () => {
        if (queue.length == 0) {
            localStorage.setItem('databaseYoutube', JSON.stringify(data))
            console.log('end');
        } else {
            let processData = queue.shift()
            console.log('processing', processData.url)
            try {
                fetch(processData.url).then(t => t.text()).then(info => {
                    let node = new DOMParser().parseFromString(info, 'text/html')
                    processData.obj.interactionCount = node.querySelector('meta[itemprop="interactionCount"]').getAttribute('content')
                    processData.obj.uploadDate = node.querySelector('meta[itemprop="uploadDate"]').getAttribute('content')
                    console.log(processData.url, 'done');
                    process()
                })
            } catch (error) {
                process()
            }
        }
    }
    process()
    process()
    process()
    process()
} catch (error) {
    console.error(error);
}