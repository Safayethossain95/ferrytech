import React, { useEffect } from 'react';
import MyNavbarDesk from '../../../Components/Desktop/MyNavbarDesk';
import { useAuth } from '../../../context/AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
    const {isLogin} = useAuth()
    useEffect(() => {
      // You can log or debug any state here to check for issues
      console.log(isLogin);
    }, [isLogin]);
  
    if (!isLogin) {
      return (
        <div className="desktop">
          <MyNavbarDesk />
          <div
            className="errorpage"
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="div text-center" style={{ height: "200px", width: "500px" }}>
              <h1>Access Denied!</h1>
              <p>Login First.</p>
            </div>
          </div>
        </div>
      );
    }
    else{

      return <div>Protected Content Here</div>;
    }
};

export default ProtectedRoute;
