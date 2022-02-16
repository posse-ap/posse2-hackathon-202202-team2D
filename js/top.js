'use strict';


//logoの表示
$(window).on('load', function () {
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1秒（1000ms）待機してからフェードアウト
  $("#splash_logo").delay(900).fadeOut('slow');//ロゴを0.9秒（900ms）待機してからフェードアウト
});


// $(window).on('load',function(){
// var $ds = 300; // ページの高さを取得
// var $speed = 1500; //スクロールのスピードを設定（ミリ秒）
// $("html,body").stop().animate({"scrollTop":($ds-100)},$speed,function(){
// $("html,body").stop().animate({"scrollTop":0},$speed)
// })
// localStorage.clear("scrollTop")
// })

// text_random_animeにappearRandomtextというクラス名を付ける定義
function text_random_animeControl() {
  $('.text_random_anime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appearRandomtext");

    } else {
      $(this).removeClass("appearRandomtext");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('load', function () {
  text_random_animeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(".toggle_btn").click(function () {

  //spanタグを追加する
  var element = $(".text_random_anime");
  element.each(function () {
    var text = $(this).text();
    var textbox = '';
    text.split('').forEach(function (t) {
      textbox += '<span>' + t + '</span>';
    });
    $(this).html(textbox);
  });

  text_random_animeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.toggle_btn').on('click', function () {
    // #headerにopenクラスが存在する場合
    if ($('#header').hasClass('open')) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
      $('#header').removeClass('open');

      // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
      $('#header').addClass('open');
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $('#mask').on('click', function () {
    // openクラスを削除して、メニューを閉じる
    $('#header').removeClass('open');
  });
});


var startPos = 0, winScrollTop = 0;
// scrollイベントを設定
window.addEventListener('scroll', function () {
    winScrollTop = this.scrollY;
    if (winScrollTop >= startPos) {
        // 下にスクロールされた時
        if (winScrollTop >= 400) {
            // 下に200pxスクロールされたら隠す
            document.getElementById('entryButton').classList.add('hide');
        }
    } else if (winScrollTop <= 400){
        // 上にスクロールされた時
        document.getElementById('entryButton').classList.remove('hide');
    }
    startPos = winScrollTop;
});



$('.catch_text span').addClass('fadeUp');
$('.catch_text_normal p').addClass('fadeUp');
// $('.catch_text').addClass('fadeUp');
// $('.catch_texts').addClass('fadeUp');


// $(function(){
//     $(window).scroll(function (){
//       $('fade_down').each(function(){
//         var elementTop = $(this).offset().top;
//         var scroll = $(window).scrollTop();
//         var windowHeight = $(window).height();
//                 console.log($(this).scrollTop());
//         if (scroll > elementTop - windowHeight +300){
//           $(this).addClass('scrollin');
//         }
//       }); 
//     });
//   });

function slideAnime() {
  //====下に動くアニメーションここから===

    $('.fadeUp').each(function(){
            var elemPos = $(this).offset().top+10;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            // 下から上へ表示するクラスを付与
            // テキスト要素を挟む親要素（下）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeDownUp");
            // 要素を下枠外に移動しCSS アニメーションで下から元の位置に移動
            $(this).children(".fadeUp span").addClass("slideAnimeUpDown");
            // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
            }else{
            // 下から上へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeDownUp");
            $(this).children(".fadeUp span").removeClass("slideAnimeUpDown");
            }
        });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述


function slideAnime2() {
  //====下に動くアニメーションここから===

    $('.fadeDown').each(function(){
            var elemPos = $(this).offset().top+10;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            // 下から上へ表示するクラスを付与
            // テキスト要素を挟む親要素（下）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeDownUp");
            // 要素を下枠外に移動しCSS アニメーションで下から元の位置に移動
            $(this).children(".fadeUp span").addClass("slideAnimeUpDown");
            // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
            }else{
            // 下から上へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeDownUp");
            $(this).children(".fadeUp span").removeClass("slideAnimeUpDown");
            }
        });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面切り替えアニメーション
for (let i = 1; i < 4; i++) {
  $(function () {
    var setImg = '.change-img'+ i +'';
    // var setImg = '.change-img1';
    var fadeSpeed = 2000;
    var switchDelay = 3000;

    $(setImg).children('img').css({ opacity: '0' });
    $(setImg + ' img:first').stop().animate({ opacity: '1', zIndex: '20' }, fadeSpeed);

    setInterval(function () {
        $(setImg + ' :first-child').animate({ opacity: '0' }, fadeSpeed).next('img').animate({ opacity: '1' }, fadeSpeed).end().appendTo(setImg);
    }, switchDelay);
});
}


//   });

// $('.toggle_btn').click(function () {
//   $('.fadeUp').addClass('scrollin');
// })

//   $('span').hide().fadeIn(3000);


//   $(function(){
//   $(".fadeUp").on("fadeUp", function (isInView) {
//     if (isInView) {
//       $(this).stop().addClass("scrollin");
//     }
//   });
// });

//   $(function () {
//   const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
//   const fade_move = 100; // どのぐらい要素を動かすか(px)
//   const fade_time = 4800; // フェードの時間(ms)
//   // フェード前のcssを定義
//   $(".fadeUp").css({
//     opacity: 0,
//     transform: "translateY(" + fade_move + "px)",
//     transition: fade_time + "ms",
//   });
//   // スクロールまたはロードするたびに実行
//   $(window).on("scroll load", function () {
//     const scroll_top = $(this).scrollTop();
//     const scroll_bottom = scroll_top + $(this).height();
//     const fade_position = scroll_bottom - fade_bottom;
//     $(".fadeUp").each(function () {
//       const this_position = $(this).offset().top;
//       if (fade_position > this_position) {
//         $(this).css({
//           opacity: 1,
//           transform: "translateY(0)",
//         });
//       }
//     });
//   });
// });


jQuery(function () {
  var appear = false;
  var pagetop = $('#page_top');
  var goForm = $('.goForm');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {  //400pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '20vw' //下から100pxの位置に
        }, 600); //0.3秒かけて現れる
        goForm.stop().animate({
          'bottom': '1vw' //下から100pxの位置に
        }, 600); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-20vw' //下から-100pxの位置に
        }, 600); //0.3秒かけて隠れる
        goForm.stop().animate({
          'bottom': '-30vw' //下から-100pxの位置に
        }, 600); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 300); //0.5秒かけてトップへ戻る
    return false;
  });
});


// ▼ カウントダウンタイマーの設定
function CountdownTimer(elm, tl, mes) {
  this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
  initialize: function (elm, tl, mes) {
    this.elem = document.getElementById(elm);
    this.tl = tl;
    this.mes = mes;
  },
  countDown: function () {
    var timer = '';
    var today = new Date();
    var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
    var hour = Math.floor((day * 24) + ((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
    var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
    var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
    var me = this;

    if ((this.tl - today) > 0) {
      if (day) timer += '<span class="cdt_num">' + day + '</span><small>日</small>';
      timer += '<span class="cdt_num">' + this.addZero(hour) + '</span><small>時間</small><span class="cdt_num">' + this.addZero(min) + '</span><small>分</small><span class="cdt_num">' + this.addZero(sec) + '</span><small>秒</small><span class="cdt_num">' + this.addZero(milli) + '</span>';
      this.elem.innerHTML = timer;
      var tid = setTimeout(function () {
        me.countDown();
      }, 10);
    } else {
      this.elem.innerHTML = this.mes;
      return;
    }
  },
  addZero: function (num) {
    return ('0' + num).slice(-2);
  }
}

// ▼ 開始＆終了日時の指定と日付の判別
function CDT() {
  var myD = Date.now(); // 1970/1/1午前0時から現在までのミリ秒
  var start = new Date('2022-06-04T00:00+09:00'); // 開始日時の指定
  var myS = start.getTime(); // 1970/1/1午前0時からの開始日時までのミリ秒
  // var end = new Date('2019-11-05T23:59+09:00'); // 終了日時の指定
  // var myE = end.getTime(); // 1970/1/1午前0時から終了日時までのミリ秒

  // 今日が開始日前か期間中か終了日後かの判別
  // if (myS <= myD && myE >= myD) {
  //   var text = '<span>終了</span><span>まで</span>';
  //   var tl = end;
  // } // 期間中
  // else 
  if (myS > myD) {
    var text = '<span>3.0期生入学式まであと</span>';
    var tl = start;
  } // 開始日前
  else {
    var text = "";
  } // 終了日後

  var timer = new CountdownTimer('cdt_date', tl, '<small>終了しました</small>'); // 終了日後のテキスト
  timer.countDown();
  var target = document.getElementById("cdt_txt");
  target.innerHTML = text;
}
window.onload = function () {
  CDT();
}



// Quote Generator

const square =[
  '../img/square0.jpg',
  '../img/square1.jpg',
  '../img/square2.jpg',
]

const oblong = [
  '../img/oblong0.jpg',
  '../img/oblong1.jpg',
  '../img/oblong2.jpg',
  '../img/oblong3.jpg',
]
const vertical =[
  '../img/vertical0.jpg',
  '../img/vertical1.jpg',
  '../img/vertical2.jpg',
]

// let quote = document.getElementById('quote');
// var r = Math.floor(Math.random()*(picture.length));


// quote.insertAdjacentHTML("beforeend"
// `<div class="quote_wrapper">`
//   + `<header>Photo gallery of POSSE②</header>`
//   + `<div class="content">`
//   + `<div class="img_area">`
//   + `<div class="square_img"><img src=${square[1]} alt=""></div>`
//   + `<div class="oblong_img"><img src=${oblong[0]} alt=""></div>`
//   + `<div class="vertical_img"><img src=${vertical[1]} alt=""></div>`
//   + `</div>`
//   + `</div>`
//   + `<div class="buttons">`
//   + `<div class="features">`
//   + `<button id="button">New Photo</button>`
//   + `</div>`
//   + `</div>`
// );

let squareImg = document.getElementById("squareImg");
let oblongImg = document.getElementById("oblongImg");
let verticalImg = document.getElementById("verticalImg");
const button = document.getElementById("button");

let squareSrc = squareImg.getAttribute("src");
let oblongSrc = oblongImg.getAttribute("src");
let verticalSrc = verticalImg.getAttribute("src");
button.addEventListener('click',function(){
  var s = Math.floor(Math.random()*square.length)
  var o = Math.floor(Math.random()*oblong.length)
  var v = Math.floor(Math.random()*vertical.length)
  console.log(s)
  console.log(o)
  console.log(v)
  console.log(squareImg.src)
  console.log(oblongImg.src)
  console.log(verticalImg.src)
  squareImg.src = square[s]
  oblongImg.src = oblong[o]
  verticalImg.src = vertical[v]
});
