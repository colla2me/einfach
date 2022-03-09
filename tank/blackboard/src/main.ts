import './style.css'

class Blackboard {
  constructor(
    public canvas = document.querySelector<HTMLCanvasElement>('#canvas')!,
    public context = canvas.getContext('2d')!,
    public container = document.createElement('div'),
    public backgroundColor = '#000'
  ) {
    this.initCanvas()
    this.bindEvents()
  }

  private initCanvas() {
    this.context.fillStyle = this.backgroundColor
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.container.style.cssText = 'margin-top: 10px;'
    this.canvas.insertAdjacentElement('afterend', this.container)
  }

  private bindEvents() {
    const callback = this.drawLine.bind(this)
    this.canvas.addEventListener('mousedown', () => {
      this.context.beginPath()
      this.context.strokeStyle = '#FFF'
      this.context.lineJoin = 'round'
      this.context.lineWidth = 2
      this.canvas.addEventListener('mousemove', callback)
    })

    document.addEventListener('mouseup', () => {
      this.canvas.removeEventListener('mousemove', callback)
    })
  }

  private drawLine(event: MouseEvent) {
    this.context.lineTo(event.offsetX, event.offsetY)
    this.context.stroke()
  }

  public clear() {
    const button = document.createElement('button')
    button.innerText = '清屏'
    this.container.insertAdjacentElement('afterbegin', button)
    button.addEventListener('click', () => {
      this.context.fillStyle = this.backgroundColor
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    })
  }
}

const instance = new Blackboard()
instance.clear()