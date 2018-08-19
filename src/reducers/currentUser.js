import { ADD_SNAP } from '../constants/ActionTypes'

const initialState = {
  name: 'Nai Saevang',
  profileSource: '',
  friends: [
    {
      id: 1,
      name: 'Alice Smith',
      profileSource: ''
    },
    {
      id: 2,
      name: 'John Doe',
      profileSource: ''
    },
    {
      id: 3,
      name: 'Jane Doe',
      profileSource: ''
    }
  ],
  snaps: [
    {
      id: 1,
      timestamp: '3w',
      author: 'Alice Smith',
      profileSource: '',
      source:
        'https://images.unsplash.com/photo-1534548974179-ecda905ac8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b60fa9bdd5f0108b34cf61e995528c2&auto=format&fit=crop&w=2775&q=80'
    },
    {
      id: 2,
      timestamp: '4w',
      author: 'John Doe',
      profileSource: '',
      source:
        'https://images.unsplash.com/photo-1534582324368-9e0a2747f0ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd694ddcd20fb70ff8bcf5a6cd288d69&auto=format&fit=crop&w=668&q=80'
    }
  ]
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_SNAP:
      const prevSnaps = state.snaps
      return {
        ...state,
        snaps: [action.snap, ...prevSnaps]
      }
    default:
      return state
  }
}
