<style>
    img {
        margin: 0;
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    #circle-sm,
    #triangle-sm,
    #square-sm {
        width: 5vw;
        height: 5vw;
        animation: rotate-left 50000ms infinite;
    }
    #circle-med,
    #triangle-med,
    #square-med {
        width: 10vw;
        height: 10vw;
        animation: rotate-right 70000ms infinite;
    }
    #circle-lrg,
    #triangle-lrg,
    #square-lrg {
        width: 25vw;
        height: 25vw;
        animation: rotate-alternate 100000ms infinite;
    }
    #circle-sm {
        top: 42%;
        left: 5%;
    }
    #triangle-sm {
        top: 55%;
        left: 50%;
    }
    #square-sm {
        top: 75%;
        left: 5%;
    }
    #circle-med {
        top: 27%;
        left: 65%;
    }
    #triangle-med {
        top: 50%;
        left: 17%;
    }
    #square-med {
        top: 65%;
        left: 65%;
    }
    #circle-lrg {
        top: 75%;
        left: 35%;
    }
    #triangle-lrg {
        top: 25%;
        left: 80%;
    }
    #square-lrg {
        top: 2%;
        left: 25%;
    }
    .shape {
        z-index: -1;
        margin: 0;
        flex: none;
        position: absolute;
    }

    @keyframes rotate-right {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes rotate-left {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
    @keyframes rotate-alternate {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(-180deg)
        }
        100% {
            transform: rotate(180deg);
        }
    }
</style>

<div id="circle-sm" class="shape"><img src="svg_shapes/circle_dark.svg" alt="colorful shape"/></div>
<div id="circle-med" class="shape"><img src="svg_shapes/circle_light.svg" alt="colorful shape"/></div>
<div id="circle-lrg" class="shape"><img src="svg_shapes/circle_main.svg" alt="colorful shape"/></div>
<div id="triangle-med" class="shape"><img src="svg_shapes/triangle_dark.svg" alt="colorful shape"/></div>
<div id="triangle-sm" class="shape"><img src="svg_shapes/triangle_light.svg" alt="colorful shape"/></div>
<div id="triangle-lrg" class="shape"><img src="svg_shapes/triangle_main.svg" alt="colorful shape"/></div>
<div id="square-sm" class="shape"><img src="svg_shapes/square_dark.svg" alt="colorful shape"/></div>
<div id="square-med" class="shape"><img src="svg_shapes/square_light.svg" alt="colorful shape"/></div>
<div id="square-lrg" class="shape"><img src="svg_shapes/square_main.svg" alt="colorful shape"/></div>









