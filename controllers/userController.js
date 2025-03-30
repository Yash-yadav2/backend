const User = require("../models/User");

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }


    const allowedUpdates = ["firstName", "lastName", "phoneNumber", "country", "address", "birthdate", "gender", "location", "pep", "sex"];

    const updates = {};
    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });


    const updatedUser = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error); // ✅ Debug log
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};

module.exports = { updateUserProfile };
