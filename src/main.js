let html = document.querySelector('#demo');
let style = document.querySelector('#style');

let string = `
/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
body{
    color:blue;
}
/* 接下来我展示一下生成一个八卦图
 * 首先准备一个div
*/


#div1{
    position:fixed;
    top:0px;
    left:50%;
    transform:translateX(-50%);
    height:200px;
    width:200px; 
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
    border-radius:50%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*接下来画出阴阳鱼
*/
#div1::before{
    content:'';
    height: 100px;
    width: 100px;
    position: absolute;
    transform:translatex(-50%);
    top:0px;
    left: 50%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
}
#div1::after{
    content:'';
    height: 100px;
    width: 100px;
    display: block;
    position: absolute;
    left: 50px;
    bottom: 0px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}

`

let string2 = '';
// string = string.replace(/\n/g, "<br>")
let n = 0;

if (document.body.clientWidth < 500) {
    let div1 = document.querySelector('#div1');
    console.log(document.body.clientWidth);
    console.log(document.body.clientHeight);
    div1.style.left = (document.body.clientWidth - 200) / 2 + 'px';
    div1.style.top = (document.body.clientHeight / 2 - 200) / 2 + 'px';
}

let step = () => {
    setTimeout(() => {

        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp;';
        } else {
            string2 += string[n];
        }

        // string2 += (string[n] === '\n' ? '<br>' : string[n]); 

        // console.log(string2.length);
        // console.log(string.length);
        // console.log(n);

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999)

        if (n < string.length - 1) {
            step();
            n++;
            // console.log(n);  54
        } else {}
    }, 0);
}



step();