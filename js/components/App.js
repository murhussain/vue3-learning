import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: { Assignments, Panel },

  template: `
    <div class="grid gap-6">
      <Assignments></Assignments>
      <panel>
        this is my default content
      </panel>

      <panel>
        <template v-slot:heading>
          Hey there
        </template>
        <template v-slot:default>
          this is my default content
        </template>
      </panel>

      <panel>
        <template v-slot:heading>
          Hey there
        </template>
        
        this is my default content

        <template v-slot:footer>
          Click here to learn more....
        </template>
      </panel>

      <panel theme="light">
        <template v-slot:heading>
          Hey there
        </template>
        
        this is my default content

        <template v-slot:footer>
          Click here to learn more....
        </template>
      </panel>
    </div>
  `,
}
