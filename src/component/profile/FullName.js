function Welcome(props) {
    return <h1> {props.name.lastname}</h1>;
  }
  
  const element = <Welcome name="Amina" lastname="bahri" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );