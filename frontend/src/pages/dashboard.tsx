import { Button } from "../components/Buttons/style";
import { Header } from "../components/header";
import { StyledMainDash } from "../components/mainDashboard/style";
import placeholder from "../assets/img/MdImageNotSupported.svg";
import { StyledList } from "../components/List/style";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUser } from "../interfaces/userInterfaces";
import { StyledFieldInput } from "../components/input/style";
import { schemaContact, schemaUpdate, schemaUpdateContact } from "../schemas/schemas";
import { Modal } from "../components/modal";
import { Container } from "../components/FormContainers/style";
import { ContactsContext } from "../contexts/contactsContext";
import { IContacts } from "../interfaces/contactsInterface"
import imageNotFound from "../assets/img/MdImageNotSupported.svg"
import { Background } from "../components/modal/style";

export const Dashboard = () => {
  const { profile, onSubmitUpdate, setProfile, onSubmitDelete } = useContext(UserContext);
  const { contacts, addContact, setAddContact, updateContact, setUpdateContact, onSubmitContact, onUpdateContact, onDeleteContact } = useContext(ContactsContext)
  const [specificUser, setSpecificUser] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser & IContacts>({
    resolver: profile ? yupResolver(schemaUpdate) : addContact ? yupResolver(schemaContact) : yupResolver(schemaUpdateContact)
  });
  const closeModalProfile = () => {
    setProfile(!profile);
  };
  const handleEditModal = () => {
    setUpdateContact(!updateContact)
  }
  const handleAddContact = () => {
    setAddContact(!addContact)
  }
  return (
    <StyledMainDash>
      <Header />
      <section>
        <div>
          <h2>Contacts</h2>
          <Button className="button__color--yellow" onClick={handleAddContact}>Add Contact</Button>
        </div>
        <StyledList>
          {!contacts.length ? <h3>You dont have any contacts</h3> : contacts.map(contact => (<li key={contact.id}>
            <img src={contact.avatar ? contact.avatar : imageNotFound} alt={contact.avatar ? contact.name : "image not found"} />
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <Button className="button__color--yellow" onClick={() => {
              handleEditModal()
              setSpecificUser(contact.id)
            }}>Edit</Button>
            <Button className="button__color--purple" onClick={() => onDeleteContact(contact.id)}>Delete</Button>
          </li>))}
        </StyledList>
      </section>
      {profile ? (
        <Modal>
          <Container>
            <span onClick={closeModalProfile}>x</span>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit(onSubmitUpdate)}>
              <StyledFieldInput>
                Name:
                <input
                  type="text"
                  placeholder="Insert your name"
                  {...register("name")}
                ></input>
                <span className="error">{errors.name?.message}</span>
              </StyledFieldInput>
              <StyledFieldInput>
                Email:
                <input
                  type="email"
                  placeholder="Insert your email"
                  {...register("email")}
                ></input>
                <span className="error">{errors.email?.message}</span>
              </StyledFieldInput>
              <StyledFieldInput>
                Password:
                <input
                  type="Password"
                  placeholder="Insert your password"
                  {...register("password")}
                ></input>
                <span className="error">{errors.password?.message}</span>
              </StyledFieldInput>
              <StyledFieldInput>
                Phone:
                <input
                  type="text"
                  placeholder="Insert your phone number"
                  {...register("phone")}
                ></input>
                <span className="error">{errors.phone?.message}</span>
              </StyledFieldInput>
              <Button className="button__color--yellow ">Update Infos</Button>
            </form>
            <Button className="button__color--purple " onClick={onSubmitDelete}>Delete Account</Button>
          </Container>
        </Modal>
      ) : (
        <></>
      )}
      {addContact ?
        (
          <Background>

            <Modal>
              <Container>
                <span onClick={handleAddContact}>x</span>
                <h2>Add Contact</h2>
                <form onSubmit={handleSubmit(onSubmitContact)}>
                  <StyledFieldInput>
                    Name:
                    <input
                      type="text"
                      placeholder="Insert your contact name"
                      {...register("name")}
                    ></input>
                    <span className="error">{errors.name?.message}</span>
                  </StyledFieldInput>
                  <StyledFieldInput>
                    Email:
                    <input
                      type="email"
                      placeholder="Insert your contact email"
                      {...register("email")}
                    ></input>
                    <span className="error">{errors.email?.message}</span>
                  </StyledFieldInput>
                  <StyledFieldInput>
                    Phone:
                    <input
                      type="text"
                      placeholder="Insert your contact phone number"
                      {...register("phone")}
                    ></input>
                    <span className="error">{errors.phone?.message}</span>
                  </StyledFieldInput>
                  <StyledFieldInput>
                    Avatr:
                    <input
                      type="text"
                      placeholder="Insert your contact avatar"
                      {...register("avatar")}
                    ></input>
                    <span className="error">{errors.avatar?.message}</span>
                  </StyledFieldInput>
                  <Button className="button__color--yellow ">Add Contact</Button>
                </form>
              </Container>
            </Modal>
          </Background>
        ) : (
          <></>
        )

      }

      {updateContact ?
        (
          <Modal>
            <Container>
              <span onClick={handleEditModal}>x</span>
              <h2>Edit Contact</h2>
              <form onSubmit={handleSubmit(data => onUpdateContact(specificUser, data))}>
                <StyledFieldInput>
                  Name:
                  <input
                    type="text"
                    placeholder="Insert your contact name"
                    {...register("name")}
                  ></input>
                  <span className="error">{errors.name?.message}</span>
                </StyledFieldInput>
                <StyledFieldInput>
                  Email:
                  <input
                    type="email"
                    placeholder="Insert your contact email"
                    {...register("email")}
                  ></input>
                  <span className="error">{errors.email?.message}</span>
                </StyledFieldInput>
                <StyledFieldInput>
                  Phone:
                  <input
                    type="text"
                    placeholder="Insert your contact phone number"
                    {...register("phone")}
                  ></input>
                  <span className="error">{errors.phone?.message}</span>
                </StyledFieldInput>
                <StyledFieldInput>
                  Avatr:
                  <input
                    type="text"
                    placeholder="Insert your contact avatar"
                    {...register("avatar")}
                  ></input>
                  <span className="error">{errors.avatar?.message}</span>
                </StyledFieldInput>
                <Button className="button__color--yellow ">Update Contact</Button>
              </form>
            </Container>
          </Modal>
        ) : (
          <></>
        )}
    </StyledMainDash>
  );
};
