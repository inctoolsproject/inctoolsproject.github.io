
window.onload = function (e) {
    liff.init(function () {
        initializeApp();
    });
    $('button').hover(function(){
    $('.glitch-wrapper').toggleClass('paused');
    $('body').toggleClass('paused');
    });
};

function initializeApp(){
    var type = getParameterByName('type')
    if (type=== "text") {
        liff.sendMessages([{type: 'text',text: getParameterByName('text')}]).then(function () {liff.closeWindow()});
    }else if(type=="sticker"){
        var stk = getParameterByName('tstk');
        var sid = getParameterByName('stkid');
        var pkg = getParameterByName('stkpkgid');
        var uriP = getParameterByName('uri');
        var uriz="line://shop/sticker/detail/"+pkg;
        var ep = '';
        if (uriP===null){
        }else{
            uriz=uriP
        }
        if (stk === 'animasi') {
            ep = "https://stickershop.line-scdn.net/stickershop/v1/sticker/"+sid+"/IOS/sticker_animation@2x.png";
        } else {
            ep = "https://stickershop.line-scdn.net/stickershop/v1/sticker/"+sid+"/IOS/sticker@2x.png";
        }
        liff.sendMessages([{
          type: "template",
          altText: "Sticker",
          template: {
             type: "image_carousel",
             columns: [{
                 imageUrl: ep,
                 action: {
                     type: "uri",
                     uri: uriz}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    }else if (type === 'audio') {
        liff.sendMessages([{
            type: 'audio',
            originalContentUrl: getParameterByName('link'),
            duration: 60000
        }]).then(function () {
            liff.closeWindow();
        });
    }else if (tipe === 'image') {
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img')
        }]).then(function () {
            liff.closeWindow();
        });
    }else if (tipe === 'video') {
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}