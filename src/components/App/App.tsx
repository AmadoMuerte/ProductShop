


// import Button from '@mui/material/Button';
import './App.css'
import Header from "../Header/Header";
// @ts-ignore
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {

  //
  //
  //
  //   // let prod = products.map(
  //   //     (item: {
  //   //         price: number,
  //   //         title: string,
  //   //         image: string
  //   //     }) => {
  //   //     if (products) {
  //   //         console.log(item)
  //   //
  //   //         return (
  //   //             <div>
  //   //                 <div>{item.title}</div>
  //   //                 <img src={item.image} alt="product" width={100}/>
  //   //                 <div>{`${item.price} $`}</div>
  //   //             </div>
  //   //         )
  //   //     }
  //   // })
  //
  return (

    <BrowserRouter>
        <div className="app">
            <div className={'content'}>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={<Main/>}
                    />
                    <Route
                        path='/basket'
                        element={''}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
