<template>
  <div class="root_app">
    <div class="shapecontroller">
      <div>
        <label for="">Select shape</label>
        <select v-model="index">
          <option v-for="(x,i) in selector" :key="x" :value="i">{{x}}</option>
        </select>
      </div>
    </div>
    <div class="svgcontainer">
      <div>
        <component :is="components[index]"></component>
      </div>
    </div>
  </div>
</template>

<script>
const c_ircle=()=>import('@/components/circle.vue');
const e_llipse=()=>import('@/components/ellipse.vue');
const p_olygon=()=>import('@/components/polygon.vue');
const r_ectangle=()=>import('@/components/rectangle.vue');
// 'p_olygon',
export default {
  name: 'App',
  components: {
    c_ircle,
    e_llipse,
    p_olygon,
    r_ectangle
  },
   computed:{
     
  },
  data(){
    return{
      components:['c_ircle','r_ectangle','e_llipse','p_olygon'],
      selector:['circle','rectangle','ellipse','polygon'],
      index:0,
    }
  },
  methods:{

  },
  mounted(){
   
  }
}
</script>

<style>
:root{
  /* --theme:#1da1f2; */
  --theme:#1680c1;
  --bold-font:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --background:#fff;
  --shadowcolor:#0000001f;
  --shadowinput:#00000083;
  --hove:#17171721;
  --color:#000;
  --floor:#fafafa;
  --grey:#8e8e8e;
}
*{
  margin:0px;
  padding:0px;
  font-family:var(--bold-font);
  scroll-behavior:smooth;
  transition:all 0.1s linear;
}
body{
  background:var(--theme);
}
.shapecontroller{
  width:100%;
  display:flex;
  place-content: center;
}
.shapecontroller>div{
  display:grid;
  place-items:center;
  grid-gap:5px;
}
.shapecontroller select{
  border:none;
  background:none;
}
.svg_item{
  min-height:90vh;
  height:fit-content;
  width:100%;
  position: relative;
  display:flex;
  place-items:center;
  place-content:center;
}
.svg_item>svg{
  width:100%;
  height:100%;
  /* background:yellow; */
  position:absolute;
  top:0%;
  left:0%;
}
.inputcontroller{
  position:fixed;
  bottom:1%;
  left:0%;
  background:var(--theme);
  padding:8px;
  border-radius:3px;
  box-shadow:0px 0px 4px 1px #00000040;
}
.inputcontroller>div{
  margin:4px 0px;
  /* display:table; */
}
.inputcontroller label{
  margin-right:5px;
}
.inputcontroller input{
  border:none;
  padding:4px;
}
.inputcontroller span{
  font-size:0.89em;
  margin:0px 2px;
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:930px){
  
}
@media only screen and (max-width:760px){

}
@media only screen and (max-width:480px){

}
</style>
