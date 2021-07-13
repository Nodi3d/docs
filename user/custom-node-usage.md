---
sidebar_position: 4
---

# Custom Node Usage

Nodi provides Custom Node, which allows you to create your own node content in JavaScript, and define what kind of output you want for the input.

![CustomNode](/img/user/custom-node-usage/CustomNode.png)

## Defining inputs and outputs

For inputs and outputs, you can define what type of data to take and how many.

![IO](/img/user/custom-node-usage/IO.png)

You can define whether you want to receive input and output as **Item** or **List**, where **Item** is a single piece of data and **List** is an array of data.

## Writing a program

The contents of the Custom Node can be written by JavaScript code in the editor displayed in the Inspector.

An instance of the class **DataAccess** is passed to the program with the **access** variable, so input and output can be handled via this instance.

### Example

The following example shows a simple implementation of a Custom Node.

- Have two numeric inputs, receiving the 0th as Item and the 1st as List.
- Have two numeric outputs, writing out the 0th as List and the 1st as Item

![IO](/img/user/custom-node-usage/Example.png)

```javascript

// access: instance of DataAccess

// receive the 0th input in Item format
let x = access.getData(0);

// receive the 1th input in List format
let numbers = access.getDataList(1);

// write out the 0th output data in List format
let result = numbers.map(i => i * x);
access.setDataList(0, result);

// write out the 1th output data in Item format
let max = Math.max(...result);
access.setData(1, max);

```
