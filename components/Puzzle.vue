<script setup lang="ts">
var canva: HTMLCanvasElement
var { src, height, width, size, percent } = defineProps({
  src: { type: String, required: true },
  height: { type: Number },
  width: { type: Number },
  size: { type: Number, default: 100 },
  percent: { type: Number, default: 1 }
})
var data: ClipData[] | undefined = undefined
var list: ClipData[][] = [];
var img: HTMLImageElement
var ctx2D: CanvasRenderingContext2D
var col: number
var row: number
var dsize = size * percent
var border: number
var _border: number
var list_length: number
var clear = ref(false)
var timer: NodeJS.Timer
var time = ref('0秒')

class ClipData {
  public readonly value: number
  readonly row: number
  readonly col: number
  top: number
  left: number
  posX: number = 0
  posY: number = 0
  constructor(data: ClipData)
  constructor(value: number, col: number, row: number)
  constructor(value: number | ClipData, col: number = 0, row: number = 0) {
    if (typeof value == 'number') {
      this.row = Math.floor(value / col)
      this.col = value % col
      if (this.row >= row - _border || this.col >= col - _border) this.value = -1
      else this.value = this.row * col + this.col
      this.top = (this.row + border) * dsize;
      this.left = (this.col + border) * dsize;
    }
    else {
      this.value = value.value
      this.row = value.row
      this.col = value.col
      this.top = value.top
      this.left = value.left
      this.posX = value.posX
      this.posY = value.posY
    }
  }
}
function drawRandom() {
  var range = (border - 1) * dsize
  for (const item of list) {
    for (const data of item) {
      clipRandom(data, range)

    }
  }
}
function clipRandom(data: ClipData, range: number) {
  switch (data.value % 4) {
    case 0:
      data.top = Math.floor(Math.random() * range)
      data.left = range + Math.floor(Math.random() * (canva.width - range * 2 - dsize))
      break;
    case 1:
      data.top = Math.floor(Math.random() * (canva.height - dsize))
      data.left = Math.floor(Math.random() * range)
      break;
    case 2:
      data.top = canva.height - border * dsize + Math.floor(Math.random() * range)
      data.left = range + Math.floor(Math.random() * (canva.width - range * 2 - dsize))
      break;
    case 3:
      data.top = Math.floor(Math.random() * (canva.height - dsize))
      data.left = canva.width - border * dsize + Math.floor(Math.random() * range)
      break;
  }
  return data
}
function drawImage() {
  ctx2D.clearRect(0, 0, col * dsize, row * dsize);
  var point = dsize * border
  ctx2D.fillStyle = '#888'
  ctx2D.fillRect(point, point, (col - _border) * dsize, (row - _border) * dsize)
  for (const item of list) {
    for (const data of item) {
      DrawImage(data.col, data.row, data.left, data.top)
    }
  }
}
function DrawImage(colPos: number, rowPos: number, left: number, top: number) {
  ctx2D.drawImage(img, colPos * size, rowPos * size, size, size, left, top, dsize, dsize);
}
function getPos(e: MouseEvent) {
  var bound = canva.getBoundingClientRect(); //獲取畫布邊界
  var obj = {
    PosX: e.pageX - window.scrollX - bound.left,
    PosY: e.pageY - window.scrollY - bound.top
  }
  return obj
}
onMounted(() => {
  canva = document.getElementById('Puzzle') as HTMLCanvasElement
  ctx2D = canva.getContext('2d')!
  var timg = new Image(width, height)
  timg.src = src
  timg.onload = (e) => {
    img = new Image(
      Math.floor((width ?? timg.naturalWidth) / size) * size,
      Math.floor((height ?? timg.naturalHeight) / size) * size
    )
    img.src = src

    img.onload = (e) => { //當圖片加載完畢時

      row = Math.floor(img.height / size)
      col = Math.floor(img.width / size)
      border = Math.max(Math.floor(Math.max(row, col) / 4), 1)
      _border = border * 2
      row += _border
      col += _border
      canva.width = col * dsize
      canva.height = row * dsize

      list = genlist(row, col).filter(x => x[0].value > -1)
      
      if (window.localStorage.getItem('win') != 'true') {
        var record = window.localStorage.getItem('record')
        if (!record) {
          drawRandom()
          window.localStorage.setItem('record', JSON.stringify(list))
        } else {
          var temp = JSON.parse(record) as ClipData[][]
          list = temp.map(x => x.map(data => new ClipData(data)))
        }
      }
      list_length = list.length
      drawImage();
    }
  }
  if (window.localStorage.getItem('win')) return
  canva.onmouseup = (e) => {
    if (!data) return;
    var items = data
    var { PosX, PosY } = getPos(e)
    var left = Math.floor(PosX / dsize)
    var top = Math.floor(PosY / dsize)
    var inmap = left >= _border / 2 &&
      top >= _border / 2 &&
      left < col - _border / 2 &&
      top < row - _border / 2

    for (const item of data) {
      if (inmap) {
        item.left = Math.round(item.left / dsize) * dsize
        item.top = Math.round(item.top / dsize) * dsize
      }
      items.push(...addLinkClip(item))
    }
    console.log(data);
    data = undefined
    list.push(items)
    list = list.filter(item => item.length > 0)
    console.log(list);
    if_win()
  }
  var cnt = Number(window.localStorage.getItem('count') || 0)
  time.value = cnt + '秒'
  canva.addEventListener('mousedown', canvaTimer)
  function canvaTimer(e: MouseEvent) {
    if (e.which != 1) return
    timer = setInterval(() => {
      cnt++
      window.localStorage.setItem('count', `${cnt}`)
      time.value = cnt + '秒'
    }, 1000)
    canva.removeEventListener('mousedown', canvaTimer)
  }

  canva.onmousedown = (e) => {
    if (e.which != 1) return
    var { PosX, PosY } = getPos(e)
    data = list.filter(item => item.some(x => (PosX >= x.left && PosX < x.left + dsize) && (PosY >= x.top && PosY < x.top + dsize))).pop()
    if (!data) return
    list.splice(list.findIndex(x => x == data), 1)
    for (const item of data) {
      item.posX = PosX - item.left
      item.posY = PosY - item.top
    }
  }
  canva.onmousemove = (e) => {
    drawImage()
    if (!data || e.which != 1) return;
    var { PosX, PosY } = getPos(e)
    for (const item of data) {
      var { posX, posY } = item
      item.left = PosX - posX
      item.top = PosY - posY
      DrawImage(item.col, item.row, PosX - posX, PosY - posY)
    }
  }
  function if_win() {
    replice()
    if (clear.value = list[0].length == list_length) {
      window.localStorage.setItem('win', 'true')
      clearInterval(timer)
      setTimeout(() => {
        canva.onmousedown = null
        canva.onmousemove = null
        canva.onmouseup = null

        var gif = new Image(canva.width, canva.height)
        gif.id = "win-gif"
        gif.src = "https://media.discordapp.net/attachments/1097848166285586443/1191788262361141438/0980c3f7782348bd.gif"
        canva.parentNode!.appendChild(gif)
        setTimeout(() => canva.parentNode!.removeChild(gif), 5000)
      }, 100);
    }
  }
  function genlist(row: number, col: number) {
    return new Array(row * col).fill({})
      .map((x, i) => [new ClipData(i, col, row)])
  }
})

function addLinkClip(clip: ClipData) {
  var datas: ClipData[] = []
  for (var i = 0; i < list.length; i++) {
    if (loop(list[i])) {
      datas.push(...list[i])
      list[i] = []
    }
  }
  return datas
  function loop(clips: ClipData[]) {
    for (const item of clips) {
      if (clip.row == item.row && clip.top == item.top) {
        if (item.col - clip.col == 1 && item.left - clip.left == dsize) {
          return true
        } else if (clip.col - item.col == 1 && clip.left - item.left == dsize) {
          return true
        }
      } else if (clip.col == item.col && item.left == clip.left) {
        if (clip.row - item.row == 1 && clip.top - item.top == dsize) {
          return true
        } else if (item.row - clip.row == 1 && item.top - clip.top == dsize) {
          return true
        }
      }
    }
    return false
  }
}

function replice() {
  var ls = list.flat()
  if (ls.length != list_length)
    for (var i = 0; i < list_length; i++) {
      if (ls.find(x => x.value == i)) continue
      var data = new ClipData(i, col, row)
      if (data.value == -1) continue
      data = clipRandom(data, (border - 1) * dsize)
      DrawImage(data.col, data.row, data.left, data.top)
      list.push([data])
    }
  window.localStorage.setItem('record', JSON.stringify(list))
}

</script>
<template>
  <div>
    <div class="d-flex justify-content-center">
      <div id="time"> {{ time }}</div>
      <button class="seesee">
        偷看一下
        <img class="hover" src="/images/birth.png" height="360" style="left: 100px;">
      </button>
      <button v-if="clear">
        <a id="download" target="_blank"
          href="https://drive.google.com/drive/u/2/folders/14S0jtg0K8rFXnB-4rWGTvUL94F33YGuq">下載連結</a>
      </button>
      <button @click="replice" v-else>
        搶救消失拼圖塊
      </button>
    </div>
    <canvas id="Puzzle">
      對不起，您的瀏覽器不支持HTML5畫布API。
    </canvas>
  </div>
</template>
<style lang="scss">
.seesee:hover .hover {
  display: block;
}

a#download {
  color: #000000;
}

.hover {
  position: fixed;
  z-index: 999;
  display: none;
  background-color: #ffb2b2;
}

#win-gif {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#Puzzle {
  position: relative;
  margin: 10px;
  border-style: double;
  border-color: brown;
  border-width: 10px;
}
</style>