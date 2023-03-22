import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },

  template: `
    <assignment-list :assignments="inProgressAssignment" title="In Progress Assignments"></assignment-list>

    <assignment-list :assignments="completedAssignment" title="Completed Assignments"></assignment-list>
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
    inProgressAssignment() {
      return this.assignments.filter(a => !a.completed);
    },

    completedAssignment() {
      return this.assignments.filter(a => a.completed);
    }
  }
}