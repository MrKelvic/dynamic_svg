<template>
<div>
  <div class="svg_item">
      <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <polygon id="x_" :points="properties.polygon_points||uniques.points[uniques.index]"
          :stroke="properties.border_colour" fill="transparent" stroke-width="2"/>
        </defs>
        <use :x="`${properties.x_axis}%`" :y="`${properties.y_axis}%`" xlink:href="#x_"/>
      </svg>
  </div>
    <div class="inputcontroller">
        <div>
          <div class="field">
            <label for="">Experiments</label>
            <select @change="properties.polygon_points=uniques.points[uniques.index]" v-model="uniques.index">
              <option v-for="(x,i) in uniques.interperation" :key="x" :value="i">{{x}}</option>
            </select>
          </div>
        </div>
        <div class="field" v-for="x in Object.keys(properties)" :key="x" >
            <div v-if="x!='border_colour'">
                <label :for="x">{{x}}</label>
                <input :min="0" :max="['x_axis','y_axis'].includes(x)?100:null" :id="x" :type="['x_axis','y_axis'].includes(x)?'number':'text'" v-model="properties[x]" >                
                <span>{{['x_center_position','y_center_position'].includes(x)?'%':''}}</span>
            </div>
            <div v-else>
                <label :for="x">{{x}}</label>
                <input :id="x" type="color" v-model="properties[x]" >
            </div>
        </div>
        <div>
          <div class="field">
            <label for="">points-</label>
            <p style="display:inline;font-size:0.8em;">{{properties.polygon_points||uniques.points[uniques.index]}}</p>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'polygon',
  components: {
    
  },
  data(){
    return{
      properties:{
            x_axis:50,
            y_axis:40,
            polygon_points:'',
            border_colour:'#000'
        },
        uniques:{
          innerWidth:700,
          index:0,
          interperation:['star','octagon','experiment 1','experiment 2'],
          points:['50 10 55 30 70 30 60 40 65 55 50 45 35 55 40 40 30 30 45 30','50,5   100,5  125,30  125,80 100,105 50,105  25,80  25, 30','220,10 300,210 170,250 123,234','100,100 150,25 150,75 200,0']
        }
    }
  },
  methods:{

  },
  mounted(){
    this.uniques.innerWidth=window.innerWidth
  }
}
</script>

<style>

</style>