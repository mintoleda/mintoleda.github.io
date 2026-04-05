const { Vibrant } = require('node-vibrant/node');

async function test() {
  try {
    const palette = await Vibrant.from('https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b5/a6/91/b5a69171-5232-3d5b-9c15-8963802f83dd/15UMGIM15814.rgb.jpg/600x600bb.jpg').getPalette();
    console.log(palette.Vibrant.hex);
    console.log(palette.DarkVibrant.hex);
  } catch (e) {
    console.error(e);
  }
}
test();
