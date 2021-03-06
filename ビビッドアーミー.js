//R英雄
/*R/陸軍/001/ティナ*/
document.getElementById("R_la_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/R_la_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_la";
  console.log('R/陸軍/001/ティナ');

  var elem = document.getElementById('hero_profile_name').innerHTML = "<p>ティナ</p>";//名前の変更
  var elem = document.getElementById('hero_profile_skill_name').innerHTML = "<p>致命的な一撃</p>";//名前の変更
  //レベルが上がるごとにスキルの性能が変わる用のレイアウト
    var target = document.getElementById("hero_profile_skill_detail");//英雄スキル詳細の枠のclassを変更(白→灰白)
    target.className = "hero_profile_skill_detail_a";
    var elem = document.getElementById('hero_profile_skill_detail').innerHTML = "<p>★1・Lv1時の性能</p><ul id='hero_profile_skill_detail_1'></ul><div class='border_white'><!---白の区切り---></div><p>★5・Lv120時の性能</p><ul id='hero_profile_skill_detail_5'></ul>";
  var elem = document.getElementById('hero_profile_skill_detail_1').innerHTML = "<li><p>戦闘開始時、ランダムな目標に2回攻撃し、<b>30.1%</b>のダメージを与える。</p></li> <li><p><span class='marker_green_2'>部隊採集速度</span>+<b>15.0%</b>。</p></li>";//★1時の英雄のスキル効果
  var elem = document.getElementById('hero_profile_skill_detail_5').innerHTML = "<li><p>戦闘開始時、ランダムな目標に2回攻撃し、<b>35.1%</b>のダメージを与える。</p></li> <li><p><span class='marker_green_2'>部隊採集速度</span>+<b>17.2%</b>。</p></li>";//★5時の英雄のスキル効果
};

/*R/海軍/001/マコト*/
document.getElementById("R_se_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/R_se_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_se";
  console.log('R/海軍/001/マコト');

  var elem = document.getElementById('hero_profile_name').innerHTML = "<p>マコト</p>";//名前の変更
  var elem = document.getElementById('hero_profile_skill_name').innerHTML = "<p>全速出撃</p>";//名前の変更
  //レベルが上がるごとにスキルの性能が変わる用のレイアウト
    var target = document.getElementById("hero_profile_skill_detail");//英雄スキル詳細の枠のclassを変更(白→灰白)
    target.className = "hero_profile_skill_detail_a";
    var elem = document.getElementById('hero_profile_skill_detail').innerHTML = "<p>★1・Lv1時の性能</p><ul id='hero_profile_skill_detail_1'></ul><div class='border_white'><!---白の区切り---></div><p>★5・Lv120時の性能</p><ul id='hero_profile_skill_detail_5'></ul>";
  var elem = document.getElementById('hero_profile_skill_detail_1').innerHTML = "<li><p>暗黒軍団を攻撃する時、<span class='marker_blue_2'>進軍速度</span>を<b>12.0%</b>増加させる。</p></li>";//★1時の英雄のスキル効果
  var elem = document.getElementById('hero_profile_skill_detail_5').innerHTML = "<li><p>暗黒軍団を攻撃する時、<span class='marker_blue_2'>進軍速度</span>を<b>14.4%</b>増加させる。</p></li>";//★5時の英雄のスキル効果
};
/*R/空軍/001/キャロル*/
document.getElementById("R_sk_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/R_sk_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_sk";
  console.log('R/空軍/001/キャロル');

  var elem = document.getElementById('hero_profile_name').innerHTML = "<p>キャロル</p>";//名前の変更
  var elem = document.getElementById('hero_profile_skill_name').innerHTML = "<p>士気高揚</p>";//名前の変更
  //レベルが上がるごとにスキルの性能が変わる用のレイアウト
    var target = document.getElementById("hero_profile_skill_detail");//英雄スキル詳細の枠のclassを変更(白→灰白)
    target.className = "hero_profile_skill_detail_a";
    var elem = document.getElementById('hero_profile_skill_detail').innerHTML = "<p>★1・Lv1時の性能</p><ul id='hero_profile_skill_detail_1'></ul><div class='border_white'><!---白の区切り---></div><p>★5・Lv120時の性能</p><ul id='hero_profile_skill_detail_5'></ul>";
  var elem = document.getElementById('hero_profile_skill_detail_1').innerHTML = "<li><p>空軍の<span class='marker_red_1'>攻撃力</span>+<b>10.0%</b></p></li>";//★1時の英雄のスキル効果
  var elem = document.getElementById('hero_profile_skill_detail_5').innerHTML = "<li><p>空軍の<span class='marker_red_1'>攻撃力</span>+<b>11.8%</b></p></li>";//★5時の英雄のスキル効果
};

//SR英雄
/*SR/陸軍/001/アリア*/
document.getElementById("SR_la_001").onclick = function() {
  document.getElementById('hero_images').src='hero_images/SR_la_001.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_la";
  console.log('SR/陸軍/001/アリア');

  var elem = document.getElementById('hero_profile_name').innerHTML = "<p>アリア</p>";//名前の変更
  var elem = document.getElementById('hero_profile_skill_name').innerHTML = "<p>塹壕</p>";//名前の変更
  //レベルが上がるごとにスキルの性能が変わる用のレイアウト
    var target = document.getElementById("hero_profile_skill_detail");//英雄スキル詳細の枠のclassを変更(白→灰白)
    target.className = "hero_profile_skill_detail_a";
    var elem = document.getElementById('hero_profile_skill_detail').innerHTML = "<p>★1・Lv1時の性能</p><ul id='hero_profile_skill_detail_1'></ul><div class='border_white'><!---白の区切り---></div><p>★5・Lv120時の性能</p><ul id='hero_profile_skill_detail_5'></ul>";
  var elem = document.getElementById('hero_profile_skill_detail_1').innerHTML = "<li><p>陸軍の<span class='marker_blue_2'>回避率</span>+<b>18.1%</b></p></li>";//★1時の英雄のスキル効果
  var elem = document.getElementById('hero_profile_skill_detail_5').innerHTML = "<li><p>陸軍の<span class='marker_blue_2'>回避率</span>+<b>24.3%</b></p></li>";//★5時の英雄のスキル効果
};
/*SR/陸軍/002/パッツィ*/
document.getElementById("SR_la_002").onclick = function() {
  document.getElementById('hero_images').src='hero_images/SR_la_002.png';//画像の変更
  var target = document.getElementById("hero_image_background");//背景画像の変更
  target.className = "hero_image_la";
  console.log('SR/陸軍/002/パッツィ');

  var elem = document.getElementById('hero_profile_name').innerHTML = "<p>パッツィ</p>";//名前の変更
  var elem = document.getElementById('hero_profile_skill_name').innerHTML = "<p>FMJ弾</p>";//名前の変更
  var target = document.getElementById("hero_profile_skill_detail");//英雄スキル詳細の枠のclassを変更(灰白→白)
  target.className = "hero_profile_skill_detail_b";
  var elem = document.getElementById('hero_profile_skill_detail').innerHTML = "<p>★5・Lv120時の性能</p><ul id='hero_profile_skill_detail_5'></ul>";//レベルが上がるごとにスキルの性能が変わらない用のレイアウト
  //var elem = document.getElementById('hero_profile_skill_detail_1').innerHTML = "<li><p>味方陸軍が侵攻時に貫通弾（回避不可）を発射</p></li>";//★1時の英雄のスキル効果
  var elem = document.getElementById('hero_profile_skill_detail_5').innerHTML = "<li><p>味方陸軍が侵攻時に貫通弾（回避不可）を発射</p></li>";//★5時の英雄のスキル効果
};
