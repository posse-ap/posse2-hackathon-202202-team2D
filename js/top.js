'use strict';


//logoの表示
$(window).on('load',function(){
  $("#splash").delay(1000).fadeOut('slow');//ローディング画面を1秒（1000ms）待機してからフェードアウト
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


$(function(){
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.toggle_btn').on('click', function() {
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
  $('#mask').on('click', function() {
    // openクラスを削除して、メニューを閉じる
    $('#header').removeClass('open');
  });
});


$('.catch_text').addClass('fadeUp');
// $('.catch_text').addClass('fadeUp');
// $('.catch_texts').addClass('fadeUp');

// $(function(){
    $(window).scroll(function (){
        // console.log($(this).scrollTop());

      $('.fadeUp').each(function(){
        // var elementTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        // var windowHeight = $(window).height();
        if (scroll > 400){
          $(".fadeUp").addClass('scrollin');
        }
      });
    });
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

// //ページトップへ戻る
// jQuery(function () {
//   var appear = false;
//   var pageTop = $('#footer-top-page-button');

//   pageTop.click(function () {
//     $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
//     return false;
//   });
// });