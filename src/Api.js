import X from 'axios';

class Api {
  constructor(){
    this.root = "http://localhost:5555";
    this.userRoot = `${this.root}/user`;
    this.login = `${this.root}/login`;
    this.tweepRoot = `/tweeps`;
    this.commentRoot = `/comments`;

  }

  //Gets the user Path
  getUserPath=(id)=>{
    return `${this.userRoot}/${id}`;
  }

  //API to Log IN!
  loginUser=(user)=>{
    console.log(user);
    let obj = {handle:user}
    return X.post(this.login, obj);
  }
  //asdf
  createUser=(user)=>{
    return X.post(this.userRoot,user);
  }

  updateUser=(id, update)=>{
    return X.put(this.getUserPath(id), update);
  }

  deleteUser=(id)=>{
    return X.delete(id);
  }

  readUser=(handle)=>{
    let path = this.getUserPath(handle);
    console.log(path);
    return X.get(path);
  }

  readTweeps=(handle)=>{
    return X.get(
      `${this.getUserPath(handle)}${this.tweepRoot}`
    )
  }

  readTweep=(handle, tweepId)=>{
    return X.get(
      `${this.getUserPath(handle)}${this.tweepRoot}/${tweepId}`
    )
  }

  createTweep=(handle, tweepData)=>{
    let path = `${this.getUserPath(handle)}${this.tweepRoot}`;
    console.log(path);
    return X.post(
      path,tweepData
    );
  }

  updateTweep=(handle, tweepId, tweepData)=>{
    let path = `
    ${this.getUserPath(handle)}
    ${this.tweepRoot}/
    ${tweepId}
    `;
    console.log(path);
    return X.put(
      path,
      tweepData
    );
  }

  deleteTweep=(handle, tweepId)=>{
    let path = `
    ${this.getUserPath(handle)}
    ${this.tweepRoot}/
    ${tweepId}
    `;
    console.log(path);
    return X.delete(
      path
    );
  }

  readComment=(handle, tweepId, commentId)=>{
    let path = `
    ${this.getUserPath(handle)}
    ${this.tweepRoot}/
    ${tweepId}/
    ${this.commentRoot}/
    ${commentId}
    `;
    console.log(path);
    return X.get(
      path
    );
  }

  createComment=(handle, tweepId, commentContent)=>{
    let path = `${this.getUserPath(handle)}${this.tweepRoot}/${tweepId}${this.commentRoot}`;
    console.log(path);
    return X.post(
      path, commentContent
    );
  }

  updateComment=(handle, tweepId, commentId, commentContent)=>{
    let path = `
    ${this.getUserPath(handle)}
    ${this.tweepRoot}/
    ${tweepId}/
    ${this.commentRoot}/
    ${commentId}
    `;
    console.log(path);
    return X.put(
      path,commentContent
    );
  }

  deleteComment=(handle, tweepId, commentId)=>{
    let path = `
    ${this.getUserPath(handle)}
    ${this.tweepRoot}/
    ${tweepId}/
    ${this.commentRoot}/
    ${commentId}
    `;
    console.log(path);
    return X.delete(
      path
    );
  }

}

export default Api;
