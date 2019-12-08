import React from "react";
import { CreateActivityPageProps } from "./CreateActivityPage.propTypes";
import CreateActivity from "../../components/CreateActivity/CreateActivity";
export class CreateActivityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount()", this.props);
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log(
      "componentDidUpdate(prevProps, prevState, prevSnapshot)",
      prevProps,
      prevState,
      prevSnapshot
    );
  }

  render() {
    return (
      <div>
        <CreateActivity />
      </div>
    );
  }
}

CreateActivityPage.propTypes = CreateActivityPageProps.propTypes;
CreateActivityPage.defaultProps = CreateActivityPageProps.defaultProps;
