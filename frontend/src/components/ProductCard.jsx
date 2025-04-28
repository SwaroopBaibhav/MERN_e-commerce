import React, { useState } from 'react'
import { Card, Modal, notification, Button, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { DBupdateProducts, DBdeleteproducts } from '../controller/state.controller';

function ProductCard({ product }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const showNotification = (message, description, color) => {
    api.info({
      message,
      description,
      placement: 'top',
      style: {
        backgroundColor: color,
        color: 'white',
      },
    });
  };

  const [newName, setNewName] = useState(product.name);
  const [newPrice, setNewPrice] = useState(product.price);
  const [newImage, setNewImage] = useState(product.image);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const updateItem = async () => {
    const item = {
      name: newName,
      price: newPrice,
      image: newImage
    };
    const result = await DBupdateProducts(product._id, item);
    if (result?.success) {
      showNotification('Product Updated ✅', 'The product was successfully updated.', 'lightgreen');
    } else {
      showNotification('Update Failed ❌', 'There was an error updating the product.', '#fc5959');
    }
    closeModal();
  };

  const deleteItem = async () => {
    const result = await DBdeleteproducts(product._id);
    console.log(result);
    if (result?.success) {
      showNotification('Product Deleted 🗑️', 'The product was successfully deleted.', 'lightgreen');
    } else {
      showNotification('Delete Failed ❌', 'There was an error deleting the product.', '#fc5959');
    }
    closeModal();
  };

  const { Meta } = Card;

  return (
    <div>
      <Space>
      {contextHolder}
      <Card
        style={{ width: 300 }}
        cover={<img alt={product.name} src={product.image} />}
        actions={[
          <EditOutlined key="edit" onClick={openModal} />,
          <DeleteOutlined key="delete" onClick={deleteItem} />
        ]}
      >
        <Meta title={product.name} description={`$${product.price} /-`} />
      </Card>

      <Modal title="Edit Product" open={modalIsOpen} onOk={updateItem} onCancel={closeModal}>
        <h3>Name: </h3>
        <input type="text" className='border-2 rounded-md p-2' value={newName} onChange={(e) => setNewName(e.target.value)} />
        <h3>Price: </h3>
        <input type="number" className='border-2 rounded-md p-2' value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
        <h3>Image URL: </h3>
        <input type="text" className='border-2 rounded-md p-2' value={newImage} onChange={(e) => setNewImage(e.target.value)} />
      </Modal>
      </Space>
    </div>
  )
}

export default ProductCard;
