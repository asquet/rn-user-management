import React from 'react';
import { ListView } from 'react-native';
import List from './List';

export default class EntityList extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: ds.cloneWithRows(props.data),
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      ds: this.state.ds.cloneWithRows(props.data),
    });
  }

  render() {
    const {
      data,
      ...props
    } = this.props;
    return (
      <List
        dataSource={this.state.ds}
        {...props}
      />
    );
  }
}

EntityList.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};
