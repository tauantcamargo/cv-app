/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from 'react';
import Title from '../shared/title/title';
import "./sidebar.scss";

const SideBar: FC = () => {
  return (
    <div className="sidebar__container">
      <section className="image__content">
        <img className="image__content__src" src="https://media-exp1.licdn.com/dms/image/C4E03AQFyqHi7iGNdkA/profile-displayphoto-shrink_200_200/0/1638141010880?e=2147483647&v=beta&t=arOyU25B7SPLXIcium4-e1ZuUzkR2jZStGn6N2fGpus" alt="curriculum image" />
      </section>

      <section className="profile__content">
        <Title color="primary">Profile</Title>
      </section>
    </div>
  );  
}

export default SideBar;
