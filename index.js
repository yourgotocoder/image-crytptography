document.getElementById("scream").onload = function () {
    var c = document.getElementById("myCanvas");
    var d = document.getElementById("myCanvas2");
    var ctx = c.getContext("2d");
    var ctx2 = d.getContext("2d");
    var img = document.getElementById("scream");
    var img2 = document.getElementById("scream");
    // ctx.drawImage(img, 0, 0);
    // var imgData = ctx.getImageData(0, 0, c.width, c.height);
    // // invert colors
    // var i;
    // for (i = 0; i < imgData.data.length; i += 8) {
    //     imgData.data[i] = imgData.data[i] > 128 ? 255 : 0;
    //     imgData.data[i + 1] = imgData.data[i + 1] > 128 ? 255 : 0;
    //     imgData.data[i + 2] = imgData.data[i + 2] > 128 ? 255 : 0;
    //     imgData.data[i + 3] = 255;
    // }
    // ctx.putImageData(imgData, 0, 0);

    img.crossOrigin = "anonymous";
    ctx.drawImage(img, 0, 0);
    ctx2.drawImage(img2, 0, 0);
    const imgData = ctx.getImageData(0, 0, c.width, c.height);
    const img2Data = ctx2.getImageData(0, 0, d.width, d.height);
    let i = 0;
    for (i = 0; i < imgData.data.length; i += 4) {
        // let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
        // let colour = 0;
        // if (count > 510) colour = 255;
        // else if (count > 255) colour = 127.5;
        // imgData.data[i] = colour;
        // imgData.data[i + 1] = colour;
        // imgData.data[i + 2] = colour;
        // imgData.data[i + 3] = 255;
        imgData.data[i] = imgData.data[i] > 128 ? 255 : 0;
        imgData.data[i + 1] = imgData.data[i + 1] > 128 ? 255 : 0;
        imgData.data[i + 2] = imgData.data[i + 2] > 128 ? 255 : 0;
        imgData.data[i + 3] = 255;
    }
    let j = 0;
    console.log(img2Data);
    for (j = 0; j < img2Data.data.length; j += 4) {
        let count = imgData.data[j] + imgData.data[j + 1] + imgData.data[j + 2];
        let colour = 0;
        if (count > 510) colour = 255;
        else if (count > 255) colour = 127.5;
        imgData.data[j] = colour;
        imgData.data[j + 1] = colour;
        imgData.data[j + 2] = colour;
        imgData.data[j + 3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
    ctx2.putImageData(img2Data, 0, 0);
};
