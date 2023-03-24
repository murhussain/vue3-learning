export default {
  template: `
    <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
      <h1 class="font-bold mb-2">
        <slot />
      </h1>
    </div>
  `,

  props: {
    heading: String,
  }
}