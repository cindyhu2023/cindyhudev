import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
export function Back() {
    return (
        <div style={{
            width: '70%',
            margin: 'auto',
            paddingTop: '20px',
        }}>
            <HashLink smooth to="/#projects" className="BackButton"><NavigateBeforeRoundedIcon sx={{ fontSize: 25 }}/> Projects </HashLink>
        </div>
    )
}