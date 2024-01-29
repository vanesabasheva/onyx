import product_image from "../../assets/img/product_image.webp";
import saleImage1 from "../img/sale_la-roche_products.jpg";
import saleImage2 from "../img/sale_la_roche.jpg";
import saleImage3 from "../img/sale_miska.jpg";
import saleImage4 from "../img/sale_ordinary.jpg";
import saleImage5 from "../img/sale_protein_powder.jpg";
import saleImage6 from "../img/sale_vichy.jpg";

export const DUMMY_PRODUCT = {
  brand: "Skeyndor",
  name: "Продукт 1",
  quantity: "x200мл",
  price: 12.99,
  image: product_image,
  description:
    "Интензивно подхранващият кожата серум на Естедерм реуплътнява и възстановява сиянието, като изравнява тена. С текстура на крем-серум. Подходящ при повяхнала кожа с липса на плътност и еластичност, без младежки блясък. Серумът е с ценни съставки, които регенерират и преструктурират за по-стегната и плътна кожа. Предлага се в опаковка от 30 мл. ",
  ingredients:
    "AQUA, GLYCERIN, DIMETHICONE, SODIUM PCA, PEG-10 DIMETHICONE, SILICA, NIACINAMIDE, TRIETHYLHEXANON, ALCOHOL DENAT, XYLITYGLUCOSIDE, DIPROPILENE GLYCOL, DIPALMITOYL XYDROXYPROLINE, PROPANEDOIL, DISTEAROMONIUM HECTORITEE, CAMELLIA JAPONICA SEED OIL, TITANIUM DIOXIDE, MANNITOL, GLYCYRRHETINIC ACID, CETEARYL ALCOHOL, XYLITOL, CAESALPINIA SPINOSA FRUIT EXTRACT, BUTYLENE GLYCOL, 1,2-HEXANEDIOL SODIUM DEXTRAN SULFATE, CAPRILYL GLYCOL, BATYL ALCOHOL, MICA, STEARIC ACID, HYDROLYZED SOY PROTEIN, CREATINE, GLUCOSE, FRAGRANCE, HYDROLYZED WHEAT PROTEIN, KAPPAPHYCUS ALVAREZI EXTRACT, IRON OXIDES, ADENOSINE, PROPYLENE GLYCOL, MADECASSIC ACID, ASIATICOSIDE, PHENOXYETHANOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, ASIATIC ACID, LECITHIN, SODIUM LACTATE, CARBOMER, POLYGLYCERYL-3 DIISOSTEARATE, CARNOSINE, POLYSORBATE 20, TOCOPHEROL, DISODIUM ADENOSINE TRIPHOSPHATE, XANTHAN GUM, SACCHARIDE ISOMERATE, LAMINARIA DIGITARA EXTRACT, ARTEMIA EXTRACT, ASCORBIC ACID, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-1, RED 33 (CI 17200), [ES299].",
  instructions:
    "Нанасяйте сутрин и вечер върху цялото лице, шия и деколте. Комбинирайте с крем и околоочна грижа Excellage за оптимални резултати.",
  sale: false,
  weight: 0.05,
  productNo: "0001111",
};

export const SALE_IMAGES = [
  { src: saleImage1, name: "La Roche Posay" },
  { src: saleImage3, name: "Peel" },
  { src: saleImage4, name: "The ordinary" },
  { src: saleImage5, name: "CTR Protein" },
  { src: saleImage6, name: "Vichy" },
  { src: saleImage2, name: "LaRoche" },
];

export const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
    price: 12.99,
    image: product_image,
    description: "Short description",
  },
  {
    id: "p2",
    title: "Product 2",
    price: 12.67,
    image: product_image,
    description: "Short description",
  },
  {
    id: "p3",
    title: "Product 3",
    price: 12.99,
    image: product_image,
    description: "Short description",
  },
  {
    id: "p4",
    title: "Product 4",
    price: 12.99,
    image: product_image,
    description: "Short description",
  },
  {
    id: "p5",
    title: "Product 5",
    price: 12.99,
    image: product_image,
    description: "Short description",
  },
  {
    id: "p6",
    title: "Product 6",
    price: 12.99,
    image: product_image,
    description: "Short description",
  },
  {
    id: "p7",
    title: "Product 7",
    price: 12.99,
    image: product_image,
    description: "Short description",
  },
];

export let categories1 = [
  { name: "Алергия", id: 1 },
  { name: "Болка", id: 2 },
  { name: "Болно гърло", id: 3 },
  { name: "Грип и настинка", id: 4 },
  { name: "Диабет", id: 5 },
  { name: "Кашлица", id: 6 },
  { name: "Очи", id: 7 },
  { name: "Първа помощ", id: 8 },
];

export const categories = {
  Лекарства: [
    "Болки",
    "Грип и настинка",
    "Болно гърло",
    "Кашлица",
    "Хрема",
    "Алергия",
    "Храносмилателна система",
    "Сърдечно-съдова система",
    "Очи и уши",
    "Хомеопатия",
    "Кожни болести",
    "Женско здраве",
    "Мъжко здраве",
  ],
  "Хранителни Добавки": [
    "Билкови продукти",
    "Витамини",
    "Минерали",
    "Храносмилане",
    "Памет и оросяване",
    "Сърце",
    "Кости, стави, мускули",
    "Коса, кожа, нокти",
    "Имунитет",
    "Сън и спокойствие",
    "Спортни добавки",
  ],
  Козметика: [
    "Грижа за коса",
    "Грижа за кожа",
    "Грижа за лице",
    "Ръце",
    "Тяло",
    "Мъже",
  ],
  "Мама и бебе": [
    "Козметика за бебета и деца",
    "Бебешки храни",
    "Бебешки аксесоари",
    "Орална хигиена",
    "Храни и напитки",
  ],
  "Лична Хигиена": [
    "Oрална хигиена",
    "Тяло",
    "Интимна хигиена",
    "Дезодоранти",
    "Консумативи",
    "Бръснене и депилация",
    "Още?",
  ],
  Промоции: [],
};
