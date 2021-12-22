//R・SR英雄
document.getElementById("R_la_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/R_la_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_la";
  console.log('¯\_(ツ)_/¯');//コンソールログ

  var elem = document.getElementById('hero_profile_name').textContent = "ティナ";//名前の変更
};
document.getElementById("R_se_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/R_se_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_se";

  var elem = document.getElementById('hero_profile_name').textContent = "マコト";//名前の変更
};
document.getElementById("R_sk_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/R_sk_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_sk";

  var elem = document.getElementById('hero_profile_name').textContent = "キャロル";//名前の変更
};
