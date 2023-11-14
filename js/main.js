const titleE1 = document.getElementById("title");
const scpoeEl = document.querySelector("#scope");
const minNumEl = document.getElementById("minNum");
const maxNumEl = document.getElementById("maxNum");
const inputEl =document.querySelector("#input");
const btnEl =document.querySelector("#btn");

    //0.設定答案
    const answer = Math.floor(Math.random() *100) + 1;
    console.log(answer);
//事件監聽
btnEl.addEventListener("click",function(){
    //1.抓input的值
    const guessNum = +inputEl.value;
    const minNum = +minNumEl.innerText;
    const maxNum = +maxNumEl.innerText;

    //1.1 清空input
    inputEl.value = null;
    // inputEl.value = "";

    //2.1防呆
    if(guessNum > maxNum || guessNum < minNum){
        alert("請猜範圍內數字");
        return;
    }
    //2.2做邏輯計算看是答案，還是大於還是小於
    if(guessNum === answer){
        titleE1.innerText = "恭喜答對!!"
        scpoeEl.innerHTML = `<h3>${answer}</h3>`;
        // scpoeEl.innerText = answer;
        btnEl.innerHTML = '<button class="btn" type="button" onClick="window.location.reload();">再玩一次</button>';
        // inputEl.value = answer;
    }
    if(guessNum < answer){
        minNumEl.innerText = guessNum.toString();
    }
    if(guessNum > answer){
        maxNumEl. innerText = guessNum.toString();
    }
    //3.渲染
        //(1)答案對:恭喜頁面
        //(2)答案錯:更新最大與最小值

})