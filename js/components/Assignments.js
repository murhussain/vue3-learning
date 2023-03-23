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
      assignments: [],
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

  created() {
    fetch('http://localhost:3000/assignments')
      .then(response => response.json())
      .then(assignment => {
        this.assignments = assignment;
        // console.log(assignment);
      });
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