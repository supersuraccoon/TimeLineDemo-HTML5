// DotSprite 
var DotSprite = cc.Sprite.extend({
    init:function (dotWidth, dotSize, dotSegments) {
		if (this._super()) {
			this._dotSize = dotSize;
            this._dotWidth = dotWidth;
            this._dotSegments = dotSegments;
            var draw = cc.DrawNode.create();
            this.addChild(draw, 99, 99);
            draw.drawDot(this.getPosition(), this._dotWidth, cc.c4f(1, 0, 0, 1));
		    bRet = true;
		}
		return bRet;
    },
    rect:function () {
        return new cc.rect(this.getPositionX() - this._dotWidth / 2, this.getPositionY() - this._dotWidth / 2, this._dotWidth, this._dotWidth);
    },
    setColor:function () {
        var draw = this.getChildByTag(99);
        draw.drawDot(this.getPosition(), this._dotWidth, cc.c4f(this.getColor().r / 255.0, this.getColor().g / 255.0, this.getColor().b / 255.0, 255));
    },
	setOpacity:function (opacity) {
	}
});
DotSprite.createDot = function (dotWidth, dotSize, dotSegments) {
    var dot = new DotSprite();
    if (dot && dot.init(dotWidth, dotSize, dotSegments)) return dot;
    return null;
};

//LineSprite
var LineSprite = cc.Sprite.extend({
    init:function (lineWidth, startPosition, endPosition) {
		if (this._super()) {
			this._lineWidth = lineWidth;
			this._startPosition = startPosition;
			this._endPosition = endPosition;

            var draw = cc.DrawNode.create();
            this.addChild(draw, 99, 99);
            draw.drawSegment(this._startPosition, this._endPosition, this._lineWidth, cc.c4f(1, 0, 0, 1));
		    bRet = true;
		}
		return bRet;
    },
    setColor:function () {
        //this._super.setColor();
        var draw = this.getChildByTag(99);
        draw.drawSegment(this._startPosition, this._endPosition, this._lineWidth, cc.c4f(this.getColor().r / 255.0, this.getColor().g / 255.0, this.getColor().b / 255.0, 255));
    }
});
LineSprite.createLine = function (lineWidth, startPosition, endPosition) {
    var line = new LineSprite();
    if (line && line.init(lineWidth, startPosition, endPosition)) return line;
    return null;
};