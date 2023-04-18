import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import rate from '../../Images/rate.png';
import { Pagination } from '../Utility/Pagination';
import { RateItem } from './RateItem';
import { RatePost } from './RatePost';
import ViewAllReviewHook from '../../hook/review/view-all-review-hook';
import { useParams } from 'react-router-dom';

export const RateContainer = ({ item }) => {
	const { id } = useParams();
	const [allReviews, pagination, onPress] = ViewAllReviewHook(id);

	return (
		<Container className='rate-container'>
			<Row>
				<Col className='d-flex'>
					<div className='sub-tile d-inline p-1 '>التقيمات</div>
					<img className='mt-2' src={rate} alt='' height='16px' width='16px' />
					<div className='cat-rate  d-inline  p-1 pt-2'>{item.rating}</div>
					<div className='rate-count d-inline p-1 pt-2'>({item.ratingCount} تقييم)</div>
				</Col>
			</Row>
			<RatePost />

			{allReviews ? (
				allReviews.map((review, index) => <RateItem key={index} review={review} />)
			) : (
				<p>لا يوجد تقييمات</p>
			)}

			{pagination && pagination.numberOfPages >= 2 && (
				<Pagination pageCount={pagination && pagination.numberOfPages} onPress={onPress} />
			)}
		</Container>
	);
};
