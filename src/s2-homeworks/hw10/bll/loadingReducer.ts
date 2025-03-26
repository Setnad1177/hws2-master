// Типизация состояния
type LoadingState = {
    isLoading: boolean;
};

// Начальное состояние
const initState: LoadingState = {
    isLoading: false,
};

// Типизация действий
type LoadingActionType = {
    type: 'CHANGE_LOADING';
    isLoading: boolean;
};

// Редьюсер
export const loadingReducer = (
    state: LoadingState = initState,
    action: LoadingActionType
): LoadingState => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
};

// Создание действия
export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
});
