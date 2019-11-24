import React from 'react';
import { Media } from 'reactstrap';
// import "./s"
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const Search = () => {
  return (
    <div>
<br />
<InputGroup>
        <Input />
        <InputGroupAddon className="searchBar"addonType="append">
          <InputGroupText>Search</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
 <br />   
    <Media>
        <Media body>
        <Media heading>
          Media heading
        </Media>
        <Media>
            <Media left href="#">
              <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
            </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    </Media>
    <br />   
    <Media>
        <Media body>
        <Media heading>
          Media heading
        </Media>
        <Media>
            <Media left href="#">
              <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
            </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    </Media>
    <br />   
    <Media>
        <Media body>
        <Media heading>
          Media heading
        </Media>
        <Media>
            <Media left href="#">
              <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
            </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    </Media>
    </div>
  );
};

export default Search;