// 检查用户输入的答案是否正确
function checkAnswer() {
    var answer = document.getElementById("answer").value;
    if(answer === "陈豆豆") {
        // 答案正确，跳转到主页面
        window.location.href = "main.html";
    } else {
        // 答案错误，弹出提示
        alert("答案错误，请重试！");
    }
}
