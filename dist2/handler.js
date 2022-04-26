'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var awsSdk = require('aws-sdk');
var uuid = require('uuid');

const dynamoDb = new awsSdk.DynamoDB.DocumentClient();

const id = uuid.v4();
function handler() {
  const params = {
    TableName: "test",
    Item: {
      id,
      name: "test",
      age: "test",
      email: "test",
      phone: "test",
      address: "test",
      createdAt: new Date().getTime(),
    },
  };

  dynamoDb.put(params, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
  });
}

exports.handler = handler;
