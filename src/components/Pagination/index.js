import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, ViewPropTypes } from 'react-native';

import { colors } from '../../themes';
import styles from './styles';

export default class Pagination extends PureComponent {
  static propTypes = {
    scrollToIndex: PropTypes.func.isRequired,
    data: PropTypes.array,
    paginationIndex: PropTypes.number,
    paginationActiveColor: PropTypes.string,
    paginationDefaultColor: PropTypes.string,
    paginationStyle: ViewPropTypes.style,
    paginationStyleItem: ViewPropTypes.style,
	paginationActiveStyleItem: ViewPropTypes.style,
  };

  static defaultProps = {
    data: [],
    paginationIndex: 0,
    paginationActiveColor: colors.white,
    paginationDefaultColor: colors.gray,
    paginationStyle: {},
    paginationStyleItem: {},
	paginationActiveStyleItem: {},
  };

  render() {
    const {
      data,
      paginationIndex,
      scrollToIndex,
      paginationDefaultColor,
      paginationActiveColor,
      paginationStyle,
      paginationStyleItem,
	  paginationActiveStyleItem,
    } = this.props;
    return (
      <View style={[styles.container, paginationStyle]}>
        {data.map((_, index) => (
          <TouchableOpacity
            style={[
              styles.pagination,
              paginationIndex === index ? paginationActiveStyleItem : paginationStyleItem,
              paginationIndex === index
                ? { backgroundColor: paginationActiveColor }
                : { backgroundColor: paginationDefaultColor },
            ]}
            key={index}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    );
  }
}
