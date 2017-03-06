import util from './util';

var global = {
  nowDate:function () {
    let now = new Date();
    let defaultDate = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate();
    let urlDate = util.getURLParams.call(this);
    return urlDate.nowDate || defaultDate;
  }
}

window.global = global;

export default global;
