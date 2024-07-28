const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const danhMucSPController = require("../controllers/danhMucSPController");
const dongDTController = require("../controllers/dongDTController");
const loaiDienThoaiController = require("../controllers/loaiDienThoaiController");
const cartController = require("../controllers/cartController");
const customersController = require("../controllers/customersController");
const usersController = require("../controllers/usersController");
const midddlewareController = require("../controllers/middlewareController");
const middlewareController = require("../controllers/middlewareController");
const shipController = require("../controllers/ShipController");
const orderController = require("../controllers/orderController");

//sanpham
router.get("/sanpham", productController.getAllProducts);
router.get("/sanpham/danhmuc/:idDanhMuc", productController.getProductsByIDDanhMucSP);
router.get("/sanpham/detail/:idSanPham", productController.getProductById);
router.get("/sanpham/search/:productName", productController.searchProductByName);
router.get("/sanpham/getdongdtbyidsp/:idSanPham", productController.getPhoneModelsByPhoneType);
router.get("/sanpham/dongdt/:idDongDT", productController.getProductsByIDDongDT);
router.get("/sanpham/loaiDT/:idLoaiDT", productController.getProductsByIDLoaiDT);
router.get("/sanpham/filter", productController.getFilteredProducts);

//qlsp

router.get("/sanphamql",midddlewareController.verifyTokenAndIsEmployee,productController.getAllProducts);
router.post("/sanpham", midddlewareController.verifyTokenAndIsEmployee,productController.addProduct);
router.put("/sanpham/:idSanPham", midddlewareController.verifyTokenAndIsEmployee,productController.updateProduct);
router.delete("/sanpham/:idSanPham", midddlewareController.verifyTokenAndIsEmployee,productController.deleteProduct);

//danhmucsp
router.get("/danhmucsp", danhMucSPController.getAlldanhMucSP);
//qldanhmuc
router.get("/danhmucspql", midddlewareController.verifyTokenAndIsEmployee, danhMucSPController.getAlldanhMucSP);
router.post("/danhmucspql/add", midddlewareController.verifyTokenAndIsEmployee, danhMucSPController.addDanhMucSP);
router.put("/danhmucspql/put/:idDanhMuc", midddlewareController.verifyTokenAndIsEmployee,danhMucSPController.updateDanhMucSP);
router.delete("/danhmucspql/del/:idDanhMuc", midddlewareController.verifyTokenAndIsEmployee,danhMucSPController.deleteDanhMucSP);

//dongdt
router.get("/dongdt", dongDTController.getAlldongDT);

router.get("/dongdtql", midddlewareController.verifyTokenAndIsEmployee,dongDTController.getAlldongDT);
router.post('/dongdtql/add', midddlewareController.verifyTokenAndIsEmployee,dongDTController.addDongDT);
router.put('/dongdtql/put/:idDongDT', midddlewareController.verifyTokenAndIsEmployee,dongDTController.updateDongDT);
router.delete('/dongdtql/del/:idDongDT', midddlewareController.verifyTokenAndIsEmployee,dongDTController.deleteDongDT);


//loaidt
router.get("/loaidt", loaiDienThoaiController.getAllloaiDT);
//qlloaitdt
router.get("/loaidtql", midddlewareController.verifyTokenAndIsEmployee,loaiDienThoaiController.getAllloaiDT);
router.post("/loaidtql/add", middlewareController.verifyTokenAndIsEmployee,loaiDienThoaiController.addLoaiDT);
router.put("/loaidtql/put/:idLoaiDT",middlewareController.verifyTokenAndIsEmployee,loaiDienThoaiController.updateLoaiDT);
router.delete("/loaidtql/del/:idLoaiDT",middlewareController.verifyTokenAndIsEmployee,loaiDienThoaiController.deleteLoaiDT);

//qldonvivanchuyen
router.get("/dvvc",midddlewareController.verifyTokenAndIsEmployee,shipController.getAllDVVC);
router.post("/dvvc/add", middlewareController.verifyTokenAndIsEmployee,shipController.addDVVC);
router.put("/dvvc/put/:idDonViVanChuyen",middlewareController.verifyTokenAndIsEmployee,shipController.updateDVVC);

//giohang
router.post("/cart/add", midddlewareController.verifyToken,cartController.addToCart);
router.post("/cart/createorder", midddlewareController.verifyToken,cartController.createOrder);
router.get("/detailcart", midddlewareController.verifyToken,cartController.getDetailCart);
router.get("/cart", midddlewareController.verifyToken,cartController.getCart);
router.get("/getdetailcart/:idDonHang", midddlewareController.verifyToken,cartController.getDetailCartOfUser);
router.delete("/cart/clear", cartController.clearCart);
router.put("/cart/updatecartitem", midddlewareController.verifyToken,cartController.updateCartItem);
router.delete("/cart/deletecartitem", midddlewareController.verifyToken,cartController.deleteCartItem);
router.post("/paycod", midddlewareController.verifyToken,cartController.payCOD);


//taikhoankh
router.get("/getcusbyid", midddlewareController.verifyToken,customersController.getCusbyId);
router.post("/cusregister", customersController.cusregister);
router.post("/cuslogin", customersController.cuslogin);
router.post("/cuslogout", midddlewareController.verifyToken,customersController.cuslogout);
router.post("/refreshtokencus", customersController.requestRefreshToken);
router.post("/changepassword", midddlewareController.verifyToken, customersController.changePassword);
router.put("/updateuser", midddlewareController.verifyToken, customersController.updateUser);
router.get('/address', midddlewareController.verifyToken,customersController.getAddressCus);
router.put('/address', midddlewareController.verifyToken,customersController.updateAddressCus);



//taikhoannv
router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.post("/logout", midddlewareController.verifyTokenAndIsEmployee,usersController.logout);
router.post("/refreshtoken", usersController.requestRefreshToken);
router.get("/getallcustomers", midddlewareController.verifyToken,usersController.getAllCustomers);
router.get("/getallusers", midddlewareController.verifyToken,usersController.getAllUsers);
router.delete("/deletecustomer", usersController.deleteUser);
router.delete("/deleteuser", midddlewareController.verifyTokenAndIsAdmin,usersController.deleteUser);

//qldonhang
router.get("/detailcart/:idDonHang", midddlewareController.verifyTokenAndIsEmployee,orderController.getDetailCart);
router.get("/getallcart", midddlewareController.verifyTokenAndIsEmployee,orderController.getAllCart);
router.get("/getcusbyid/:idUser", midddlewareController.verifyTokenAndIsEmployee,orderController.getCusbyId);



module.exports = router;