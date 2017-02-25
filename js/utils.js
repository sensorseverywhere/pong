var utils = {};

utils.captureMouse = function(element){
    
    var mouse = {x: 0, y : 0};
    
    element.addEventListener('mousemove', function(event){
        var x, y;
        if(event.pageX || event.pageY){
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;
        
        mouse.x = x;
        mouse.y = y;

    }, false);
    
    return mouse;
    
};

utils.colorToRGB = function (colour, alpha) {
    //if string format, convert to number
    if (typeof colour == 'string' && colour[0] === '#') {
        colour = window.parseInt(colour.slice(1), 16);
    }
    alpha = (alpha === undefined) ? 1 : alpha;

    //extract component values
    var r = colour >> 16 & 0xff,
        g = colour >> 8 & 0xff,
        b = colour & 0xff,
        a = ( alpha < 0 ) ? 0 : ((alpha > 1) ? 1 : alpha);

        //use 'rgba' if needed
        if(a === 1) {
            return "rgb("+ r + ", "+ g +", "+ b +")";
        } else {
            return "rgb("+ r + ", "+ g +", "+ b +", "+ a +")";
        }
};

utils.parseColour = function(colour, toNumber) {
    
    if(toNumber === true) {
        if(typeof colour === 'number') {
            
            return (colour | 0); // chop off decimal;
            
        }
        if(typeof colour === 'string' && colour[0] === '#') {
            colour = colour.slice(1);
           
        }
        return window.parseInt(colour, 16);
    } else {
        if(typeof colour === 'number') {
            colour = '#' + ('00000' + (colour | 0).toString(16)).substr(-6);
            
        }
        return colour;
    }
};

utils.containsPoint = function(rect, x, y) {
    return !(x < rect.x || x > rect.x + rect.width || y < rect.y || y > rect.y + rect.height);
}

utils.intersects = function(rectA, rectB) {
    return !(rectA.x + rectA.width < rectB.x || 
             rectB.x + rectB.width < rectA.x || 
             rectA.y + rectA.height < rectB.y ||
             rectB.y + rectB.height < rectA.y);
}
