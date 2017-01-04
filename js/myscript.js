'use strict';

let populateItem = function(array, index, listNode){
    let heading = document.createElement('h2');
    let post = document.createElement('p');
    heading.textContent=array[index].date;
    post.textContent=array[index].post;

    console.log(twemoji.parse(array[index].post));

    //console.log(listNode);
    listNode.appendChild(heading);
    listNode.appendChild(post);
}

$(document).ready(function(){

    //console.log(item.length);
    let tempItem = item.slice(3, -1);

    //console.log(item);
    //console.log(tempItem);

    let node=$('#list')[0];

    for(let i=0;i<3;i++){
        populateItem(item, i, node);
    }

    for(let i=3;i<item.length-2;i++){
        let dice = Math.floor(Math.random()*tempItem.length);
        populateItem(tempItem, dice, node);
        tempItem.splice(dice, 1);
    }

    populateItem(item, item.length-1, node);

    let itemList=$('#list')[0];
    //console.log(document);
    twemoji.parse(document);
});
