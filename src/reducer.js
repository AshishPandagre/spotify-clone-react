export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,

	// remove after finished developing..
	// token: 'BQCknES2vA8EgGfZNIT8FNChiWqc4RJrYgsMvLtw5Viomg6rvY8grpWPU1rrQWDiha3uLSZ_1JqXA63oid42hFg2_YKXr3lu9cYP874dWhnsoDoT9cHzWkS4ctReha80buRxflSGi44iKcaiulX3'
}


const reducer = (state, action) => {

	// action -> type, payload
	
	switch(action.type){
		case 'SET_USER': 
			return {
				...state,
				user: action.user
			}

		case 'SET_TOKEN':
			return {
				...state, 
				token: action.token
			}
	
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			}

		case 'SET_DISCOVER_WEEKLY': 
			return {
				...state, 
				discover_weekly: action.discover_weekly
			}

		default: return state
	}
}

export default reducer
