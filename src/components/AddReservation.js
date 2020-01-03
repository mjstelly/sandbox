/*
@module /components//AddReservation
@description Allow a user to book a reservation

List all props here -------
@param description
@param title
---------------------------


@author Michael Stelly
@version 1.0
@copyright (c) 2019 Michael Stelly All Rights Reserved.
Date: 20 Feb 2019
*/

import React from 'react';
// import {StyleSheet} from 'react-native';
import {Card, CardSection, Header} from './common/Card';

const AddReservationScreen = () => {
  return (
    <Card>
      <Header />
      <CardSection>
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
      </CardSection>
    </Card>
  );
};

export default AddReservationScreen;
