import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (data: any) => {
  const hashed = await bcrypt.hash(data.password, 10);

  return await User.create({
    name: data.name,
    email: data.email,
    password: hashed,
  });
};

export const loginUser = async (data: any) => {
  const user = await User.findOne({ email: data.email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  return { token };
};