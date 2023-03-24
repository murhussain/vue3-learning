import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
    <main class="flex gap-8">
      <assignment-list :assignments="filters.inProgress" title="In Progress">
        <assignment-create @add="addNew"></assignment-create>
      </assignment-list>

      
      <div v-show="showCompleted">
        <assignment-list 
          :assignments="filters.completed" 
          title="Completed" 
          can-toggle 
          @toggle="showCompleted = !showCompleted"
        ></assignment-list>
      </div>
    </main>
  `,

  data() {
    return {
      assignments: [],
      showCompleted: true,
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