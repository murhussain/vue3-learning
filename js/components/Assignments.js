import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },

  template: `
    <main class="space-y-10">
      <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

      <form @submit.prevent="addNew">
        <div class="border border-gray-600 text-black">
          <input v-model="newAssignment" type="text" placeholder="Add Assignment" class="p-2">
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
      </form>
    </main>
  `,

  data() {
    return {
      assignments: [
        { id: 1, name: 'Finish project', completed: false },
        { id: 2, name: 'Read chapter 4', completed: false },
        { id: 2, name: 'Turn in homework', completed: false }
      ],

      newAssignment: '',
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => ! assignment.completed),
        completed: this.assignments.filter(assignment => assignment.completed)
      };
    },
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