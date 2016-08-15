var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About this App</h1>
      <p>Welcome and thanks for visiting! This is a simple weather application
        that I built to gain more experience with ReactJS.</p>
      <p>
        <p>Here are some of the Tools I used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">ReactJS</a> - This was the
              JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used the Open Weather Map API to search
              for local weather by city name.
          </li>
          <li>
            <a href="http://tworkman.com" target="_blank">Thomas Workman Portfolio site</a> - For more information about me.
          </li>
        </ul>
      </p>
    </div>
  )
};

module.exports = About;
