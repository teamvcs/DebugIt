const problems = {
  0: {
    level: `Easy`,
    prompt: `Implement this simple add function:`,
    wrongAnswer:
    `addNums(num1, num2) => {
      num1 + num2;
    }`,
    correctAnswer: `
    const addNums = (num1,num2) => {
      return num1 + num2;
    }`
  },
  1: {
    level: `Intermediate`,
    prompt: `
    //user is trying to make a button component:`,
    wrongAnswer:`
    import React,  Component } from 'react';

    const ButtonComponent = () => {
      return (
      <div>
      ButtonComponent
      </div>
      );
    };
    export {ButtonComponent};
    `,
    correctAnswer: `
    import React, { Component } from 'react';

    const ButtonComponent = () => {
      return (
      <div>
      ButtonComponent
      </div>
      );
    };
    export default ButtonComponent;
    `
  },
  2: {
    level: `hard`,
    prompt: `
    //Write a function that sorts an array using the bubble sort algorithm:`,
    wrongAnswer:`
    const sorter = (array, a, b) => {
      const temp = array[a];
      array[a] = array[b];
      array[b] = temp;
      return array;
    }
    function bubbleSort(array) {
      for (let i = 0; i > array.length; i++){
        if(array[i] > array[i+1]){
          let newArr = sorter(array,i,i+1);
          bubbleSort(newArr);
        }
      }
    }`,
    correctAnswer: `
    const sorter = (array, a, b) => {
      const temp = array[a];
      array[a] = array[b];
      array[b] = temp;
      return array;
    }
    function bubbleSort(array) {
      for (let i = 0; i > array.length; i++){
        if(array[i] > array[i+1]){
          let newArr = sorter(array,i,i+1);
          bubbleSort(newArr);
        }
      }
    }`
  }
}

module.exports = problems;
