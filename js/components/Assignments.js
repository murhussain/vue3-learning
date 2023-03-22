import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },

  template: `
    <main class="space-y-10">
      <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="completed" title="Completed"></assignment-list>
    </main>
  `,

  data() {
    return {
      assignments: [
        { id: 1, name: 'Finish project', completed: false },
        { id: 2, name: 'Read chapter 4', completed: false },
        { id: 2, name: 'Turn in homework', completed: false }
      ]
    }
  },

  computed: {
    inProgress() {
      return this.assignments.filter(a => !a.completed);
    },

    completed() {
      return this.assignments.filter(a => a.completed);
    }
  }
}