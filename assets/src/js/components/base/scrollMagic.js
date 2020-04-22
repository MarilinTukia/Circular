// import ScrollMagic from "scrollmagic";
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({triggerElement: '.heading1'})
.setClassToggle('.heading1', 'show')
.addTo(controller);

const scene1 = new ScrollMagic.Scene({triggerElement: '.heading2'})
.setClassToggle('.heading2', 'show')
.addTo(controller);

