const axios = require("axios");
const { response } = require("express");

async function getUsersList() {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
}

async function getPostsList() {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
}

exports.getUser = async (req, res) => {
  try {
    let { data } = await getUsersList();
    // data = data.map(item => {return {id:item.id, name: item.name}})
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPost = async (req, res) => {
  try {
    const { data } = await getPostsList();
    
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  exports.getModifiedPosts = async(req, res) => {
    const postList = await getPostsList();
    const userList = await getUsersList();
    // const userIds = userList.data.map(item => {return item.id});
    // postList.data.filter(x => userIds.contains(x.userId));
  }
};
