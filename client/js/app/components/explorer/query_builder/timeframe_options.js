/**
 * @jsx React.DOM
 */

var React = require('react');
var _ = require('lodash');
var ExplorerActions = require('../../../actions/ExplorerActions');

var TimeframeOptions = React.createClass({

  handleChange: function(event) {
    var updates = _.cloneDeep(this.props.model);
    updates.query.time = _.find(this.props.options, { name: event.target.value }).value;
    ExplorerActions.update(this.props.model.id, updates);
  },

  buildOptionNodes: function() {
    return this.props.options.map(function(option) {
      return (
        <option value={option.name} key={option.name}>{option.name}</option>
      );
    });
  },

  getDefaultProps: function() {
    return {
      options: [
        {
          name: 'This month to date',
          value: {
            relativity: 'this',
            amount: '1',
            sub_timeframe: 'months'
          }
        },
        { 
          name: 'This week to date',
          value: {
            relativity: 'this',
            amount: '1',
            sub_timeframe: 'weeks'
          }
        },
        { 
          name: 'Today so far',
          value: {
            relativity: 'this',
            amount: '1',
            sub_timeframe: 'days'
          }
        }
      ]
    }
  },

  render: function() {
    var optionNodes = this.buildOptionNodes();

    return (
      <div>
        <label>Timeframe</label>
        <select name="timeframe"
                value={this.props.model.query.timeframe}
                className="form-control"
                onChange={this.handleChange}>
          <option value={null}>-choose a timeframe-</option>
          {optionNodes}
        </select>
      </div>
    );
  }

});

module.exports = TimeframeOptions;
