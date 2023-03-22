import Assignment from './Assignment.js';

export default {
  components: { Assignment },

  template: `
    <section v-if="assignments.length">
      <h1 class="font-bold mb-2">{{ title }}</h1>
      <ul>
        <assignment 
          v-for="assignment in assignments" 
          :key="assignment.id"
          :assignment="assignment"
        ></assignment>
      </ul>
    </section>
  `,

  props: {
    assignments: Array,
    title: String,
  }
}