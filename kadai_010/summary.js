$(function () {

  // 文字色変化ボタンを押したら
  $('#change-color').on('click', function() {
    // 文字が赤に変わる
    $('#target').css('color', 'red');
  });

  // 文字内容変化ボタンを押したら
  $('#change-text').on('click', function() {
    // 文字が'Hello!'に変わる
    $('#target').text('Hello!');
  });

  // フェードアウトボタンを押したら
  $('#fade-out').on('click', function() {
     // フェードアウトで文字が消える
    $('#target').fadeOut();
  });

  // フェードアウトインを押したら
  $('#fade-in').on('click', function() {
    // フェードインで文字が現れる
    $('#target').fadeIn();
  });
})