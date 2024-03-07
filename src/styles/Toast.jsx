import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const StyledToastContainer = styled(ToastContainer)`
&&&.Toastify__toast-container {
}
.Toastify__toast {
    width: 340px;
    min-height: 0;
    font-size: .9rem;
    font-family: 'Main';
    border-radius: 3px;
    }
    .Toastify__toast-body {
    }
    .Toastify__progress-bar {
    }

.Toastify__toast--error {
    border: 1px solid #EB5757;
    background: #FAE1E2 !important;
}
.Toastify__toast--success {
    border: 1px solid #3A9EA5 !important;
    background: #F0F9FA !important;
}
`;

export default StyledToastContainer;