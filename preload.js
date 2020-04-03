var fs = require('fs');
const { exec } = require('child_process');

// let path = '/home/smallyu/apps/bing_wallpaper'

let path = '.'

window.addEventListener('DOMContentLoaded', () => {
  exec(`${path}/wallpaper`, (err, stdout, stderr) => {
    console.log(err, stdout, stderr)
  })
})
