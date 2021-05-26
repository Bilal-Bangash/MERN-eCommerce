import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import { users, products } from "./data/index.js";
import { User, Product, Order } from "./models/index.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      //product with admin user
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`.red.inverse);
    process.exit(1);
  }
};
// export default importData;

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
