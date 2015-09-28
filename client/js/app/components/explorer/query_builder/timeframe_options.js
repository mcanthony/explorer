/**
 * @jsx React.DOM
 */

var React = require('react');
var ExplorerActions = require('../../../actions/ExplorerActions');

var TimeframeOptions = React.createClass({

  handleChange: function(event) {
    var updates = _.cloneDeep(this.props.model);
    updates.query.timeframe = event.target.value;
    ExplorerActions.update(this.props.modelId, updates);
  },

  buildOptionNodes: function() {
    return this.props.options.map(function(option) {
      return (
        <option value={option.value}>{option.name}</option>
      );
    });
  },

  getDefaultProps: function() {
    return {
      options: [
        { name: 'This month to date', value: 'this_1_month' },
        { name: 'This week to date',  value: 'this_1_week' },
        { name: 'Today so far',       value: 'this_1_day' }
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
