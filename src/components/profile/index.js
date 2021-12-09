import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    return isAuthenticated ? (
        <div style={{ width: "15rem" }}>
            {/* <div className='mh-100 align-self-center'> */}
            <img
                style={{ width: "8rem" }}
                className='card-img-top rounded-circle'
                src={user.picture}
                alt={user.name} />
            {/* </div> */}
            <div className='d-flex flex-column justify-content-center p-3'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
            <p className='text-left'>
                A developer with a passion for blah blah blah
            </p>
        </div>
    ) : (
        <div style={{ width: "15rem" }}>{isLoading ? 'Loading...' : 'Not authenticated'}</div>
    );
};

export default Profile;