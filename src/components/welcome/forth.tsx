import {defineComponent} from "vue";
import s from './First.module.scss'
import icon from '../../assets/icons/cloud.svg'
import {RouterLink} from "vue-router";

export const Forth = defineComponent({
    setup: () => {
        return () => (
            <div class={s.wrapper}>

                <div class={s.card}>
                    <img src={icon}/>
                    <h2>每日提醒 <br/>还会省钱</h2>
                </div>

                <div class={s.actions}>
                    <RouterLink class={s.fake} to="start">跳过</RouterLink>
                    <RouterLink to="/welcome/1">完成</RouterLink>
                    <RouterLink class={s.fake} to="start">跳过</RouterLink>
                </div>

            </div>
        )
    }
})
