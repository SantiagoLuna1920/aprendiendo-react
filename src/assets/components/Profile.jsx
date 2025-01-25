import { user } from "../js/user";

export function Profile () {
    return (
        <>
        <h2>{user.name}</h2>
        <img 
        src={user.imageUrl} 
        alt={'Foto de ' + user.name}
        className="avatar"
        style={{
            height: user.imageSize,
            width: user.imageSize
        }}
        />
        </>
    );
};