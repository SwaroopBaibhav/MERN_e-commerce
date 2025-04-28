const dummyProducts = [
    {
      name: "Wireless Headphones",
      price: 199,
      image: "https://images.unsplash.com/photo-1580894894510-efae0c3c35df"
    },
    {
      name: "Mountain Bike",
      price: 850,
      image: "https://images.unsplash.com/photo-1577221624313-6f93c1c01c4e"
    },
    {
      name: "Leather Backpack",
      price: 120,
      image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
    },
    {
      name: "Modern Lamp",
      price: 60,
      image: "https://images.unsplash.com/photo-1582719478250-04ee0b3b3822"
    },
    {
      name: "Camera Lens",
      price: 320,
      image: "https://images.unsplash.com/photo-1549921296-3a6b3d2e4a2c"
    },
    {
      name: "Sneakers",
      price: 90,
      image: "https://images.unsplash.com/photo-1606813902552-1267efcc281b"
    },
    {
      name: "Wooden Chair",
      price: 150,
      image: "https://images.unsplash.com/photo-1567016473970-5fdc3d42f3cc"
    },
    {
      name: "Smartwatch",
      price: 250,
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642"
    },
    {
      name: "Succulent Plant",
      price: 15,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      name: "Acoustic Guitar",
      price: 410,
      image: "https://images.unsplash.com/photo-1511376777868-611b54f68947"
    },
    {
      name: "Ceramic Mug",
      price: 18,
      image: "https://images.unsplash.com/photo-1563409235430-d78e10a749d2"
    },
    {
      name: "Desk Clock",
      price: 45,
      image: "https://images.unsplash.com/photo-1570558144524-7c0c9f6a5c7e"
    },
    {
      name: "Skateboard",
      price: 130,
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017"
    },
    {
      name: "Travel Suitcase",
      price: 240,
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a12"
    },
    {
      name: "Notebook",
      price: 9,
      image: "https://images.unsplash.com/photo-1555529669-e69f78f9b1f8"
    },
    {
      name: "Coffee Maker",
      price: 110,
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c5d"
    },
    {
      name: "Throw Pillow",
      price: 25,
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    },
    {
      name: "Fitness Dumbbells",
      price: 70,
      image: "https://images.unsplash.com/photo-1583454110559-21b58e22b6d9"
    },
    {
      name: "Bluetooth Speaker",
      price: 85,
      image: "https://images.unsplash.com/photo-1570813099427-9c0c6462c0ae"
    },
    {
      name: "Gaming Mouse",
      price: 45,
      image: "https://images.unsplash.com/photo-1587202372775-d9a35f7a1784"
    }
  ];
  

for (let item of dummyProducts) {
    await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
  }
  