import {
	APPLY_COUPON,
	CANCEL_COUPON,
	CREATE_COUPON,
	DELETE_COUPON,
	GET_ALL_COUPON,
	UPDATE_COUPON
} from '../Type';

const initial = {
	coupons: [],
	coupon: [],
	couponCreated: [],
	couponUpdated: [],
	couponDeleted: [],
	couponApplied: [],
	couponCanceled: [],
	loading: true
};

export const couponReducer = (state = initial, action) => {
	switch (action.type) {
		case GET_ALL_COUPON:
			return {
				...state,
				coupons: action.payload,
				loading: false
			};

		case CREATE_COUPON:
			return {
				...state,
				couponCreated: action.payload,
				loading: false
			};

		case UPDATE_COUPON:
			return {
				...state,
				couponUpdated: action.payload,
				loading: false
			};

		case DELETE_COUPON:
			return {
				...state,
				couponDeleted: action.payload,
				loading: false
			};

		case APPLY_COUPON:
			return {
				...state,
				couponApplied: action.payload,
				loading: false
			};

		case CANCEL_COUPON:
			return {
				...state,
				couponCanceled: action.payload,
				loading: false
			};

		default:
			return state;
	}
};
