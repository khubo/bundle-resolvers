import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export function handler() {
  const params = {
    TableName: "test",
    Item: {
      id: "test",
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
