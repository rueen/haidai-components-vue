<template>
    <div>
        <countDown :beginTime="1559291857150" :endTime="1559896657150">
            <div slot-scope="props">
                距{{props.isStart ? '结束' : '开始'}}{{props.day}}天 {{props.hour}}时 {{props.minute}}分 {{props.second}}秒
            </div>
        </countDown>
        <pre class="code-box">
            <code class="code">{{code}}</code>
        </pre>
    </div>
</template>

<script>
import countDown from 'vue-countdown-single';

export default {
    name: 'countdown',
    components: { countDown },
    data(){
        return {
            code: `
            import countDown from 'vue-countdown-single';
            
            <countDown :beginTime="1559291857150" :endTime="1559896657150">
                <div slot-scope="props">
                    距{{props.isStart ? '结束' : '开始'}}{{props.day}}天 {{props.hour}}时 {{props.minute}}分 {{props.second}}秒
                </div>
            </countDown>`
        }
    }
}
</script>

<style>

</style>
