import X from 'axios';

class Api {
  constructor(){
    this.root = "http://localhost:5555";
    this.userRoot = `${this.root}/user`;
    this.login = `${this.root}/login`;

  }

  //Gets the user Path
  getUserPath=(id)=>{
    return `${this.userRoot}/${id}`;
  }

  loginUser=(user)=>{
    return X.post(this.login, user);
  }
  //asdf
  createUser=(user)=>{
    return X.post(this.userRoot,user);
  }

  updateUser=(id, update)=>{
    return X.put(this.getUserPath(id), update);
  }

  deleteUser=()=>{

  }

  readUser=(handle)=>{
    return X.get(this.getUserPath(handle));
  }

  readTweeps=()=>{

  }

  createTweep=()=>{

  }

  updateTweep=()=>{

  }

  deleteTweep=()=>{

  }

  readComments=()=>{

  }

  createComment=()=>{

  }

  updateComment=()=>{

  }

  deleteComment=()=>{

  }

}

export default Api;
