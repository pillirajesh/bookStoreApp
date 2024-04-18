import User from "../model/user.model.js";

export const signUp = async (req, res) => {
  try {
    const { full_name, email_id, password } = req.body;

    const user = await User.findOne(email_id);

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = new User({ full_name, email_id, password });
      await newUser.save();
      res.status(201).json({ message: "Signed Up Successfully!" });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server error" });
  }
};
