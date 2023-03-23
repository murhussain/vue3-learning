import Assignment from './Assignment.js';

export default {
  components: { Assignment },

  template: `
    <section v-if="assignments.length">
      <h1 class="font-bold mb-2">
        {{ title }}
        <span>({{assignments.length}})</span>
      </h1>

      <div class="flex gap-2">
        <button v-for="tag in tags" class="border rounded px-1 py-px text-xs">{{ tag }}</button>
      </div>

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
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
  }, 

  computed: {
    tags() {
      return ['science', 'math', 'reading'];
      // let tags = [];

      // this.assignments.forEach(assignment => {
      //   assignment.tags.forEach(tag => {
      //     if (! tags.includes(tag)) {
      //       tags.push(tag);
      //     }
      //   });
      // });

      // return tags;
    }
  }
}