<script lang="ts">
import { vue3dLoader } from "vue-3d-loader";

export default defineComponent({
  name: 'ReactiveVue3dCanvas',
  extends: vue3dLoader,
  setup: vue3dLoader.setup,

  mounted() {
    const element = this.$el as HTMLElement;

    console.log(this.$el)

    element.style.overflow = 'hidden';

    const canvas = element.querySelector('canvas') as HTMLCanvasElement;

    // const resizeEventHandle = () => {
    //   const width = element.clientWidth;
    //   const height = element.clientHeight;

    //   canvas.style.width = width + 'px';
    //   canvas.style.height = height + 'px';

    //   if (!this.renderer) return;

    //   this.renderer.setSize(width, height);
    //   this.camera.aspect = width / height;
    //   this.camera.updateProjectionMatrix();
    // };

    // element.addEventListener('resize', resizeEventHandle);

    // onUnmounted(() => {
    //   console.log("unmounting");

    //   element.removeEventListener('resize', resizeEventHandle);
    // });

    // resizeEventHandle();
  },
});
</script>