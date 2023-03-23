import Assignment from './Assignment.js';
import AssignmentTag from './AssignmentTag.js';

export default {
  components: { Assignment, AssignmentTag },

  template: `
    <section v-if="assignments.length" class="">
      <div class="flex items-start justify-between">
        <h1 class="font-bold mb-2">
          {{ title }}
          <span>({{assignments.length}})</span>
        </h1>
        <button v-show="canToggle">&times</button>
      </div>

      <assignment-tag 
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map(a => a.tag)"
      />

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <assignment 
          v-for="assignment in filteredAssignments" 
          :key="assignment.id"
          :assignment="assignment"
        ></assignment>
      </ul>
      
      <slot></slot>
    </section>
  `,

  props: {
    assignments: Array,
    title: String,
    canToggle: {type: Boolean, default: false}
  }, 

  data() {
    return {
      currentTag: 'all',
    }
  },

  computed: {
    filteredAssignments() { 
      if (this.currentTag === 'all') {
        return this.assignments;
      }

      return this.assignments.filter(a => a.tag === this.currentTag);
    },
  }
}