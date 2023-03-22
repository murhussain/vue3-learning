export default {
  template:`
    <button class="bg-gray-200 hover:bg-gray-400 border rounded 
      px-5 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      :disabled="processing"
    >
      <slot />
    </button>
  `,

  mounted() {
    alert('Mounted');
  },

  data() {
    return{
      processing: true
    };
  }
}