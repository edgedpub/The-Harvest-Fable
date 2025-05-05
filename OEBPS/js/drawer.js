var Trig = {
    distanceBetween2Points: function ( point1, point2 ) {
        var dx = point2.x - point1.x;
        var dy = point2.y - point1.y;
        return Math.sqrt( Math.pow( dx, 2 ) + Math.pow( dy, 2 ) );  
    },
    angleBetween2Points: function ( point1, point2 ) {
        var dx = point2.x - point1.x;
        var dy = point2.y - point1.y;   
        return Math.atan2( dx, dy );
    }
}
var Sketcher = function(canvasID, brushImage, bgcolor, enableFillTool) {
    var sk = this;
    enableFillTool = typeof enableFillTool !== 'undefined' ? enableFillTool : true;
    this.renderFunction = function(event){
        if (sk.curTool == 'marker') this.updateCanvasByLine(event);
        else if (sk.curTool == 'highlighter') this.updateCanvasByHighlighter(event);
        else if (sk.curTool == 'crayon') this.updateCanvasByBrush(event);
        else if (sk.curTool == 'eraser') this.updateCanvasByLineEraser(event);
        else if (sk.curTool == 'filler') this.updateCanvasByFill(event);
        else return; 
    }
    this.brush = undefined;
    this.canvasID = canvasID;
    this.drawer = $("#"+canvasID );
    this.drawerObj = $("#"+canvasID)[0].drawer;
    this.canvas = $("#"+canvasID + " canvas.drawing-area");
    this.context = this.canvas[0].getContext("2d"); 
    this.context.strokeStyle = "#000000";
    this.context.lineJoin = "round";
    this.canvas_touch = $("#"+canvasID + " canvas.drawing-area-touch");
    this.context_touch = this.canvas_touch[0].getContext("2d"); 
    this.lastMousePoint = {x:0, y:0};
    this.curTool = 'marker';
    this.curColor = this.drawer.find(".color.selected").attr("data-color");
    this.curSize = $('.size.selected', this.drawer).attr("data-size")/1;
    if (enableFillTool) {
        this.fill_tool = new SimpleFloodFill("#"+canvasID + " canvas.drawing-area",
                                            "#"+canvasID + " canvas.drawing-area-touch", 
                                            bgcolor);
    }
    this.autosave = false;
    this.history = [];
    this.historyCursorPosition = 0;
    this.bgcolor = bgcolor;
    this.canvas_touch.bind( window.touchDownEvent, this.onCanvasMouseDown );
    this.drawer.on( window.touchDownEvent, function(e){ e.stopPropagation(); });
    this.drawer.find(".tool").on("click" , function(e){
        sk.drawer.find(".tool").removeClass("selected");
        $(this).addClass("selected");
        if($(this).is(".tool-marker")) sk.curTool = 'marker';
        if($(this).is(".tool-highlighter")) sk.curTool = 'highlighter';
        if($(this).is(".tool-crayon")) sk.curTool = 'crayon';
        if($(this).is(".tool-eraser")) sk.curTool = 'eraser';
        if($(this).is(".tool-filler")) sk.curTool = 'filler';

        var defaultSize = $(this).attr("data-default-size");
        if (defaultSize != "") sk.drawer.find(".tool-item .size[data-size='" + defaultSize + "']").parent().click();
        var defaultColor = $(this).attr("data-default-color");
        if (defaultColor != "") sk.drawer.find(".tool-item.color[data-color='" + defaultColor + "']").click();
        
        e.preventDefault();
    });
    this.onCanvasMouseDown = function (event) {
        if (document.activeElement.tagName === "textarea") {
            // disable when taking notes
            return;
        }

        var canv = sk.canvas[0];
        var binImgData = canv.toDataURL();
        window.skhistory = sk.history;
        if (sk.historyCursorPosition > 0) {
            sk.history = _(sk.history).first(sk.historyCursorPosition);
        } else {
            sk.history = [];
        }
        sk.history.push(binImgData);
        const historyStates = 100;
        if (sk.history.length > historyStates) sk.history = _(sk.history).last(historyStates);
        sk.historyCursorPosition = sk.history.length;
        // console.warn(sk.historyCursorPosition, sk.history);

        sk.mouseMoveHandler = sk.onCanvasMouseMove();
        sk.mouseUpHandler = sk.onCanvasMouseUp();
        $(document).bind( window.touchMoveEvent, sk.mouseMoveHandler );
        $(document).bind( window.touchUpEvent, sk.mouseUpHandler );
        
        sk.updateMousePosition( event );
        sk.renderFunction( event );
        event.preventDefault();
    }
    this.canvas_touch.bind( window.touchDownEvent, this.onCanvasMouseDown );
    this.canvas_touch.on("click", function (event) {
        if (document.activeElement.tagName === "textarea") $(this).focus();
    });

    this.selectColor = function(){
        sk.drawer.find(".color").removeClass("selected");
        $(this).addClass("selected");
        sk.curColor = $(this).attr("data-color");
    };
    this.loadBrush = function(){
        this.brush = new Image();
        this.brush.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeAhQKGhjvjaMMAAAFK0lEQVQ4yx3Ub0wTdxgH8O9dr/WAwo5asCLbrnCFFnUUBBTjtl9LMQWrlomKiEsBdZg5wxj+WxZzLcXVWrUoMqrMHQgEnBJ0kxdmIVdERZ0ONcvQ7AUQx9zcFlyWzBf7d+71kzzJ83yf5wOOf2YoraqV7eT3qAjiQ6jKGDC1gDVL4BiLRYi3HqlhUjkRRcsEnY3Oc3ck9LcTxJnZ3OHdtjjaL5pkWNIMtDAt2oQ2rxGwOGq0+1znb40eyw9YYT/NOH0nrjy/98icyKPYRE9w1VxkCpGFMuIqJvwjq56lnMl+t5xgvkaUzo/7PCF9thVIYgk1f3yYvlpVHCYQCqL/2DTG6sL2+/NkiCSObtKm1aSzzJUwMvKp7pllwoj/0OWwFTuLyO2J+34s/NhSyCMYIwepN4cqGtkGnsAfXaqLiv5WTYvnLxkhujGTyhF3sOE7DIdf/aSRXaaXTze4BQJO8L23KFb+UE/6YiYhPAnfiBdTi11sTZRDnM1YvfBMl86+SEvxOGXNecvRz7MDdd0yh05V2qTG2CtxzaGmMJx2T+HjG6Cvxf8kWaEl3mbh2HpXlmGdnoM5pN/E88dJnpj6Po90asXXEp/7sD/EbONQ3aiiWvfrqTK1zQu4qacLFtk+d91j+Pp6FBee1B3dtFGt1ncTGYjxM4InWeJobRhIUdca3QfPO3/ZnhgSUbCa2al19y/PfZbH8QiY/b7YpvFLZ/mf0wgisk4q0AcvCj1GJ4Fclkypjui66Ha30w0v/4VOn7nOa17ju0Mw1inQoZHeXep0EWHYE2ZE7hDXUcgaeOBU+c2tPfXbLXbL/R+A3taslObHr9iS57olHrOhbk9umVhbhCXNHNTbtDQ116x6ktihZNvxlb6AeJwSTXY7PBDs0ZXcbyIvxhx+Gajyzk/1HpbtaRA21qNhbIFBHSGzfS7zcoJvY63c8fQxzUFsgYjyMb35zxzTNUGVk+IBcwgWZ+UHCXn0urmD2CyVPBiyf+Lalh3Nl5EBUw17IJnzc455IuQDBjZzJtB3lnpQ4UElnyRO09RAf114pVJr3otEwZP0kDD76qFD1+j3U5yBmmi4ChBC561dHEixJbKMR9kF7V5WicHvlDP1QDM63rRr6tCCS5EGFUFnn7UpKWFqcQrTrQWS+xiNm/hLkHKddSMGXVxQ5fN7uzNeIxitFE1bxHLMCaQBeKlh6BZNsf6qIfq0kpiJZw1ZuRmMdFnNo8bicKqiQca6TnqVRwipQ+9cLtXl5bB7lH8YtnsSEOR9q2ZZgI+PvFH9pLPpIznjj1nUlxhb5KV+99nJvjaCNHbMaUT25olAVg+PSiPFViwBbfSca+NBs1neYPr0BkZn7uLRsuOJlbWWh2+PqiDDxGj2rB7c7+tud0c4kJatokzLM9VivwgUZXErT9Yniq/7z88fh8rSGGM2qgY4bc9F5XpKbd6j38RQFZ2dyoAXXLZIhoFda59JjCUQv7x+cq+Ou1nqGzEQbJValcYjO5J0B+sIHJNm3D3cteoEq5VElLA/9soubS0FVSgMx33ndWNd1t1CFmIYx81/E7a8VixSBJNeCNZX3hU0RZysJAEuY790ASGerOAGoWK3clE6L9yhsSiCqbLq/h1aXxJD+7t5RTBNRUPndCARBz9TnFAES61b0xdsfZrfrggWcbh83nPPy26tOcHDYYqt0BlFRbBPXwhW36EeiZuKbcss3aCoaIdx4JHPE2BeCPY2S2BwDxtE9/+C7SlOtmWqcsyYmCP/B/HdwNS6DfvtAAAAAElFTkSuQmCC";
        this.brush.onload = function(){
            //sk.selectColor.apply(sk.drawer.find(".color.selected"));
            this.curColor;
            $(".drawing-tmp-area",sk.drawer).attr("width", sk.curSize).attr("height", sk.curSize);
            var _canvas = $(".drawing-tmp-area",sk.drawer)[0];
            
            var _ctx = _canvas.getContext("2d");

            window.myContext = _ctx;

            _ctx.strokeStyle = "#ffffff";
            _ctx.clearRect(0, 0, sk.brush.width, sk.brush.height);
/*            _ctx.arc(sk.curSize/2, sk.curSize/2, sk.curSize/2, 0, 2 * Math.PI, false);
            _ctx.stroke();
            _ctx.clip();
*/           _ctx.drawImage(sk.brush, 0, 0);
            var  _imageData = _ctx.getImageData(0, 0, sk.curSize, sk.curSize);
            var colors = sk.hexToRgb(sk.curColor);
            for (var i=0;i<_imageData.data.length;i+=4){
                if(_imageData.data[i+3] === 255 || _imageData.data[i+3] === 100){
                    _imageData.data[i] = colors[0];
                    _imageData.data[i+1] = colors[1];
                    _imageData.data[i+2] = colors[2];
                    _imageData.data[i+3] = colors[3];
                }
            }
            _ctx.putImageData(_imageData, 0,0); 
            _ctx.restore();
            sk.brush = new Image();
            sk.brush.src = _canvas.toDataURL();
        }
    }
    this.drawer.find(".sizeContainer").on("click" , function(e){
        e.preventDefault();
        sk.drawer.find(".size").removeClass("selected");
        $(this.children).addClass("selected");
        sk.curSize = $(this.children).attr("data-size");
        sk.loadBrush();
    });
    $('.drawing-background-hidden').on(window.touchDownEvent , function(e){
        e.preventDefault();
    })
    this.drawer.find(".drawing-background").on("click" , function(e){
        e.preventDefault();
        sk.drawer.find(".drawing-background").removeClass("selected");
        $(this).addClass("selected");
        sk.drawSelectedImage(true);
    });
    this.drawSelectedImage = function(clear){
        if(clear) {
            sk.clear();
            sk.history = [];
            sk.historyCursorPosition = 0;
        }
        var imgName = sk.drawer.find(".drawing-background.selected").attr("id");
        if (typeof imgName != "undefined") {
            var img = $("#" + imgName + "-hidden")[0];
            var maxwidth = sk.canvas_touch[0].width;
            var maxheight = sk.canvas_touch[0].height;
            var fW = maxwidth / img.width;
            var fH = maxheight / img.height;
            var f = (fW < fH ? fW : fH);
            if (img.width <= maxwidth && img.height <= maxheight) f = 1;
            var imgWidth = img.width*f;
            var imgHeight = img.height*f;
            var leftMargin = (maxwidth - imgWidth) / 2;
            var topMargin = (maxheight - imgHeight) / 2;
            sk.context.globalAlpha = 1.0;
            sk.context.globalCompositeOperation = "source-over";
            sk.context_touch.drawImage(img, leftMargin, topMargin, imgWidth, imgHeight);
            
            // if (enableFillTool) {
            //     sk.fill_tool.setBackgroundImage(img, leftMargin, topMargin, imgWidth, imgHeight);
            // }
        }
    }
    
    this.drawer.find(".color").on("click" , function(e){
        sk.selectColor.apply(this);
        sk.loadBrush();
        e.preventDefault();
    });
    this.clear = function(event){
        if(event) event.preventDefault();
        var c = sk.canvas_touch[0];
        sk.context_touch.clearRect( 0, 0, c.width, c.height );
        c = sk.canvas[0];
        sk.context.clearRect( 0, 0, c.width, c.height );  
        var fillStyle = sk.context.fillStyle;
        var globalAlpha = sk.context.globalAlpha;
        var globalCompositeOperation = sk.context.globalCompositeOperation;
        sk.context.globalAlpha = 1.0;
        sk.context.globalCompositeOperation = "destination-out";
        sk.context.fillStyle = "#000000";
        sk.context.fillRect( 0, 0, c.width, c.height );
        sk.context.fillStyle = fillStyle;
        sk.context.globalAlpha = globalAlpha;
        sk.context.globalCompositeOperation = globalCompositeOperation;
        // sk.drawSelectedImage(false);  
    }
    this.reset = function(event){
        if(event) event.preventDefault();
        pubcoder.confirm(sk.drawerObj.options.eraseDialogMessage, null, sk.drawerObj.options.eraseCancelLabel, sk.drawerObj.options.eraseButtonLabel, function (cancelled) {
            if (cancelled) return;
            sk.drawSelectedImage(true);
            if (sk.autosave) sk.drawerObj.save();
        });
    }
    this.loadDrawing = function (imgData) {
        var ctx = sk.context;
        var previousGlobalAlpha = ctx.globalAlpha;
        var previousGlobalCompositeOperation = ctx.globalCompositeOperation;
        var img = new Image();
        img.src = imgData;
        img.onload = function () {
            ctx.globalAlpha = 1.0;
            ctx.globalCompositeOperation = "source-over";
            sk.clear();
            ctx.drawImage(img, 0, 0);
            sk.drawSelectedImage();
            if (sk.autosave) sk.drawerObj.save();
            ctx.globalAlpha = previousGlobalAlpha;
            ctx.globalCompositeOperation = previousGlobalCompositeOperation;
        }
    }
    this.undo = function () {
        if (sk.historyCursorPosition < 1) return;
        if (sk.historyCursorPosition >= sk.history.length) sk.history.push(sk.canvas[0].toDataURL());
        sk.historyCursorPosition--;
        // console.warn(sk.historyCursorPosition, sk.history);
        var imgData = sk.history[sk.historyCursorPosition];
        if (typeof(imgData) === "undefined") return;
        sk.loadDrawing(imgData);
    }
    this.redo = function () {
        if (sk.historyCursorPosition >= sk.history.length-1) return;
        sk.historyCursorPosition++;
        // console.warn(sk.historyCursorPosition, sk.history);
        var imgData = sk.history[sk.historyCursorPosition];
        if (typeof(imgData) === "undefined") return;
        sk.loadDrawing(imgData);
    }
    this.drawer.find(".drawing-buttons .btn-undo").on("click", function(e) { e.preventDefault(); e.stopPropagation(); sk.undo(); });
    this.drawer.find(".drawing-buttons .btn-redo").on("click", function(e) { e.preventDefault(); e.stopPropagation(); sk.redo(); });
    this.drawer.find(".drawing-buttons .btn-note").on("click", function(e) { e.preventDefault(); e.stopPropagation(); sk.addNote(); sk.drawerObj.save(); });
    this.drawer.find(".drawing-buttons .btn-clear").on("click", function(e) { e.preventDefault(); e.stopPropagation(); sk.reset(); });
    this.drawer.find(".drawing-buttons .btn-close").on("click", function (e) { e.preventDefault(); e.stopPropagation(); pubcoder.stopAnnotationMode(); });

    this.drawer.find(".tool.selected").click();

    this.loadBrush();
    this.clear();
}
Sketcher.prototype.hexToRgb = function(hex) {
    if (hex.charAt(0) == "#") {
        hex = hex.substr(1, hex.length-1);
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return [r,g,b,100];
    } else if (hex.substr(0,5) == "rgba(") {
        hex = hex.substr(5, hex.length-6);
        var values = hex.split(",");
        var r = parseInt(values[0]);
        var g = parseInt(values[1]);
        var b = parseInt(values[2]);
        var a = values[3] * 100;
        return [r,g,b,a];
    }
}
Sketcher.prototype.onCanvasMouseMove = function () {
    var self = this;
    return function(event) {
        self.renderFunction( event );
        event.preventDefault();
        return false;
    }
}
Sketcher.prototype.onCanvasMouseUp = function (event) {
    var self = this;
    return function(event) {
        $(document).unbind( window.touchMoveEvent, self.mouseMoveHandler );
        $(document).unbind( window.touchUpEvent, self.mouseUpHandler );
        
        self.mouseMoveHandler = null;
        self.mouseUpHandler = null;
        event.preventDefault();

        if (self.autosave) self.drawerObj.save();
    }
}
Sketcher.prototype.updateMousePosition = function (event) {
    var target;
    if ((typeof event.originalEvent !== "undefined") 
        && (typeof event.originalEvent.touches !== "undefined") 
        && (typeof event.originalEvent.touches[0] !== "undefined") ) {
        target = event.originalEvent.touches[0];
    }
    else {
        target = event;
    }
    var offset = this.canvas.offset();
    this.lastMousePoint.x = target.pageX - offset.left;
    this.lastMousePoint.y = target.pageY - offset.top;
    event.preventDefault();
}
Sketcher.prototype.updateCanvasByLine = function (event) {
    this.context.strokeStyle = this.curColor;
    this.context.lineWidth = this.curSize;
    this.context.beginPath();
    var prevMousePoint = this.lastMousePoint;
    this.context.moveTo( this.lastMousePoint.x, this.lastMousePoint.y );
    this.updateMousePosition( event );
    this.context.globalAlpha = 1.0;
    this.context.globalCompositeOperation = "source-over";
    if(prevMousePoint.x == this.lastMousePoint.x && prevMousePoint.y == this.lastMousePoint.y){
        this.context.lineTo( this.lastMousePoint.x + 0.01, this.lastMousePoint.y +0.01 );
    }else{
        this.context.lineTo( this.lastMousePoint.x, this.lastMousePoint.y );
    }
    this.context.closePath();
    this.context.stroke();
    event.preventDefault();
}
Sketcher.prototype.updateCanvasByHighlighter = function (event) {
    this.context.strokeStyle = this.curColor;
    this.context.lineWidth = this.curSize;
    this.context.beginPath();
    var prevMousePoint = this.lastMousePoint;
    this.context.moveTo( this.lastMousePoint.x, this.lastMousePoint.y );
    this.updateMousePosition( event );
    this.context.globalAlpha = 0.5;
    this.context.globalCompositeOperation = "xor";
    if(prevMousePoint.x == this.lastMousePoint.x && prevMousePoint.y == this.lastMousePoint.y){
        this.context.lineTo( this.lastMousePoint.x + 0.01, this.lastMousePoint.y +0.01 );
    }else{
        this.context.lineTo( this.lastMousePoint.x, this.lastMousePoint.y );
    }
    this.context.closePath();
    this.context.stroke();
    this.context.globalAlpha = 1.0;
    this.context.globalCompositeOperation = "source-over";
    event.preventDefault();
}
Sketcher.prototype.updateCanvasByLineEraser = function (event) {
    this.context.strokeStyle = this.curColor;
    this.context.lineWidth = this.curSize;
    this.context.beginPath();
    var prevMousePoint = this.lastMousePoint;
    this.context.moveTo( this.lastMousePoint.x, this.lastMousePoint.y );
    this.updateMousePosition( event );
    this.context.globalAlpha = 1.0;
    this.context.globalCompositeOperation = "destination-out";
    if(prevMousePoint.x == this.lastMousePoint.x && prevMousePoint.y == this.lastMousePoint.y){
        this.context.lineTo( this.lastMousePoint.x +0.01, this.lastMousePoint.y +0.01 );
    }else{
        this.context.lineTo( this.lastMousePoint.x, this.lastMousePoint.y );
    }
    this.context.closePath();
    this.context.stroke();
    this.context.globalAlpha = 1.0;
    this.context.globalCompositeOperation = "source-over";
    event.preventDefault();
}
Sketcher.prototype.updateCanvasByBrush = function (event) {
    //this.drawSelectedImage(true);
    var halfBrushW = this.curSize/2;//this.brush.width/2;
    var halfBrushH = this.curSize/2;//this.brush.height/2;
    
    var start = { x:this.lastMousePoint.x, y: this.lastMousePoint.y };
    this.updateMousePosition( event );
    var end = { x:this.lastMousePoint.x, y: this.lastMousePoint.y };
    
    var distance = parseInt( Trig.distanceBetween2Points( start, end ) );
    var angle = Trig.angleBetween2Points( start, end );
    
    this.context.globalAlpha = 1.0;
    this.context.globalCompositeOperation = "source-over";

    var x,y;
    for ( var z=0; (z<=distance || z==0); z++ )
    {
        x = start.x + (Math.sin(angle) * z) - halfBrushW;
        y = start.y + (Math.cos(angle) * z) - halfBrushH;
        this.context.drawImage(this.brush, x, y);
    }    
    event.preventDefault();
}


Sketcher.prototype.updateCanvasByFill = function (event) {
    var col = this.hexToRgb(this.curColor);
    this.fill_tool.setFillColor(col[0], col[1], col[2], 255);
    this.fill_tool.fill(this.lastMousePoint.x, this.lastMousePoint.y);
}

Sketcher.prototype.setImage = function(index) {
        this.drawer.find(".drawing-background").removeClass("selected");
        var drawingImg = this.drawer.find(".drawing-background").get(index);
        $(drawingImg).addClass('selected');
        this.drawSelectedImage(true);
}
Sketcher.prototype.setTool = function(tool) {
    this.drawer.find(".tool").removeClass("selected");
    var toolSelected;
    this.drawer.find("." + tool).addClass("selected");    
    switch(tool) {
        case 'tool-crayon':
            toolSelected = 'crayon';
        break;
        case 'tool-marker':
            toolSelected = 'marker';
        break;
        case 'tool-eraser':
            toolSelected = 'eraser';
        break;
        case 'tool-filler':
            toolSelected = 'filler';
        break;
    }
    this.curTool = toolSelected;
    this.loadBrush();
}
Sketcher.prototype.setColor = function(color) {
        this.drawer.find(".color").removeClass("selected");
        this.drawer.find(".color[data-color='" + color +"']").addClass("selected");
        this.curColor = color;
        this.loadBrush();
}
Sketcher.prototype.setSize = function(val) {
        this.drawer.find(".size").removeClass("selected");
        this.drawer.find(".sizeContainer div[data-size='" + val + "']").addClass("selected");
        this.curSize = val;
        this.loadBrush();
}
Sketcher.prototype.clear = function() {
    this.loadBrush();
    this.clear();
}
Sketcher.prototype.addNote = function(note) {
    var container = this.drawer.find(".drawing-area-notes")[0];

    note = note || {
        autoFocus: true,
        width: "300px",
        height: "200px",
        left: $(container).outerWidth()/2 - 150 + "px",
        top: $(container).outerHeight()/2 - 100 + "px",
        text: ""
    };

    var self = this;
    var myNote = document.createElement("div");
    if (typeof(window.scdrawerNoteLastZindex) === "undefined") window.scdrawerNoteLastZindex = 0;
    window.scdrawerNoteLastZindex++;
    $(container).append(myNote);
    $(myNote).addClass("scdrawer-note")
    .css("position", "absolute")
    .css("z-index", window.scdrawerNoteLastZindex)
    .css("top", note.top)
    .css("left", note.left)
    .css("width", note.width)
    .css("height", note.height)
    .draggable({
        containment: "parent",
        stop: function() { self.drawerObj.save(); }
    })
    .resizable({
        containment: "parent",
        stop: function() { self.drawerObj.save(); }
     });

    var myToolbar = document.createElement("div");
    $(myNote).append(myToolbar);
    $(myToolbar).addClass("scdrawer-note-tb");

    var myTextArea = document.createElement("textarea");
    myTextArea.value = note.text;
    $(myNote).append(myTextArea);
    $(myTextArea).on("touchstart", function (e) { e.stopPropagation(); });
    /*$(myTextArea).css("width", "100%")
    .css("height", "100%");*/

    var myCloseBtn = document.createElement("span");
    $(myToolbar).append(myCloseBtn);
    $(myCloseBtn).addClass("scdrawer-note-close");
    $(myCloseBtn).on("touchstart", function (e) { e.stopPropagation(); });
    $(myCloseBtn).click(function (e) {
        e.preventDefault();
        pubcoder.confirm(self.drawerObj.options.noteDeletionMessage, null, self.drawerObj.options.noteDeletionCancelButtonLabel, self.drawerObj.options.noteDeletionDeleteButtonLabel, function(canceled) {
            if (canceled) return;
            $(myNote).remove();
            self.drawerObj.save();
        });
    });

    // $(myNote).css("left", $(container).outerWidth()/2 - $(myNote).outerWidth()/2 + "px");
    // $(myNote).css("top", $(container).outerHeight()/2 - $(myNote).outerHeight()/2 + "px");

    $(myTextArea).on("input", function (event) {
        myTextArea.lastInputEvent = new Date();
        setTimeout(function() {
            if (new Date() - myTextArea.lastInputEvent >= 500) {
                self.drawerObj.save();
            }
        }, 500);
        // console.log("textarea content changed", self);
    });
    if (note.autoFocus) $(myTextArea).focus();
}





Drawer = function (objectID, options) {
    this.options = options;
    var bgcolor = options.backgroundColor
    var enableAutosave = options.autosave
    var annotationMode = options.annotationMode
    $("#"+objectID)[0].drawer = this;
    $("#"+objectID).trigger('SC:drawer:init:before');
    this.sketcher = {};
    this.artworksObjectStoreName = "artworks";
    this.annotationMode = annotationMode;
    
    var self = this;
    initSizeBoxesAndImages(objectID);
    var canvasID = objectID;
    var brushImage = document.createElement('img');
    $("#"+objectID).on(PubCoder.Events.Show , function(e){
        if ($(this).attr("data-inited") == "true") return;
        $(this).attr("data-inited", "true");
        // console.warn("initing");
        var sk = new Sketcher(canvasID, brushImage, bgcolor);
        sk.autosave = enableAutosave;
        var canv = sk.canvas[0];
        self.artworkStorageKey = pubcoder.projectID + "-" + sk.canvasID + "-" + $(this).attr("data-storage-key"); // so different workspaces don't mess up
        self.sketcher = sk;
        setTimeout(function(){ 
            self.init();
        },100);
        $("#"+objectID).trigger('SCDrawerReady');
    });
}

Drawer.prototype.connectDB = function(callback) {
    var self = this;
    var request = indexedDB.open("scdrawer", 2);
    request.onerror = function(event) {
        console.error("error opening scdrawer database", event);
        callback(true);
    };
    request.onupgradeneeded = function(event) {
        console.warn("scdrawer database needs update");
        try {
            var db = event.target.result;
            var objectStore = db.createObjectStore(self.artworksObjectStoreName, { keyPath: "artworkId" });
            objectStore.transaction.oncomplete = function(event) {
                callback(false, db);
            };
        } catch (error) {
            console.error("error updating database", error);
            callback(true);
        }
    };
    request.onsuccess = function(event) {
        // console.warn("database opened");
        var db = null;
        try {
            db = event.target.result;
        } catch (error) {
            console.error("error connecting to database", error);
            callback(true);
        }
        callback(false, db);
    };
}

Drawer.prototype.init = function() {
    var sk = this.sketcher;
    var objectID = sk.canvasID;
    var self = this;

    console.log("initializing drawer " + sk.canvasID);

    var continueLoading = function(binImgData, artworkBackground, notes, saveAfterLoad) {
        if (binImgData != null) {
            try {
                $("#"+artworkBackground).trigger("click");
            } catch (ex) {}
            console.log("loading artwork", self.artworkStorageKey);
            var ctx = sk.context;
            var img = new Image();
            img.src = binImgData;
            img.onload = function () {
                ctx.drawImage(img, 0, 0);
                if (saveAfterLoad === true) self.save();
            };
        } else {
            try {
                $("#"+objectID+" .drawing-background.selected").trigger("click");
            } catch (ex) {}
            console.log("no stored image data for artwork", self.artworkStorageKey);    
        }
        if (notes != null && notes.length > 0) {
            notes.forEach(function (note) {
                sk.addNote(note);
            });
        }
        try {
            $("#"+objectID+" .tool.selected").trigger("mousedown");
        } catch (ex) {}
        try {
            $("#"+objectID+" .color.selected").trigger("mousedown");
        } catch (ex) {}
    };

    // try to restore legacy localstorage save
    try {
        var binImgData = null;
        if (sk.autosave && localStorage) binImgData = localStorage.getItem(this.artworkStorageKey);
        if (binImgData != null) {
            console.warn("restoring artwork data from localStorage", this.artworkStorageKey);
            var artworkBackground = localStorage.getItem(this.artworkStorageKey + "-bkgnd");
            var notes = null;
            try {
                notes = JSON.parse(localStorage.getItem(this.artworkStorageKey + "-notes"));
            } catch (error) {}
            if (typeof(indexedDB) !== "undefined") {
                // if indexedDB is available, move data to it
                continueLoading(binImgData, artworkBackground, notes, true);
                localStorage.removeItem(this.artworkStorageKey);
                localStorage.removeItem(this.artworkStorageKey + "-bkgnd");
                localStorage.removeItem(this.artworkStorageKey + "-notes");
            } else {
                continueLoading(binImgData, artworkBackground, notes);
            }
            return;
        }
    } catch (ex) {
        console.error(ex);
    }

    // try to restore from IndexedDB
    if (sk.autosave && window.indexedDB) {
        self.connectDB(function (error, db) {
            if (error) {
                continueLoading();
                return;
            }
            try {
                var drawerObjectStore = db.transaction(self.artworksObjectStoreName, "readwrite").objectStore(self.artworksObjectStoreName);
                var getReq = drawerObjectStore.get(self.artworkStorageKey);
                getReq.onsuccess = function(event) {
                    var data = event.target.result;
                    var binImgData = null;
                    var artworkBackground = null;
                    var notes = null;
                    try {
                        binImgData = data.foreground;
                        artworkBackground = data.background;
                        notes = data.notes
                    } catch (error) {
                        // no  artwork found
                    } finally {
                        continueLoading(binImgData, artworkBackground, notes);
                    }
                }
                getReq.onerror = function(event) {
                    console.error("error getting artwork", self.artworkStorageKey, event);
                    continueLoading();
                }
            } catch (error) {
                // database not found
                continueLoading();
            }
        });
    } else {
        continueLoading();
    }
}

Drawer.prototype.save = function () {
    var sk = this.sketcher;
    var canv = sk.canvas[0];
    var ctx = sk.context;
    var self = this;

    console.log("saving artwork", self.artworkStorageKey);
    
    var binImgData = canv.toDataURL();
    var selectedBackground = $(".drawing-background.selected", sk.drawer).length > 0 ? $(".drawing-background.selected", sk.drawer)[0].id : 0;
    var notes = [];
    sk.drawer.find(".scdrawer-note").each(function(index, note) {
        note = $(note); // console.warn(note);
        const noteData = {
            top: note.css("top"),
            left: note.css("left"),
            width: note.css("width"),
            height: note.css("height"),
            text: note.find("textarea")[0].value
        }
        notes.push(noteData);
    });
    if (typeof(indexedDB) === "undefined") {
        // if indexedDB is not available, fall back to localstorage
        if (!localStorage) return;
        localStorage.setItem(this.artworkStorageKey, binImgData);
        try {
            localStorage.setItem(this.artworkStorageKey + "-bkgnd", selectedBackground);
        } catch (ex) {}
        localStorage.setItem(this.artworkStorageKey + "-notes", JSON.stringify(notes));
        return;
    }

    self.connectDB(function(error, db) {
        if (error) return;
        var drawerObjectStore = db.transaction(self.artworksObjectStoreName, "readwrite").objectStore(self.artworksObjectStoreName);

        var getReq = drawerObjectStore.get(self.artworkStorageKey);
        getReq.onerror = function(event) {
            console.error("error getting", self.artworkStorageKey, event);
        }
        getReq.onsuccess = function(event) {
            var data = event.target.result;
            if (typeof(data) === "undefined") {
                // console.warn("adding", self.artworkStorageKey);
                var addReq = drawerObjectStore.add({
                    artworkId: self.artworkStorageKey,
                    foreground: binImgData,
                    background: selectedBackground,
                    notes: notes
                });
                addReq.onerror = function(event) {
                    console.error("error adding", self.artworkStorageKey, event);
                };
                addReq.onsuccess = function(event) {
                    console.log("successfully added artwork", self.artworkStorageKey);
                };
            } else {
                // console.warn("updating", self.artworkStorageKey);
                data.foreground = binImgData;
                data.background = selectedBackground;
                data.notes = notes;
                var updateReq = drawerObjectStore.put(data);
                updateReq.onerror = function(event) {
                    console.error("error updating", self.artworkStorageKey, event);
                };
                updateReq.onsuccess = function(event) {
                    console.log("successfully updated artwork", self.artworkStorageKey);
                };
            }
        }      
    });
}

function initSizeBoxesAndImages(objectID) {
    $('#'+objectID+' .drawing-images').hide();
    $('#'+objectID+' .drawing-size').hide();
    
    // Assign Base64 Image data to image src
    $('#'+objectID+' img[data-src]').each(function(index,elem) {
        var s=$(elem).data('src');
        $(elem).attr('src',s);
    });
    // Set color in tool bar
    $('#'+objectID+' .color').each(function(){
        var t = $(this)
        var c = t.data('color');
        t.css('background-color',c);
    });
    
    setTimeout(function() {
        var i = document.getElementById(objectID).getElementsByClassName('size').length;
        i = i - 1;
        var fontSizeVal = 10;
        var size = 0;
        var sizeLabel = 0;
        var reducingFactor = 0;
        var containerHeight = $('#'+objectID+' .tool-bar .drawing-size > .sizeContainer').height();
        while (i > -1) {
            size = document.getElementById(objectID).getElementsByClassName('size')[i].getAttribute('data-size');
            size = size - (size*reducingFactor/100);
            if (size < (containerHeight - 5)) {
                document.getElementById(objectID).getElementsByClassName('size')[i].setAttribute('style','height:'+size+'px;width:'+size+'px;border-radius:'+size+'px;');
            }
            else {
                sizeLabel = document.getElementById(objectID).getElementsByClassName('size')[i].getAttribute('data-size');
                size = containerHeight - 5;
                document.getElementById(objectID).getElementsByClassName('size')[i].setAttribute('style','height:'+size+'px;width:'+size+'px;border-radius:'+size+'px;');
                document.getElementById(objectID).getElementsByClassName('size')[i].innerHTML='<span style="position:relative;overflow:hidden;font-size:'+fontSizeVal+'px;vertical-align:top;height:'+size+'px;width:'+size+'px;text-align:center;display:inline-block;color:#fff;">'+sizeLabel+'</span>';
            }
            i = i - 1;
        }
        $('#'+objectID+' .tool-bar .drawing-size .sizeContainer .size > span').each(function() { 
            var topVal = Math.round((containerHeight - 5 - fontSizeVal) / 2 -0.01);
            $(this).css('top',topVal+'px');
        });
        $('#'+objectID+' .tool-bar .drawing-size').show();
        $('#'+objectID+' .drawing-images').show();
    }, 100);
}