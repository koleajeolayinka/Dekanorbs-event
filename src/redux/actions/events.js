export const setEvent = (items) => ({ type: 'SET_EVENTS', payload: items})
export const addItemToEvents = (items) => ({ type: 'ADD_TO_EVENTS', payload: items})
export const updateEventAction = (item) => ({ type: 'UPDATE_EVENT', payload: item})
export const deleteEventAction = (id) => ({ type: 'DELETE_EVENTS]', payload: id})