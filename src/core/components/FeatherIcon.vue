<script lang="ts">
import { defineComponent, h } from 'vue'
import * as feather from 'feather-icons'

export default defineComponent({
  name: 'FeatherIcon',
  props: {
    name: {
      type: String,
      default: 'feather',
      validator: (name: string) => {
        if (!feather.icons[name]) {
          throw new Error(`"${name}" is not an available icon type.`);
        }

        return true
      }
    },
    size: {
      type: Number,
      default: 24
    }
  },
  setup(props) {
    const icon = feather.icons[props.name]

    return () => h('svg', {
      ...icon.attrs,
      fill: 'none',
      height: props.size,
      width: props.size,
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': 2,
      class: [icon.attrs.class, 'vue-feather__content'],
      innerHTML: icon.contents
    })
  }
})
</script>

