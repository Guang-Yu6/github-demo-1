import {defineComponent} from "vue";

export const Second = defineComponent({
    setup:(props, context)=>{
        return () => (
            <div> 第4个 </div>
        )
    }
})