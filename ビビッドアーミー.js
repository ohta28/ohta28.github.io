//R・SR英雄
document.getElementById("R_la_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/R_la_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_la";
  console.log('3');//コンソールログ

  var elem = document.getElementById('hero_profile_name').innerHTML = "<p>ティナ</p>";//名前の変更
  var elem = document.getElementById('hero_profile_skill_name').innerHTML = "<p>致命的な一撃</p>";//名前の変更
};
document.getElementById("R_la_002").onclick = function() {
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_se";
};

document.getElementById("R_se_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/R_se_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_se";

  var elem = document.getElementById('hero_profile_name').innerHTML = "<p>マコト</p>";//名前の変更
  var elem = document.getElementById('hero_profile_skill_name').innerHTML = "<p>全速出撃</p>";//名前の変更
};
document.getElementById("R_sk_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/R_sk_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_sk";

  var elem = document.getElementById('hero_profile_name').innerHTML = "<p>キャロル</p>";//名前の変更
  var elem = document.getElementById('hero_profile_skill_name').innerHTML = "<p>士気高揚</p>";//名前の変更
};
