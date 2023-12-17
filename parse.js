const fs = require('fs')

const files = fs.readdirSync('.')

const f = files
.sort()
.filter(file => file.includes('.png'))
.forEach(file => {

  const [id, seed] = file.replace('.png', '').split('-')
  fs.renameSync('./' + file, './Pikelny_' + Number(id) + '.png')
  // console.log([Number(id), seed, 'v1-5-pruned-emaonly.safetensors [6ce0161689]', 'DPM++ 2M Karras',20,7].join(','))
})

