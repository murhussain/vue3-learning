export default {
  template: `
    <form @submit.prevent="addNew">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" type="text" placeholder="Add Assignment" class="p-2">
        <button type="submit" class="bg-white p-2 border-l">Add</button>
      </div>
    </form>
  `,

  props: {
    assignments: Array,
  },

  data() {
    return {
      newAssignment: '',
    }
  },

  methods: {
    addNew() {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: this.newAssignment,
        completed: false,
      });

      this.newAssignment = '';
    }
  }
}