//卡片数组
let cardsurl = ['url(../../cards/r.png)',
    'url(../../cards/sr.png)',
    'url(../../cards/ssr.png)',
    'url(../../cards/ur.png)',
    'url(../../cards/gp.jpg)',
    'url(../../cards/sp.png)'
]
//概率函数n到m包括首尾
function getRandom(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n
}
//接受函数值
let a = getRandom(1, 10000)
//卡牌返回值
function cardi() {
    if (a <= 4000) {
        changecardnumber(0, 6, 0)
        return 0
    }
    else if (a <= 7000) {
        changecardnumber(0, 2, 0)
        changecardnumber(0, 5, 0)
        return 1
    }
    else if (a <= 9000) {
        changecardnumber(1, 1, 0)
        changecardnumber(0, 5, 0)
        return 2
    }
    else if (a <= 9700) {
        changecardnumber(2, 1, 0)
        changecardnumber(0, 5, 0)
        return 3
    }
    else if (a <= 9900) {
        changecardnumber(2, 2, 0)
        changecardnumber(0, 5, 0)
        return 4
    }
    else {
        changecardnumber(2, 3, 0)
        changecardnumber(0, 5, 0)
        return 5
    }
}
//cardi返回值，只调用一次
let b = cardi()
//返回颜色标签
function colori() {
    if (b <= 1) {
        return 'aqua'
    }
    else if (b <= 2) {
        return 'pink'
    }
    else if (b <= 4) {
        return 'red'
    }
    else {
        return 'gold'
    }
}
//获取抽奖标签
let cjson1 = document.querySelector(".cjson1")
let cjson2 = document.querySelector(".cjson2")
let cjson3 = document.querySelector(".cjson3")
let cjson4 = document.querySelector(".cjson4")
let cjson5 = document.querySelector(".cjson5")
let cjson6 = document.querySelector(".cjson6")
let cjpopup = document.querySelector(".cjpopup")
let popupson2 = document.querySelector(".popupson2")
// 在页面加载时，从localStorage中恢复数据
window.onload = function () {
    // 尝试从localStorage中获取数据
    cardsnumberstring = localStorage.getItem('cardsnumber')
    // 如果localStorage中有数据，则将其解析并赋值给myData
    if (cardsnumberstring) {
        cardsnumber = JSON.parse(cardsnumberstring)
        console.log('数据已从localStorage恢复:', cardsnumber)
    } else {
        // 如果没有数据则存储
        setcardsnumber()
        console.log('localStorage中没有数据，使用初始值')
    }
}
//封装点击事件函数
function popupcj() {
    cjpopup.style.display = "block"
    popupson2.style.backgroundImage = 'url(../../背景图/光.png)'
    popupson2.style.backgroundColor = colori()
    popupson2.onclick = function () {
        popupson2.style.backgroundColor = "black"
        popupson2.style.backgroundImage = cardsurl[b]
        setInterval(function () {
            window.location.href = "主页面.html"
        }, 1500)
        this.onclick = null//只容许点一次
    }
}
//点击事件
cjson1.addEventListener("click", popupcj)
cjson2.addEventListener("click", popupcj)
cjson3.addEventListener("click", popupcj)
cjson4.addEventListener("click", popupcj)
cjson5.addEventListener("click", popupcj)
cjson6.addEventListener("click", popupcj)
//
//markcardsnumber(8, 0, 0, 0, 0, 0)