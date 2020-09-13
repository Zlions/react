import { CHANGECONDITION } from '../../action/student/condition'

const initialState = {
    key: '',
    sex: -1,
    page: 1,
    limit: 10
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGECONDITION:
            return {
                ...state,
                ...payload
            }
    
        default:
            return state
    }
}