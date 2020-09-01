<template>
    <div class="column">
      <radial-progress-bar
        :diameter="120"
        :completed-steps="getCompletedSteps(rating_data.Value)"
        :total-steps="totalSteps"
        :strokeWidth="5"
        :innerStrokeColor='color'
        >
    <span>{{rating_data.Value}}</span>
    </radial-progress-bar>
    <p>{{rating_data.Source}}</p>
    {{sample}}
    </div>

</template>
<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
    props: {
        rating_data : Object
    },
    data() {
        return {
          completedSteps: 95,
          totalSteps: 0,
          color: '#ccc',
          animation: 'ease-in',
          sample: ''
        }
    },
      components: {
       RadialProgressBar
    },
    methods:{
      getCompletedSteps(value) {
        let value1 = 0;
        if(this.rating_data.Source == 'Internet Movie Database') {
          value1 = Number(value.substring(0, 3));
          this.totalSteps = 10;
          }
        else if (this.rating_data.Source == 'Rotten Tomatoes') {
          value1 = Number(value.substring(0, 2));
          this.totalSteps = 100;
        } else {
          value1 = Number(value.substring(0, 2));
          this.totalSteps = 100;
        }
        return value1;
      }
    },
}
</script>

<style>
.radial-progress-container {
  margin: 0 auto;
}
</style>
