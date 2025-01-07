import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  constructor(props) {
    super(props);

    this.celebrateError.bind(this);
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    //send to TrackJS/Sentry
    console.error("ErrorBoundary caught some error", error, info);
  }
  componentDidMount() {} //Use effect and runs an array
  componentWillUnmount() {} //Retun function from a user
  componentDidUpdate() {}

  celebrateError = () => {
    this.setState({
      celebratation: "lol",
    });
  };
  render() {
    if (this.state.hasError) {
      return (
        <div onClick={this.celebratation} className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this page. <Link to="/">Click Here</Link> to
            go back to the homepage.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
