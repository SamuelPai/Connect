import React from "react";
import { MyTrip } from "../MyTrip";
import { Jumbotron, Container } from "reactstrap";

const Example = props => {
  return (
    <div>
      <Jumbotron className="display-3">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <div className="col-md-6">
              <h1 className="display-3">Fluid jumbotron</h1>
            </div>
          </div>
        </div>
      </Jumbotron>
      <header>
        <p>Activitybox</p>
      </header>

      {/* <nav>
        <p>box1</p>
      </nav> */}

      <section>
        <heading>
          <p>Box1</p>
        </heading>
        <heading>
          <p>Box2</p>
          <heading>
            <p>Box3</p>
          </heading>
        </heading>
        <article>
          <heading>Numbers</heading>
          <h1>h1, h2, h3</h1>
          <p>p</p>
        </article>
      </section>

      <aside>
        <heading>
          <p>Create activity pop up card opens create an activity</p>
        </heading>
      </aside>
    </div>
  );
};

export default Example;

export default MyTrip;
