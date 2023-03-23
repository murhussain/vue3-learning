import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
    <main class="space-y-10">
      <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

      <assignment-create @add="addNew"></assignment-create>
    </main>
  `,

  data() {
    return {
      assignments: [
        { id: 1, name: 'Finish project', completed: false, tag: 'math' },
        { id: 2, name: 'Read chapter 4', completed: false, tag: 'science' },
        { id: 2, name: 'Turn in homework', completed: false, tag: 'math' }
      ],
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
    addNew(name) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: name,
        completed: false,
      });
    }
  }
}