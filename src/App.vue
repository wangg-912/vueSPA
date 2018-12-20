<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link>|
      <router-link to="/blog">博客</router-link>|
      <router-link to="/about">关于</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  background-color: aqua;
  width: "100%";
  height: 40px;
}
#nav {
  line-height: 40px;
}
#nav a {
  padding: 0 15px;
}
</style>
