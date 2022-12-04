# Module federation demo

This is a simple demonstration of combinating the following using module federation:
- **Layout**: Vue2 + Webpack (host + remote)
- **Cart**: Vue3 + Vite (remote)
- **Discovery**: Vue3 + Webpack (host + remote)
- **Report**: Vue2 + Vite (host + remote)
- **Shell**: Vue 2 + Vue CLI/Webpack (host)

All of these should in theory be capable of being a host - but not all may have been tested.
The main purpose of this repository is to demonstrate the possibility of running remote Vue3 modules, bundled using either Vite or Webpack, inside of a Vue2 host application. 

In short: magic 🪄 (or is it really?)

Mounting Vue3 components/modules inside a Vue2 app is not possible using out-of-the-box configuration from either of the build tools. 
To work around this, I have taken inspiration from other cross-framework federated examples and added another federated module that exposes the `createApp` from Vue3 with the possibility to render it inside an arbitrary element.

To render a Vue3 component inside Vue2, you can use the federated module as following:

```vue
<script>
import DiscoveryTiles from "discovery/DiscoveryTiles";
import placeVue3Component from "discovery/placeVue3Component";

export default {
  name: "App",
  components: {
    DiscoveryTiles,
  },
  mounted() {
    placeVue3Component(DiscoveryTiles, this.$refs.discovery);
  },
};
</script>

<template>
  <main>
    <div ref="discovery"></div>
  </main>
</template>
```

**Note about shared modules:**
Vite and Webpack does not handle shared modules the same way it seems, I was not able to make the federation work using across the two bundlers/build tools without removing Vue as a shared module in the configuration of the Vite based app. 


Webpack variants were scaffolded using [create-mf-app](https://github.com/jherr/create-mf-app) by Jack Herrington. 
Others were scaffolded using the Vite CLI.