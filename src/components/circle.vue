<template>
<div>
  <div class="svg_item">
      <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle :cx="`${properties.x_axis}%`" :cy="`${properties.y_axis}%`" :r="properties.radius" :stroke="properties.border_colour" fill="transparent" :stroke-width="properties.border_width"/>
      </svg>
  </div>
    <div class="inputcontroller">
        <div class="field" v-for="x in Object.keys(properties)" :key="x" >
            <div v-if="x!=='border_colour'">
                <label :for="x">{{x}}</label>
                <input :min="0" :max="['x_axis','y_axis'].includes(x)?100:uniques.innerWidth" :id="x" type="number" v-model="properties[x]" >
                <span>{{['x_axis','y_axis'].includes(x)?'%':'px'}}</span>
            </div>
            <div v-else>
                <label :for="x">{{x}}</label>
                <input :id="x" type="color" v-model="properties[x]" >
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'circle',
  components: {
    
  },
  data(){
    return{
        properties:{
            x_axis:50,
            y_axis:30,
            radius:90,
            border_colour:'#000',
            border_width:2
        },
        uniques:{
          innerWidth:700,
        }
    }
  },
  methods:{

  },
  mounted(){
    this.uniques.innerWidth=window.innerWidth
  //  console.log()
  }
}
</script>

<style>

</style>