var html = '';
var rgbColor;


function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  return color;
}

function print(message) {
  document.write(html);
}

for (var i = 1; i < 100; i += 1) {
rgbColor = randomColor();
html += '<div style="background-color:' + rgbColor + '"></div>';

}

print(html);