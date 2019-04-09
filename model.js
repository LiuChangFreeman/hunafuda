/*
maximum combo name size: 8
maximum combo size: 6
*/
INIT_CARD_NUM_HAND = 10;
INIT_CARD_NUM_POOL = 8;
POOL_CAPACITY = INIT_CARD_NUM_POOL + 2;
BONUS_THRESHOLDS = [250, 180, 110];
MAX_SP_NUM = 15;

DEFAULT_CHAR_POEM = "";
COMMON_CHAR_LIST = [
  [
    ["1", "北京演唱会", 4, "春", ""],
    ["2", "超新星全运会开幕式", 4, "夏", ""],
    ["3", "广州演唱会", 4, "秋", ""],
    ["4", "心动的信号", 4, "冬", ""],
    ["5", "不负青春", 4, "春", ""],
    ["6", "快乐大本营", 4, "夏", ""],
    ["7", "月亮警察", 4, "秋", ""],
    ["8", "尼龙杂志", 4, "冬", ""],
    ["9", "B站", 4, "春", ""],
    ["10", "撞", 4, "夏", ""],
    ["11", "冲鸭冲鸭", 4, "秋", ""],
    ["12", "毒液前来", 4, "冬", ""],
    ["13", "知乎", 4, "春", ""],
    ["14", "月芽", 4, "夏", ""],
    ["15", "口红王子", 4, "秋", ""],
    ["16", "哈哈农夫", 4, "冬", ""],
    ["17", "送一百位女孩回家", 4, "春", ""],
    ["18", "狗剩", 4, "夏", ""],
    ["19", "NGA", 4, "秋", ""],
    ["20", "达拉崩吧", 4, "冬", ""],
    ["21", "LOL", 4, "春", ""],
    ["22", "贴吧", 4, "夏", ""],
    ["23", "全部都是你", 4, "秋", ""],
    ["24", "泡泡机", 4, "冬", ""],
    ["25", "村民", 4, "春", ""]
  ],
  [
    ["26", "跟着我一起", 4, "夏", ""],
    ["27", "Light", 4, "秋", ""],
    ["28", "麻烦少女", 4, "冬", ""],
    ["29", "庆祝", 4, "春", ""],
    ["30", "即刻电音", 4, "夏", ""],
    ["31", "微博", 4, "秋", ""],
    ["32", "Lap Tap Love", 4, "冬", ""],
    ["33", "横冲直撞20岁", 4, "春", ""],
    ["34", "101个愿望", 4, "夏", ""],
    ["35", "虎扑", 4, "秋", ""],
    ["36", "辣酱", 4, "冬", ""],
    ["37", "招财进宝", 4, "春", ""],
    ["38", "明日之子", 4, "夏", ""],
    ["39", "卡路里", 4, "秋", ""],
    ["40", "LOL7周年盛典", 4, "冬", ""],
    ["41", "上海演唱会", 4, "春", ""],
    ["42", "超新星全运会", 4, "夏", ""],
    ["43", "念慈庵软糖", 4, "秋", ""],
    ["44", "火箭少女研究所", 4, "冬", ""],
    ["45", "创造101", 4, "春", ""],
    ["46", "毕业歌会", 4, "夏", ""],
    ["47", "仙女棒", 4, "秋", ""],
    ["48", "跨年演唱会", 4, "冬", ""],
    ["49", "生而为赢", 4, "春", ""],
    ["50", "白米饭", 4, "夏", ""]
  ]
];
COMBO_LIST  = [
  [["麻烦少女", "不负青春"], "含笑之泪", 10, "cfy", 2351.02],
  [["撞", "冲鸭冲鸭"], "最萌双马尾", 10, "cfy", 2351.02],
  [["毒液前来", "月亮警察"], "月亮警察拯救你", 10, "cfy", 2351.02],
  [["麻烦少女", "Light"], "少女两面", 10, "cfy", 2351.02],
  [["生而为赢", "招财进宝"], "我要学rap", 10, "cfy", 2351.02],
  [["生而为赢", "卡路里"], "红色旗帜", 10, "cfy", 2351.02],
  [["撞", "卡路里"], "注入灵魂", 10, "cfy", 2351.02],
  [["跟着我一起", "冲鸭冲鸭", "招财进宝"], "儿歌天后", 20, "cfy", 2351.02],
  [["全部都是你", "麻烦少女", "不负青春"], "创期公演", 20, "cfy", 2351.02],
  [["达拉崩吧", "Lap Tap Love"], "二次元", 10, "cfy", 2351.02],
  [["全部都是你", "麻烦少女", "不负青春", "Lap Tap Love"], "创造101", 40, "cfy", 2351.02],
  [["撞", "生而为赢", "Light", "月亮警察"], "火少首专", 40, "cfy", 2351.02],
  [["Light", "不负青春"], "轻歌慢曲", 10, "cfy", 2351.02],
  [["撞", "生而为赢"], "炫酷女孩", 10, "cfy", 2351.02],
  [["101个愿望", "毒液前来"], "小分队", 10, "cfy", 2351.02],
  [["毒液前来", "卡路里", "招财进宝"], "电影推广", 20, "cfy", 2351.02],
  [["Light", "101个愿望"], "少女心愿", 10, "cfy", 2351.02],
  [["Light", "Lap Tap Love"], "字母之名", 10, "cfy", 2351.02],
  [["庆祝", "Lap Tap Love"], "有始有终", 10, "cfy", 2351.02],
  [["卡路里", "不负青春"], "成名之作", 10, "cfy", 2351.02],
  [["全部都是你", "Lap Tap Love", "庆祝"], "轻车熟路", 20, "cfy", 2351.02],
  [["不负青春", "月亮警察"], "黑衣天使", 10, "cfy", 2351.02],
  [["全部都是你", "麻烦少女", "不负青春", "Lap Tap Love", "创造101"], "人生艰难", 80, "cfy", 2351.02],
  [["明日之子", "即刻电音"], "助战嘉宾", 10, "cfy", 2351.02],
  [["跨年演唱会", "毕业歌会"], "火少首秀", 10, "cfy", 2351.02],
  [["超新星全运会开幕式", "LOL7周年盛典"], "文体两开花", 10, "cfy", 2351.02],
  [["超新星全运会开幕式", "超新星全运会"], "超新星全运会", 10, "cfy", 2351.02],
  [["快乐大本营", "哈哈农夫"], "芒果新秀", 10, "cfy", 2351.02],
  [["快乐大本营", "口红王子"], "合作何老师", 10, "cfy", 2351.02],
  [["横冲直撞20岁", "哈哈农夫"], "厨房高手", 10, "cfy", 2351.02],
  [["送一百位女孩回家", "口红王子"], "综艺新星", 10, "cfy", 2351.02],
  [["超新星全运会", "LOL7周年盛典"], "大显身手", 10, "cfy", 2351.02],
  [["跨年演唱会", "超新星全运会开幕式"], "Light", 10, "cfy", 2351.02],
  [["跨年演唱会", "快乐大本营"], "卡路里", 10, "cfy", 2351.02],
  [["心动的信号", "哈哈农夫"], "常驻综艺", 10, "cfy", 2351.02],
  [["心动的信号", "口红王子"], "爱情观察员", 10, "cfy", 2351.02],
  [["横冲直撞20岁", "超新星全运会"], "燃烧我的团魂", 10, "cfy", 2351.02],
  [["送一百位女孩回家", "哈哈农夫"], "追忆往昔", 10, "cfy", 2351.02],
  [["创造101", "明日之子"], "我知你心", 10, "cfy", 2351.02],
  [["毕业歌会", "跨年演唱会"], "瑕疵担当", 10, "cfy", 2351.02],
  [["跟着我一起", "冲鸭冲鸭"], "跟着我冲鸭冲鸭", 10, "cfy", 2351.02],
  [["火箭少女研究所", "横冲直撞20岁"], "火少团综", 10, "cfy", 2351.02],
  [["横冲直撞20岁", "火箭少女研究所", "即刻电音", "明日之子", "超新星全运会"], "火箭少女101", 80, "cfy", 2351.02],
  [["广州演唱会", "101个愿望"], "甜蜜之吻", 10, "cfy", 2351.02],
  [["北京演唱会", "上海演唱会", "广州演唱会"], "火箭少女演唱会", 20, "cfy", 2351.02],
  [["上海演唱会", "村民"], "军训式应援", 10, "cfy", 2351.02],
  [["北京演唱会", "仙女棒"], "两米八仙女棒", 10, "cfy", 2351.02],
  [["北京演唱会", "贴吧"], "神图问世", 10, "cfy", 2351.02],
  [["北京演唱会", "上海演唱会", "广州演唱会", "达拉崩吧"], "公主奇遇记", 40, "cfy", 2351.02],
  [["北京演唱会", "泡泡机"], "成为偶像", 10, "cfy", 2351.02],
  [["白米饭", "辣酱"], "永恒美食", 10, "cfy", 2351.02],
  [["不负青春", "村民", "月芽"], "辛酸往事", 20, "cfy", 2351.02],
  [["达拉崩吧", "仙女棒"], "化身公主", 10, "cfy", 2351.02],
  [["村民", "月芽"], "月芽没有姓名", 10, "cfy", 2351.02],
  [["LOL", "LOL7周年盛典"], "电竞杨克丝", 10, "cfy", 2351.02],
  [["哈哈农夫", "狗剩"], "曼掌奇宠", 10, "cfy", 2351.02],
  [["横冲直撞20岁", "白米饭"], "最爱白米饭", 10, "cfy", 2351.02],
  [["横冲直撞20岁", "辣酱"], "嗜辣如命", 10, "cfy", 2351.02],
  [["跟着我一起", "念慈庵软糖"], "良心药厂", 10, "cfy", 2351.02],
  [["尼龙杂志", "贴吧"], "一天哥哥", 10, "cfy", 2351.02],
  [["B站", "撞"], "那个女人", 10, "cfy", 2351.02],
  [["B站", "卡路里"], "鬼畜新星", 10, "cfy", 2351.02],
  [["知乎", "NGA"], "上门女婿", 10, "cfy", 2351.02],
  [["知乎", "贴吧", "微博"], "“超越杯”编程大赛", 20, "cfy", 2351.02],
  [["知乎", "虎扑"], "“超越杯”辩论赛", 10, "cfy", 2351.02],
  [["贴吧", "村民"], "杨超越过的还好吗", 10, "cfy", 2351.02],
  [["虎扑", "村民"], "别问，问就杨超越", 10, "cfy", 2351.02],
  [["知乎", "村民", "月芽"], "能言善辩", 20, "cfy", 2351.02],
  [["B站", "村民", "月芽"], "聚众吸花", 20, "cfy", 2351.02],
  [["微博", "月芽"], "秃头女工", 10, "cfy", 2351.02],
  [["微博", "B站", "知乎", "贴吧", "虎扑"], "保护我方杨超越", 80, "cfy", 2351.02]
  //[char name list], comboname, score, comboid, audio duration(ms)
];

function getRandom(max){
  //returns random in [0, max-1]
  return Math.floor((Math.random()*max));
}

class Character {
  constructor(id, name, score, season, poem) {
    this.id = id;
    this.name = name;
    this.score = score;
    this.season = season;
    this.poem = poem;
    this.owner = null;//player
    this.disabled = false;
    this.swapped = false;
    this.noswap = false;
  }
  isSpecial() {
    return false;
  }
  getSpecial(specials){
    // special cards won't be upgraded once more
    // note: it does not only get the special, it does everything of an upgrade except assigning the new char
    if(this.isSpecial()) return this;
    if(specials == null) return this;
    var sps = specials.characters;
    for(var i=0; i<sps.length; i++)
      if(sps[i].name == this.name){
        var sp = sps[i];
        sp.inheritFrom(this);
        sps.splice(i, 1);
        specials.view.deleteSpecial(sp);
        return sp;
      }
    return this;
  }
  setOwner(owner) {
    this.owner = owner;
  }
  getPortrait() {
    return "url('img/" + this.id + ".jpg')";
  }
  getDesc() {
    var msg = this.id + "：" + this.name + "，" + this.score + "分，" + this.season + "季, 归属玩家" + (this.owner == null ? "-" : this.owner.id) + "\n";
    return msg;
  }
  performTricks(type, para) {return null;}
  getTrick(type){return null;}
  enabled(){return false;}//common chars has no tricks
  recalculate(player){}
}
class SpecialCharacter extends Character {
  constructor(id, name, nameSuffix, score, season, poem) {
    super(id, name, score, season, poem);
    this.nameSuffix = nameSuffix;
    this.tricks = [];
  }
  inheritFrom(src){
    //inherit game status from its common card
    this.owner = src.owner;
    this.disabled = src.disabled;
    this.swapped = src.swapped;
    src.card.setChar(this);
    this.card = src.card;
  }
  enabled(){
    if (this.disabled || (this.swapped && this.noswap))
      return false;
    return true;
  }
  addTrick(trick) {
    this.tricks.push(trick);
    trick.setOwner(this);
    var noswaps = "SwapTrick,CopyTrick";
    if(noswaps.includes(trick.constructor.name))
      this.noswap = true;
  }
  isSpecial() {
    return true;
  }
  getCommonChar(){
    var repo = model.commonRepository.characters;
    for(var i=0; i<repo.length; i++)
      if(repo[i].name == this.name)
        return repo[i];
    return null;
  }
  setNoswap(){
    this.noswap = true;
  }
  performTricks(type, para) {
    //perform a trick of <type>, only performs one trick
    if(!this.enabled())
      return null;
    for(var i=0; i<this.tricks.length; i++)
      if(this.tricks[i].enabled() && type.includes(this.tricks[i].constructor.name))
        return this.tricks[i].performTrick(para);
    return null;
  }
  getTrick(type) {
    //returns the first enabled trick of <type>
    // if type is null, then returns any enabled trick
    if(!this.enabled())
      return null;
    for(var i=0; i<this.tricks.length; i++){
      if(this.tricks[i].enabled()){
        if(type == null)
          return this.tricks[i];
        else {
          if(type.includes(this.tricks[i].constructor.name))
            return this.tricks[i];
        }
      }
    }
    return null;
  }
  recalculate(player){
    if(!this.enabled()) return;
    for(var i=0; i<this.tricks.length; i++){
      if(this.tricks[i].enabled())
        this.tricks[i].recalculate(player);
    }
  }
  getDesc() {
    var msg = super.getDesc();
    return msg;
  }
}
class Deck {
  constructor() {
    this.characters = [];
    this.view = null;
  }
  init(size, commons, specials) {
    for (var i = 0; i < size; i++)
      this.addChar(commons.removeRandom());
    for (var i = 0, idx = 0; i < size; i++){
      var char = this.characters[idx];
      var upg = char.getSpecial(specials);
      if(upg != char){
        this.characters.splice(idx, 1);
        this.characters.push(upg);
        this.view.toSpecial(char, upg);
      }
      else
        idx ++;
    }
  }
  getSize(){
    return this.characters.length;
  }
  addChar(char) {
    this.characters.push(char);
    if(this.view != null)
      this.view.addChar(char);
    return char;
  }
  addRandom(repo, specials) {
    if (repo.characters.length == 0) {
      console.trace();
      alert("Empty deck!");
      return null;
    }
    var char = repo.removeRandom();
    if(specials != null)
      char = char.getSpecial(specials);
    this.addChar(char);
    return char;
  }
  getMatch(char) {
    var s = char.season;

    /////////!!!!!!!!!!!!!!!!!!!!!Modified for testingggggggg!!!!!!!!!!!!!!!!!
    for (var i = 0; i < this.getSize(); i++)
    //for (var i = this.getSize()-1; i >= 0; i--)
      if (this.characters[i].season == s)
        return this.characters[i];
    return null;
  }
  clear(){
    this.characters.length = 0;
    if(this.view != null)
      this.view.clear();
  }
  removeRandom() {
    var i = getRandom(this.characters.length);
    var char = this.characters[i];
    this.characters.splice(i, 1);
    return char;
  }
  removeChar(char) {
    var target = this.characters.indexOf(char);
    if(target < 0) return null;
    this.characters.splice(target, 1);
    return char;
  }
  removeCharByID(id) {
    var target = -1,
      clen = this.characters.length;
    for (var i = 0; i < clen; i++) {
      if (this.characters[i].id == id) {
        target = i;
        break;
      }
    }
    if (target < 0) return null;
    var char = this.characters[target];
    this.characters.splice(target, 1);
    return char;
  }
  getChar(id) {
    var clen = this.characters.length;
    for (var i = 0; i < clen; i++)
      if (this.characters[i].id == id)
        return this.characters[i];
    return null;
  }
  getDesc() {
    var msg = "",
      clen = this.characters.length;
    for (var i = 0; i < clen; i++) {
      msg += this.characters[i].getDesc();
    }
    return msg;
  }
}
class CommonRepository extends Deck {
  constructor() {super();}
  init(pack){
    for(var p = 0; p < 2; p++){
      var ids = COMMON_CHAR_LIST[pack[p]-1];
      var len = ids.length;

      for (var i = 0; i < len; i++) {
        var char = new Character(ids[i][0], ids[i][1], ids[i][2], ids[i][3], ids[i][4]);
        char.card = new Card(char);
        this.addChar(char);
      }
    }
  }
}
class SpecialRepository extends Deck {
  constructor() {super();}
  init(ids){
    for(var i=0; i<ids.length; i++) {
      var char = spmanager.createSpecial(ids[i]);
      char.card = new Card(char);
      this.addChar(char);
    }
  }
}
class TabledCombo{
  constructor(char, index){
    this.characters = [char];
    this.index = index;
    this.fullScore = this.getBaseScore;
  }
  addChar(char){
    this.characters.push(char);
  }
  getCompleteSize(){
    return COMBO_LIST[this.index][0].length;
  }
  getChar(name){
    for(var i=0; i<this.characters.length; i++)
      if(this.characters[i].name == name)
        return this.characters[i];
    return null;
  }
  getSize(){
    return this.characters.length;
  }
  getName(){
    return COMBO_LIST[this.index][1];
  }
  getId(){
    return COMBO_LIST[this.index][3];
  }
  getAudioDuration(){
    return COMBO_LIST[this.index][4];
  }
  calculateFullScore(){
    this.fullScore = COMBO_LIST[this.index][2];
    for(var i=0; i<this.getSize(); i++){
      var res = this.characters[i].performTricks("ComboTrick", this);
      if(res != null)
        this.fullScore += res;
    }
    return this.fullScore;
  }
  getFullScore(){
    return this.fullScore;
  }
  getBaseScore(){
    return COMBO_LIST[this.index][2];
  }
  isComplete(){
    return this.getSize()==COMBO_LIST[this.index][0].length;
  }
  getCompleteList(){
    return COMBO_LIST[this.index][0];
  }
  containsChar(char){
    for(var i=0; i<this.characters.length; i++)
      if(this.characters[i] == char)
        return true;
    return false;
  }
  removeChar(char){
    for(var i=0; i<this.characters.length; i++)
      if(this.characters[i] == char){
        this.characters.splice(i, 1);
        return char;
      }
    return null;
  }
  getDesc(){
    var msg = COMBO_LIST[this.index][1];
    // + " : " + COMBO_LIST[this.index][2]
    /* + "\n";
    for(var i=0; i<this.getSize(); i++)
      msg += "[" + this.characters[i].name + "]\n";
    */
    return msg;
  }
}
class Combos{
    constructor(){
      //data format:
      //[[[char_name1, char_name2, ...], combo_name, score], ...]
    }
    getSize(){
      return COMBO_LIST.length;
    }
    getTeamMates(char){
      var mates = [];
      for(var i=0; i<COMBO_LIST.length; i++){
        var names = COMBO_LIST[i][0];
        if(names.includes(char.name)){
          for(var j=0; j<names.length; j++) {
              if(names[j] != char.name && !mates.includes(names[j]))
                mates.push(names[j]);
          }
        }
      }
      return mates;
    }
    getNewCombos(player, char){
      //update player: partialCombos. completeCombos, score
      //return type:
      //completecombocount
      //the updated bombos are at the beginning of partialCombos, completeCombos
      var chars = player.table;
      var pcombos = player.partialCombos;
      var nccount = 0;
      for(var i=0; i<this.getSize(); i++) {
        var combo = COMBO_LIST[i];
        for(var j=0; j<combo[0].length; j++) {
          if(char.name == combo[0][j]) {
            //combo contains char, find the pcombo
            //log(combo[1]);
            var pcombo = null;
            for(var k=0; k<pcombos.length; k++){
                if(pcombos[k].index == i) {
                  pcombo = pcombos[k];
                  pcombo.addChar(char);
                  if(pcombo.isComplete()){
                    //found a new complete combo, move it completeCombos
                    nccount ++;
                    pcombos.splice(k, 1);
                    player.completeCombos.unshift(pcombo);
                    player.score += pcombo.calculateFullScore();
                  }
                  else{
                    //the combo is not complete, move it to the partiallist cardfront
                    pcombos.splice(k, 1);
                    pcombos.unshift(pcombo);
                  }
                  break;
                }
            }
            if(pcombo == null){
              //find a new combo, must be partial
              let pcombo = new TabledCombo(char, i);
              player.partialCombos.unshift(pcombo);
            }
          }
        }
      }
      return nccount;
    }
    evaluateChar(char, partialCombos, oppoPartialCombos, considerOppo){
      /*
         considerOppo: weather or not to sabotage the opponent's potential combos
         returns the weight of char
         weight: base score + combo weight
           for each mathing combo:
           when opponent doesn't have the combo:
            combo weight += (combo score)/(char # to be obtained) (including this char)
           when opponent has part of the combo:
             not consider opponent:
               combo weight += 0, because u cannot complete this combo
             consider opponent:
                when u have part of the combo:
                  combo weight += 0, because neither of u can complete this combo
                when u don't have this combo:
                  combo weight += (combo score)/(char # to be obtained by opponent)
      */
      var weight = char.score;
      var len = COMBO_LIST.length;
      var reside = new Array(len).fill(0);
      var oppoReside = new Array(len).fill(0);
      for(var i=0; i<partialCombos.length; i++)
        reside[partialCombos[i].index] = partialCombos[i].getSize();
      for(var i=0; i<oppoPartialCombos.length; i++)
        oppoReside[oppoPartialCombos[i].index] = oppoPartialCombos[i].getSize();
      for(var i=0; i<len; i++){
        var combo = COMBO_LIST[i];
        var size = combo[0].length;
        for(var j=0; j<size; j++)
          if(char.name == combo[0][j]){
          // a matching combo
            if(oppoReside[i] == 0)
              // opponent has none of the combo chars
                weight += combo[2]/(size - reside[i]);
            else {
              //opponent has part of the combo
              if(considerOppo && reside[i]==0)
                weight += combo[2]/(size - oppoReside[i] + 1)*0.9;
            }
          }
      }
      return weight;
    }
}
class Player {
  constructor(id) {
    this.id = id;
    this.hand = new Deck();
    this.table = new Deck();
    this.specials = new SpecialRepository();
    this.score = 0;
    this.matchable = true;
    this.partialCombos = [];
    this.completeCombos = [];
    this.specialIDs = [];
  }
  clear(){
    this.table.clear();
    this.specials.clear();
    this.hand.clear();
    this.matchable = true;
    this.partialCombos.length = 0;
    this.completeCombos.length = 0;
    this.score = 0;
  }
  init(){
    this.specials.init(this.specialIDs);
    this.hand.init(INIT_CARD_NUM_HAND, model.commonRepository, this.specials);
  }
  addTableChar(char) {
    //add a char to player's table
    //return: [char score increment, combo count] (weird I know that)
    var prescore = this.score;
    this.table.addChar(char);
    char.setOwner(this);
    var oppo = this.id==0?model.player1:model.player0;
    //am i banned?
    for(var i=0; i<oppo.table.getSize(); i++){
      oppo.table.characters[i].performTricks("NamedBanTrick", char);
    }
    //do i ban someone?
    var trick = char.getTrick("NamedBanTrick");
    if(trick != null)
      for(var i=0; i<oppo.table.getSize(); i++){
        if(trick.performTrick(oppo.table.characters[i]))
          oppo.recalculate(true);
      }
    //do i benefit (from) others?
    for(var i=0; i<this.table.getSize(); i++){
      this.table.characters[i].performTricks("CharTrick", this);
    }
    this.score += char.score;
    var charinc = this.score - prescore;
    var comboCount = combos.getNewCombos(this, char);
    return [charinc, comboCount];
  }
  removeTableChar(char){
    //remove a char from player's table
    char.setOwner(null);
    var chars = this.table.characters;
    for(var i=0; i<chars.length; i++)
      if(chars[i] == char){
        chars.splice(i, 1);
        break;
      }
    var size = this.partialCombos.length;
    for(var i=0, idx = 0; i<size; i++)
      if(this.partialCombos[idx].removeChar(char) != null && this.partialCombos[idx].getSize() == 0)
          this.partialCombos.splice(idx, 1);
      else
        idx ++;
    size = this.completeCombos.length;
    for(var i=0, idx = 0; i<size; i++)
      if(this.completeCombos[idx].removeChar(char) != null){
        this.partialCombos.unshift(this.completeCombos[idx]);
        this.completeCombos.splice(idx, 1);
      }
      else
        idx ++;
    this.recalculate(false);
    return char;
  }
  recalculate(animechange){
    //calculate score for the player
    var preScore = this.score;
    this.score = 0;
    //base score & special card bonus
    var chars = this.table.characters;
    for(var i=0; i<chars.length; i++){
      this.score += chars[i].score;
      chars[i].recalculate(this); //recalculate char bonus
    }
    for(var i=0; i<this.completeCombos.length; i++)
      this.score += this.completeCombos[i].calculateFullScore();
    if(preScore != this.score && animechange)
      messenger.animeScoreInc(this.id, preScore, this.score - preScore);
  }
  getDesc() {
    var msg = "玩家" + this.id;
    msg += "\n手牌：\n" + this.hand.getDesc();
    msg += "桌面：\n" + this.table.getDesc();
    msg += "特殊牌：\n" + this.specials.getDesc();
    return msg;
  }
}
class Model {
  constructor() {
    this.commonRepository = new CommonRepository();
    this.player0 = new Player(0);
    this.player1 = new Player(1);
    this.pool = new Deck();
    this.activeChar = null;
  }
  setPack(p1 ,p2){
    this.pack = [p1, p2];
  }
  init(){
    model.commonRepository.init(this.pack);
    model.player1.init();
    model.player0.init();
    this.pool.init(INIT_CARD_NUM_POOL, this.commonRepository);
    view.init();
    model.checkMatch1();
  }
  clear(){
    model.player1.clear();
    model.player0.clear();
    model.pool.clear();
    model.commonRepository.clear();
    model.activeChar = null;
    view.clear();
  }
  discard(player, char){
    if(char == null)
      char = player.hand.removeRandom();
    else
      player.hand.removeChar(char);
    model.pool.addChar(char);
    var newChar = player.hand.addRandom(model.commonRepository, player.specials);
    console.log(player.id + "号放弃 "+ char.name + " 获得 " + newChar.name);
  }
  overSize(){
    return this.pool.getSize() >= POOL_CAPACITY;
  }
  overSeason(){
    //returns true:
    //if >= 6 cards of a certain season in pool and >= 3 cards of other seasons in pool+repository
    var count = 0;
    var chars = this.pool.characters;
    var seasons = ["春", "夏", "秋", "冬"];
    for(var i=0; i<seasons.length; i++){
      count = 0;
      for(var j=0; j<chars.length; j++)
        if(chars[j].season == seasons[i])
        {
          count ++;
          if(count == 6)
          {
            var others = 0;
            for(var k=0; k<chars.length; k++)
              if(chars[k].season != seasons[i])
                others ++;
            for(var k=0; k<model.commonRepository.getSize(); k++)
              if(model.commonRepository.characters[k].season != seasons[i]) {
                others ++;
                if(others > 2)
                  return true;
              }
            return false;
          }
        }
    }
    return false;
  }
  redeal(){
    for(var i=0; i<model.pool.getSize(); i++)
      model.commonRepository.addChar(model.pool.characters[i]);
    model.pool.characters.length = 0;
    model.pool.init(INIT_CARD_NUM_POOL, model.commonRepository);
  }
  checkMatch1(){
    while(model.overSeason())
      model.redeal();
    var matchable = model.hasMatch(model.player1);
    if(matchable) {
      if(!model.player1.matchable){
        model.player1.matchable = true;
        view.checkMatch1();
      }
    }
    else {
      if(model.overSize()){
        model.redeal();
        model.checkMatch1();
      }
      else {
        if(model.player1.matchable){
          model.player1.matchable = false;
          view.checkMatch1();
        }
      }
    }
  }
  hasMatch(player){
    var match = this.pickLeft(player);
    return match != null;
  }
  dealOne(player) {
    var char = obtainVector.performDeal();
    if(char == null)
      char = model.pool.addRandom(model.commonRepository);
    else {
      model.commonRepository.removeChar(char);
      model.pool.addChar(char);
    }
    view.dealOne(char);
  }
  pickLeft(player){
      var poolChars = model.pool.characters;
      var poolChar = null;
      var handChar = null;
      for (var i = 0; i < poolChars.length; i++) {
        handChar = player.hand.getMatch(poolChars[i]);
        if (handChar != null) {
          poolChar = poolChars[i];
          return [handChar, poolChar];
        }
      }
      return null;
  }
  pickOptimal(player, oppo, considerOppo){
    //return the optimal [handchar, poolchar] according to combos.evaluateChar()
    var poolChars = model.pool.characters;
    var poolChar = null, handChar = null;
    var maxWeight = 0, optimalPoolChar = null, optimalHandChar = null;
    for (var i = 0; i < poolChars.length; i++) {
      handChar = player.hand.getMatch(poolChars[i]);
      if (handChar != null) {
        poolChar = poolChars[i];
        var weight = combos.evaluateChar(poolChar, player.partialCombos, oppo.partialCombos, considerOppo);
        if(weight > maxWeight) {
          maxWeight = weight;
          optimalPoolChar = poolChar;
          optimalHandChar = handChar;
        }
      }
    }
    if(optimalPoolChar != null)
      return [optimalHandChar, optimalPoolChar];
    return null;
  }
  discardOptimal(player, oppo, considerOppo){
    var minWeight = 9999;
    var pick = null;
    var chars = player.hand.characters;
    for(var i=0; i<chars.length; i++) {
      var weight = combos.evaluateChar(chars[i], player.partialCombos, oppo.partialCombos, considerOppo);
      if(weight < minWeight) {
        minWeight = weight;
        pick = chars[i];
      }
    }
    return pick;
  }
  aiSelectObtain() {
    //returns an array [hand pick, pool pick]
    switch (AI_LEVEL) {
      case 1:
        return model.pickLeft(this.player0);
        break;
      case 2:
        return model.pickOptimal(this.player0, this.player1, false);
        break;
      case 3:
        return model.pickOptimal(this.player0, this.player1, true);
        break;
      default: log("Invalid AI　Level!!!!!!!!");
        return null;
    }
  }
  aiSelectCopy(trick){
      var cans = [];
      var chars = model.player1.table.characters;
      for(var i=0; i<chars.length; i++)
        if(trick.isValidTarget(chars[i]))
          cans.push(chars[i]);
      var size = cans.length;
      if(size == 0) return null;
      return cans[getRandom(size)];
  }
  aiSelectSwap(){
    var size = model.player1.table.getSize();
    if(size == 0) return null;
    return model.player1.table.characters[getRandom(size)];
  }
  aiSelectBan(trick){
    var cans = [];
    var chars = model.player1.table.characters;
    for(var i=0; i<chars.length; i++)
      if(trick.isValidTarget(chars[i]))
        cans.push(chars[i]);
    var size = cans.length;
    if(size == 0) return null;
    return cans[getRandom(size)];
  }
  aiSelectDiscard(){
    switch (AI_LEVEL) {
      case 1:
        return null;
      case 2:
        return this.discardOptimal(model.player0, this.player1, false);
      case 3:
        return this.discardOptimal(model.player0, this.player1, true);
      default: log("Invalid AI　Level!!!!!!!!");
        return null;
    }
  }
  obtain() {
  // controller: pc is upgraded by player.specials and is removed from pool
  // controller: hs, ps are both upgraded by player.specials and are removed from oppo's table
  // hc/pc are specialchars if hs/ps are not null
    var player = obtainVector.player;
    var oppo = player.id==0? model.player1:model.player0;

    console.log(player.id+"号：入手 " + obtainVector.playerTableChars[0].name + " 和 " + obtainVector.playerTableChars[1].name);
    var ac0 = player.addTableChar(obtainVector.playerTableChars[0]);
    var ac1 = player.addTableChar(obtainVector.playerTableChars[1]);
    obtainVector.charScoreInc = ac0[0] + ac1[0];
    obtainVector.comboCount =  ac0[1] + ac1[1];
    controller.handleBans();
  }
  activate(char) {//player1 set a card active
    if (this.activeChar == null || this.activeChar != char) {
      view.activate(this.activeChar, char);
      this.activeChar = char;
    } else {
      view.activate(this.activeChar, null);
      this.activeChar = null;
    }
  }
  getDesc() {
    var msg = this.player0.getDesc();
    msg += this.player1.getDesc();
    msg += "卡池\n" + this.pool.getDesc();
    return msg;
  }
}
