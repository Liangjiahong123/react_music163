import ReactDOM from 'react-dom/client';
// import { Backdrop, CircularProgress } from '@mui/material';

let serviceCount = 0;

// const showLoading = () => {
//   if (serviceCount === 0) {
//     const loadingDOM = document.createElement("div");
//     loadingDOM.setAttribute("id", "loading");
//     document.body.appendChild(loadingDOM);
//     ReactDOM.createRoot(loadingDOM).render(
//       <Backdrop
//         open
//         sx={{ color: "#ff385c", zIndex: 9999, backgroundColor: "rgba(255, 255, 255, .8)" }}
//         transitionDuration={500}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     );
//   }
//   serviceCount++;
// };

const hideLoading = () => {
  serviceCount > 0 && serviceCount--;
  if (serviceCount === 0) {
    const loadingDOM = document.getElementById('loading');
    loadingDOM && document.body.removeChild(loadingDOM);
  }
};

// export { showLoading, hideLoading };
