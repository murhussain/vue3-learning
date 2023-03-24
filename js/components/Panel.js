export default {
  template: `
    <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
      <h1 class="font-bold mb-2">
        <slot name="heading" />
      </h1>

      <slot />
    </div>
  `,

  props: {
    heading: String,
  }
}