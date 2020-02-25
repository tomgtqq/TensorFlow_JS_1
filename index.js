let net
const webcamElement = document.getElementById('webcam')

async function app() {
    // load model
    net = await mobilenet.load();
    // create an object from tf using data api
    const webcam = await tf.data.webcam(webcamElement);
    while (true) {
      const img = await webcam.capture();
      const result = await net.classify(img);
  
      document.getElementById('console').innerText = `
        prediction: ${result[0].className}\n
        probability: ${result[0].probability}
      `;
      img.dispose();
  
      await tf.nextFrame();
    }
  }
  app()

 
