import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new User(req.body);

  try {
    const insertedUser = await user.save();
    res.status(201).json(insertedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const update = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// export const deleteUser = async (req, res) => {
//   try {
//     const userdel = await User.deleteOne({_id: req.params.id});

//     res.status(200).json(userdel);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

export async function deleteUser(req, res){

  try {
    const del = await User.deleteOne({_id: req.params.id})
    res.status(200).json(del);
  } catch (error) {

    res.status(400).json({message: error.message})
  }

}


// export default deleteUser