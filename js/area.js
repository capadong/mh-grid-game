define(['jquery'], function ($) {
    var Area = Class.extend({
        init: function (count) {
            this.items = []
            this.count = count
            this.total = count * count

            this._initItems()
        },
        createMap: function () {
            let itemWidthHeight = 500 / this.count
            let $el = this._getEl()
            $el.html('')

            for (let index = 0; index < this.count; index++) {
                let row = this.items[index]
                for(let col = 0;col < row.length;col++){
                    let val = this.items[index][col]

                    let $item = $('<div>')
                    .addClass('item')
                    .click(this.itemClick.bind(this))
                    .text(`${index},${col}`)
                    .data('row',index)
                    .data('col',col)
                    .width(itemWidthHeight).height(itemWidthHeight)

                    if(val === 1){
                        $item.css('backgroundColor','green')
                    }

                    $el.append($item)
                }
            }
        },
        _getEl() {
            return $('#app')
        },
        _initItems: function () {
            for (let i = 0; i < this.count; i++) {
                let arr = []
                for (let j = 0; j < this.count; j++) {
                    arr.push(0)
                }
                this.items.push(arr)
            }
        },
        _reverse:function(row,col){
            function _changeValue(val){
                return val === 1 ? 0 : 1;
            }
            for (let i = 0; i < this.count; i++) {
                for (let j = 0; j < this.count; j++) {
                    if(i == row || j == col){
                        this.items[i][j] = _changeValue(this.items[i][j])
                    }
                }
            }
        },
        itemClick: function (e) {
            let $item = $(e.target)
            this._reverse($item.data('row'),$item.data('col'))
            this.createMap()
        }
    })

    return Area;
})