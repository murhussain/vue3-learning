export default {
  template: `
    <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
      <h1 class="font-bold mb-2" v-text="title"></h1>
    </div>
  `,

  data() {
    return {
      title: 'Hello world',
    }
  }
}