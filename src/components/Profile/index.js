import './profile.scss';
import logo2 from 'src/assets/img/logo2.png';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import ContributeList from './ContributeList';

const Profile = (props) => {
  console.log(props.responseAPIDataSkatepark);
  if (!props.profileIsLoading) {
    props.handleCheckUserUpdateProfile();
  }
  return (
    <div className="profile main-container">
      <h1 className="title profile-title">Bienvenue sur ton compte {props.usernameConnection}</h1>

      <div className="profile-container">
        <img className="profile-avatar" src={logo2} alt="avatar" />
        <p className="profile-name">{props.usernameConnection}</p>
        <Popup
          trigger={
            <button className="button profile-button-edit" type="button">
              Editer mon profil
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <div className="header"> Modifie ton profil </div>
              <form className="form" onSubmit={props.handleSubmitUpdateProfile}>
                <div className="content">
                  <label className="form-edit-label" htmlFor="usernameEdit">
                    Nom d'utilisateur
                    <input
                      id="usernameEdit"
                      type="text"
                      className="form-edit-input"
                      value={props.usernameEdit}
                      // required
                      onChange={props.handleChange}
                    />
                  </label>
                  <label className="form-edit-label" htmlFor="lastnameEdit">
                    Nom
                    <input
                      id="lastnameEdit"
                      type="text"
                      className="form-edit-input"
                      value={props.lastnameEdit}
                      // required
                      onChange={props.handleChange}
                    />
                  </label>
                  <label className="form-edit-label" htmlFor="firstnameEdit">
                    Pr??nom
                    <input
                      id="firstnameEdit"
                      type="text"
                      className="form-edit-input"
                      value={props.firstnameEdit}
                      // required
                      onChange={props.handleChange}
                    />
                  </label>
                  <label className="form-edit-label" htmlFor="streetEdit">
                    Rue
                    <input
                      id="streetEdit"
                      type="text"
                      className="form-edit-input"
                      value={props.streetEdit}
                      // required
                      onChange={props.handleChange}
                    />
                  </label>
                  <label className="form-edit-label" htmlFor="postalEdit">
                    Code postal
                    <input
                      id="postalEdit"
                      type="text"
                      className="form-edit-input"
                      value={props.postalEdit}
                      // required
                      onChange={props.handleChange}
                    />
                  </label>
                  <label className="form-edit-label" htmlFor="cityEdit">
                    Ville
                    <input
                      id="cityEdit"
                      type="text"
                      className="form-edit-input"
                      value={props.cityEdit}
                      // required
                      onChange={props.handleChange}
                    />
                  </label>
                  <label className="form-edit-label" htmlFor="emailEdit">
                    Email
                    <input
                      id="emailEdit"
                      type="email"
                      className="form-edit-input"
                      value={props.emailEdit}
                      // required
                      onChange={props.handleChange}
                    />
                  </label>
                  <label className="form-edit-label" htmlFor="passwordEdit">
                    Password
                    <input
                      id="passwordEdit"
                      type="password"
                      className="form-edit-input"
                      value={props.passwordEdit}
                      // required
                      onChange={props.handleChange}
                    />
                  </label>
                  <label className="form-edit-label" htmlFor="passwordEdit">
                    Avatar
                    <input
                      id="avatarImage"
                      type="file"
                      className="form-edit-input"
                      // required
                      onChange={props.handleUploadLocalImage}
                    />
                  </label>
                </div>
                <div className="actions">
                  <button type="submit" className="button">
                    Valider
                  </button>
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      close();
                    }}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          )}
        </Popup>
        <button className="button profile-button-edit" onClick={props.handleDelete}>Supprimer compte</button>
      </div>

      <ContributeList />

    </div>
  );
};

export default Profile;
