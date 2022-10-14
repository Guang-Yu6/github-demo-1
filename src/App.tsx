import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "./App.scss"

export const App = defineComponent({
  setup() {
    return () => (
      <div class="page">
        {/*// 展示的是welcome*/}
        <RouterView />
      </div>
    )
  }
})