import Vue from "vue/dist/vue.esm.browser.min.js"
import MainHeader from "../scripts/components/header";

/**
 * samples page vue instance
 */
new Vue({
    el: "#app",
    components: {
        MainHeader,
    },
    data: function(){
        return{};
    },
});
