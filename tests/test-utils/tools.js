import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import i18n from "@/i18n";

const cwShallowMount = (Component, options) => {
  const localvue = createLocalVue();
  const vuetify = new Vuetify();
  //   const i18n = new VueI18n();
  return shallowMount(Component, {
    localvue,
    vuetify,
    i18n,
    ...options,
  });
};

export { cwShallowMount };
