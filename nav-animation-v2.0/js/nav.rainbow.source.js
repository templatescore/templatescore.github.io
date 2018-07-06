// BY Matei Copot
// https://codepen.io/towc/pen/KdxmJw

var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' ),
    
    opts = {
      lines: 50,
      splitDistX: 10,
      templateColor: 'hsla(hue,80%,50%,.1)',
      baseVelX: .5,
      addedVelX: .5,
      baseVelY: -.8,
      addedVelY: .4,
      baseRotSpeed: .015,
      addedRotSpeed: .035,
      baseLen: 20,
      addedLen: 20,
      baseLenDecrement: .1,
      addedLenDecrement: .2
    },
    
    lines = [];

function Line(){
  
  this.reset();
}
Line.prototype.reset = function(){
  
  this.x = 0;
  this.y = h * Math.random();
  this.vx = opts.baseVelX + opts.addedVelX * Math.random();
  this.vy = opts.baseVelY + opts.addedVelY * Math.random();
  
  this.len = opts.baseLen + opts.addedLen * Math.random();
  var rotSpeed = opts.baseRotSpeed + opts.addedRotSpeed * Math.random();
  
  if( Math.random() < .5 )
    rotSpeed *= -1;
  
  this.sin = Math.sin( rotSpeed );
  this.cos = Math.cos( rotSpeed );
  
  this.x2 = -this.len;
  this.y2 = 0;
  
}
Line.prototype.step = function(){
  
  this.x += this.vx;
  this.y += this.vy;
  
  var x2 = this.x2;
  this.x2 = this.x2 * this.cos - this.y2 * this.sin;
  this.y2 = this.y2 * this.cos +      x2 * this.sin;
  
  ctx.strokeStyle = opts.templateColor.replace( 'hue', this.x / w * 360 );
  ctx.beginPath();
  ctx.moveTo( this.x, this.y );
  ctx.lineTo( this.x + this.x2, this.y + this.y2 );
  ctx.stroke();
  
  if( this.y < -this.len )
    this.y = h + this.len;
  else if( this.y > h + this.len )
    this.y = -this.len;
  
  if( this.x > w + this.len )
    this.reset();
}
function anim(){
  
  window.requestAnimationFrame( anim );
  
  //ctx.globalCompositeOperation = 'source-over';
  //ctx.fillStyle = 'rgba(0,0,0,.04)';
  //ctx.fillRect( 0, 0, w, h );
  
  update();
}
function update(){
  ctx.globalCompositeOperation = 'lighter';
  
  if( lines.length < opts.lines && Math.random() < .1 )
    lines.push( new Line );
  
  lines.map( function( line ){ line.step(); } );
}

ctx.fillRect( 0, 0, w, h );
anim();

for( var i = 0; i < 200; ++i )
  update();

window.addEventListener( 'click', function(){
  ctx.globalCompositeOperation = 'source-over'; // thanks AmaanC, had completely forgot
  ctx.fillRect( 0, 0, w, h );
  lines.length = 0;
});
window.addEventListener( 'resize', function(){
  
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  ctx.fillRect( 0, 0, w, h );
  lines.length = 0;
});