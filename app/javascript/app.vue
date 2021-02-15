<template>
  <div id="app">
    <Header/>
    <!--<p>{{ message }}</p>-->
    <Top/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Top from "./components/Top";
//import Sample from "./pages/Sample";
//import Test from "./pages/Test";

export default {
  data: function () {
    return {
      message: "Hello Vue!"
    };
  },
  components: {
    Top,
    Header,
    //Sample,
    //Test,
  }  
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
