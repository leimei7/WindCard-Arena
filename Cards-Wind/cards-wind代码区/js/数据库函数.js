//暂时数据库函数
let cardsnumber = [0, 0, 0, 0, 0, 0]//变化，固定，跳跃
let cardsnumberstring
//0.封装布局函数
function markcardsnumber(a = 0, b = 0, c = 0, d = 0, e = 0, f = 0) {
    cardsnumber[0] = +a
    cardsnumber[1] = +b
    cardsnumber[2] = +c
    cardsnumber[3] = +d
    cardsnumber[4] = +e
    cardsnumber[5] = +f
    setcardsnumber()
}
//1.封装存储函数
function setcardsnumber() {
    //使用json转化为字符串
    cardsnumberstring = JSON.stringify(cardsnumber)
    //存储字符串
    localStorage.setItem("cardsnumber", cardsnumberstring)
    //localStorage.setItem("key", valuble)
}

//2.封装解析读取函数
function getcardsnumber() {
    //读取临时数据库文件，通过key获得数据
    cardsnumberstring = localStorage.getItem("cardsnumber")
    //解析数据库内容
    if (cardsnumberstring) {
        for (let i = 0; i < 6; i++) {
            cardsnumber[i] = JSON.parse(cardsnumberstring)[i]
        }
    }
    else {
        console.log("获取信息失败")
    }
}

//3.封装修改数据函数
//3.n代表要修改第n-1个数据，add代表增加多少，minus代表减少多少
function changecardnumber(n, add, minus) {
    getcardsnumber()
    cardsnumber[n] = cardsnumber[n] + add - minus
    setcardsnumber()
}

//4.封装显示函数
function showcardsnumber1() {
    //取
    getcardsnumber()
    //获取代填入标签
    const headsontext1 = document.querySelector(".headgrandson1")
    const headsontext2 = document.querySelector(".headgrandson2")
    const headsontext3 = document.querySelector(".headgrandson3")
    //填入
    headsontext1.innerHTML = `R卡:${cardsnumber[0]}`
    headsontext2.innerHTML = `SSR卡:${cardsnumber[1]}`
    headsontext3.innerHTML = `UR卡:${cardsnumber[2]}`
}
function showcardsnumber2() {
    getcardsnumber()
    //获取代填入标签
    const sdnumberson1 = document.querySelector(".sdnumberson1")
    const sdnumberson2 = document.querySelector(".sdnumberson2")
    const sdnumberson3 = document.querySelector(".sdnumberson3")
    //填入
    sdnumberson1.innerHTML = `R卡:${cardsnumber[0]}`
    sdnumberson2.innerHTML = `SSR卡:${cardsnumber[1]}`
    sdnumberson3.innerHTML = `UR卡:${cardsnumber[2]}`
}
function showcardsnumber3() {
    getcardsnumber()
    //获取技能标签
    let jn = document.getElementsByClassName('firstli')//类名都相同
    //填入
    jn[0].innerHTML = `扩张${cardsnumber[3]}`
    jn[1].innerHTML = `缩小${cardsnumber[3]}`
    jn[2].innerHTML = `固定${cardsnumber[4]}`
    jn[3].innerHTML = `狂风${cardsnumber[5]}`
}