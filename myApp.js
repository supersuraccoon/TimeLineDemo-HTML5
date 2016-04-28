
var DemoLayer = cc.Layer.extend({
    init:function () {
        this._super();

        // close fps display
        cc.Director.getInstance().setDisplayStats(false);

        // get window size
        var winSize = cc.Director.getInstance().getWinSize();

        // create title
        var demoTitle = cc.LabelTTF.create("Timeline Demo", "Arial Black", 26);
        demoTitle.setVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        demoTitle.setPosition(cc.p(winSize.width / 2, winSize.height - 30));
        this.addChild(demoTitle, 1);

        // create info label receiving && updating delegate message
        this.infoLabel = cc.LabelTTF.create("XXX", "Arial Black", 25);
        this.infoLabel.setPosition(cc.p(winSize.width / 2, winSize.height - 80));
        this.addChild(this.infoLabel);

        // create timeline layer v + h
        var a = new Array();
        a.push("7.2012");
        a.push("8.2012");
        a.push("9.2012");
        a.push("10.2012");
        a.push("11.2012");
        a.push("12.2012");
        a.push("1.2013");
        a.push("2.2013");

        var timelineLayerH = TimelineLayer.createTimeline(this, new cc.size(winSize.width * 2 / 3, 100), a, TIMELINE_HORIZONTAL, TIMELINE_LABEL_DOWN);
        timelineLayerH.setPosition(cc.p(200, winSize.height / 2));
        this.addChild(timelineLayerH, 999, 999);

        var timelineLayerV = TimelineLayer.createTimeline(this, new cc.size(100, winSize.height * 2 / 3), a, TIMELINE_VERTICAL, TIMELINE_LABEL_RIGHT);
        timelineLayerV.setPosition(cc.p(50, 100));
        this.addChild(timelineLayerV, 999, 999);

        return true;
    },
    // TimelineLayer delegate
    spinStart:function(timeSpotTag) {
        this.infoLabel.setString("spinStart: " + timeSpotTag);
    },
    spinOver:function(timeSpotTag) {
        this.infoLabel.setString("spinOver: " + timeSpotTag);
    },
    timeSpotTouched:function(timeSpotTag) {
        this.infoLabel.setString("timeSpotTouched: " + timeSpotTag);
    }
});

var DemoScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new DemoLayer();
        layer.init();
        this.addChild(layer);
    }
});

