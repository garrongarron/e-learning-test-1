class Renderer {
    constructor() { }
    render(data) {
        // console.log(data)
        let results = document.querySelector('.results')
        results.innerHTML = ''
        data.sort(function (a, b) {
            return b.interactionCount - a.interactionCount
        })
        data.forEach(({ title, type, id, img, uploadDate, interactionCount }) => {
            let div = document.createElement("div");
            let image = ''
            if (type == 'video') {
                image = ` <img src="${img}" alt="${title}">`
            }
            div.innerHTML = `  <div class="card">
               ${image}
            <div class="card-info">
                <h2>${title}</h2>
                <!-- <span>${type}</span>
                <code>${id}</code> -->
                <!-- <date>${uploadDate}</date> -->
                <strong>${interactionCount}</strong>
            </div>
          </div>`
            results.appendChild(div)
        })
    }
    stop() { }
}

const renderer = new Renderer()

export default renderer