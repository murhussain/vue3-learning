import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },

  template: `
    <main class="space-y-10">
      <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="completed" title="Completed"></assignment-list>

      <form>
      <div class="border border-gray-600 text-black">
      <input type="text" placeholder="Add Assignment" class="p-2">
      <button type="submit" class="bg-white p-2 border-l">Add</button>
      </div>
      </form>
    </main>
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
    inProgress() {
      return this.assignments.filter(a => !a.completed);
    },

    completed() {
      return this.assignments.filter(a => a.completed);
    }
  }
}