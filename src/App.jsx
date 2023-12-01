import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {Header, Hero, Users} from "./components";
import {Box} from "./App.styled";
import {SingUpForm} from "./components/SingUpForm";
import {getAllPositions, getIsLoadingPositions} from "./redux";
import {Spinner} from "./components/Spinner/index.js";



function App() {

  const dispatch = useDispatch();
  const loadingPositions = useSelector(getIsLoadingPositions);



  useEffect(() => {
    dispatch(getAllPositions());
  }, [dispatch]);

  return (<><Box>
      <Header/>
      <Hero/>
     < Users/>
    {loadingPositions ? <Spinner/> : <SingUpForm/>}
    </Box></>);

};

export default App;
