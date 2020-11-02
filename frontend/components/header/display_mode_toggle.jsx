import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDisplay } from '../../actions/session_actions';

const DisplayModeToggle = () => {

    const [userId, lightMode] = useSelector(state => [
        state.entities.currentUser.id,
        state.entities.currentUser.light_mode
    ]);
    const dispatch = useDispatch();

    useEffect(() => {
        const root = document.getElementById("root");
        const lightBtn = document.getElementById("light-mode");
        const darkBtn = document.getElementById("dark-mode");
        if (lightMode) {
            lightBtn.classList.add("visible");
            darkBtn.classList.add("invisible");
            lightBtn.classList.remove("invisible");
            darkBtn.classList.remove("visible");
            root.className = "light";
        } else {
            darkBtn.classList.add("visible");
            lightBtn.classList.add("invisible");
            darkBtn.classList.remove("invisible");
            lightBtn.classList.remove("visible");
            root.className = "dark";
        }
    }, [lightMode]);



  const toggleDisplayMode = (e) => {
    e.preventDefault();
    dispatch(toggleDisplay(userId));
  }


    return (
    <div className="display-mode-container">
        <button id="light-mode" onClick={toggleDisplayMode} value="light">
          <img src="/assets/light_mode-07ab3b39947b1065504c2ee12a93fb36846d02c6fc0ca9bce9f74bfcb6fa84b9.png" alt=""/>
      </button>
        <button id="dark-mode" onClick={toggleDisplayMode} value="dark">
        <img src="/assets/dark_mode-e2eeca44b6a6f2678ba28cced8f8356dc784a2be23f3251ae8fa483c853f2f1f.png" alt=""/>
      </button>  
    </div>
    )
}

export default DisplayModeToggle;