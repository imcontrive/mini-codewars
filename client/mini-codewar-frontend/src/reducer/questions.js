export function questions(state = [], action) {
	switch (action.type) {
		case "ADD_QUESTIONS":
		return {
			...state,
			data: action.payload,
		};
		case "ADD_USER_DATA":
			state.push(action.data)
		return {
			...state,
		};
		// case 'TOGGLE':
		// console.log(',............action dispatched', action.data)
		// 	return [...state].map((quest, id) => action.data._id === quest._id ? ({...quest, isClicked: !action.data.isClicked}) : quest)
		default: 
			return state;
	}
}


export function singleQuestion(state={}, action) {
	switch(action.type) {

		case "SINGLE_QUESTION" :
		// console.log('inside single question case', action.data)
			return action.data;
		default: 
			return state;
	}
}


export function snippetQuestion(state={}, action) {
	switch(action.type) {
		case "ADD_SNIPPETS" :
		console.log('inside single question caseggggg', action.spread)
			return {...state, 
				data:action.payload
			}
		case "UPDATE_SNIPPETS" :
		console.log('check point level 4', action.updatedQues)
			return {...state, 
				data:action.payload
			}
		default: 
			return state;
	}
}
