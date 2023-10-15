// variable is created be easily used within the class function. Then the class FitnessAPI is used to create async functions for each of the methods needed. I then created a variable to export the FitnessAPI class.
const FITNESS_API = 'https://6514e010dc3282a6a3cd95f8.mockapi.io/fitnessOne'

class FitnessAPI {

  get = async() => {
    try {
      const resp = await fetch(FITNESS_API);
      const data = await resp.json();
      return data;
    } catch(e) {
      console.log('There was an error trying to fetch your data', e)
    }
  }

  getUser = async(id) => {
    try {
      const resp = await fetch(`${FITNESS_API}/${id}`);
      const data = await resp.json();
      return data;
    } catch(e) {
      console.log('There was an error trying to fetch item', e)
    }
  }

  put = async (id, member) => {
    try {
      const resp = await fetch(`${FITNESS_API}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(member)
        
      });
      return await resp.json()
    } catch(e) {
      console.log('There was an error with your PUT method', e)
    }
  }

  delete = async(id) => {
    try {
     const resp = await fetch(`${FITNESS_API}/${id}`, {
      method: 'DELETE'
     })
      return await resp.json()
    } catch(e) {
      console.log('There was an error with your DELETE method', e)
    }
  }

  post = async (newMember) => {
    try {
      const resp = await fetch(`${FITNESS_API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMember)
      })
      return await resp.json()
    } catch(e) {
      console.log('There was an error with your POST method', e)
    }
  }

}

export const fitnessApi = new FitnessAPI()