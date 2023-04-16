import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from './../useNotification';
import { createReview, getAllReview } from '../../Redux/Actions/reviewAction';

const ViewAllReviewHook = id => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const res = useSelector(state => state.allReview.reviews);

	const allReviews = res && res.data && res.data.rates ? res.data.rates : [];
	const pagination = res && res.data && res.data.paginationResult ? res.data.paginationResult : [];

	useEffect(() => {
		setLoading(true);
		dispatch(getAllReview(id, 1, 4));
		setLoading(false);
	}, []);

	const onPress = async page => {
		await dispatch(getAllReview(id, page, 4));
	};

	return [allReviews, pagination, onPress];
};

export default ViewAllReviewHook;