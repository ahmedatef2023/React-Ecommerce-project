import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AdminSideBar } from '../../Components/Admin/AdminSideBar';
import { AdminAddCoupon } from '../../Components/Admin/AdminAddCoupon';

export const AdminAddCouponPage = () => {
	return (
		<div>
			<Container className='py-3'>
				<Row>
					<Col sm='3' xs='2' md='2'>
						<AdminSideBar />
					</Col>
					<Col sm='9' xs='10' md='10'>
						<AdminAddCoupon />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
