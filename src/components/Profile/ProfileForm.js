import { useContext, useState } from 'react';
import classes from './ProfileForm.module.css';

import ENV from '../../env';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router';

const ProfileForm = () => {
    const [ newPassword, setNewPassword ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();

        setIsLoading(true);
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${ENV.firebaseApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idToken: authCtx.token,
                password: newPassword,
                returnSecureToken: false
            })
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    setNewPassword('');
                    return res.json();
                } else {
                    let errorText = 'Changing Password Failed!';
                    throw new Error(errorText);
                }
            })
            .then((data) => {
                history.replace('/');
            })
            .catch((err) => alert(err.message));
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input
                    type='password'
                    id='new-password'
                    minLength='7'
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                />
            </div>
            <div className={classes.action}>
                {!isLoading ? <button>Change Password</button> : <p>Changing Password...</p>}
            </div>
        </form>
    );
};

export default ProfileForm;
