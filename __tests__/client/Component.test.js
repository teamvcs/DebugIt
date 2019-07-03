/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import FormContainer from '../../client/src/containers/FormContainer';
import ButtonComponent from '../../client/src/components/ButtonComponent';
import ErrorMessageComponent from '../../client/src/components/ErrorMessageComponent';
import FormComponent from '../../client/src/components/FormComponent';
import ProblemDescriptionComponent from '../../client/src/components/ProblemDescriptionComponent';
import ProblemContainer from '../../client/src/containers/ProblemContainer';
import ProblemPageContainer from '../../client/src/containers/ProblemPageContainer';


describe('Atomic Components', () => {
  it('Button Component should sucessfully render to the DOM', () => {
    const wrapper = shallow(<ButtonComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Error Message Component should sucessfully render to the DOM', () => {
    const wrapper = shallow(<ErrorMessageComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Form Component should sucessfully render to the DOM', () => {
    const wrapper = shallow(<FormComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Problem Description Component should sucessfully render to the DOM', () => {
    const wrapper = shallow(<ProblemDescriptionComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});


describe('Molecular Components', () => {
  it('Form Container should sucessfully render to the DOM', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Problem Container should successfully render to the DOM', () => {
    const wrapper = shallow(<ProblemContainer />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Problem Page Container should successfully render to the DOM', () => {
    const wrapper = shallow(<ProblemPageContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
