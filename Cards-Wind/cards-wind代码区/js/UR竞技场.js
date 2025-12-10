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
//获得弹窗
let popup1 = document.querySelector(".popup")
//显示技能数
showcardsnumber3()
//获取单双数标签
let jo = -1//单双数值
let secondli1 = document.querySelector(".secondli1")
let secondli2 = document.querySelector(".secondli2")
secondli1.onclick = function () {
    secondli2.style.display = 'none'
    jo = 1;
    popup1.style.display = 'none'
    this.onclick = false
}
secondli2.onclick = function () {
    secondli1.style.display = 'none'
    secondli2.style.marginTop = "5em"
    jo = 0;
    popup1.style.display = 'none'
    this.onclick = false
}
//markcardsnumber(8, 0, 0, 0, 0, 0)
//封装随机函数n到m包括首尾
function getRandom(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n
}
//获取技能标签
let firstl = document.getElementsByClassName("firstli")
let big, b1, b2, b3, b4 = false
let sml, s1, s2, s3, s4 = false
let fix, f1, f2, f3, f4 = false
let xwind = false
firstl[0].onclick = function () {
    if (!(big || sml || fix || xwind)) {
        if (cardsnumber[3] > 0) {
            changecardnumber(3, 0, 1)
            showcardsnumber3()
            big = true
        }
        else {
            alert("技能不够请前往商城购买。")
        }
    }
    else {
        alert("请先选择技能释放对象。")
    }
}
firstl[1].onclick = function () {
    if (!(big || sml || fix || xwind)) {
        if (cardsnumber[3] > 0) {
            changecardnumber(3, 0, 1)
            showcardsnumber3()
            sml = true
        }
        else {
            alert("技能不够请前往商城购买。")
        }
    }
    else {
        alert("请先选择技能释放对象。")
    }
}
firstl[2].onclick = function () {
    if (!(big || sml || fix || xwind)) {
        if (cardsnumber[4] > 0) {
            changecardnumber(4, 0, 1)
            showcardsnumber3()
            fix = true
        }
        else {
            alert("技能不够请前往商城购买。")
        }
    }
    else {
        alert("请先选择技能释放对象。")
    }
}
firstl[3].onclick = function () {
    if (!(big || sml || fix || xwind)) {
        if (cardsnumber[5] > 0) {
            changecardnumber(5, 0, 1)
            showcardsnumber3()
            xwind = true
        }
        else {
            alert("技能不够请前往商城购买。")
        }
    }
    else {
        alert("请先选择技能释放对象。")
    }
}
//获得卡牌标签
let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let card4 = document.querySelector(".card4")
//
let cardarr = [card1, card2, card3, card4]
//
let Asum = 0
//
let nn = [1, 1, 1, 1]
card1.setAttribute('A', 0)//正面为0，反面为1
card1.setAttribute('size', 1)//正常为size=1，变小为size=0.5，变大为size=2
card1.setAttribute('fixed', 1)//正常为fixed=1，锁定状态为fixed=100
card1.setAttribute('x', 1)
card1.setAttribute('y', 2)
//
card2.setAttribute('A', 0)//正面为0，反面为1
card2.setAttribute('size', 1)//正常为size=1，变小为size=0.5，变大为size=2
card2.setAttribute('fixed', 1)//正常为fixed=1，锁定状态为fixed=100
card2.setAttribute('x', 1)
card2.setAttribute('y', 1)
//
card3.setAttribute('A', 0)//正面为0，反面为1
card3.setAttribute('size', 1)//正常为size=1，变小为size=0.5，变大为size=2
card3.setAttribute('fixed', 1)//正常为fixed=1，锁定状态为fixed=100
card3.setAttribute('x', 2)
card3.setAttribute('y', 2)
//
card4.setAttribute('A', 0)//正面为0，反面为1
card4.setAttribute('size', 1)//正常为size=1，变小为size=0.5，变大为size=2
card4.setAttribute('fixed', 1)//正常为fixed=1，锁定状态为fixed=100
card4.setAttribute('x', 2)
card4.setAttribute('y', 1)
//
card1.onclick = function () {
    if (big) {
        card1.setAttribute('size', 2)
        big = false
        b1 = true
        card1.style.top = '15px'
        card1.style.left = '34.8%'
        card1.style.width = '220px'
        card1.style.height = '315px'
    }
    if (sml) {
        card1.setAttribute('size', 0.5)
        sml = false
        s1 = true
        card1.style.top = '45px'
        card1.style.left = '38%'
        card1.style.width = '140px'
        card1.style.height = '210px'
    }
    if (fix) {
        card1.setAttribute('fixed', 100)
        fix = false
        f1 = true
        card1.style.borderStyle = 'solid'
        card1.style.borderColor = 'gold'
        card1.style.borderWidth = '2px'
    }
}
//
card2.onclick = function () {
    if (big) {
        card2.setAttribute('size', 2)
        big = false
        b2 = true
        card2.style.bottom = '15px'
        card2.style.left = '34.8%'
        card2.style.width = '220px'
        card2.style.height = '315px'
    }
    if (sml) {
        card2.setAttribute('size', 0.5)
        sml = false
        s2 = true
        card2.style.bottom = '45px'
        card2.style.left = '38%'
        card2.style.width = '140px'
        card2.style.height = '210px'
    }
    if (fix) {
        card2.setAttribute('fixed', 100)
        fix = false
        f2 = true
        card2.style.borderStyle = 'solid'
        card2.style.borderColor = 'gold'
        card2.style.borderWidth = '2px'
    }
}
//
card3.onclick = function () {
    if (big) {
        card3.setAttribute('size', 2)
        big = false
        b3 = true
        card3.style.top = '15px'
        card3.style.right = '34.8%'
        card3.style.width = '220px'
        card3.style.height = '315px'
    }
    if (sml) {
        card3.setAttribute('size', 0.5)
        sml = false
        s3 = true
        card3.style.top = '45px'
        card3.style.right = '38%'
        card3.style.width = '140px'
        card3.style.height = '210px'
    }
    if (fix) {
        card3.setAttribute('fixed', 100)
        fix = false
        f3 = true
        card3.style.borderStyle = 'solid'
        card3.style.borderColor = 'gold'
        card3.style.borderWidth = '2px'
    }
}
//
card4.onclick = function () {
    if (big) {
        card4.setAttribute('size', 2)
        big = false
        b4 = true
        card4.style.bottom = '15px'
        card4.style.right = '34.8%'
        card4.style.width = '220px'
        card4.style.height = '315px'
    }
    if (sml) {
        card4.setAttribute('size', 0.5)
        sml = false
        s4 = true
        card4.style.bottom = '45px'
        card4.style.right = '38%'
        card4.style.width = '140px'
        card4.style.height = '210px'
    }
    if (fix) {
        card4.setAttribute('fixed', 100)
        fix = false
        f4 = true
        card4.style.borderStyle = 'solid'
        card4.style.borderColor = 'gold'
        card4.style.borderWidth = '2px'
    }
}
//风力值
let fz = 0
//获取风力标签
let fl = document.getElementsByClassName('fl')
for (let i = 0; i < 8; i++) {
    fl[i].onclick = function () {
        fz = i + 1
        if (xwind) {
            fz = fz * 2
            xwind = false
        }
        console.log(fz)
    }
}
//获取箭头
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')
let p4 = document.querySelector('.p4')
let p5 = document.querySelector('.p5')
let p6 = document.querySelector('.p6')
//
let parr = [p1, p2, p3, p4, p5, p6]
//箭头位置值
p1.setAttribute('x', 1)
p1.setAttribute('y', 2)
//
p2.setAttribute('x', 1)
p2.setAttribute('y', 1.5)
//
p3.setAttribute('x', 1)
p3.setAttribute('y', 1)
//
p4.setAttribute('x', 2)
p4.setAttribute('y', 2)
//
p5.setAttribute('x', 2)
p5.setAttribute('y', 1.5)
//
p6.setAttribute('x', 2)
p6.setAttribute('y', 1)
//封装旋转函数
//0-1,1
function turn011(card, string) {
    card.classList.toggle(string)
    let timecard = setInterval(function () {
        card.src = '../../cards/cardback.png'
        clearInterval(timecard)
    }, 300)
}
//0-1,0
function turn010(card, string) {
    card.classList.toggle(string)
    let timecard = setInterval(function () {
        card.src = '../../cards/ur.png'
        clearInterval(timecard)
    }, 300)
}
//1-0
function turn10(card) {
    card.classList.toggle("rotated1")
    let timecard = setInterval(function () {
        card.src = '../../cards/ur.png'
        clearInterval(timecard)
    }, 300)
}
//封装卡片形态还原功能
let flag = 1
function cradreturn() {
    //提示对面开始扇
    popup1.style.display = 'block'
    popup1.style.left = '30%'
    popup1.style.top = '6%'
    popup1.style.height = '20%'
    popup1.style.width = '40%'
    popup1.style.paddingTop = '6%'
    popup1.style.backgroundColor = 'pink'
    popup1.innerHTML = '现在是对方煽卡时间。'
    let timepop = setInterval(function () {
        popup1.style.display = 'none'
        clearInterval(timepop)
    }, 2000)
    if (b1 || s1 || f1) {
        card1.setAttribute('size', 1)
        card1.setAttribute('fixed', 1)
        b1 = s1 = f1 = false
        card1.style.top = '30px'
        card1.style.left = '37%'
        card1.style.width = '180px'
        card1.style.height = '270px'
        card1.style.borderStyle = 'none'
    }
    if (b2 || s2 || f2) {
        card2.setAttribute('size', 1)
        card2.setAttribute('fixed', 1)
        b2 = s2 = f2 = false
        card2.style.bottom = '20px'
        card2.style.left = '37%'
        card2.style.width = '180px'
        card2.style.height = '270px'
        card2.style.borderStyle = 'none'
    }
    if (b3 || s3 || f3) {
        card3.setAttribute('size', 1)
        card3.setAttribute('fixed', 1)
        b3 = s3 = f3 = false
        card3.style.top = '30px'
        card3.style.right = '37%'
        card3.style.width = '180px'
        card3.style.height = '270px'
        card3.style.borderStyle = 'none'
    }
    if (b4 || s4 || f4) {
        card4.setAttribute('size', 1)
        card4.setAttribute('fixed', 1)
        b4 = s4 = f4 = false
        card4.style.bottom = '20px'
        card4.style.right = '37%'
        card4.style.width = '180px'
        card4.style.height = '270px'
        card4.style.borderStyle = 'none'
    }
    flag = 0
}
//封装人机功能
function cardAI() {
    let num = 0
    let f = 0
    for (let i = 0; i < nn.length; i++) {
        num = num + nn[i]
    }
    console.log("num", num)
    let rd = getRandom(1, num)
    if (rd % 2 == jo) {
        rd = rd
    }
    else if (rd % 2 == 0) {
        rd = rd - 1
    }
    else if (rd % 2 == 1) {
        rd = rd - 1
    }
    for (let i = 0; i < nn.length && f < rd; i++) {
        if (nn[i] != 0) {
            turn011(cardarr[i], 'rotated1')
            nn[i] = 0
            f++
            let timeai = setInterval(function () {
                cardarr[i].remove()
                clearInterval(timeai)
            }, 900)
        }
    }
    let youtime = setInterval(function () {
        popup1.style.backgroundColor = 'pink'
        popup1.style.display = 'block'
        popup1.style.left = '30%'
        popup1.style.top = '6%'
        popup1.style.height = '20%'
        popup1.style.width = '40%'
        popup1.innerHTML = '该你了，宝贝。'
        flag = 1
        clearInterval(youtime)
        let ttime = setInterval(function () {
            popup1.style.display = 'none'
            clearInterval(ttime)
        }, 2500)
    }, 2000)
}
let yfz = 0
let xyfz = 0
let ks = 0
//箭头点击函数
for (let j = 0; j < 6; j++) {
    parr[j].onclick = function () {
        if (fz != 0 && flag == 1) {
            for (let i = 0; i < cardarr.length; i++) {
                yfz = fz - fz * Math.abs(parr[j].getAttribute('y') - cardarr[i].getAttribute('y'))
                xyfz = yfz - 0.5 * yfz * Math.abs(parr[j].getAttribute('x') - cardarr[i].getAttribute('x'))
                ks = 4 * cardarr[i].getAttribute('size') * cardarr[i].getAttribute('fixed')
                cardarr[i].setAttribute('A', Math.floor(xyfz / ks) % 2 * 1)
                cardarr[i].setAttribute('FD', Math.floor(xyfz / ks))
                if (cardarr[i].getAttribute('FD') == 0) {
                    console.log('fuck')
                }
                else if (cardarr[i].getAttribute('FD') == 1) {
                    turn011(cardarr[i], 'rotated1')
                }
                else if (cardarr[i].getAttribute('FD') == 2) {
                    turn010(cardarr[i], 'rotated2')
                }
                else if (cardarr[i].getAttribute('FD') == 3) {
                    turn011(cardarr[i], 'rotated3')
                }
                else {
                    turn010(cardarr[i], 'rotated4')
                }
            }
            //计算V值
            for (let i = 0; i < cardarr.length; i++) {
                Asum = Asum + Math.floor(cardarr[i].getAttribute('A'))
            }
            console.log('Asum:', Asum)
            //判断v
            if (Asum % 2 == jo) {
                for (let i = 0; i < cardarr.length; i++) {
                    if (cardarr[i].getAttribute('A') == 1) {
                        let timenone = setInterval(function () {
                            //直接从dom中删除元素
                            cardarr[i].remove()
                            nn[i] = 0
                            //模拟数组
                            //增加卡片数
                            changecardnumber(2, 1, 0)
                            Asum = 0
                            clearInterval(timenone)
                        }, 900)
                    }
                }
                console.log('ok', Asum)
            }
            else {
                let apxtime = setInterval(function () {
                    for (let i = 0; i < cardarr.length; i++) {
                        if (cardarr[i].getAttribute('A') == 1) {
                            turn10(cardarr[i])
                            cardarr[i].setAttribute('A', 0)
                        }
                    }
                    clearInterval(apxtime)
                }, 800)
                Asum = 0
                console.log('no', Asum)
            }
        }
        else if (flag == 1) {
            alert('先选择风力值的大小。')
        }
        else {
            console.log('no way')
        }
        console.log('Asum:', Asum)
        if (fz != 0) {
            let returntime = setInterval(function () {
                cradreturn()
                clearInterval(returntime)
                let AItime = setInterval(function () {
                    cardAI()
                    clearInterval(AItime)
                }, 2200)
            }, 1500);
        }
    }
}