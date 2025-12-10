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
//显示卡片数
showcardsnumber1()
//获取战斗区点击标签
const play1 = document.querySelector(".play1")//R
const play2 = document.querySelector(".play2")//UR
const play3 = document.querySelector(".play3")//SSR
//获得弹窗元素
let popup = document.querySelector("div")
//点击第一个
play1.addEventListener("click", function () {
    if (cardsnumber[0] >= 2) {
        //减少2张卡片
        changecardnumber(0, 0, 2)//SR
        //瞬间显示
        showcardsnumber1()
        //跳转页面
        window.location.href = 'R竞技场.html'
    }
    else {
        popup.style.opacity = 0.7
        let popuptime = setInterval(function () {
            popup.style.opacity = 0
            clearInterval(popuptime)
        }, 2000)
    }
})
//点击第二个
play2.addEventListener("click", function () {
    if (cardsnumber[2] >= 2) {
        //减少2张卡片
        changecardnumber(2, 0, 2)//UR
        //瞬间显示
        showcardsnumber1()
        window.location.href = 'UR竞技场.html'
    }
    else {
        popup.style.opacity = 0.7
        let popuptime = setInterval(function () {
            popup.style.opacity = 0
            clearInterval(popuptime)
        }, 2000)
    }
})
//点击第三个
play3.addEventListener("click", function () {
    if (cardsnumber[1] >= 2) {
        //减少2张卡片
        changecardnumber(1, 0, 2)//SSR
        //瞬间显示
        showcardsnumber1()
        window.location.href = 'SSR竞技场.html'
    }
    else {
        popup.style.opacity = 0.7
        let popuptime = setInterval(function () {
            popup.style.opacity = 0
            clearInterval(popuptime)
        }, 2000)
    }
})
//获取商店标签
let headson1 = document.querySelector(".headson1")
headson1.addEventListener("click", function () {
    window.location.href = '商城.html'
})
let end = document.querySelector(".end")
end.addEventListener("click", function () {
    if (cardsnumber[0] >= 8) {
        changecardnumber(0, 0, 8)
        window.location.href = '抽奖.html'
    }
    else {
        popup.style.opacity = 0.7
        let popuptime = setInterval(function () {
            popup.style.opacity = 0
            clearInterval(popuptime)
        }, 2000)
    }
})
//重置
// markcardsnumber(100)