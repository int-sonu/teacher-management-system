import type { Request, Response, NextFunction } from "express";

export const validateRegistration = (req: Request, res: Response, next: NextFunction) => {
  let { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (email.includes(" ")) {
    return res.status(400).json({ message: "Email cannot contain spaces" });
  }
  email = email.trim().toLowerCase();
  if (!email.endsWith(".com")) {
    return res.status(400).json({ message: "Email must be a valid .com address" });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }
  req.body.email = email;
  next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  if (email.includes(" ")) {
    return res.status(400).json({ message: "Email cannot contain spaces" });
  }
  req.body.email = email.trim().toLowerCase();
  if (!req.body.email.endsWith(".com")) {
    return res.status(400).json({ message: "Please enter a valid .com email" });
  }
  next();
};

export const validateTeacher = (req: Request, res: Response, next: NextFunction) => {
  let { name, subject, email } = req.body;
  if (!name || !subject || !email) {
    return res.status(400).json({ message: "Name, subject and email are required" });
  }
  if (name.trim().length < 2) {
    return res.status(400).json({ message: "Name must be at least 2 characters" });
  }
  if (subject.trim().length < 2) {
    return res.status(400).json({ message: "Subject must be at least 2 characters" });
  }
  if (email.includes(" ")) {
    return res.status(400).json({ message: "Teacher email cannot contain spaces" });
  }
  req.body.email = email.trim().toLowerCase();
  if (!req.body.email.endsWith(".com")) {
    return res.status(400).json({ message: "Teacher email must be a valid .com address" });
  }
  next();
};
