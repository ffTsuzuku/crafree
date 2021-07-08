* Create React App
Usually by default you can use create-react-app to generate a react application.
While this is convinient, it makes it so you never learn whats under the hood.
And it also forces you to use the configuration dictated by create-react-app. 
This document will try and give a complete reference for how to create a react
app without using create-react-app. 

* Begining our journey with NPM
You have the choice of using either NPM or Yarn to manage your packages, we'll
use NPM in this guide since its used predominately in industry. So we'll begin
with running 

#+BEGIN_SRC bash
npm init -y
#+END_SRC

This will get us started by created a baseline package.json file which will 
house varying degrees of information. The primary use of *package.json* is to 
detail what packages are imported in by the project in order to work. These 
packages will have their version number listed in the corresponding 
*package-lock.json file*, and get installed in the node_modules folder. 
Another common use for package.json is to define *scripts*. There are other 
toolchains that make use of package.json to define properties such a *babel*. 
However we'll dicuss that more later. 

* Introduction to Babel 
Generally one of the very first packages developers will install when setting up
their projects is babel. So let's understand why we need babel in the first 
place. JavaScript is an every evolving language, there are supersets like
TypeScript, frameworks like React, additions and improvements such as classes
and arrow functions. Unfortunately while these features make development easier
they are not natively supported by the environments they are run in. Older
and even current browsers do not support many of these frameworks and features
natively. Thats where Babel comes in, Babel will transform JavaScript code that
is written using modern features and back port it to typically ES5 JS, which 
is supported by most browsers. But babel isn't exclcusively used for front-end
development. It can also be used to compile and port TypeScript code, so that
it can be run in Node Environments, since Node does not natively support TS. 
In summantion Babel takes in Source Code and parses it using its *Babylon*  
parser. This parser will then break down the code into an *Abstract Source Tree*
which will then be transformed into Browser/Node/Environement friendly code. 

#+BEGIN_SRC text
Source Code => Parse (Babylon) => Abstract Source Tree => Transform => Output
#+END_SRC 

In order to keep babel light-weight the transformations are done via babel 
plugins. These plugins help babel transform the AST into valid minified code. 
There are plugins for React, JSX, ES6, TypeScript, etc..  

/Note/
It can be cumbersome to install plugins individually, thankfully babel 
allows users to install *Presets* which are a group of plugins that Babel       
can then use for transpilation. 

** Installing Babel && Presets
Now that we know what Babel does, and why we need it. We can go ahead and 
install Babel as Babel Plugins/Presets. 

#+BEGIN_SRC bash
npm i @babel/core @babel/preset-env @babel/preset-react babel-loader -D
#+END_SRC

In the Era before Babel 6, there existed a singular npm babel package, named
babel. This package was split begining with Babel 6 into multiple packaged. 
- babel/core: Contains the NODE API and require hook. 
- babel/preset-env: Contains all plugins for transpiling ES6+ code. 
- babel/preset-react: Contains all the plugins for handling react code. 
- babel-loader: Needed to connect Babel to WebPack. (More on this later)

** Configuring Babel 
In order to configure babel, its best to create a .babelrc file into the root
of your project directory. You could also potentially configure babel in your
package.json file, but its usually best to seperate the logic. 

#+BEGIN_SRC JSON
{
    "preset": ["babel/preset-env", "babel/preset-react"]
}
#+END_SRC

* Sources
Scratch Setup for React
https://www.youtube.com/watch?v=EUM78cxo0i8&list=RDCMUClb90NQQcskPUGDIXsQEz5Q&start_radio=1&rv=EUM78cxo0i8&t=19

Babel Tutorial
https://www.youtube.com/watch?v=JJzrWJ83ey8

