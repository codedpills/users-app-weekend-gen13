// action creator - function that just returns an action
export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}