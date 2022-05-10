import React from "react";
import "../../stylesheet/ShipmentPickupForm.scss";
import { Form, Input, Button } from "antd";

const ShipmentPickupForm = () => {
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
              validator(_, value) {
                if (
                  new Date(value).getDate() > new Date().getDate() &&
                  new Date(value).getMonth() >= new Date().getMonth() &&
                  new Date(value).getFullYear() >= new Date().getFullYear()
                ) {
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
