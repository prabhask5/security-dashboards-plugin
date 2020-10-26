/*
 *   Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import { shallow } from 'enzyme';
import React from 'react';
import { FormRow } from './form-row';

describe('Form row', () => {
  it('renders', () => {
    const component = shallow(
      <FormRow
        headerText="Header"
        headerSubText="Sub text"
        helpLink="http://localhost:5601/"
        children={<div>Test</div>}
        optional={true}
        helpText="Help!!!"
        isInvalid={true}
        error={['error1', 'error2']}
      />
    );
    expect(component).toMatchSnapshot();
  });
});