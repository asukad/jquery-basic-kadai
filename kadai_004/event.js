$(window).on({
  // HTMLドキュメントが読み込み完了したら
  'load' : () => {
    console.log('loadイベントが発生しました')},
  // 画面をスクロールしたら
  'scroll' : () => {
    console.log('scrollイベントが発生しました')},
});