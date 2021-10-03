import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
    }
  }

  SearchFieldChange = (event) => {

    this.setState({ productSearchString: event.target.value });
  }

  render()
  {
    let output =
      <>
        <div>
          Search <input type="text" onChange={ this.SearchFieldChange } value={ this.state.productSearchString }/>
        </div>
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
      </>

    return (
      <>
        { output }
      </>
    )
  }
}

export default App;