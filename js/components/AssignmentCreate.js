export default {
  template: `
    <form @submit.prevent="inputData">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" type="text" placeholder="Add Assignment" class="p-2">
        <button type="submit" class="bg-white p-2 border-l">Add</button>
      </div>
    </form>
  `,

  data() {
    return {
      newAssignment: '',
    }
  },

  methods: {
    inputData() {
      // for notifying parent component for new assignment to be added
      this.$emit('add', this.newAssignment);

      // clearing input
      this.newAssignment = '';
    }
  }
}