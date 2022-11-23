# Module federation demo

This is a simple demonstration of combinating the following using module federation:
- **Layout**: Vue2 + Webpack (host + remote)
- **Cart**: Vue3 + Vite (remote)
- **Discovery**: Vue3 + Webpack (host + remote)
- **Report**: Vue2 + Vite (host + remote)

All of these should in theory be capable of being a host - but not all may have been tested.
The main purpose of this repository is to demonstrate the possibility of running remote Vue3 modules, bundled using either Vite or Webpack, inside of a Vue2 host application. 

In short: magic 🪄

Webpack variants were scaffolded using [create-mf-app](https://github.com/jherr/create-mf-app) by Jack Herrington. 
Others were scaffolded using the Vite CLI.