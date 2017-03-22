import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ForeignAutocomplete from 'react-native-autocomplete-input';
import { Text } from '../content/Text';

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#C0C0C0',
  },
  separator: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
  },
});

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    const valueObject = this.props.options.find(o => o.value === this.props.selection);
    this.state = {
      textValue: valueObject ? valueObject.label : '',
      isShowList: false,
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onTyping = this.onTyping.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillReceiveProps({ selection }) {
    const valueObject = this.props.options.find(o => o.value === selection);
    this.setState({
      textValue: valueObject ? valueObject.label : '',
    });
  }

  onFocus() {
    this.setState({
      isShowList: true,
    });
  }

  onBlur() {
    this.onSelect(this.state.textValue);
  }

  onTyping(textValue) {
    this.setState({
      textValue,
      isShowList: true,
    });
  }

  onSelect(value) {
    const valueObj = this.props.options.find(o => o.label === value);
    this.props.onChangeValue(valueObj ? valueObj.value : null);
    this.setState({
      isShowList: false,
    });
  }

  getSuggestions() {
    if (!this.state.isShowList) {
      return [];
    }
    return this.props.options.map(o => o.label).filter(
      v => v.startsWith(this.state.textValue));
  }

  render() {
    const {
      onChangeValue, // eslint-disable-line
      options, // eslint-disable-line
      selection, // eslint-disable-line
      ...props
    } = this.props;

    return (
      <View>
        <View style={styles.autocompleteContainer}>
          <ForeignAutocomplete
            data={this.getSuggestions()}
            value={this.state.textValue}

            onChangeText={this.onTyping}

            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onEndEditing={this.onBlur}
            blurOnSubmit

            renderItem={data => (
              <TouchableOpacity onPress={() => this.onSelect(data)} style={styles.listItem}>
                <Text>{data}</Text>
              </TouchableOpacity>
            )}

            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            {...props}
          />
        </View>
      </View>
    );
  }
}

Autocomplete.propTypes = {
  onChangeValue: React.PropTypes.func.isRequired,

  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    value: React.PropTypes.any,
    label: React.PropTypes.string,
  })).isRequired,

  selection: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.any,
  ]),
};

Autocomplete.defaultProps = {
  selection: null,
};
