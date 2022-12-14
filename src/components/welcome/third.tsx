import {defineComponent} from "vue";
import s from './First.module.scss'
import icon from '../../assets/icons/chart.svg'
import {RouterLink} from "vue-router";

export const Third = defineComponent({
    setup: () => {
        return () => (
            <div class={s.wrapper}>

                <div class={s.card}>
                    <img src={icon}/>
                    <h2>每日提醒 <br/>不遗漏每一笔账单</h2>
                </div>

                <div class={s.actions}>
                    <RouterLink class={s.fake} to="start">跳过</RouterLink>
                    <RouterLink to="/welcome/4">下一页</RouterLink>
                    <RouterLink to="start">跳过</RouterLink>
                </div>

            </div>
        )
    }
})