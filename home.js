import React from 'react';



class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        //   <div>Hello Avrey</div>
        <Button
          title="Make A Call"
          onPress={() => navigate('Call', {name: 'Jane'})}
        />
      );
    }
  }

  export default HomeScreen;