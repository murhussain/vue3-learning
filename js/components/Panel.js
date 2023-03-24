export default {
  template: `
    <div :class="{
      'p-4 border rounded-lg': true,
      'bg-white text-black border-gray-300': theme === 'light',
      'bg-gray-700 text-white border-gray-600': theme === 'dark'
    }">
      <h1 v-if="$slots.heading" class="font-bold mb-2">
        <slot name="heading" />
      </h1>

      <slot />

      <footer v-if="$slots.footer" class="border-t border-gray-600 mt-4 pt-4 text-sm">
        <slot name="footer"></slot>
      </footer>
    </div>
  `,

  props: {
    theme: {type: String, default: 'dark'}
  }
}