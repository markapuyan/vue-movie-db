<template>
    <VueCircle
        :progress="50"
        :size="100"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="0"
        insert-mode="append"
        :thickness="5"
        :show-percent="true"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <p>Slot!</p>
      </VueCircle>
</template>
<script>
export default {
    
    data() {
        return {

             fill : { gradient: ["red", "green", "blue"] },
        }
    },
    methods:{
      progress(event,progress,stepValue){
          let a = event;
          let progress1 = progress;
        console.log(a, progress1, stepValue);
      },
      progress_end(event){
          let a = event;
        console.log("Circle progress end", a);
      }
    }

}
</script>