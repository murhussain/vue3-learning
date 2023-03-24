import Assignment from './Assignment.js';
import AssignmentTag from './AssignmentTag.js';
import Panel from "./Panel.js";

export default {
  components: { Assignment, AssignmentTag, Panel },

  template: `
    <Panel v-if="assignments.length" class="">
      <div class="flex items-start justify-between">
        <h1 class="font-bold mb-2">
          {{ title }}
          <span>({{assignments.length}})</span>
        </h1>
        <button v-show="canToggle" @click="$emit('toggle')">&times</button>
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

      <template v-slot:footer>
        My footer goes here
      </template>
    </Panel>
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