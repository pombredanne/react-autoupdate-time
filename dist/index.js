// Generated by CoffeeScript undefined
var React, Time, isNumber;

Time = require('react-time');

React = require('react');

isNumber = function(value) {
  return toString.call(value) === '[object Number]';
};

module.exports = React.createClass({
  displayName: 'AutoupdateTime',
  ticket: null,
  getDefaultProps: function() {
    return {
      autoUpdate: false
    };
  },
  componentDidMount: function() {
    var delay;
    if (this.props.autoUpdate) {
      delay = isNumber(this.props.autoUpdate) ? this.props.autoUpdate * 1000 : 3000;
      return this.ticker = setInterval(this.invalidate, delay);
    }
  },
  componentWillUnmount: function() {
    if (this.ticker) {
      return clearInterval(this.ticker);
    }
  },
  render: function() {
    return this.transferPropsTo(Time(null));
  },
  invalidate: function() {
    return this.forceUpdate();
  }
});
