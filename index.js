document.getElementById("scream").onload = function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
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
    const imgData = ctx.getImageData(0, 0, c.width, c.height);
    for (i = 0; i < imgData.data.length; i += 4) {
        let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
        let colour = 0;
        if (count > 510) colour = 255;
        else if (count > 255) colour = 127.5;

        imgData.data[i] = colour;
        imgData.data[i + 1] = colour;
        imgData.data[i + 2] = colour;
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
};
