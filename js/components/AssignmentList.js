export default {
  template: `
    <section v-if="assignments.length">
      <h1 class="font-bold mb-2">{{ title }}</h1>
      <ul>
        <li 
          v-for="assignment in assignments" 
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

  props: {
    assignments: Array,
    title: String,
  }
}