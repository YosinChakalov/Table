import getData from "./DOM.js";

let API = "https://6603aaf82393662c31cf6226.mockapi.io/user/v1/TODO_V2";

async function get() {
  try {
    let { data } = await axios.get(API);
    getData(data)
  } catch (error) {
    console.error(error);
  }
}

async function postUser(user) {
    try {
        const {data} = await axios.post(API,user)
        get()
    } catch (error) {
        console.log(error);
    }
}

async function edituser(id,user) {
    try {
        let {data}=await axios.put(`${API}/${id}`,user)
        get()
    } catch (error) {
        console.error(error);
    }
}

async function deleted(id) {
    try {
        let {data} = await axios.delete(`${API}/${id}`)
        get()
    } catch (error) {
        console.error(error);
    }
}

export default get;
export {postUser, edituser, deleted}