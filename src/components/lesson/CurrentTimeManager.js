class CurrentTimeManager {
    setCurrentTime(videoId, currentTime) {
        // console.log(videoId, currentTime);
        let _currentTime = JSON.parse(localStorage.getItem('currentTime') || '{}')
        let time = (currentTime-5)
        _currentTime[videoId] = (time<0)?0:time
        localStorage.setItem('currentTime', JSON.stringify(_currentTime)) 
    }
    getCurrentTime(videoId){
        let currentTime = JSON.parse(localStorage.getItem('currentTime') || '{}')
        return currentTime[videoId] || 0
    }
}

let currentTimeManager = new CurrentTimeManager();

export default currentTimeManager;