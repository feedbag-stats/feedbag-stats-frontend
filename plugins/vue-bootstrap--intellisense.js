// this file is never imported
// it's only used to enable intellisense for bootstrap-vue components

import Vue from "vue";

import bContainer from "bootstrap-vue/es/components/layout/container";
import bRow from "bootstrap-vue/es/components/layout/row";
import bCol from "bootstrap-vue/es/components/layout/col";
import bFormRow from "bootstrap-vue/es/components/layout/form-row";

import bAlert from "bootstrap-vue/es/components/alert/alert";
import bBadge from "bootstrap-vue/es/components/badge/badge";
import bNav from "bootstrap-vue/es/components/nav/nav";
import bNavText from "bootstrap-vue/es/components/nav/nav-text";
import bNavItem from "bootstrap-vue/es/components/nav/nav-item";
import bNavItemDropdown from "bootstrap-vue/es/components/nav/nav-item-dropdown";
import bNavbar from "bootstrap-vue/es/components/navbar/navbar";
import bNavbarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
import bNavbarBrand from "bootstrap-vue/es/components/navbar/navbar-brand";
import bNavbarToggle from "bootstrap-vue/es/components/navbar/navbar-toggle";
import bCollapse from "bootstrap-vue/es/components/collapse/collapse";
import bDropdown from "bootstrap-vue/es/components/dropdown/dropdown";
import bDropdownItem from "bootstrap-vue/es/components/dropdown/dropdown-item";
import bButton from "bootstrap-vue/es/components/button/button";

Vue.component("b-container", bContainer);
Vue.component("b-row", bRow);
Vue.component("b-col", bCol);
Vue.component("b-form-row", bFormRow);

Vue.component("b-alert", bAlert);
Vue.component("b-badge", bBadge);
Vue.component("b-nav", bNav);
Vue.component("b-nav-text", bNavText);
Vue.component("b-nav-item", bNavItem);
Vue.component("b-nav-item-dropdown", bNavItemDropdown);
Vue.component("b-navbar", bNavbar);
Vue.component("b-navbar-nav", bNavbarNav);
Vue.component("b-navbar-brand", bNavbarBrand);
Vue.component("b-navbar-toggle", bNavbarToggle);
Vue.component("b-collapse", bCollapse);
Vue.component("b-dropdown", bDropdown);
Vue.component("b-dropdown-item", bDropdownItem);
Vue.component("b-button", bButton);
