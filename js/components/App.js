export default {
  template: `
    <section v-if="inProgressAssignment.length">
      <h1 class="font-bold mb-2">In Progress Assignments</h1>
      <ul>
        <li 
          v-for="assignment in inProgressAssignment" 
          :key="assignment.id"
        >
          <label>
            {{assignment.name}}
            <input type="checkbox" v-model="assignment.completed">
          </label>
        </li>
      </ul>
    </section>

    <section v-if="completedAssignment.length" class="mt-8">
      <h1 class="font-bold mb-2">Completed Assignments</h1>
      <ul>
        <li 
          v-for="assignment in completedAssignment" 
          :key="assignment.id"
        >
          <label>
            {{assignment.name}}
            <input type="checkbox" v-model="assignment.completed">
          </label>
        </li>
      </ul>
    </section>
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
};
