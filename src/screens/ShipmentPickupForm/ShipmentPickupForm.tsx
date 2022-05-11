import React from "react";
import "../../stylesheet/ShipmentPickupForm.scss";
import { Form, Input, Button } from "antd";

const ShipmentPickupForm = () => {
  const isAfterToday = (inputDate: Date) => {
    const today = new Date();
    return (
      new Date(inputDate).getDate() > today.getDate() &&
      new Date(inputDate).getMonth() >= today.getMonth() &&
      new Date(inputDate).getFullYear() >= today.getFullYear()
    );
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="shipmentPickup"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Address (street with flat number)"
          name="Address"
          rules={[
            { required: true, message: "Please input the pickup address!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input the city!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please input the country!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Pickup Date"
          name="pickupDate"
          rules={[
            { required: true, message: "Please input the pickup date!" },
            ({ getFieldValue }) => ({
              validator(_, inputDate) {
                if (isAfterToday(inputDate)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The date is too soon!"));
              },
            }),
          ]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item label="Additional Comments" name="comment">
          <Input.TextArea autoSize />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ShipmentPickupForm;
