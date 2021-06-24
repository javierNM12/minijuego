"use strict";

$(() => {
    $('#si').hover(cambiarPosicion)
});

let cambiarPosicion = () => {

    let top = Math.floor((Math.random() * 100) + 1) + '%';
    let left = Math.floor((Math.random() * 100) + 1)+ '%';

    $('#si').css({
        top: top,
        left: left,
        position: 'absolute'
    });
}