import { cwShallowMount } from "@/../tests/test-utils/tools.js";
import HelloI18n from "@/components/HelloI18n.vue";

describe("HelloI18n", () => {
  it("should translate message", () => {
    const wrapper = cwShallowMount(HelloI18n, {});
    expect(wrapper.text()).toMatch("hello");
  });
});
