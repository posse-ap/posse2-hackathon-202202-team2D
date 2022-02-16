function rotateXAnime(){
  // ふわっ
  $('.main_title').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-30;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('rotateX');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('rotateX');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}


$(window).scroll(function (){
    rotateXAnime();
});
        // canvas のレスポンシブ処理
        // function resize(){    
        //   $(".canvas-responsive").outerHeight($(window).height()*2/3 -$(".canvas-responsive").offset().top- Math.abs($(".canvas-responsive").outerHeight(true) - $(".canvas-responsive").outerHeight()));
        // }
        // $(document).ready(function(){
        //   resize();
        //   $(window).on("resize", function(){                      
        //       resize();
        //   });
        // });
        //outerHeight() 高さ取得、 .offset()  位置、　Math.abs() 絶対値、　
       
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var ballRadius = 5;
        var x = canvas.width/2;
        var y = canvas.height-30;
        var dx = 2;
        var dy = -2;
        var paddleHeight = 10;
        var paddleWidth = 75;
        var paddleX = (canvas.width-paddleWidth)/2;
        var rightPressed = false;
        var leftPressed = false;
        var brickRowCount = 8;
        var brickColumnCount = 3;
        var brickWidth = 26;
        var brickHeight = 10;
        var brickPadding = 10;
        var brickOffsetTop = 25;
        var brickOffsetLeft = 10;
        var score = 0;
        var interval = setInterval(draw, 20);

        var bricks = [];
        for(var c=0; c<brickColumnCount; c++) {
          bricks[c] = [];
          for(var r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
          }
        }


        // スマホ用　右左のボタン
        //var canvas = document.getElementById("myCanvas");
        //var ctx = canvas.getContext("2d");
        var leftButton = document.getElementById("leftButton");
        leftButton.addEventListener("touchstart", touchLeft);
        leftButton.addEventListener("touchend", touchLeft);
        function touchLeft(e){
            console.log('左はば' + canvas.width)
            console.log('左：' + e.touches, e.type);
            if(e.type == 'touchstart'){
                leftPressed = true;
            } else if(e.type == 'touchend'){
                leftPressed = false;
            }
        }
        var rightButton = document.getElementById("rightButton");
        rightButton.addEventListener("touchstart", touchRight);
        rightButton.addEventListener("touchend", touchRight);
        function touchRight(e){
            console.log('右はば' + canvas.width)
            console.log('右：' + e.touches, e.type);
            if(e.type == 'touchstart'){
                rightPressed = true;
            } else if(e.type == 'touchend'){
                rightPressed = false;
            }
        }
    
        // パソコン用キーボード操作
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        function keyDownHandler(e) {
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = true;
            }
            else if(e.key == "Left" || e.key == "ArrowLeft") {
                leftPressed = true;
            }
        }

        function keyUpHandler(e) {
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = false;
            }
            else if(e.key == "Left" || e.key == "ArrowLeft") {
                leftPressed = false;
            }
        }

        function collisionDetection() {
          for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
              var b = bricks[c][r];
              if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                  dy = -dy;
                  b.status = 0;
                  score++;
                  if(score == brickRowCount*brickColumnCount) {
                    // alert("やったね！");
                    ctx.fillText("ゲームクリア！", 100,150);
                    // document.location.reload();
                    clearInterval(interval); // ゲーム再スタート
                  }
                }
              }
            }
          }
        }

        function drawBall() {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "red";
          ctx.fill();
          ctx.closePath();
        }
        function drawPaddle() {
          ctx.beginPath();
          ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
          ctx.fillStyle = "blue";
          ctx.fill();
          ctx.closePath();
        }
        function drawBricks() {
          for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
              if(bricks[c][r].status == 1) {
                var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.closePath();
              }
            }
          }
        }
        function drawScore() {
          ctx.font = "16px Arial";
          ctx.fillStyle = "blue";
          ctx.fillText("点数： "+score, 8, 20);
        }

        function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawBricks();
          drawBall();
          drawPaddle();
          drawScore();
          collisionDetection();

          if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
          }
                    if(y + dy < ballRadius) {
            dy = -dy;
          }
          else if(y + dy > canvas.height-ballRadius) {
            if(x > paddleX && x < paddleX + paddleWidth) {
              dy = -dy;
            }
            else {
            //   alert("まけ");
            ctx.fillText("おしいね！", 110,150);
            //   document.location.reload();
             clearInterval(interval);
            }
          }

          if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
          }
          else if(leftPressed && paddleX > 0) {
            paddleX -= 7;
          }

          x += dx;
          y += dy;
        }


//フェードイン
$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 200; // どのぐらい要素を動かすか(px)
  const fade_time = 800; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".fadein1").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".fadein1").each(function () {
          const this_position = $(this).offset().top;
          if (fade_position > this_position) {
              $(this).css({
                  opacity: 1,
                  transform: "translateY(0)",
              });
          }
      });
  });
}); 

$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 200; // どのぐらい要素を動かすか(px)
  const fade_time = 1100; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".fadein2").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".fadein2").each(function () {
          const this_position = $(this).offset().top;
          if (fade_position > this_position) {
              $(this).css({
                  opacity: 1,
                  transform: "translateY(0)",
              });
          }
      });
  });
}); 

$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 200; // どのぐらい要素を動かすか(px)
  const fade_time = 1400; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".fadein3").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".fadein3").each(function () {
          const this_position = $(this).offset().top;
          if (fade_position > this_position) {
              $(this).css({
                  opacity: 1,
                  transform: "translateY(0)",
              });
          }
      });
  });
}); 

$('.tile').mouseover(function() {

    $('.tl_img').toggleClass("opacity_yes");

    // ここにマウスオーバー時の処理を記述する
 })