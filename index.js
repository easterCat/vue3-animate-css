import "animate.css";
import "./main.css";

const VueAnimateCss = {};

VueAnimateCss.install = function (Vue, option) {
    // direction => animate.css type
    // delay => animate,css delay time
    Vue.directive("animate", {
        mounted: function (el, binding, vnode, prevVnode) {
            console.log(binding);
            const { value } = binding;
            const { direction, delay, timing } = value;

            let values = ["animate__animated", "linear"];

            if (!!direction) {
                values.push(`animate__${direction}`);
            } else {
                values.push("animate__fadeIn");
            }

            if (!!delay) {
                values.push(`animate__delay-${delay}s`);
            }

            if (!!timing) {
                values.push(`animate__${timing}`);
            } else {
                values.push("animate__linear");
            }

            el.addEventListener(
                "animationend",
                function () {
                    const classes = el.classList;
                    classes.forEach((item) => {
                        if (item.includes("animate")) {
                            // remove animate class after anime
                            el.classList.remove(item);
                        }
                    });
                },
                false
            );

            el.className = `${el.classList.value} ${values.join(" ")}`;
            el.setAttribute("animate-data", values.join(" "));
        },
    });
};

export default VueAnimateCss;
