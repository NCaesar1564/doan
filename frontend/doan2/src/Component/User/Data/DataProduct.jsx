import { v4 as uuidv4 } from "uuid";
import logo from "./Image/logo192.png";
import img from "./Image/avatar.jpg"
import Anh1 from './Image/Anh1.webp'
import Anh2 from './Image/Anh2.webp'
import Anh3 from './Image/Anh3.webp'
const Data = [
  {
    id: uuidv4(),
    productName: "Product 1",
    productPrice: 100,
    productSale: 2,
    productImage:[
      img,
      logo,
      Anh1,
      Anh2,
      Anh3,
    ],
    idCategory: 1,
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 1 sad;kjhasj;kasdasj;d lsjldkla l jdlkajl sklkjalks jdlksajlkdsa;ldsa;doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 2",
    productPrice: 100,
    productSale: 0,
    productImage:[
      logo,
      Anh1,
      Anh2,
      Anh3,
      img,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "this is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 3",
    productPrice: 300,
    productSale: 10,
    productImage:[
      Anh1,
      Anh2,
      Anh3,
      img,
      logo,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 4",
    productPrice: 100,
    productSale: 0,
    productImage:[
      Anh2,
      Anh3,
      img,
      logo,
      Anh1,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 5",
    productPrice: 100,
    productSale: 0,
    productImage:[
      Anh3,
      img,
      logo,
      Anh1,
      Anh2,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 1",
    productPrice: 100,
    productSale: 2,
    productImage:[
      img,
      logo,
      Anh1,
      Anh2,
      Anh3,
    ],
    idCategory: 1,
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 1 sad;kjhasj;kasdasj;d lsjldkla l jdlkajl sklkjalks jdlksajlkdsa;ldsa;doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 2",
    productPrice: 100,
    productSale: 0,
    productImage:[
      logo,
      Anh1,
      Anh2,
      Anh3,
      img,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "this is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 3",
    productPrice: 300,
    productSale: 10,
    productImage:[
      Anh1,
      Anh2,
      Anh3,
      img,
      logo,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 4",
    productPrice: 100,
    productSale: 0,
    productImage:[
      Anh2,
      Anh3,
      img,
      logo,
      Anh1,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 5",
    productPrice: 100,
    productSale: 0,
    productImage:[
      Anh3,
      img,
      logo,
      Anh1,
      Anh2,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 1",
    productPrice: 100,
    productSale: 2,
    productImage:[
      img,
      logo,
      Anh1,
      Anh2,
      Anh3,
    ],
    idCategory: 1,
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 1 sad;kjhasj;kasdasj;d lsjldkla l jdlkajl sklkjalks jdlksajlkdsa;ldsa;doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 2",
    productPrice: 100,
    productSale: 0,
    productImage:[
      logo,
      Anh1,
      Anh2,
      Anh3,
      img,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "this is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 3",
    productPrice: 300,
    productSale: 10,
    productImage:[
      Anh1,
      Anh2,
      Anh3,
      img,
      logo,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 4",
    productPrice: 100,
    productSale: 0,
    productImage:[
      Anh2,
      Anh3,
      img,
      logo,
      Anh1,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 5",
    productPrice: 100,
    productSale: 0,
    productImage:[
      Anh3,
      img,
      logo,
      Anh1,
      Anh2,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 1",
    productPrice: 100,
    productSale: 2,
    productImage:[
      img,
      logo,
      Anh1,
      Anh2,
      Anh3,
    ],
    idCategory: 1,
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 1 sad;kjhasj;kasdasj;d lsjldkla l jdlkajl sklkjalks jdlksajlkdsa;ldsa;doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 2",
    productPrice: 100,
    productSale: 0,
    productImage:[
      logo,
      Anh1,
      Anh2,
      Anh3,
      img,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "this is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 3",
    productPrice: 300,
    productSale: 10,
    productImage:[
      Anh1,
      Anh2,
      Anh3,
      img,
      logo,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 4",
    productPrice: 100,
    productSale: 0,
    productImage:[
      Anh2,
      Anh3,
      img,
      logo,
      Anh1,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  {
    id: uuidv4(),
    productName: "Product 5",
    productPrice: 100,
    productSale: 0,
    productImage:[
      Anh3,
      img,
      logo,
      Anh1,
      Anh2,
    ],
    //ưu tiên 5 ảnh
    productQuantity: 10,
    description: "This is the description for Product 2 sad;kjhsadsadsaasj;kasdasj;sdsadasdksal hsd asdosao díaudoiwduowud doqi woapid;j;aos ido ipows i;dwjksiod iposa;d i;oqwai;odw",
  },
  
];

export default Data;
