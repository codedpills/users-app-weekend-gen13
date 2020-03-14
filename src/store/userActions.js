// action creator - function that just returns an action
const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}