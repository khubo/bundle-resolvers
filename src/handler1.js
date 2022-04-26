import { DynamoDB } from "aws-sdk";
import { v4 } from "uuid";

const dynamoDb = new DynamoDB.DocumentClient();

const id = v4();
export function handler() {
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
