import MainHeader from "./header";
import MainSection from "./section";

/**
 * MainBody Component
 */
export default {
    components: {
        MainHeader,
        MainSection,
    },

    template: `
<div>
    <main-header></main-header>
    <main-section></main-section>
</div>
    `,
};
