const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!

const app = canvas.getContext('2d')!

// app.fillStyle = 'red';
// app.fillRect(0, 0, 200, 200)

// app.fillStyle = 'orange';
// app.fillRect(canvas.width/2-50, canvas.height/2-50, 100, 100)

// app.strokeStyle = '#3498db'
// app.lineWidth = 10
// app.lineJoin = 'round'
// app.strokeRect(50, 50, 200, 200)

// app.fillStyle = '#3498db'
// app.lineWidth = 10
// app.strokeStyle = 'red'
// app.arc(100, 100, 50, 0, 2 * Math.PI)
// app.stroke()
// app.fill()

// app.beginPath()
// app.moveTo(canvas.width/2, 10)
// app.lineTo(canvas.width - 10, 250)
// app.lineTo(10, 250)
// app.closePath()
// app.strokeStyle = 'red'
// app.lineWidth = 10
// app.stroke()

const gradient = app.createLinearGradient(50, 50, 200, 200)
gradient.addColorStop(0, '#f1c40f')
gradient.addColorStop(0.5, '#2ecc71')
gradient.addColorStop(1, '#e74c3c')

// app.fillStyle = gradient
// app.fillRect(0, 0, 300, 300)

// app.strokeStyle = gradient;
// app.lineWidth = 20
// app.lineJoin = 'round'
// app.strokeRect(50, 50, 200, 200)

// app.fillStyle = '#34495e'
// app.fillRect(0, 0, canvas.width, canvas.height)
// app.font = '36px Fira Code'
// // app.fillStyle = 'white'
// app.textBaseline = 'top'
// // app.strokeStyle = 'white'
// app.strokeStyle = gradient
// // app.fillText('Hello World', 8, 8)
// app.lineWidth = 1.5
// app.strokeText('Hello World', 8, 8)

// const img = document.createElement('img')
// img.src = '../assets/fish.jpeg'
// img.onload = () => {
//   const pattern = app.createPattern(img, 'repeat')!
//   app.fillStyle = pattern
//   app.fillRect(0, 0, canvas.width, canvas.height)
// }

// img.onload = () => {
//   canvas.width = img.naturalWidth * scale(img, canvas)
//   canvas.height = img.naturalHeight * scale(img, canvas)
//   // app.fillRect(0, 0, canvas.width, canvas.height)
//   app.drawImage(img, 0, 0, canvas.width, canvas.height)
// }

// function scale(img: HTMLImageElement, canvas: HTMLCanvasElement) {
//   return Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
// }

app.fillStyle = '#000'
app.fillRect(0, 0, canvas.width, canvas.height)

// for (let i=0;i<1000;i++){
//   app.fillStyle = 'white'
//   app.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2)
// }

const colors = ['#1abc9c', '#27ae60', '#e74c3c', '#bdc3c7', '#f39c12', '#e67e22', '#2980b9', '#9b59b6', '#2c3e50']
for (let i=0;i<100;i++){
  app.beginPath()
  app.fillStyle = colors[Math.floor(Math.random() * colors.length)]
  app.arc(Math.random() * canvas.width, Math.random() * canvas.height, 5 + Math.random() * 15, 0, 2 * Math.PI)
  app.fill()
}