    // var audioAnalyser = new audioManager('./sound3.mp3');

    // /**
    //   Time stuff
    // */
    // var DELTA_TIME = 0;
    // var LAST_TIME = Date.now();
    // var currentTime = 0;
    // var kickTimeStamp = 0;
    // var snareTimeStamp = 0;
    // var hasKicked = false;
    // var hasSnared = false;
    // var triangles = [];
    // var randomRadius;
    // var alpha = 0;

    // var colors = ["F0433a","540032","820333","c9283e"]
    // /**
    //   Canvas stuff
    // */
    // var canvas
    // var ctx
    // var canvasWidth = window.innerWidth;
    // var canvasHeight = window.innerHeight;


    // function initCanvas() {

    //   canvas = document.querySelector('canvas')
    //   ctx = canvas.getContext('2d')

    //   onResize()

    // }

    // var createBigTriangles = function() {
    //   var direction = Math.floor(Math.random()*2-1);
    //   if (direction == 0) {
    //     direction = 1;
    //   }

    //   var minRadius = Math.random()*100+20;
    //   maxRadius = Math.random()*160+100;

    //   startAngle = 0;
    //   var randomStep = Math.floor(Math.random()*3+1)
    //   stepAngle = Math.PI/3 ;
    //   alpha = Math.random()*0.65+0.15;
    //   var angleRandom = Math.random()*(stepAngle)
    //   var random = (Math.random()*0.4+0.1)
    //   if (random > 0.2) {
    //     randomRadius = Math.random()*60+20;
    //   } else {
    //     randomRadius = Math.random()*60+200;
    //   }
    //   var colorIdx = Math.floor(Math.random()*4)
    //   for (var i = 0; i < Math.PI*2; i+=stepAngle) {

    //     var bigTriangle = new Shape({
    //       p1x: Math.cos(i+angleRandom)*minRadius+canvas.width/2,
    //       p1y: Math.sin(i+angleRandom)*minRadius+canvas.height/2,
    //       p2x: Math.cos(i+angleRandom)*maxRadius+canvas.width/2,
    //       p2y: Math.sin(i+angleRandom)*maxRadius+canvas.height/2,
    //       p3x: Math.cos(i+angleRandom+random)*randomRadius+canvas.width/2,
    //       p3y: Math.sin(i+angleRandom+random)*randomRadius+canvas.height/2,
    //       globalAlpha: alpha,
    //       color: colors[colorIdx]

    //     })

    //   bigTriangle.drawBigTriangle();
    //   }
    //   triangles.push(bigTriangle);
    // }


    // var Shape = function(opts) {
    //   this.position = vec2.fromValues(opts.x, opts.y)
    //   this.points = opts;
    //   this.globalAlpha = opts.globalAlpha;
    //   this.color = opts.color;
    // }

    // Shape.prototype = {
    //   drawBigTriangle: function() {
    //     ctx.save()
    //     ctx.beginPath()
    //     ctx.globalAlpha = this.globalAlpha;
    //     ctx.moveTo( this.points.p1x, this.points.p1y)
    //     ctx.lineTo( this.points.p2x, this.points.p2y )
    //     ctx.lineTo( this.points.p3x, this.points.p3y )
    //     ctx.lineTo( this.points.p1x, this.points.p1y)
    //     ctx.fillStyle = '#'+this.color
    //     ctx.strokeStyle = 'white'
    //     ctx.closePath()
    //     ctx.fill()
    //     ctx.stroke()
    //     ctx.restore()
    //   }


    // /**
    //  * addListeners
    //  */
    // function addListeners() {

    //   window.addEventListener( 'resize', onResize.bind(this) );
    //   rafId = requestAnimationFrame( frame )

    // }

    // /**
    //  * update
    //  * - Triggered on every TweenMax tick
    //  */
    // function frame() {

    //   rafId = requestAnimationFrame( frame )

    //   DELTA_TIME = Date.now() - LAST_TIME;
    //   LAST_TIME = Date.now();

    //   currentTime += DELTA_TIME;


    //   // audioAnalyser.update()

    //   // console.log(audioAnalyser.update())
    //   // analyser.getByteFrequencyData(frequencyData);
    //   // audioAnalyser.getKickFrequency();

    //   // analyser.getByteFrequencyData(frequencyData);


    //   var barWidth = opts.barWidth;
    //   var margin = 2;
    //   var nbBars = canvasWith / ( barWidth - margin );
    //   var cumul = 0;
    //   var average = 0;

    //    // ctx.clearRect(0,0, canvas.width, canvas.height)
    //   // ctx.fillStyle = 'red'
    //   // ctx.beginPath()
    //   for ( var i = 0; i < 1024; i++ ){

    //     // console.log(frequencyData[Math.floor(1024 * 2/1024)])
    //     // get the frequency according to current i
    //     // let percentIdx = i / nbBars;
    //     // let frequencyIdx = Math.floor(1024 * percentIdx)
    //     // ctx.rect( i * barWidth + ( i * margin ), canvasHeight - frequencyData[frequencyIdx] , barWidth, frequencyData[frequencyIdx] );

    //     cumul += frequencyData[i];

    //   }
    //   // ctx.fill()
    //   // ctx.closePath()
    //   averageKick = audioAnalyser.kickFrequency;

    //   averageSnare = audioAnalyser.snareFrequency;

    //   if (hasKicked == true) {
    //     kickTimeStamp += DELTA_TIME;

    //     if (kickTimeStamp >= 400) {
    //       hasKicked = false;
    //       kickTimeStamp = 0;
    //     }
    //   }

    //   if (averageKick > 0.988 && hasKicked == false) {
    //     hasKicked = true;

    //     console.log('kick');

    //   }

    //   if (hasSnared == true) {
    //     snareTimeStamp += DELTA_TIME;

    //     if (snareTimeStamp >= 900) {
    //       hasSnared = false;
    //       snareTimeStamp = 0;
    //     }
    //   }

    //   //144
    //   if (averageSnare > 131.7  && hasSnared == false) {

    //    console.log(averageSnare)
    //     hasSnared = true;
    //     createBigTriangles();
    //     console.log('snare');

    //   }
    // }


    // /**
    //  * onResize
    //  * - Triggered when window is resized
    //  * @param  {obj} evt
    //  */
    // function onResize( evt ) {

    //   canvasWith = window.innerWidth;
    //   canvasHeight = window.innerHeight;

    //   canvas.width = canvasWith
    //   canvas.height = canvasHeight
    //   canvas.style.width = canvasWith + 'px'
    //   canvas.style.height = canvasHeight + 'px'

    // }


    // initCanvas()
    // loadSound()

