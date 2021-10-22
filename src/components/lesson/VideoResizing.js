let videoResizing = (section, div, video) => {
    video.onloadstart = () => {
        setTimeout(() => {
            let data = div.getBoundingClientRect()
            div.style.width = data.width + 'px'
            div.style.height = data.height + 'px'
            section.style.width = data.width + 'px'
            section.style.height = data.height + 'px'
            video.addEventListener('resize', () => {
                let dataVideo = video.getBoundingClientRect()
                // let dataDiv = div.getBoundingClientRect()
                div.style.width = dataVideo.width + 'px'
                div.style.height = (dataVideo.height + 2) + 'px'
                section.style.width = dataVideo.width + 'px'
                section.style.height = (dataVideo.height + 4) + 'px'
            })
            window.addEventListener('resize', () => {
                div.style.width = 'auto'
                div.style.height = 'auto'
                section.style.width = 'auto'
                section.style.height = 'auto'
                setTimeout(() => {
                    let dataDiv = div.getBoundingClientRect()
                    let dataSection = div.getBoundingClientRect()
                    div.style.width = dataDiv.width + 'px'
                    div.style.height = dataDiv.height + 'px'
                    section.style.width = dataSection.width + 'px'
                    section.style.height = dataSection.height + 'px'
                }, 100);
            })
        }, 100);
    }
}

export default videoResizing