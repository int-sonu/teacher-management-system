import User from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ✅ Types
interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

interface LoginDto {
  email: string;
  password: string;
}

// 🔐 Generate Tokens
const generateTokens = (userId: string) => {
  const accessToken = jwt.sign(
    { id: userId },
    process.env.JWT_SECRET as string,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { id: userId },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

// 📝 Register
export const registerUser = async (data: RegisterDto) => {
  const { name, email, password } = data;

  // ✅ Check existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  // ✅ Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // ❌ Don't return password
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

export const loginUser = async (data: LoginDto) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const { accessToken, refreshToken } = generateTokens(
    user._id.toString()
  );

  return {
    accessToken,
    refreshToken,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};