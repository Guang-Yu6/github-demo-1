import {defineComponent} from "vue";
export const First = defineComponent({
    setup:()=>{
        return () => (
            <div> 第N个 </div>
        )
    }
})