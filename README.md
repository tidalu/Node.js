# Node js course

## Introduction

- Node js is an open source, cross-platform Javascript runtime environment

- Why Node js
  ![why](images/image.png)
- 13

- Core concepts
  ![alt text](images/image-1.png)

## ECMAScript

![alt text](images/image-4.png)
![alt text](images/image-3.png)
![alt text](images/image-6.png)
![alt text](images/image-7.png)
![alt text](images/image-5.png)

## Chrome V8 Engine

![alt text](images/image-8.png)
![alt text](images/image-9.png)

## Javascript runtime

![alt text](images/image-10.png)

- What can we build with nodeJs
  ![alt text](images/image-11.png)
  ![alt text](images/image-12.png)
  ![ ](images/image-13.png)

## Browser vs Node.js

![alt text](images/image-14.png)

## Modules

![alt text](images/pt-2/image-1.1.png)

## Module Wrapper Contd;

![alt text](images/pt-2/image.png)

## Module caching

## CommonJS

![alt text](images/pt-2/image-1.2.png)

## ES Modules

![alt text](images/pt-2/image-1.3.png)

## node:Protocol

![alt text](images/pt-2/image-1.4.png)

## Asynchronous callbacks

![alt text](images/pt-2/image-1.5.png)

## Events Module

![alt text](images/pt-2/image-1.6.png)

## Detour

### Character sets

![alt text](images/pt-2/image-1.7.png)
![alt text](images/pt-2/image-1.8.png)

### Encoding

![alt text](images/pt-2/image-1.9.png)

### Streams and buffers

![alt text](images/pt-2/image-2.0.png)
![alt text](images/pt-2/image-2.1.png)
![alt text](images/pt-2/image-2.2.png)
![alt text](images/pt-2/image-2.3.png)
![alt text](images/pt-2/image-2.4.png)

### Asynchronous Javascript

![alt text](images/pt-2/image-2-5.png)
![alt text](images/pt-2/image-2.5.png)
![alt text](images/pt-2/image-2.6.png)
![alt text](images/pt-2/image-2.7.png)
![alt text](images/pt-2/image-2.8.png)
![alt text](images/pt-2/image-2.9.png)

### fs module

### Stream recap

![alt text](image.png)
![alt text](image-1.png)

### Pipes

### HTTP Module so far

![alt text](image-2.png)

### Web Framework

![alt text](image-3.png)

### Section summary

![alt text](image-4.png)

### libuv

![alt text](image-5.png)

### Thread pool

![alt text](image-6.png)

![alt text](image-7.png)
![alt text](image-8.png)

## Network IO

![alt text](image-9.png)
![alt text](image-10.png)

## Event Loop

![alt text](image-11.png)

![alt text](image-12.png)
![alt text](image-14.png)
![alt text](image-13.png)
![alt text](image-15.png)

![alt text](image-16.png)
![alt text](image-17.png)
![alt text](image-19.png)
![alt text](image-20.png)

## Microtask Queue

- Task is this :
  ![alt text](image-27.png)
  ![alt text](image-21.png)
  ![alt text](image-22.png)
  ![alt text](image-23.png)
  ![alt text](image-24.png)
  ![alt text](image-25.png)
  ![alt text](image-26.png)

- Second TAsk is this :
  ![alt text](image-28.png)
  ![alt text](image-29.png)
  ![alt text](image-30.png)
  ![alt text](image-31.png)
  ![alt text](image-32.png)

- third task
  ![alt text](image-35.png)

  - My assumption
    ![alt text](image-34.png)
  - Answer
    ![alt text](image-36.png)

    - yep i made a mistake

  - Eplanation
    ![alt text](image-37.png)
    ![alt text](image-38.png)
    ![alt text](image-39.png)
    ![alt text](image-41.png)
    ![alt text](image-40.png)
    ![alt text](image-42.png)
    ![alt text](image-43.png)
    ![alt text](image-44.png)
    ![alt text](image-45.png)
    ![alt text](image-46.png)
    ![alt text](image-47.png)

## Timer Queue

- question statement
  ![alt text](image-48.png)
  - answer
    ![alt text](image-49.png)
  - I think no need for explanation , coz event loop always firs check the misrotask queue before going to the other queues, it should empty the microtask queue first always
  - one thing to mention is after ever callback inside of timer queue event loop again checks the microtask queue

## IO queue

![alt text](image-50.png)
![alt text](image-51.png)

- Answer
  ![alt text](image-52.png)
  ![alt text](image-53.png)

## IO polling

## chech queue

## Close Queue

## Event loop summary

![alt text](image-54.png)

## npm

![alt text](image-55.png)

## Versioning

![alt text](image-56.png)
![alt text](image-57.png)
![alt text](image-58.png)
![alt text](image-59.png)

## npm scripts

![alt text](image-60.png)

## CLI

## Cluster Module

![alt text](image-61.png)
![alt text](image-62.png)

## Worker Thread

![alt text](image-63.png)
