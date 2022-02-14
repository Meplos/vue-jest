import HelloWorld from "@/components/HelloWorld.vue";
import { cwShallowMount } from "@/../tests/test-utils/tools";

describe("HelloWorld.vue", () => {
  beforeEach(() => {});

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = cwShallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
