import { RootState } from '../store';

export const saveToLocalStorage = (state: RootState) => {
  try {
    localStorage.setItem('appState', JSON.stringify(state))
  } catch (error) {
    console.log(error)
  }
}

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('appState')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}