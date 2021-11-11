define(['jquery','area'],function($,Area){
    log.info('app started.')

    let appInit = function(){
        $(function(){
            let area = new Area(5)
            area.createMap()
        })
    }

    appInit()
})