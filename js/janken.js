// jqueryの書き方
// $　ドルマークとは？　＝　jQueryを意味している
/*$(".a").on('click', function(){
    // ここにおまじないを書く
    // alert("h1がおされました！");
    $(".a").css("color", "purple");
    $(".a").fadeOut(2000);
    $(".a").fadeIn(2000);
})
*/
//じゃんけん用のSCRIPT
//1.３個のクリックイベントを作成
//2.クリックイベントごとに「なに？」と「勝ち」の乱数を生成
//3.「なに？」のIF分を3個用意["グー"、"チョキ"、"パー"]
//4.「なに？」のIF分の中に$("#paw").html()を使って表示させる
//5.「勝ち」のIF分を3個用意["引き分け"、"あなたの勝ち"、"あなたの負け"]
//6.「勝ち」のIF分の中に$("#result").html()を使って表示させる
  
//試合数、勝ち数、負け数
let gameCount = 0;
let winCount = 0;
let loseCount = 0;
let winCount_result = 0;
let loseCount_result = 0;
let gameCount_result = 0;


$("#rock").on("click",function(){
    //「なに？」と「勝ち」の乱数をつくる１〜3
    const num = Math.ceil(Math.random() * 3);
       if(num==1){
           // $("#paw").html("グー");
           $("#paw").html('<img src="img/kohacu.com_003300_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("引き分け");
           $("#result").html('<img src="img/aseru1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
       }

       if(num==2){
           // $("#paw").html("チョキ");
           $("#paw").html('<img src="img/kohacu.com_003301_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの勝ち");
           $("#result").html('<img src="img/iinee1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 勝ち数をいれる
          winCount = winCount + 1;
          console.log(winCount + "win");
          // 勝ち数をカウンター表示する
          winCount_result = document.getElementById("winCount");
          winCount_result.innerHTML = winCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }

       if(num==3){
           // $("#paw").html("パー");
           $("#paw").html('<img src="img/kohacu.com_003302_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの負け");
           $("#result").html('<img src="img/gakkuri1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 負け数をいれる
          loseCount = loseCount + 1;
          console.log(loseCount + "lose");
          // 負け数をカウンター表示する
          loseCount_result = document.getElementById("loseCount");
          loseCount_result.innerHTML = loseCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       $("#reset").click(function(){
        location.reload();
       })
   });
   $("#scissors").on("click",function(){
    //「なに？」の乱数をつくる１〜3
    const num = Math.ceil(Math.random() * 3);
       if(num==1){
           // $("#paw").html("グー");
           $("#paw").html('<img src="img/kohacu.com_003300_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの負け");
           $("#result").html('<img src="img/gakkuri1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 負け数をいれる
          loseCount = loseCount + 1;
          console.log(loseCount + "lose");
          // 負け数をカウンター表示する
          loseCount_result = document.getElementById("loseCount");
          loseCount_result.innerHTML = loseCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       if(num==2){
           // $("#paw").html("チョキ");
           $("#paw").html('<img src="img/kohacu.com_003301_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("引き分け");
           $("#result").html('<img src="img/aseru1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
       }
       if(num==3){
           // $("#paw").html("パー");
           $("#paw").html('<img src="img/kohacu.com_003302_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの勝ち");
           $("#result").html('<img src="img/iinee1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 勝ち数をいれる
          winCount = winCount + 1;
          console.log(winCount + "win");
          // 勝ち数をカウンター表示する
          winCount_result = document.getElementById("winCount");
          winCount_result.innerHTML = winCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       $("#reset").click(function(){
        location.reload();
       })
   });
   $("#paper").on("click",function(){
    //「なに？」の乱数をつくる１〜3
    const num = Math.ceil(Math.random() * 3);
       if(num==1){
           // $("#paw").html("グー");
           $("#paw").html('<img src="img/kohacu.com_003300_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの勝ち");
           $("#result").html('<img src="img/iinee1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 勝ち数をいれる
          winCount = winCount + 1;
          console.log(winCount + "win");
          // 勝ち数をカウンター表示する
          winCount_result = document.getElementById("winCount");
          winCount_result.innerHTML = winCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       if(num==2){
           // $("#paw").html("チョキ");
           $("#paw").html('<img src="img/kohacu.com_003301_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの負け");
           $("#result").html('<img src="img/gakkuri1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          // 負け数をいれる
          loseCount = loseCount + 1;
          console.log(loseCount + "lose");
          // 負け数をカウンター表示する
          loseCount_result = document.getElementById("loseCount");
          loseCount_result.innerHTML = loseCount;
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       if(num==3){
           // $("#paw").html("パー");
           $("#paw").html('<img src="img/kohacu.com_003302_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("引き分け");
           $("#result").html('<img src="img/aseru1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
       }
       $("#reset").click(function(){
        location.reload();
       })
       
        

// // 値を取得する
// const count = document.getElementById('gameCount');
// let countResult = count.innerHTML; 
// const rock = document.getElementById('rock');
// const scissors = document.getElementById('scissors');
// const paper = document.getElementById('paper');
// const btnType = document.getElementById('btn');
// const pawType = document.getElementById('paw');
// const result = document.getElementById('result');
// const reset = document.getElementById('reset');
// const winCount = document.getElementById('winCount')
// const loseCount = document.getElementById('loseCount')
// const winRate = document.getElementById('winRate');
// const loseRate = document.getElementById('loseRate');



// //試合数書き換え
// const gameCountReplace = (gameCount) => {              
//     countResult = countResult.replace(countResult, gameCount);
//     count.textContent = countResult;
//   }

//   const alert = (winResult, loseResult) => {
//     if (winResult > loseResult) {
//       window.alert('勝ち越しました！');
//     } else if (winResult < loseResult) {
//       window.alert('負け越しました！');
//     } else {
//       window.alert('引き分けでした！');
//     }
//   }

//   //リセットボタン表示とreload()関数呼び出し
//   const resetClick = () => {
//     //ボタン要素作成
//     const resetBtn = document.createElement('input');
//     resetBtn.type = 'button';
//     resetBtn.value = '更新';
//     reset.appendChild(resetBtn); //親要素(reset)の子要素にボタンを配置する

//     resetBtn.addEventListener('click', () => { //更新ボタンを押下後、画面リロードする
//       location.reload(); 
//     })
//   }


//   //勝率計算
//   const winRateCalc = (gameCount, winCount) => {
//     const winRateResult = (winCount / gameCount) * 100;
//     winRate.textContent = `${winRateResult}%`;
//   }


  












   });    

   console.log(winCount + "win");
   console.log(gameCount + "game");