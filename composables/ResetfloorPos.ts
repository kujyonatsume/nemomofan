export function ResetfloorPos() {
    var ptop = $('#tab-bar').outerHeight(true)
    if (ptop) {
      $('#main').css('padding-top', (ptop + 10) + 'px')
      ptop = $('#main').outerHeight(true)!
      var _floor = $('#floor').css('top', `${Math.max(ptop, window.innerHeight)}px`)
      if (ptop < window.innerHeight) _floor.css('margin-top', '-34px')
    }
  }