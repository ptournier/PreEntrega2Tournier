const products = [
  {
    id: "1",
    name: "Zapatillas Pony",
    img: "/zapatillas.jpeg",
    price: 100,
    categoryId: "1",
    description: "Zapatillas blancas talle 39 casi nuevas. Importadas de USA. ",
    stock: 6,
  },
  {
    id: "2",
    name: "Botas Unisex",
    img: "/botas.jpeg",
    price: 270,
    categoryId: "1",
    description: "Botas Unisex para usar todo el dia. Para el campo y ciudad. ",
    stock: 3,
  },
  {
    id: "3",
    name: "Hawaianas",
    img: "/ojotas.jpeg",
    price: 30,
    categoryId: "1",
    description: "Ojotas hawaianas modelo 2020 Surf.",
    stock: 4,
  },
  {
    id: "4",
    name: "Remera",
    img: "/remera.jpeg",
    price: 100,
    categoryId: "2",
    description: "Remera veraniega talles de S a XL",
    stock: 10,
  },
  {
    id: "5",
    name: "Heladera",
    img: "/heladera.jpeg",
    price: 100,
    categoryId: "3",
    description: "Heladera vertical con Freezer.",
    stock: 10,
  },
  {
    id: "6",
    name: "Pantalón",
    img: "/pantalon.jpeg",
    price: 100,
    categoryId: "2",
    description: "Pantalon cargo modelo campo. Color unico. ",
    stock: 14,
  },
  {
    id: "7",
    name: "Televisor",
    img: "/television.jpeg",
    price: 1300,
    categoryId: "3",
    description: "Televisor 50 pulgadas con Android TV.",
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      resolve(products);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);
    if (!product) {
      reject("No se encontró el producto solicitado");
    } else {
      resolve(product);
    }
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    const filteredProducts = products.filter(
      (product) => product.categoryId === categoryId
    );
    if (!filteredProducts) {
      reject("No hay productos para la categoria seleccionada");
    } else {
      resolve(filteredProducts);
    }
  });
};
