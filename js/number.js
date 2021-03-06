function Number(width, height)
{
    if(width === undefined) { width = 50; }
    if(height === undefined) { height = 50; }
    if(colour === undefined) { colour = '#ff0000'; }
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.colour = utils.parseColour(colour);
    this.lineWidth = lineWidth;
    
}

Number.prototype.one = function(context)
{
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.colour;
    context.beginPath();
    context.rect(0, 0, this.width, this.height);
    context.closePath();
    context.fill();
    if(this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
}