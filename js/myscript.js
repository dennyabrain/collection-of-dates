$(document).ready(function(){
    console.log('ready');
    twemoji.size = '16x16';
    var t = twemoji.parse(document.body);

    console.log(t);
})
