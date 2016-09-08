'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _navBarJsx = require('./navBar.jsx');

var _navBarJsx2 = _interopRequireDefault(_navBarJsx);

var CreateTrip = (function (_Component) {
  _inherits(CreateTrip, _Component);

  function CreateTrip(props) {
    _classCallCheck(this, CreateTrip);

    _get(Object.getPrototypeOf(CreateTrip.prototype), 'constructor', this).call(this, props);
    this.state = { tripDate: '',
      startSt: '',
      startCity: '',
      startState: '',
      endSt: '',
      endCity: '',
      endState: '',
      numSeats: '',
      seatPrice: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      description: ''
    };
    this.submitTrip = this.submitTrip.bind(this);
  }

  _createClass(CreateTrip, [{
    key: 'handleChange',
    value: function handleChange(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    }
  }, {
    key: 'submitTrip',
    value: function submitTrip(e) {
      e.preventDefault();
      var filled = true;
      for (var attr in this.state) {
        if (this.state[attr] === '') {
          filled = false;
        }
      }
      if (!filled) {
        (0, _reactDom.render)(_react2['default'].createElement(
          'div',
          null,
          ' Please fill out all empty fields '
        ), document.getElementById('create'));
      } else {
        (0, _reactDom.render)(_react2['default'].createElement('div', null), document.getElementById('create'));
        this.makeTrip(this.state);
      }
    }
  }, {
    key: 'makeTrip',
    value: function makeTrip(tripObj) {
      if (localStorage.getItem('token')) {
        _axios2['default'].defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
      }
      var that = this;
      tripObj.driverId = localStorage.getItem('id');
      tripObj.driverName = localStorage.getItem('name');
      _axios2['default'].post('/createTrip', tripObj).then(function (response) {
        console.log(response);
        _reactRouter.browserHistory.push('/userProfile');
      })['catch'](function (error) {
        (0, _reactDom.render)(_react2['default'].createElement(
          'div',
          null,
          ' Please login. '
        ), document.getElementById('create'));
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'container' },
        _react2['default'].createElement(_navBarJsx2['default'], null),
        _react2['default'].createElement(
          'div',
          { id: 'locationField' },
          _react2['default'].createElement('input', { id: 'autocomplete', placeholder: 'Enter your address',
            onFocus: 'geolocate()', type: 'text' })
        ),
        _react2['default'].createElement(
          'form',
          { className: 'form-group', onSubmit: this.submitTrip },
          _react2['default'].createElement(
            'h1',
            null,
            'Create Your Trip'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-6', id: 'CreateAndSearchTripsLeft' },
            _react2['default'].createElement(
              'label',
              { 'for': 'startAddress' },
              'Start Address'
            ),
            _react2['default'].createElement('input', {
              placeholder: 'Start street',
              className: 'form-control',
              value: this.state.startSt,
              onChange: this.handleChange.bind(this, 'startSt') }),
            _react2['default'].createElement('input', {
              placeholder: 'Start city',
              className: 'form-control',
              value: this.state.startCiy,
              onChange: this.handleChange.bind(this, 'startCity') }),
            _react2['default'].createElement('input', {
              placeholder: 'Start state',
              className: 'form-control',
              value: this.state.startState,
              onChange: this.handleChange.bind(this, 'startState') }),
            _react2['default'].createElement('input', {
              type: 'date',
              placeholder: 'Trip Date',
              className: 'form-control',
              value: this.state.tripDate,
              onChange: this.handleChange.bind(this, 'tripDate') }),
            _react2['default'].createElement('input', {
              placeholder: 'Vehicle Make',
              className: 'form-control',
              value: this.state.vehicleMake,
              onChange: this.handleChange.bind(this, 'vehicleMake') }),
            _react2['default'].createElement('input', {
              placeholder: 'Vehicle Model',
              className: 'form-control',
              value: this.state.vehicleModel,
              onChange: this.handleChange.bind(this, 'vehicleModel') }),
            _react2['default'].createElement('input', {
              placeholder: 'Vehicle Year',
              className: 'form-control',
              value: this.state.vehicleYear,
              onChange: this.handleChange.bind(this, 'vehicleYear') })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-6', id: 'CreateAndSearchTripsRight' },
            _react2['default'].createElement(
              'label',
              { 'for': 'endAddress' },
              'End Address'
            ),
            _react2['default'].createElement('input', {
              placeholder: 'End street',
              className: 'form-control',
              value: this.state.endSt,
              onChange: this.handleChange.bind(this, 'endSt') }),
            _react2['default'].createElement('input', {
              placeholder: 'End city',
              className: 'form-control',
              value: this.state.endCity,
              onChange: this.handleChange.bind(this, 'endCity') }),
            _react2['default'].createElement('input', {
              placeholder: 'End state',
              className: 'form-control',
              value: this.state.endState,
              onChange: this.handleChange.bind(this, 'endState') }),
            _react2['default'].createElement('input', {
              type: 'number',
              className: 'form-control',
              placeholder: '# of Seats',
              value: this.state.numSeats,
              onChange: this.handleChange.bind(this, 'numSeats') }),
            _react2['default'].createElement('input', {
              type: 'number',
              className: 'form-control',
              placeholder: 'Price per Seat',
              value: this.state.seatPrice,
              onChange: this.handleChange.bind(this, 'seatPrice') }),
            _react2['default'].createElement('input', {
              placeholder: 'Description',
              className: 'form-control',
              value: this.state.description,
              onChange: this.handleChange.bind(this, 'description') }),
            _react2['default'].createElement('input', { type: 'submit', value: 'Create', className: 'btn btn-primary' })
          )
        )
      );
    }
  }]);

  return CreateTrip;
})(_react.Component);

exports['default'] = CreateTrip;
module.exports = exports['default'];