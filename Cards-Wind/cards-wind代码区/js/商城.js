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
const imgurl = [['url(../../背景图/商品R卡.png)',
    'url(../../背景图/商品SSR.png)',
    'url(../../背景图/商品UR.png)'],
['url(../../背景图/大小变化卡.png)',
    'url(../../背景图/固定卡.png)',
    'url(../../背景图/跳过卡.png)'
],
['url(../../背景图/充值1.jpg)',
    'url(../../背景图/充值2.jpg)',
    'url(../../背景图/充值.jpg)'
]
]
//立旗帜，防止事件重复监听
let flag1 = 0
let flag2 = 0
let flag3 = 0
//显示卡片数
showcardsnumber2()
//获取商品展示区
let goodsarea = document.getElementsByClassName("goodsarea")
console.log(goodsarea.length)
//获取导航点击
let sdheadgrandson2 = document.querySelector(".sdheadgrandson2")
let sdheadgrandson3 = document.querySelector(".sdheadgrandson3")
let sdheadgrandson4 = document.querySelector(".sdheadgrandson4")
//导航点击事件1
sdheadgrandson2.addEventListener("click", function () {
    //加载图片1
    for (let i = 0; i < 3; i++) {
        goodsarea[i].style.backgroundImage = imgurl[0][i]
        goodsarea[i].style.backgroundSize = 'cover'
        goodsarea[i].style.backgroundRepeat = 'no-repeat'
    }
    //恢复旗帜
    flag2 = flag3 = 0
    if (flag1 == 0) {
        goodsarea[0].onclick = function () {//使用onclick为了覆盖点击事件，别人要remove太麻烦了
            //优先ssr->r
            if (cardsnumber[1] > 0) {
                changecardnumber(1, 0, 1)
                changecardnumber(0, 4, 0)
                showcardsnumber2()
            }
            //再ur->r
            else if (cardsnumber[2] > 0) {
                changecardnumber(2, 0, 1)
                changecardnumber(0, 8, 0)
                showcardsnumber2()
            }
            else {
                alert("没钱就别买买买了！")
            }
        }
        goodsarea[1].onclick = function () {
            //r-sr
            if (cardsnumber[0] >= 4) {
                changecardnumber(0, 0, 4)
                changecardnumber(1, 1, 0)
                showcardsnumber2()
            }
            else {
                alert("没钱就别买买买了！")
            }
        }
        goodsarea[2].onclick = function () {
            //r-ur
            if (cardsnumber[0] >= 8) {
                changecardnumber(0, 0, 8)
                changecardnumber(2, 1, 0)
                showcardsnumber2()
            }
            else {
                alert("没钱就别买买买了！")
            }
        }
    }
    else {
        console.log("已经监听")
    }
    flag1 = 1
})
//导航点击事件2
sdheadgrandson3.addEventListener("click", function () {
    //加载图片2
    for (let i = 0; i < 3; i++) {
        goodsarea[i].style.backgroundImage = imgurl[1][i]
        goodsarea[i].style.backgroundSize = 'cover'
        goodsarea[i].style.backgroundRepeat = 'no-repeat'
    }
    //恢复旗帜
    flag1 = flag3 = 0
    if (flag2 == 0) {
        goodsarea[0].onclick = function () {
            //变化
            if (cardsnumber[0] > 0) {
                changecardnumber(0, 0, 1)
                changecardnumber(3, 1, 0)
                showcardsnumber2()
            }
            else {
                alert("没钱就别买买买了！")
            }
        }
        goodsarea[1].onclick = function () {
            //固定
            if (cardsnumber[0] > 0) {
                changecardnumber(0, 0, 1)
                changecardnumber(4, 1, 0)
                showcardsnumber2()
            }
            else {
                alert("没钱就别买买买了！")
            }
        }
        goodsarea[2].onclick = function () {
            //跳过
            if (cardsnumber[0] > 0) {
                changecardnumber(0, 0, 1)
                changecardnumber(5, 1, 0)
                showcardsnumber2()
            }
            else {
                alert("没钱就别买买买了！")
            }
        }
    }
    else {
        console.log("已经监听")
    }
    flag2 = 1
})
//导航点击事件3
sdheadgrandson4.addEventListener("click", function () {
    //加载图片2
    for (let i = 0; i < 3; i++) {
        goodsarea[i].style.backgroundImage = imgurl[2][i]
        goodsarea[i].style.backgroundSize = 'cover'
        goodsarea[i].style.backgroundRepeat = 'no-repeat'
    }
    //恢复旗帜
    flag1 = flag2 = 0
    if (flag3 == 0) {
        goodsarea[0].onclick = function () {
            alert("当前网站不安全，已阻止交易！")
        }
        goodsarea[1].onclick = function () {
            alert("当前网站不安全，已阻止交易！")
        }
        goodsarea[2].onclick = function () {
            changecardnumber(0, 8, 0)
            showcardsnumber2()
        }
    }
    else {
        console.log("已经监听")
    }
    flag3 = 1
})