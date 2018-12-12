import React from 'react';
import Layout from '../layouts/Main';

import Container from '../components/Container';
import TopBar from '../components/TopBar';
import Input from '../components/Input';
import PopularColors from '../components/PopularColors';
import SelectedColors from '../components/SelectedColors';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    /**
     * You can set state and other objects you need that are accessable on the `this` keyword in the constructor
     */

    this.state = {
      selectedColors: ['#DB7093']
    };

    /**
     * To be able to use the `this` keyword in methods, you need to bind them in the constructor
     * This is a limitation of the original ES6 class spec and soon will be fixed by ES9
     */

    this.selectColor = this.selectColor.bind(this);
  }

  selectColor(color) {
    /**
     * The setState comes from the extended React.Component class
     * It is used to update the values in setState. It batches calls for performance enhancement.
     *
     * setState can take either an object (containing new state values)
     * or it can take a function that returns an object (containing new state values)
     */
    this.setState(prevState => {
      // Slice the array so we only store the 5 latest colors
      const selectedColors = prevState.selectedColors.slice(0, 4);
      selectedColors.unshift(color);

      return { selectedColors };
    });
  }

  /**
   * The render method is run every time state or prop values change.
   * It is always run after "mounting" the component, it is essentially just the output of the component.
   * "Mounting" is the point at which a component is initialized onto the page.
   */
  render() {
    const { selectedColors } = this.state;

    return (
      <Layout>
        <TopBar />
        <Container>
          {/* 
          pass down the `selectColor` method so child components have a callback to update the selectedColors array in this components state 
          */}
          <Input selectColor={this.selectColor} />
          <PopularColors selectColor={this.selectColor} />
          <SelectedColors selectedColors={selectedColors} />
        </Container>
      </Layout>
    );
  }
}

export default Homepage;
